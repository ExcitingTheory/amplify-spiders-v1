import * as cdk from '@aws-cdk/core';
import * as path from 'path';
import * as AmplifyHelpers from '@aws-amplify/cli-extensibility-helper';
import { AmplifyDependentResourcesAttributes } from '../../types/amplify-dependent-resources-ref';
import * as iam from '@aws-cdk/aws-iam';
//import * as sns from '@aws-cdk/aws-sns';
//import * as subs from '@aws-cdk/aws-sns-subscriptions';
import * as lambda from '@aws-cdk/aws-lambda';
import * as ecr from '@aws-cdk/aws-ecr';

// Pull from the provider because?
// import * as teamProviderInfo from '../../../team-provider-info.json';

export class cdkStack extends cdk.Stack {
  constructor(scope: cdk.Construct, id: string, props?: cdk.StackProps, amplifyResourceProps?: AmplifyHelpers.AmplifyResourceProps) {
    super(scope, id, props);

    const envName = AmplifyHelpers.getProjectInfo().envName;
    /**
     * TODO Figure out a better way to do this
     */

    console.log('AmplifyHelpers.getProjectInfo()', AmplifyHelpers.getProjectInfo())
    let secretsPathAmplifyAppId
    if (envName === 'dev') {
      secretsPathAmplifyAppId = 'd39d9izi3mmqnw'
    }
    /* Do not remove - Amplify CLI automatically injects the current deployment environment in this input parameter */
    new cdk.CfnParameter(this, 'env', {
      type: 'String',
      description: 'Current Amplify CLI env name',
    });

    // new cdk.CfnParameter(this, 'apispiders1GraphQLAPIIdOutput', {
    //   type: 'String',
    //   description: 'apispiders1GraphQLAPIIdOutput',
    // });

    // new cdk.CfnParameter(this, 'apispiders1GraphQLAPIEndpointOutput', {
    //   type: 'String',
    //   description: 'apispiders1GraphQLAPIEndpointOutput',
    // });

    const amplifyProjectInfo = AmplifyHelpers.getProjectInfo();

    const apispiders1GraphQLAPIEndpointOutput = cdk.Fn.ref('apispiders1GraphQLAPIEndpointOutput')
    const apispiders1GraphQLAPIIdOutput = cdk.Fn.ref('apispiders1GraphQLAPIIdOutput')
    // const envName = cdk.Fn.ref('env')
    const thisAccountId = cdk.Stack.of(this).account
    const thisRegion = cdk.Stack.of(this).region

    const roleResourceNamePrefix = `spiderEngineLanguageRole-${amplifyProjectInfo.projectName}`;
    const role = new iam.Role(this, 'spiderEngineLanguageRole', {
      assumedBy: new iam.ServicePrincipal('lambda.amazonaws.com'),
      roleName: `${roleResourceNamePrefix}-${envName}`
    });

    const parameterPrefix = `/amplify/${secretsPathAmplifyAppId}/${envName}/AMPLIFY_spiderEngines_`
    const googleKey = `${parameterPrefix}googleKey`
    const googleCx = `${parameterPrefix}googleCx`
    const foursquareClientId = `${parameterPrefix}foursquareClientId`
    const foursquareClientSecret = `${parameterPrefix}foursquareClientSecret`
    const facebookAccessToken = `${parameterPrefix}facebookAccessToken`
    const infogroupApiKey = `${parameterPrefix}infogroupApiKey`
    const yellowpagesKey = `${parameterPrefix}yellowpagesKey`
    const yelpApiToken = `${parameterPrefix}yelpApiToken`
    const foursquareApiKey = `${parameterPrefix}foursquareApiKey`



    const ecrRepo = ecr.Repository.fromRepositoryAttributes(this, 'ecrRepo', {
      repositoryArn: `arn:aws:ecr:us-east-1:759854655984:repository/cdk-hnb659fds-container-assets-759854655984-us-east-1`, // TODO
      repositoryName: 'cdk-hnb659fds-container-assets-759854655984-us-east-1', // TODO
    })

    // cdk-hnb659fds-container-assets-759854655984-us-east-1
    // 759854655984.dkr.ecr.us-east-1.amazonaws.com
    // arn:aws:ecr:region:012345678910:repository/test

    const code = lambda.DockerImageCode.fromEcr(ecrRepo, {
      tag: 'spiderEnginesLanguage-latest',
    })

    // `spiderEnginesLanguage-spiders1-${envName}`
    const functionName = `spiderEnginesLanguage-${envName}`
    new lambda.DockerImageFunction(this, 'spiderEnginesLanguageFunction', {
      functionName,  
      code,
      role,
      timeout: cdk.Duration.seconds(900), // 15 minutes
      memorySize: 2048,
      environment: {
        API_SPIDERS1_GRAPHQLAPIENDPOINTOUTPUT: apispiders1GraphQLAPIEndpointOutput,
        API_SPIDERS1_GRAPHQLAPIIDOUTPUT: apispiders1GraphQLAPIIdOutput,
        ENV: envName,
        REGION: thisRegion,
        googleKey,
        googleCx,
        foursquareClientId,
        foursquareClientSecret,
        facebookAccessToken,
        infogroupApiKey,
        yellowpagesKey,
        yelpApiToken,
        foursquareApiKey
      },
    });


    // Not Authorized to access createEngineCrawl on type EngineCrawl
    role.addToPolicy(
      new iam.PolicyStatement({
        actions: [
          "appsync:GraphQL"
        ],
        resources: [
          // "arn:aws:appsync:us-east-1:759854655984:apis/h6fz54cav5fqdfrqbezwz4v2ia/types/Query/*",
          // "arn:aws:appsync:us-east-1:759854655984:apis/h6fz54cav5fqdfrqbezwz4v2ia/types/Mutation/*"
          `arn:aws:appsync:${thisRegion}:${thisAccountId}:apis/${apispiders1GraphQLAPIIdOutput}/types/Query/*`,
          `arn:aws:appsync:${thisRegion}:${thisAccountId}:apis/${apispiders1GraphQLAPIIdOutput}/types/Mutation/*`
        ],
      }),
    );

    role.addToPolicy(
      new iam.PolicyStatement({
        actions: [
          "logs:CreateLogGroup",
          "logs:CreateLogStream",
          "logs:PutLogEvents"        ],
        resources: [
          `arn:aws:logs:${thisRegion}:${thisAccountId}:log-group:/aws/lambda/${functionName}:log-stream:*`,
        ],
      }),
    );

    role.addToPolicy(
      new iam.PolicyStatement({
        actions: [
          "ssm:GetParameter",
          "ssm:GetParameters"
        ],
        resources: [
          // aws:ssm:us-east-1:759854655984:parameter/amplify/d39d9izi3mmqnw/dev/AMPLIFY_spiderEngines_googleKey 
          // `/amplify/${secretsPathAmplifyAppId}/${envName}/AMPLIFY_spiderEngines_`
          `arn:aws:ssm:${thisRegion}:${thisAccountId}:parameter${parameterPrefix}*`,
        ],
      }),
    );

    role.addToPolicy(
      new iam.PolicyStatement({
        actions: [
          "ecr:GetAuthorizationToken",
          "ecr:BatchCheckLayerAvailability",
          "ecr:GetDownloadUrlForLayer",
          "ecr:GetRepositoryPolicy",
          "ecr:DescribeRepositories",
          "ecr:ListImages",
          "ecr:DescribeImages",
          "ecr:BatchGetImage",
          "ecr:GetLifecyclePolicy",
          "ecr:GetLifecyclePolicyPreview",
          "ecr:ListTagsForResource",
          "ecr:DescribeImageScanFindings"
        ],
        resources: [
          "*"
          // `arn:aws:ecr:${thisRegion}:${thisAccountId}:repository/cdk-hnb659fds-container-assets-759854655984-us-east-1*`, // TODO
          // `arn:aws:ssm:${thisRegion}:${thisAccountId}:parameter/${parameterPrefix}*`,
        ],
      }),
    );
    // Access other Amplify Resources 
    const retVal:AmplifyDependentResourcesAttributes = AmplifyHelpers.addResourceDependency(this, 
      amplifyResourceProps.category, 
      amplifyResourceProps.resourceName, 
      [
        {category: 'api', resourceName: 'spiders1'},
        {category: 'function', resourceName: 'spiderEngines'},
      ]
    );
  }
}