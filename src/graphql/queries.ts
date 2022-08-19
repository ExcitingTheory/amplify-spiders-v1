/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getWebCrawl = /* GraphQL */ `
  query GetWebCrawl($id: ID!) {
    getWebCrawl(id: $id) {
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
      nextToken
      startedAt
    }
  }
`;
export const getEngineCrawl = /* GraphQL */ `
  query GetEngineCrawl($id: ID!) {
    getEngineCrawl(id: $id) {
      id
      search
      domainID
      postalCode
      keywordplanner {
        status
        reason
        data
        results {
          status
          reason
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
      citysearch {
        status
        reason
        data
        results {
          status
          reason
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
        status
        reason
        data
        results {
          status
          reason
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
        status
        reason
        data
        results {
          status
          reason
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
        status
        reason
        data
        results {
          status
          reason
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
        status
        reason
        data
        results {
          status
          reason
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
        status
        reason
        data
        results {
          status
          reason
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
      yellowpages {
        status
        reason
        data
        results {
          status
          reason
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
export const listEngineCrawls = /* GraphQL */ `
  query ListEngineCrawls(
    $filter: ModelEngineCrawlFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listEngineCrawls(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        search
        domainID
        postalCode
        keywordplanner {
          status
          reason
          data
          highScore
          foundWebsite
          mostLikely
          exactWebsiteMatch
          exactWebsiteMatchHttp
          exactNameMatch
          rank
          type
        }
        citysearch {
          status
          reason
          data
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
          status
          reason
          data
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
          status
          reason
          data
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
          status
          reason
          data
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
          status
          reason
          data
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
          status
          reason
          data
          highScore
          foundWebsite
          mostLikely
          exactWebsiteMatch
          exactWebsiteMatchHttp
          exactNameMatch
          rank
          type
        }
        yellowpages {
          status
          reason
          data
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
        search
        domainID
        postalCode
        keywordplanner {
          status
          reason
          data
          highScore
          foundWebsite
          mostLikely
          exactWebsiteMatch
          exactWebsiteMatchHttp
          exactNameMatch
          rank
          type
        }
        citysearch {
          status
          reason
          data
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
          status
          reason
          data
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
          status
          reason
          data
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
          status
          reason
          data
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
          status
          reason
          data
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
          status
          reason
          data
          highScore
          foundWebsite
          mostLikely
          exactWebsiteMatch
          exactWebsiteMatchHttp
          exactNameMatch
          rank
          type
        }
        yellowpages {
          status
          reason
          data
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
      nextToken
      startedAt
    }
  }
`;
