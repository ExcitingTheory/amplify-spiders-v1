/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const crawlEngines = /* GraphQL */ `
  mutation CrawlEngines(
    $search: String
    $postalCode: String
    $domainId: String
    $apexDomain: String
  ) {
    crawlEngines(
      search: $search
      postalCode: $postalCode
      domainId: $domainId
      apexDomain: $apexDomain
    )
  }
`;
export const crawlKeywords = /* GraphQL */ `
  mutation CrawlKeywords($search: String, $url: String) {
    crawlKeywords(search: $search, url: $url)
  }
`;
export const crawlWebs = /* GraphQL */ `
  mutation CrawlWebs($url: String) {
    crawlWebs(url: $url)
  }
`;
export const createWebCrawl = /* GraphQL */ `
  mutation CreateWebCrawl(
    $input: CreateWebCrawlInput!
    $condition: ModelWebCrawlConditionInput
  ) {
    createWebCrawl(input: $input, condition: $condition) {
      id
      url
      domainID
      custom {
        data
        parsed
        unstructured
        type
      }
      nu {
        data
        parsed
        unstructured
        type
      }
      lighthouse {
        data
        parsed
        unstructured
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
`;
export const updateWebCrawl = /* GraphQL */ `
  mutation UpdateWebCrawl(
    $input: UpdateWebCrawlInput!
    $condition: ModelWebCrawlConditionInput
  ) {
    updateWebCrawl(input: $input, condition: $condition) {
      id
      url
      domainID
      custom {
        data
        parsed
        unstructured
        type
      }
      nu {
        data
        parsed
        unstructured
        type
      }
      lighthouse {
        data
        parsed
        unstructured
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
`;
export const deleteWebCrawl = /* GraphQL */ `
  mutation DeleteWebCrawl(
    $input: DeleteWebCrawlInput!
    $condition: ModelWebCrawlConditionInput
  ) {
    deleteWebCrawl(input: $input, condition: $condition) {
      id
      url
      domainID
      custom {
        data
        parsed
        unstructured
        type
      }
      nu {
        data
        parsed
        unstructured
        type
      }
      lighthouse {
        data
        parsed
        unstructured
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
`;
export const createEngineCrawl = /* GraphQL */ `
  mutation CreateEngineCrawl(
    $input: CreateEngineCrawlInput!
    $condition: ModelEngineCrawlConditionInput
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
`;
export const updateEngineCrawl = /* GraphQL */ `
  mutation UpdateEngineCrawl(
    $input: UpdateEngineCrawlInput!
    $condition: ModelEngineCrawlConditionInput
  ) {
    updateEngineCrawl(input: $input, condition: $condition) {
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
`;
export const deleteEngineCrawl = /* GraphQL */ `
  mutation DeleteEngineCrawl(
    $input: DeleteEngineCrawlInput!
    $condition: ModelEngineCrawlConditionInput
  ) {
    deleteEngineCrawl(input: $input, condition: $condition) {
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
`;
export const createDomain = /* GraphQL */ `
  mutation CreateDomain(
    $input: CreateDomainInput!
    $condition: ModelDomainConditionInput
  ) {
    createDomain(input: $input, condition: $condition) {
      id
      name
      owner
      EngineCrawls {
        items {
          id
          search
          domainID
          postalCode
          owner
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      WebCrawls {
        items {
          id
          url
          domainID
          owner
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const updateDomain = /* GraphQL */ `
  mutation UpdateDomain(
    $input: UpdateDomainInput!
    $condition: ModelDomainConditionInput
  ) {
    updateDomain(input: $input, condition: $condition) {
      id
      name
      owner
      EngineCrawls {
        items {
          id
          search
          domainID
          postalCode
          owner
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      WebCrawls {
        items {
          id
          url
          domainID
          owner
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const deleteDomain = /* GraphQL */ `
  mutation DeleteDomain(
    $input: DeleteDomainInput!
    $condition: ModelDomainConditionInput
  ) {
    deleteDomain(input: $input, condition: $condition) {
      id
      name
      owner
      EngineCrawls {
        items {
          id
          search
          domainID
          postalCode
          owner
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      WebCrawls {
        items {
          id
          url
          domainID
          owner
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
