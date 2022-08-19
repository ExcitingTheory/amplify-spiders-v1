/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateWebCrawl = /* GraphQL */ `
  subscription OnCreateWebCrawl($owner: String) {
    onCreateWebCrawl(owner: $owner) {
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
export const onUpdateWebCrawl = /* GraphQL */ `
  subscription OnUpdateWebCrawl($owner: String) {
    onUpdateWebCrawl(owner: $owner) {
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
export const onDeleteWebCrawl = /* GraphQL */ `
  subscription OnDeleteWebCrawl($owner: String) {
    onDeleteWebCrawl(owner: $owner) {
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
export const onCreateEngineCrawl = /* GraphQL */ `
  subscription OnCreateEngineCrawl($owner: String) {
    onCreateEngineCrawl(owner: $owner) {
      id
      search
      domainID
      postalCode
      keywordplanner {
        status
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
      citysearch {
        status
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
        status
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
        status
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
        status
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
        status
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
        status
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
      yellowpages {
        status
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
export const onUpdateEngineCrawl = /* GraphQL */ `
  subscription OnUpdateEngineCrawl($owner: String) {
    onUpdateEngineCrawl(owner: $owner) {
      id
      search
      domainID
      postalCode
      keywordplanner {
        status
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
      citysearch {
        status
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
        status
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
        status
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
        status
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
        status
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
        status
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
      yellowpages {
        status
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
export const onDeleteEngineCrawl = /* GraphQL */ `
  subscription OnDeleteEngineCrawl($owner: String) {
    onDeleteEngineCrawl(owner: $owner) {
      id
      search
      domainID
      postalCode
      keywordplanner {
        status
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
      citysearch {
        status
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
        status
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
        status
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
        status
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
        status
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
        status
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
      yellowpages {
        status
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
export const onCreateDomain = /* GraphQL */ `
  subscription OnCreateDomain($owner: String) {
    onCreateDomain(owner: $owner) {
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
export const onUpdateDomain = /* GraphQL */ `
  subscription OnUpdateDomain($owner: String) {
    onUpdateDomain(owner: $owner) {
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
export const onDeleteDomain = /* GraphQL */ `
  subscription OnDeleteDomain($owner: String) {
    onDeleteDomain(owner: $owner) {
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
