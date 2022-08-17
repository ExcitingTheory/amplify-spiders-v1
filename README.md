# Next.js Amplify Spiders v1

## How to use

Install it and run:

```sh
npm install
npm run dev
```

## NOTES on setup

```bash
amplify init

amplify add auth

user groups free, paid, and admin.
Facebook, amazon and google login.

amplify push 
```

--force?  didn't end up doing that
https://github.com/aws-amplify/amplify-adminui/issues/472 

What ended up working was creating auth without federation.  


```bash
amplify publish 
```

Python lambda keys are in ssm:
Use the AWS SSM GetParameter API to retrieve secrets in your Lambda function.
More information can be found here: https://docs.aws.amazon.com/systems-manager/latest/APIReference/API_GetParameter.html

graphql access in lambdas

```bash
        API_SPIDERS1_GRAPHQLAPIENDPOINTOUTPUT
        API_SPIDERS1_GRAPHQLAPIIDOUTPUT
        ENV
        REGION
```

Example:

```graphql
mutation MyMutation {
  crawlEngines(search:"bend brewing company", postalCode:"97702")
}
```
