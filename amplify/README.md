# Amplify Specific Setup

See the official [Amplify Documentation](https://docs.amplify.aws/cli/start/install) for more information.

## Install Amplify CLI

To install the Amplify CLI, run the following command:

```bash
npm install -g @aws-amplify/cli
```

## Configure Amplify CLI

To configure the Amplify CLI, run the following command:

```bash

amplify configure
```

## Clone as a Sample Project

If you'd like to clone this as a sample project, you can do so by running the following command:

```bash 

amplify init --app <github-url>    
```


## Pull backend environment

If you have an existing implementation of Amplify Spiders v1, you can pull the backend environment to your local machine by running the following command:

```bash
amplify pull --appId APP-ID --envName ENV-NAME
```

## Push backend environment

If you have made changes to the backend environment, you can push those changes to the cloud by running the following command:

```bash
amplify push
```

