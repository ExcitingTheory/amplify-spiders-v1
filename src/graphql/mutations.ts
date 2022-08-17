/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const crawlEngines = /* GraphQL */ `
  mutation CrawlEngines($search: String, $postalCode: String) {
    crawlEngines(search: $search, postalCode: $postalCode)
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
      dateTime
      domainID
      custom {
        data
        type
        unstructured
      }
      nu {
        data
        type
        unstructured
      }
      lighthouse {
        data
        type
        unstructured
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
      dateTime
      domainID
      custom {
        data
        type
        unstructured
      }
      nu {
        data
        type
        unstructured
      }
      lighthouse {
        data
        type
        unstructured
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
      dateTime
      domainID
      custom {
        data
        type
        unstructured
      }
      nu {
        data
        type
        unstructured
      }
      lighthouse {
        data
        type
        unstructured
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
      dateTime
      search
      domainID
      zipCode
      keywordPlanner {
        data
        jsonPathToRecord
        rank
        totalResults
        type
      }
      google {
        data
        jsonPathToRecord
        rank
        totalResults
        type
      }
      foursquare {
        data
        jsonPathToRecord
        rank
        totalResults
        type
      }
      facebook {
        data
        jsonPathToRecord
        rank
        totalResults
        type
      }
      yelp {
        data
        jsonPathToRecord
        rank
        totalResults
        type
      }
      infogroup {
        data
        jsonPathToRecord
        rank
        totalResults
        type
      }
      yellowPages {
        data
        jsonPathToRecord
        rank
        totalResults
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
      dateTime
      search
      domainID
      zipCode
      keywordPlanner {
        data
        jsonPathToRecord
        rank
        totalResults
        type
      }
      google {
        data
        jsonPathToRecord
        rank
        totalResults
        type
      }
      foursquare {
        data
        jsonPathToRecord
        rank
        totalResults
        type
      }
      facebook {
        data
        jsonPathToRecord
        rank
        totalResults
        type
      }
      yelp {
        data
        jsonPathToRecord
        rank
        totalResults
        type
      }
      infogroup {
        data
        jsonPathToRecord
        rank
        totalResults
        type
      }
      yellowPages {
        data
        jsonPathToRecord
        rank
        totalResults
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
      dateTime
      search
      domainID
      zipCode
      keywordPlanner {
        data
        jsonPathToRecord
        rank
        totalResults
        type
      }
      google {
        data
        jsonPathToRecord
        rank
        totalResults
        type
      }
      foursquare {
        data
        jsonPathToRecord
        rank
        totalResults
        type
      }
      facebook {
        data
        jsonPathToRecord
        rank
        totalResults
        type
      }
      yelp {
        data
        jsonPathToRecord
        rank
        totalResults
        type
      }
      infogroup {
        data
        jsonPathToRecord
        rank
        totalResults
        type
      }
      yellowPages {
        data
        jsonPathToRecord
        rank
        totalResults
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
        nextToken
        startedAt
      }
      WebCrawls {
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
        nextToken
        startedAt
      }
      WebCrawls {
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
        nextToken
        startedAt
      }
      WebCrawls {
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
