/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getPost = /* GraphQL */ `
  query GetPost($id: ID!) {
    getPost(id: $id) {
      id
      title
      owner
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const listPosts = /* GraphQL */ `
  query ListPosts(
    $filter: ModelPostFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPosts(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        title
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
  }
`;
export const syncPosts = /* GraphQL */ `
  query SyncPosts(
    $filter: ModelPostFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncPosts(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        title
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
  }
`;
export const getWebCrawl = /* GraphQL */ `
  query GetWebCrawl($id: ID!) {
    getWebCrawl(id: $id) {
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
export const listWebCrawls = /* GraphQL */ `
  query ListWebCrawls(
    $filter: ModelWebCrawlFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listWebCrawls(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        url
        dateTime
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
  }
`;
export const syncWebCrawls = /* GraphQL */ `
  query SyncWebCrawls(
    $filter: ModelWebCrawlFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncWebCrawls(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        url
        dateTime
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
  }
`;
export const getEngineCrawl = /* GraphQL */ `
  query GetEngineCrawl($id: ID!) {
    getEngineCrawl(id: $id) {
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
export const listEngineCrawls = /* GraphQL */ `
  query ListEngineCrawls(
    $filter: ModelEngineCrawlFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listEngineCrawls(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        dateTime
        search
        domainID
        zipCode
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
  }
`;
export const syncEngineCrawls = /* GraphQL */ `
  query SyncEngineCrawls(
    $filter: ModelEngineCrawlFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncEngineCrawls(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        dateTime
        search
        domainID
        zipCode
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
  }
`;
export const getDomain = /* GraphQL */ `
  query GetDomain($id: ID!) {
    getDomain(id: $id) {
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
export const listDomains = /* GraphQL */ `
  query ListDomains(
    $filter: ModelDomainFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listDomains(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
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
  }
`;
export const syncDomains = /* GraphQL */ `
  query SyncDomains(
    $filter: ModelDomainFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncDomains(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        name
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
  }
`;
