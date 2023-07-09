import axios from 'axios'
import cheerio from 'cheerio'
import '@tensorflow/tfjs-node';
import * as use from '@tensorflow-models/universal-sentence-encoder';


/**
 * Compares the similarity between two strings using an n-gram comparison method. 
 * https://stackoverflow.com/questions/23305000/javascript-fuzzy-search-that-makes-sense
 * The grams default to length 2.
 * @param str1 The first string to compare.
 * @param str2 The second string to compare.
 * @param gramSize The size of the grams. Defaults to length 2.
 */

export const stringSimilarity = function (str1, str2, gramSize = 2) {
  function getNGrams(s, len) {
    s = ' '.repeat(len - 1) + s.toLowerCase() + ' '.repeat(len - 1);
    let v = new Array(s.length - len + 1);
    for (let i = 0; i < v.length; i++) {
      v[i] = s.slice(i, i + len);
    }
    return v;
  }

  if (!str1?.length || !str2?.length) { return 0.0; }

  //Order the strings by length so the order they're passed in doesn't matter 
  //and so the smaller string's ngrams are always the ones in the set
  let s1 = str1.length < str2.length ? str1 : str2;
  let s2 = str1.length < str2.length ? str2 : str1;

  let pairs1 = getNGrams(s1, gramSize);
  let pairs2 = getNGrams(s2, gramSize);
  let set = new Set(pairs1);

  let total = pairs2.length;
  let hits = 0;
  for (let item of pairs2) {
    if (set.delete(item)) {
      hits++;
    }
  }
  return hits / total;
}

/**
 * 
 * @param {*} a 
 * @param {*} b 
 * @returns  The dot product of two vectors.
 * 
 * https://stackoverflow.com/questions/43013238/how-to-calculate-dot-product-of-two-vectors-in-javascript
 */
const dot = function (a, b) {
  var hasOwnProperty = Object.prototype.hasOwnProperty;
  var sum = 0;
  for (var key in a) {
    if (hasOwnProperty.call(a, key) && hasOwnProperty.call(b, key)) {
      sum += a[key] * b[key]
    }
  }
  return sum
}

/**
 * 
 * @param {*} a 
 * @param {*} b 
 * @returns The cosine similarity of two vectors.
 * 
 */
const similarity = function (a, b) {
  var magnitudeA = Math.sqrt(dot(a, a));
  var magnitudeB = Math.sqrt(dot(b, b));
  if (magnitudeA && magnitudeB)
    return dot(a, b) / (magnitudeA * magnitudeB);
  else return false
}

/**
 * 
 * @param {*} matrix 
 * @returns A matrix of cosine similarities between the rows of the input matrix.
 */
const cosineSimilarityMatrix = function (matrix) {
  let cosine_similarity_matrix = [];
  for (let i = 0; i < matrix.length; i++) {
    let row = [];
    for (let j = 0; j < i; j++) {
      row.push(cosine_similarity_matrix[j][i]);
    }
    row.push(1);
    for (let j = (i + 1); j < matrix.length; j++) {
      row.push(similarity(matrix[i], matrix[j]));
    }
    cosine_similarity_matrix.push(row);
  }
  return cosine_similarity_matrix;
}

/**
 * 
 * @param {*} sentences 
 * @returns A matrix of syntactic similarities between the sentences.
 */
export const syntacticSimilarity = async function (sentences) {
  const model = await use.load()
  const embeddings = await model.embed(sentences)
  let arr = cosineSimilarityMatrix(embeddings.arraySync())
  return arr
}

/**
 * 
 * @param {*} url
 * @param {*} params 
 * @returns The response from the get request.
 */
export const getRequest = async function (url, params = {}) {
  let data = axios.get(url, params).catch((error) => {
    if (error.response) {
      // The request was made and the server responded with a status code
      // that falls out of the range of 2xx
      console.log('error.response.data', error.response.data);
      console.log('error.response.status', error.response.status);
      console.log('error.response.headers', error.response.headers);
    } else if (error.request) {
      // The request was made but no response was received
      // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
      // http.ClientRequest in node.js
      console.log('error.request', error.request);
    } else {
      // Something happened in setting up the request that triggered an Error
      console.log('error.message', error.message);
    }
    console.log('error.config', error.config);
  });

  return data
}


/**
 * 
 * @param {*} data
 * @param {*} search 
 * @param {*} postalCode 
 * @param {*} domainName 
 * @param {*} dateStamp 
 * @returns The most likely location from the data.
 * 
 * This function takes the data from the citysearch api and returns the most likely location.
 */
