/*
Use the following code to retrieve configured secrets from SSM:
Parameters will be of the form { Name: 'secretName', Value: 'secretValue', ... }[]
*/

const aws = require('aws-sdk');

const { Parameters } = await (new aws.SSM())
  .getParameters({
    Names: ["factualKey","googleKey","googleCx","foursquareClientId","foursquareClientSecret","facebookAccessToken"].map(secretName => process.env[secretName]),
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
exports.handler = async (event) => {
    console.log(`EVENT: ${JSON.stringify(event)}`);
    return {
        statusCode: 200,
    //  Uncomment below to enable CORS requests
    //  headers: {
    //      "Access-Control-Allow-Origin": "*",
    //      "Access-Control-Allow-Headers": "*"
    //  }, 
        body: JSON.stringify('Hello from Lambda!'),
    };
};
