// /*
// Use the following code to retrieve configured secrets from SSM:

// const aws = require('aws-sdk');

// const { Parameters } = await (new aws.SSM())
//   .getParameters({
//     Names: ["googleKey","googleCx","foursquareClientId","foursquareClientSecret","facebookAccessToken","infogroupApiKey","yellowpagesKey","yelpApiToken","foursquareApiKey"].map(secretName => process.env[secretName]),
//     WithDecryption: true,
//   })
//   .promise();

// Parameters will be of the form { Name: 'secretName', Value: 'secretValue', ... }[]
// */

// /* Amplify Params - DO NOT EDIT
//   API_SPIDERS1_GRAPHQLAPIENDPOINTOUTPUT
//   API_SPIDERS1_GRAPHQLAPIIDOUTPUT
//   ENV
//   REGION
// Amplify Params - DO NOT EDIT */

// /**
//  * @type {import('@types/aws-lambda').APIGatewayProxyHandler}
//  */

// const aws = require('aws-sdk');

// const {
//   getRequest,
//   parseYelp,
//   parseCitysearch,
//   parseGoogle,
//   parseYellowpages,
//   parseFoursquare
//  } = require('./lib');

// exports.handler = async (event) => {
//   // console.log(`EVENT: ${JSON.stringify(event)}`);
//   const { search, postalCode } = event?.arguments
//   const { Parameters } = await (new aws.SSM())
//   .getParameters({
//     Names: [
//       "googleKey",
//       "googleCx",
//       "foursquareClientId",
//       "foursquareClientSecret",
//       "facebookAccessToken",
//       "infogroupApiKey",
//       "yellowpagesKey",
//       "yelpApiToken",
//       "foursquareApiKey"
//     ].map(secretName => process.env[secretName]),
//     WithDecryption: true,
//   })
//   .promise()

    
//   function findSecret(name) {
//     const foundItem = Parameters.find(item => item['Name'] === process.env[name])
//     return foundItem?.Value
//   }
    
//   async function getCitysearch() {
//     const params = {
//       'publisher': '10000028538',
//       'format': 'json',
//       'what': search,
//       'where': postalCode
//     }
//     return getRequest("https://api.citygridmedia.com/content/places/v2/search/where", { params });
//   }

//   async function getGoogle() {
//     const params = {
//       'key': findSecret("googleKey"),
//       'cr': 'US',
//       'cx': findSecret("googleCx"),
//       'q': [search, postalCode].join(" ").trim()
//     }
//     return getRequest("https://www.googleapis.com/customsearch/v1", { params });
//   }


//   function getFoursquare() {
//     const params = {
//       'near': postalCode,
//       'query': search
//     }
//     const headers = {
//       'Accept': 'Accept: application/json',
//       'Authorization': findSecret("foursquareApiKey") 
//     }
//     return getRequest("https://api.foursquare.com/v3/places/search", { params, headers });
//   }


//   function getFacebook() {
//     // Need to go through app review before we can use
//     const params = {
//       'access_token': findSecret("facebookAccessToken"),
//       'type': 'page',
//       'q': search
//     }

//     return getRequest("https://graph.facebook.com/v2.2/search", { params });
//   }

//   function getYelp() {
//     const params = {
//       'term': search,
//       'location': postalCode
//     }

//     const headers = {
//       'Authorization': `Bearer ${findSecret("yelpApiToken")}` 
//     }

//     return getRequest("https://api.yelp.com/v3/businesses/search", { params, headers });
//   }

//   // function getInfogroup() {
//   //   // https://www.data-axle.com/our-data/apis/#faqs_11
//   //   const params = {
//   //     'apikey': findSecret("infogroupApiKey"),
//   //     'postalcode': postalCode,
//   //     'companyname': search
//   //   }
//   //   return getRequest("https://api.infoconnect.com/v1/companies", { params });
//   // }

//   function getYellowpages() {
//     const params = {
//       'key': findSecret("yellowpagesKey"),
//       'format': 'json',
//       'sort': 'distance',
//       'term': search,
//       'searchloc': postalCode
//     }

//     return getRequest("http://pubapi.yp.com/search-api/search/devapi/search", { params });
//   }


//   /**
//    * Initial data fetching
//    */

//   const results = await Promise.allSettled([
//     getCitysearch(),
//     getGoogle(),
//     //getFacebook(),
//     getFoursquare(),
//     getYellowpages(),
//     //getInfogroup(),
//     getYelp()
//   ])

//   /**
//    * Add parsers here, follow up data fetchin exists in the parsers
//    */
//   const parsed = await Promise.allSettled([
//     parseCitysearch(results[0]?.value?.data),
//     parseGoogle(results[1]?.value?.data),
//     parseFoursquare(results[2]?.value?.data),
//     parseYellowpages(results[3]?.value?.data),
//     parseYelp(results[4]?.value?.data)
//   ])