export const parseCitysearch = async function (data, search, postalCode, domainName, dateStamp) {
  const toSearch = data?.results?.locations || [];
  let mostLikely = -1
  // let mostLikelySyntax = -1
  let exactWebsiteMatch = -1
  let exactWebsiteMatchHttp = -1
  let exactNameMatch = -1
  let foundWebsite = false;
  let highScore = 0;
  // let highScoreSyntax = 0;
  let syntax = [search]
  let promises = toSearch.map(async (element, key) => {
    // console.log(element)
    const name = element.name
    if (name === search) {
      exactNameMatch = key
      highScore = 1
      mostLikely = key
    }
    const score = stringSimilarity(search, name)
    if (score > highScore) {
      highScore = score
      mostLikely = key
    }

    syntax.push(name)

    const address = element?.address?.street

    let scoreInfo = {
      key,
      name,
      score,
      address
    }
    return scoreInfo
  });

  let results = await Promise.allSettled(promises)
  results = results.map((result) => {
    if (result.status === 'rejected') {
      return {
        key: -1,
        name: '',
        score: 0
      }
    } else {
      return result.value
    }
  })

  const bumpChart = results.map(function (result) {
    if (result?.name) {
      const y = result?.key >= 0 ? result.key + 1 : null
      const id = [result.name, result?.address].join(': ')
      return {
        id,
        data: [{
          x: dateStamp,
          y
        }]
      }
    }
  })

  const websiteCheckIndex = exactNameMatch >= 0 ? exactNameMatch : mostLikely
  if (toSearch[websiteCheckIndex] && toSearch[websiteCheckIndex]["website"]) {
    let website
    try {
      website = await getRequest(toSearch[websiteCheckIndex]["website"])
    } catch (error) {
      console.log('Error parsing website:', error)
    }

    if (website?.request?.res?.responseUrl) {
      console.log('website?.request?.res?.responseUrl', website?.request?.res?.responseUrl)
      const found = website.request.res.responseUrl
      if (found.includes(domainName)) {
        foundWebsite = true
        mostLikely = websiteCheckIndex
        results[websiteCheckIndex]["websiteUrl"] = found
      }

      if (found === `https://www.${domainName}/` || found === `https://${domainName}/`) {
        exactWebsiteMatch = websiteCheckIndex
      }

      if (found === `http://www.${domainName}/` || found === `http://${domainName}/`) {
        exactWebsiteMatchHttp = websiteCheckIndex
      }

    }
  }

  const scoreSyntax = await syntacticSimilarity(syntax)
  const heatmapExceptSearch = scoreSyntax[0].slice(1)
  const syntaxExceptSearch = syntax.slice(1)
  const heatmapChartData = heatmapExceptSearch.map(function (y, i) {
    const x = syntaxExceptSearch[i]
    return {
      x,
      y,
    }
  })

  const heatmapChart = [{
    id: search,
    data: heatmapChartData
  }]

  return {
    results,
    bumpChart,
    highScore,
    heatmapChart,
    // scoreSyntax,
    // syntax,
    foundWebsite,
    mostLikely,
    exactWebsiteMatch,
    exactWebsiteMatchHttp,
    exactNameMatch
  }
}

/**
 * 
 * @param {*} data
 * @param {*} search 
 * @param {*} postalCode 
 * @param {*} domainName 
 * @param {*} dateStamp 
 * @returns The most likely location from the data.
 * 
 * This function takes the data from the google api and returns the most likely location.
 */
export const parseGoogle = async function (data, search, postalCode, domainName, dateStamp) {
  const toSearch = data?.items || [];
  // console.log(toSearch)
  let mostLikely = -1
  let exactWebsiteMatch = -1
  let exactWebsiteMatchHttp = -1
  let exactNameMatch = -1
  let foundWebsite = false;
  let highScore = 0;
  let syntax = [search]
  let promises = toSearch.map(async (element, key) => {
    // console.log(element)
    const name = element.title
    if (name === search) {
      exactNameMatch = key
      highScore = 1
      mostLikely = key
    }
    const websiteUrl = element?.link || ""
    // console.log(websiteUrl)
    const score = stringSimilarity(search, name)
    if (score > highScore && !foundWebsite) {
      highScore = score
      mostLikely = key
    }


    syntax.push(name)

    if (websiteUrl.includes(domainName)) {
      foundWebsite = true
      mostLikely = key
    }

    if (websiteUrl === `https://www.${domainName}/` || websiteUrl === `https://${domainName}/`) {
      exactWebsiteMatch = key
    }

    if (websiteUrl === `http://www.${domainName}/` || websiteUrl === `http://${domainName}/`) {
      exactWebsiteMatchHttp = key
    }

    let scoreInfo = {
      key,
      name,
      score,
      websiteUrl,
      address: websiteUrl,
    }
    return scoreInfo
  });

  let results = await Promise.allSettled(promises)
  results = results.map((result) => {
    if (result.status === 'rejected') {
      return {
        key: -1,
        name: '',
        score: 0
      }
    } else {
      return result.value
    }
  })
  const bumpChart = results.map(function (result) {
    if (result?.name) {
      const y = result?.key >= 0 ? result.key + 1 : null
      const id = [result.name, result?.address].join(': ')
      return {
        id,
        data: [{
          x: dateStamp,
          y
        }]
      }
    }
  })

  const scoreSyntax = await syntacticSimilarity(syntax)
  const heatmapExceptSearch = scoreSyntax[0].slice(1)
  const syntaxExceptSearch = syntax.slice(1)
  const heatmapChartData = heatmapExceptSearch.map(function (y, i) {
    const x = syntaxExceptSearch[i]
    return {
      x,
      y,
    }
  })

  const heatmapChart = [{
    id: search,
    data: heatmapChartData
  }]

  return {
    results,
    bumpChart,
    highScore,
    heatmapChart,
    // scoreSyntax,
    // syntax,
    foundWebsite,
    mostLikely,
    exactWebsiteMatch,
    exactWebsiteMatchHttp,
    exactNameMatch
  }
}

