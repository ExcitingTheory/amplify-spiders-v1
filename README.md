# Amplify Spiders v1

<image style="position:relative; left:25%" src="./images/purple-spider.gif" alt="Amplify Spiders v1" width="50%">


Amplify Spiders v1 is an AWS Amplify project that hosts a Next.js site with real-time data and custom Lambda handlers that include Lambda containers and tensorflow.js. This project provides crawlers for several different search engines for competitive analysis only.

## Getting Started

To get started with Amplify Spiders v1, follow these steps:

1. Clone the repository to your local machine.
2. Install the necessary dependencies by running `npm install`.
3. Set up your AWS Amplify environment by following the instructions in the [amplify/README.md](amplify/README.md) file.
4. Run the project locally by running `npm run dev`.
5. Build and push the container CI/CD Needs some work still: see here for more information [Pre-push Hook](https://github.com/ExcitingTheory/amplify-spiders-v1/blob/main/amplify/hooks/pre-push.js) This may need to be disabled on the first deploy?
6. Deploy the first time rename the hook, `amplify push`, put the hooks name back.
7. Update the following secrets with `amplify update function`:
   * googleKey,
   * googleCx,
   * foursquareClientId,
   * foursquareClientSecret,
   * facebookAccessToken,
   * infogroupApiKey,
   * yellowpagesKey,
   * yelpApiToken,
   * foursquareApiKey

8. Deploy the project to the cloud with the hook enabled by running `ECR_REPO_NAME=""  ACCOUNT_ID="" amplify push`. Where `ECR_REPO_NAME` is the repo that CDK generates.


## Features and Functionality

Amplify Spiders v1 includes the following features and functionality:

- [x] Next.js site
- [x] Real-time data
- [x] Custom Lambda handlers
- [x] Lambda containers
- [x] Tensorflow.js for Universal Sentence Encoder to compare search results to search query.
- [x] Crawler for Google custom search engine
- [x] Crawler for Citysearch
- [x] Crawler for Yelp
- [x] Crawler for Yellow Pages
- [x] Crawler for FourSquare
- [x] Can create a new user
- [x] Can login as a user
- [x] Can create a domain to monitor
- [x] Can view all domains
- [x] Can view domain details
- [x] Can view historical rankings for a domain and a search engine as a line chart
- [x] Detects if the domain is in the first page search results for a search engine

## Roadmap

Amplify Spiders v1 is currently in development. The following features and functionality are planned for future releases:


- [ ] Finish the main site menubar (can login, but not logout yet) IN PROGRESS
- [ ] Remove lambda contianers by treeshaking this library to reduce bundle size.
- [ ] Crawler for Facebook Business: Need to get the app approved by Facebook for the demo site
- [ ] Crawler for Bing?
- [ ] Crawler for Yahoo?
- [ ] CI/CD for Container Lambda handlers?
- [ ] Find good sources of regional statistical and demohgraphic data for cross referencing with search results?

## Contributing

See the [CONTRIBUTING.md](CONTRIBUTING.md) file for information on how to contribute to Amplify Spiders v1.

## License

Amplify Spiders v1 is licensed under the MIT License. See [LICENSE.txt](LICENSE.txt) for more information.

## Code of Conduct

Amplify Spiders v1 has adopted the [Contributor Covenant Code of Conduct](https://www.contributor-covenant.org/version/2/0/code_of_conduct/). See [CODE_OF_CONDUCT.md](CODE_OF_CONDUCT.md) for more information.