//   const citysearch = parsed[0];
//   const google = parsed[1];
//   // const facebook = results[2];
//   const foursquare = parsed[2];
//   const yellowpages = parsed[3];
//   // const infogroup = results[5];
//   const yelp = parsed[4];

//   console.log(JSON.stringify({
//     citysearch,
//     // facebook,
//     foursquare,
//     google,
//     // infogroup,
//     yellowpages,
//     yelp
//   }))

//   /**
//    * Write result to graphql
//    */

//   return {
//     statusCode: 200,
//     //  Uncomment below to enable CORS requests
//     //  headers: {
//     //      "Access-Control-Allow-Origin": "*",
//     //      "Access-Control-Allow-Headers": "*"
//     //  }, 
//     body: JSON.stringify({
//       citysearch,
//       // facebook,
//       foursquare,
//       google,
//       // infogroup,
//       yellowpages,
//       yelp
//     }),
//   };


// };

import crypto from '@aws-crypto/sha256-js';
import { defaultProvider } from '@aws-sdk/credential-provider-node';
import { SignatureV4 } from '@aws-sdk/signature-v4';
import { HttpRequest } from '@aws-sdk/protocol-http';
import { default as fetch, Request } from 'node-fetch';

const { Sha256 } = crypto;
const GRAPHQL_ENDPOINT = process.env.API_SPIDERS1_GRAPHQLAPIENDPOINTOUTPUT;
const AWS_REGION = process.env.AWS_REGION || 'us-east-1';


// need to pass in domain id and lookup owner id

// type CreateEngineCrawlInput = {
//   search?: string | null,
//   domainID: string,
//   postalCode?: string | null,
//   keywordPlanner?: EngineResultInput | null,
//   google?: EngineResultInput | null,
//   foursquare?: EngineResultInput | null,
//   facebook?: EngineResultInput | null,
//   yelp?: EngineResultInput | null,
//   infogroup?: EngineResultInput | null,
//   yellowPages?: EngineResultInput | null,
//   owner?: string | null,
//   _version?: number | null,
// };

const query = /* GraphQL */ `
  query LIST_DOMAINS {
    listDomains {
      items {
        id
        name
      }
    }
  }
`;

const mutation = /* GraphQL */ `
mutation CreateEngineCrawl(
  $input
  $condition
) {
  createEngineCrawl(input: $input, condition: $condition) {
      id
      search
      domainID
      postalCode
      keywordPlanner {
        data
        results {
          status
        }
        highScore
        foundWebsite
        mostLikely
        exactWebsiteMatch
        exactWebsiteMatchHttp
        exactNameMatch
        rank
        type
      }
      google {
        data
        results {
          status
        }
        highScore
        foundWebsite
        mostLikely
        exactWebsiteMatch
        exactWebsiteMatchHttp
        exactNameMatch
        rank
        type
      }
      foursquare {
        data
        results {
          status
        }
        highScore
        foundWebsite
        mostLikely
        exactWebsiteMatch
        exactWebsiteMatchHttp
        exactNameMatch
        rank
        type
      }
      facebook {
        data
        results {
          status
        }
        highScore
        foundWebsite
        mostLikely
        exactWebsiteMatch
        exactWebsiteMatchHttp
        exactNameMatch
        rank
        type
      }
      yelp {
        data
        results {
          status
        }
        highScore
        foundWebsite
        mostLikely
        exactWebsiteMatch
        exactWebsiteMatchHttp
        exactNameMatch
        rank
        type
      }
      infogroup {
        data
        results {
          status
        }
        highScore
        foundWebsite
        mostLikely
        exactWebsiteMatch
        exactWebsiteMatchHttp
        exactNameMatch
        rank
        type
      }
      yellowPages {
        data
        results {
          status
        }
        highScore
        foundWebsite
        mostLikely
        exactWebsiteMatch
        exactWebsiteMatchHttp
        exactNameMatch
        rank
        type
      }
      owner
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
}
`

/**
 * @type {import('@types/aws-lambda').APIGatewayProxyHandler}
 */
export const handler = async (event) => {
  console.log(`EVENT: ${JSON.stringify(event)}`);

  const endpoint = new URL(GRAPHQL_ENDPOINT);

  const signer = new SignatureV4({
    credentials: defaultProvider(),
    region: AWS_REGION,
    service: 'appsync',
    sha256: Sha256
  });

  const requestToBeSigned = new HttpRequest({
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      host: endpoint.host
    },
    hostname: endpoint.host,
    body: JSON.stringify({ query }),
    path: endpoint.pathname
  });

  const signed = await signer.sign(requestToBeSigned);
  const request = new Request(endpoint, signed);

  let statusCode = 200;
  let body;
  let response;

  try {
    response = await fetch(request);
    body = await response.json();
    if (body.errors) statusCode = 400;
  } catch (error) {
    statusCode = 500;
    body = {
      errors: [
        {
          message: error.message
        }
      ]
    };
  }

  return {
    statusCode,
    body: JSON.stringify(body)
  };
};