/**
 * 
 * @param {*} data 
 * @param {*} search 
 * @param {*} postalCode 
 * @param {*} domainName 
 * @param {*} dateStamp 
 * @returns The most likely location from the data.
 * 
 * This function takes the data from the foursquare api and returns the most likely location.
 */
export const parseFoursquare = async function (data, search, postalCode, domainName, dateStamp) {
  const toSearch = data?.results || [];
  let mostLikely = -1
  let exactNameMatch = -1
  let highScore = 0;
  let syntax = [search]
  let promises = toSearch.map(async (element, key) => {
    // console.log(element)
    const name = element.name
    if (name === search) {
      exactNameMatch = key
      highScore = 1
      mostLikely = key
    }
    const score = stringSimilarity(search, name)
    if (score > highScore) {
      highScore = score
      mostLikely = key
    }
    syntax.push(name)
    /** 
     * Verify Address?
     * */
    const address = element?.location?.address
    let scoreInfo = {
      key,
      name,
      score,
      address
    }
    return scoreInfo
  });

  let results = await Promise.allSettled(promises)
  results = results.map((result) => {
    if (result.status === 'rejected') {
      return {
        key: -1,
        name: '',
        score: 0
      }
    } else {
      return result.value
    }
  })
  const bumpChart = results.map(function (result) {
    if (result?.name) {
      const id = [result.name, result?.address].join(': ')
      const y = result?.key >= 0 ? result.key + 1 : null
      return {
        id,
        data: [{
          x: dateStamp,
          y
        }]
      }
    }
  })

  const scoreSyntax = await syntacticSimilarity(syntax)
  const heatmapExceptSearch = scoreSyntax[0].slice(1)
  const syntaxExceptSearch = syntax.slice(1)
  const heatmapChartData = heatmapExceptSearch.map(function (y, i) {
    const x = syntaxExceptSearch[i]
    return {
      x,
      y,
    }
  })

  const heatmapChart = [{
    id: search,
    data: heatmapChartData
  }]
  // [
  //   {
  //     "id": "Japan",
  //     "data": [
  //       {
  //         "x": "Train",
  //         "y": 125
  //       },



  return {
    results,
    bumpChart,
    highScore,
    heatmapChart,
    // scoreSyntax,
    // syntax,
    mostLikely,
    exactNameMatch
  }
}

/**
 * 
 * @param {*} data 
 * @param {*} search 
 * @param {*} postalCode 
 * @param {*} domainName 
 * @param {*} dateStamp 
 * @returns The most likely location from the data.
 * 
 * This function takes the data from the yelp api and returns the most likely location.
 */
