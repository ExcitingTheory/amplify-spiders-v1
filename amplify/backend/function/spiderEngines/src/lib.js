const axios = require('axios');
const cheerio = require('cheerio');

/**
 * Compares the similarity between two strings using an n-gram comparison method. 
 * https://stackoverflow.com/questions/23305000/javascript-fuzzy-search-that-makes-sense
 * The grams default to length 2.
 * @param str1 The first string to compare.
 * @param str2 The second string to compare.
 * @param gramSize The size of the grams. Defaults to length 2.
 */

const stringSimilarity = function (str1, str2, gramSize = 2) {
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

exports.stringSimilarity = stringSimilarity

const getRequest = async function (url, params = {}) {
  let data =  axios.get(url, params).catch((error) => {
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

exports.getRequest = getRequest

exports.parseCitysearch = async function (data, search, postalCode, domainName) {

  const toSearch = data?.results?.locations || [];
  let exactWebsiteMatch = -1
  let exactWebsiteMatchHttp = -1
  let exactNameMatch = -1
  let foundWebsite = false;
  let highScore = 0;
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

    let scoreInfo = {
      key,
      name,
      score
    }
    return scoreInfo
  });

  const results = await Promise.allSettled(promises)
  // console.log(JSON.stringify({
  //   results,
  //   highScore,
  //   foundWebsite,
  //   mostLikely
  // }))

  
  const websiteCheckIndex = exactNameMatch >= 0 ? exactNameMatch : mostLikely
  // console.log('toSearch[websiteCheckIndex]["website"]', toSearch[websiteCheckIndex]["website"])
  if (toSearch[websiteCheckIndex] && toSearch[websiteCheckIndex]["website"]) {
    let website = await getRequest(toSearch[websiteCheckIndex]["website"])

    if (website?.request?.res?.responseUrl) {
      console.log('website?.request?.res?.responseUrl', website?.request?.res?.responseUrl)
      const found = website.request.res.responseUrl
      if (found.includes(domainName)) {
        foundWebsite = true
        mostLikely = websiteCheckIndex
        results[websiteCheckIndex]["value"]["websiteUrl"] = found
      }
  
      if (found === `https://www.${domainName}/` || found === `https://${domainName}/`) {
        exactWebsiteMatch = websiteCheckIndex
      }
  
      if (found === `http://www.${domainName}/` || found === `http://${domainName}/`) {
        exactWebsiteMatchHttp = websiteCheckIndex
      }

    }
  }

  return {
    results,
    highScore,
    foundWebsite,
    mostLikely,
    exactWebsiteMatch,
    exactWebsiteMatchHttp,
    exactNameMatch
  }
}

exports.parseGoogle = async function (data, search, postalCode, domainName) {
  const toSearch = data?.items || [];
  // console.log(toSearch)
  let mostLikely = -1
  let exactWebsiteMatch = -1
  let exactWebsiteMatchHttp = -1
  let exactNameMatch = -1
  let foundWebsite = false;
  let highScore = 0;
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
      websiteUrl
    }
    return scoreInfo
  });

  const results = await Promise.allSettled(promises)

  return {
    results,
    highScore,
    foundWebsite,
    mostLikely,
    exactWebsiteMatch,
    exactWebsiteMatchHttp,
    exactNameMatch
  }
}

/**
 * 
 * @param {Object} data 
 * @param {String} search 
 * @param {Number} postalCode 
 * @param {String} domainName 
 * @returns {
    results, // array of first page results
    highScore, // Highest score
    mostLikely // Key from highest score
  }
 */
exports.parseFoursquare = async function (data, search, postalCode, domainName) {
  const toSearch = data?.results || [];
  let mostLikely = -1
  let exactNameMatch = -1
  let highScore = 0;
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
    /** 
     * Verify Address
     * */

    let scoreInfo = {
      key,
      name,
      score
    }
    return scoreInfo
  });

  const results = await Promise.allSettled(promises)


  return {
    results,
    highScore,
    mostLikely,
    exactNameMatch
  }
}

exports.parseYelp = async function (data, search, postalCode, domainName) {
  const toSearch = data?.businesses || [];
  let mostLikely = -1
  let exactNameMatch = -1
  let foundWebsite = false;
  let highScore = 0;
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

    let scoreInfo = {
      key,
      name,
      score
    }
    return scoreInfo
  });

  const results = await Promise.allSettled(promises)

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
            results[websiteCheckIndex]["value"]["websiteUrl"] = found
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

  return {
    results,
    highScore,
    foundWebsite,
    exactNameMatch
  }
}

exports.parseYellowpages = async function (data, search, postalCode, domainName) {
  const toSearch = data?.searchResult?.searchListings?.searchListing || [];
  let mostLikely = -1
  let exactNameMatch = -1
  let highScore = 0;
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
    /** 
     * Verify Address
     * */

    let scoreInfo = {
      key,
      name,
      score
    }
    return scoreInfo
  });

  const results = await Promise.allSettled(promises)

  return {
    results,
    highScore,
    mostLikely,
    exactNameMatch
  }
}

