/*
Use the following code to retrieve configured secrets from SSM:
Parameters will be of the form { Name: 'secretName', Value: 'secretValue', ... }[]
*/

const aws = require('aws-sdk');

const { Parameters } = await (new aws.SSM())
  .getParameters({
    Names: [
      "factualKey",
      "googleKey",
      "googleCx",
      "foursquareClientId",
      "foursquareClientSecret",
      "facebookAccessToken",
      "infogroupApiKey",
      "yellowpagesKey"
    ].map(secretName => process.env[secretName]),
    WithDecryption: true,
  })
  .promise();


/* Amplify Params - DO NOT EDIT
	API_SPIDERS1_GRAPHQLAPIENDPOINTOUTPUT
	API_SPIDERS1_GRAPHQLAPIIDOUTPUT
	ENV
	REGION
Amplify Params - DO NOT EDIT */

/**
 * @type {import('@types/aws-lambda').APIGatewayProxyHandler}
 */

function findSecret(name){
  const foundItem = Parameters.find(item => item.Name === name)[0] || {}
  return foundItem?.Value || ''
}

function getFactual(searchString, postalCode) {
  const filters = {'postcode': postalCode}
  const key = findSecret("factualKey")
  const params = {
    'KEY': key,
    'q': searchString,
    'filters':JSON.stringify(filters)
  }
  const apiUrl = "http://api.v3.factual.com/t/places"

  return axios.post(apiUrl, params);
}

function getCitysearch(searchString, postalCode) {
  const params = {
    'publisher': '10000008068',
    'format': 'json',
    'what': searchString,
    'where': postalCode
  }
  const apiUrl = "http://api.citygridmedia.com/content/places/v2/search/where"

  return axios.post(apiUrl, params);
}

function getGoogle(searchString, postalCode) {
  const params = {
    'key': findSecret("googleKey"),
    'cr': 'US',
    'cx': findSecret("googleCx"),
    'q': [searchString, postalCode].join(" ")
  }
  const apiUrl = "https://www.googleapis.com/customsearch/v1"

  return axios.post(apiUrl, params);
}

function getFoursquare(searchString, postalCode) {
  const params = {  
    'v': Date.epoch_stamp(),
    'client_id': findSecret("foursquareClientId"),
    'client_secret': findSecret("foursquareClientSecret"),
    'near': postalCode,
    'what': searchString
  }
  const apiUrl = "https://api.foursquare.com/v2/venues/search"

  return axios.post(apiUrl, params);
}


function getFacebook(searchString, postalCode) {
  const params = {  
    'access_token': findSecret("facebookAccessToken"),
    'type': 'page',
    'q': searchString
  }
  const apiUrl = "https://graph.facebook.com/v2.2/search"

  return axios.post(apiUrl, params);
}

function getYelp(searchString, postalCode) {
  return {}
  // const params = {  
  //   'access_token': findSecret("facebookAccessToken"),
  //   'type': 'page',
  //   'q': searchString
  // }
  // const apiUrl = "https://graph.facebook.com/v2.2/search"

  // return axios.post(apiUrl, params);
}

function getInfogroup(searchString, postalCode) {
  const params = {  
    'apikey': findSecret("infogroupApiKey"),
    'postalcode': postalCode,
    'companyname': searchString
  }
  const apiUrl = "https://api.infoconnect.com/v1/companies"

  return axios.post(apiUrl, params);
}

function getYellowpages(searchString, postalCode) {
  const params = {  
    'key': findSecret("yellowpagesKey"),
    'format': 'json',
    'sort': 'distance',
    'term': searchString,
    'searchloc': postalCode
  }
  const apiUrl = "http://pubapi.yp.com/search-api/search/devapi/search"

  return axios.post(apiUrl, params);
}



exports.handler = async (event) => {
    console.log(`EVENT: ${JSON.stringify(event)}`);
    
    Promise.allSettled([
      getFactual(searchString, postalCode),
      getCitysearch(searchString, postalCode),
      getGoogle(searchString, postalCode),
      getFacebook(searchString, postalCode),
      getFoursquare(searchString, postalCode),
      getYellowpages(searchString, postalCode),
      getInfogroup(searchString, postalCode),
      getYelp(searchString, postalCode)
    ])
    .then((results) => {
      console.log(results)
      const factual = results[0];
      const citysearch = results[1];
      const google = results[2];
      const facebook = results[3];
      const foursquare = results[4];
      const yellowpages = results[5];
      const infogroup = results[6];
      const yelp = results[7];
      return {
        statusCode: 200,
    //  Uncomment below to enable CORS requests
    //  headers: {
    //      "Access-Control-Allow-Origin": "*",
    //      "Access-Control-Allow-Headers": "*"
    //  }, 
        body: JSON.stringify({
          factual,
          citysearch,
          google,
          facebook,
          foursquare,
          yellowpages,
          infogroup,
          yelp
        }),
    };
    });

    
};