export const parseYelp = async function (data, search, postalCode, domainName, dateStamp) {
  const toSearch = data?.businesses || [];
  let mostLikely = -1
  let exactWebsiteMatch = -1
  let exactWebsiteMatchHttp = -1
  let exactNameMatch = -1
  let foundWebsite = false;
  let highScore = 0;
  let syntax = [search]
  let promises = toSearch.map(async (element, key) => {
    // console.log(element)
    const name = element.name
    if (name === search) {
      exactNameMatch = key
      highScore = 1
      mostLikely = key
    }
    const score = stringSimilarity(search, name)
    if (score > highScore && !foundWebsite) {
      highScore = score
      mostLikely = key
    }


    syntax.push(name)

    const address = element?.location?.address1

    let scoreInfo = {
      key,
      name,
      score,
      address
    }
    return scoreInfo
  });

  let results = await Promise.allSettled(promises)
  results = results.map((result) => {
    if (result.status === 'rejected') {
      return {
        key: -1,
        name: '',
        score: 0
      }
    } else {
      return result.value
    }
  })
  const bumpChart = results.map(function (result) {
    if (result?.name) {
      const y = result?.key >= 0 ? result.key + 1 : null
      const id = [result.name, result?.address].join(': ')
      return {
        id,
        data: [{
          x: dateStamp,
          y
        }]
      }
    }
  })

  /** Visit yelp site and grab all hrefs */
  const websiteCheckIndex = exactNameMatch >= 0 ? exactNameMatch : mostLikely
  console.log('toSearch[websiteCheckIndex]["url"]', toSearch[websiteCheckIndex]["url"])
  if (toSearch[websiteCheckIndex] && toSearch[websiteCheckIndex]["url"]) {
    let website = await getRequest(toSearch[websiteCheckIndex]["url"])

    if (website?.data) {
      try {
        const $ = await cheerio.load(website.data);
        $('a').toArray().forEach(function (element) {
          const found = $(element).text()
          // console.log('found', found)
          if (found.includes(domainName)) {
            // console.log('found', found)
            foundWebsite = true
            results[websiteCheckIndex]["websiteUrl"] = found
          }

          if (found === `https://www.${domainName}` || found === `https://${domainName}`) {
            exactWebsiteMatch = websiteCheckIndex
          }

          if (found === `http://www.${domainName}` || found === `http://${domainName}`) {
            exactWebsiteMatchHttp = websiteCheckIndex
          }

        });
      } catch (error) {
        console.log("Error parsing webpage")
        console.log(error)
      }

    }
  }

  // console.log(JSON.stringify(results))

  const scoreSyntax = await syntacticSimilarity(syntax)
  const heatmapExceptSearch = scoreSyntax[0].slice(1)
  const syntaxExceptSearch = syntax.slice(1)
  const heatmapChartData = heatmapExceptSearch.map(function (y, i) {
    const x = syntaxExceptSearch[i]
    return {
      x,
      y,
    }
  })

  const heatmapChart = [{
    id: search,
    data: heatmapChartData
  }]

  return {
    results,
    bumpChart,
    highScore,
    heatmapChart,
    // scoreSyntax,
    // syntax,
    foundWebsite,
    mostLikely,
    exactWebsiteMatch,
    exactWebsiteMatchHttp,
    exactNameMatch
  }
}


/**
 * 
 * @param {*} data 
 * @param {*} search 
 * @param {*} postalCode 
 * @param {*} domainName 
 * @param {*} dateStamp 
 * @returns The most likely location from the data.
 * 
 * This function takes the data from the yellowpages api and returns the most likely location.
 */
export const parseYellowpages = async function (data, search, postalCode, domainName, dateStamp) {
  const toSearch = data?.searchResult?.searchListings?.searchListing || [];
  let mostLikely = -1
  let exactNameMatch = -1
  let highScore = 0;
  let syntax = [search]
  let promises = toSearch.map(async (element, key) => {
    // console.log(element)
    const name = element.businessName
    if (name === search) {
      exactNameMatch = key
      highScore = 1
      mostLikely = key
    }
    const score = stringSimilarity(search, name)
    if (score > highScore) {
      highScore = score
      mostLikely = key
    }


    syntax.push(name)


    /** 
     * Verify Address
     * */

    const address = element?.street

    let scoreInfo = {
      key,
      name,
      score,
      address
    }
    return scoreInfo
  });

  let results = await Promise.allSettled(promises)
  results = results.map((result) => {
    if (result.status === 'rejected') {
      return {
        key: -1,
        name: '',
        score: 0
      }
    } else {
      return result.value
    }
  })
  const bumpChart = results.map(function (result) {
    if (result?.name) {
      const y = result?.key >= 0 ? result.key + 1 : null
      const id = [result.name, result?.address].join(': ')
      return {
        id,
        data: [{
          x: dateStamp,
          y
        }]
      }
    }
  })

  const scoreSyntax = await syntacticSimilarity(syntax)
  const heatmapExceptSearch = scoreSyntax[0].slice(1)
  const syntaxExceptSearch = syntax.slice(1)
  const heatmapChartData = heatmapExceptSearch.map(function (y, i) {
    const x = syntaxExceptSearch[i]
    return {
      x,
      y,
    }
  })

  const heatmapChart = [{
    id: search,
    data: heatmapChartData
  }]

  return {
    results,
    bumpChart,
    highScore,
    heatmapChart,
    // scoreSyntax,
    // syntax,
    mostLikely,
    exactNameMatch
  }
}

