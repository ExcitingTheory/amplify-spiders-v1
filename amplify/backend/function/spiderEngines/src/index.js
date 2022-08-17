/*
Use the following code to retrieve configured secrets from SSM:

const aws = require('aws-sdk');

const { Parameters } = await (new aws.SSM())
  .getParameters({
    Names: ["googleKey","googleCx","foursquareClientId","foursquareClientSecret","facebookAccessToken","infogroupApiKey","yellowpagesKey","yelpApiToken","foursquareApiKey"].map(secretName => process.env[secretName]),
    WithDecryption: true,
  })
  .promise();

Parameters will be of the form { Name: 'secretName', Value: 'secretValue', ... }[]
*/

/* Amplify Params - DO NOT EDIT
  API_SPIDERS1_GRAPHQLAPIENDPOINTOUTPUT
  API_SPIDERS1_GRAPHQLAPIIDOUTPUT
  ENV
  REGION
Amplify Params - DO NOT EDIT */

/**
 * @type {import('@types/aws-lambda').APIGatewayProxyHandler}
 */

const aws = require('aws-sdk');

const {
  getRequest,
  parseYelp,
  parseCitysearch,
  parseGoogle,
  parseYellowpages,
  parseFoursquare
 } = require('./lib');

exports.handler = async (event) => {
  // console.log(`EVENT: ${JSON.stringify(event)}`);
  const { search, postalCode } = event?.arguments
  const { Parameters } = await (new aws.SSM())
  .getParameters({
    Names: [
      "googleKey",
      "googleCx",
      "foursquareClientId",
      "foursquareClientSecret",
      "facebookAccessToken",
      "infogroupApiKey",
      "yellowpagesKey",
      "yelpApiToken",
      "foursquareApiKey"
    ].map(secretName => process.env[secretName]),
    WithDecryption: true,
  })
  .promise()

    
  function findSecret(name) {
    const foundItem = Parameters.find(item => item['Name'] === process.env[name])
    return foundItem?.Value
  }
    
  async function getCitysearch() {
    const params = {
      'publisher': '10000028538',
      'format': 'json',
      'what': search,
      'where': postalCode
    }
    return getRequest("https://api.citygridmedia.com/content/places/v2/search/where", { params });
  }

  async function getGoogle() {
    const params = {
      'key': findSecret("googleKey"),
      'cr': 'US',
      'cx': findSecret("googleCx"),
      'q': [search, postalCode].join(" ").trim()
    }
    return getRequest("https://www.googleapis.com/customsearch/v1", { params });
  }


  function getFoursquare() {
    const params = {
      'near': postalCode,
      'query': search
    }
    const headers = {
      'Accept': 'Accept: application/json',
      'Authorization': findSecret("foursquareApiKey") 
    }
    return getRequest("https://api.foursquare.com/v3/places/search", { params, headers });
  }


  function getFacebook() {
    // Need to go through app review before we can use
    const params = {
      'access_token': findSecret("facebookAccessToken"),
      'type': 'page',
      'q': search
    }

    return getRequest("https://graph.facebook.com/v2.2/search", { params });
  }

  function getYelp() {
    const params = {
      'term': search,
      'location': postalCode
    }

    const headers = {
      'Authorization': `Bearer ${findSecret("yelpApiToken")}` 
    }

    return getRequest("https://api.yelp.com/v3/businesses/search", { params, headers });
  }

  // function getInfogroup() {
  //   // https://www.data-axle.com/our-data/apis/#faqs_11
  //   const params = {
  //     'apikey': findSecret("infogroupApiKey"),
  //     'postalcode': postalCode,
  //     'companyname': search
  //   }
  //   return getRequest("https://api.infoconnect.com/v1/companies", { params });
  // }

  function getYellowpages() {
    const params = {
      'key': findSecret("yellowpagesKey"),
      'format': 'json',
      'sort': 'distance',
      'term': search,
      'searchloc': postalCode
    }

    return getRequest("http://pubapi.yp.com/search-api/search/devapi/search", { params });
  }


  /**
   * Initial data fetching
   */


  const results = await Promise.allSettled([
    getCitysearch(),
    getGoogle(),
    //getFacebook(),
    getFoursquare(),
    getYellowpages(),
    //getInfogroup(),
    getYelp()
  ])

  /**
   * Add parsers here, follow up data fetchin exists in the parsers
   */
  const parsed = await Promise.allSettled([
    parseCitysearch(results[0]?.value?.data),
    parseGoogle(results[1]?.value?.data),
    parseFoursquare(results[2]?.value?.data),
    parseYellowpages(results[3]?.value?.data),
    parseYelp(results[4]?.value?.data)
  ])

  const citysearch = parsed[0];
  const google = parsed[1];
  // const facebook = results[2];
  const foursquare = parsed[2];
  const yellowpages = parsed[3];
  // const infogroup = results[5];
  const yelp = parsed[4];

  console.log(JSON.stringify({
    citysearch,
    // facebook,
    foursquare,
    google,
    // infogroup,
    yellowpages,
    yelp
  }))

  /**
   * Write result to graphql
   */

  return {
    statusCode: 200,
    //  Uncomment below to enable CORS requests
    //  headers: {
    //      "Access-Control-Allow-Origin": "*",
    //      "Access-Control-Allow-Headers": "*"
    //  }, 
    body: JSON.stringify({
      citysearch,
      // facebook,
      foursquare,
      google,
      // infogroup,
      yellowpages,
      yelp
    }),
  };


};
