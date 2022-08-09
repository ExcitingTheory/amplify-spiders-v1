/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreatePost = /* GraphQL */ `
  subscription OnCreatePost($owner: String) {
    onCreatePost(owner: $owner) {
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
export const onUpdatePost = /* GraphQL */ `
  subscription OnUpdatePost($owner: String) {
    onUpdatePost(owner: $owner) {
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
export const onDeletePost = /* GraphQL */ `
  subscription OnDeletePost($owner: String) {
    onDeletePost(owner: $owner) {
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
export const onCreateWebCrawl = /* GraphQL */ `
  subscription OnCreateWebCrawl($owner: String) {
    onCreateWebCrawl(owner: $owner) {
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
export const onUpdateWebCrawl = /* GraphQL */ `
  subscription OnUpdateWebCrawl($owner: String) {
    onUpdateWebCrawl(owner: $owner) {
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
export const onDeleteWebCrawl = /* GraphQL */ `
  subscription OnDeleteWebCrawl($owner: String) {
    onDeleteWebCrawl(owner: $owner) {
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
export const onCreateEngineCrawl = /* GraphQL */ `
  subscription OnCreateEngineCrawl($owner: String) {
    onCreateEngineCrawl(owner: $owner) {
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
export const onUpdateEngineCrawl = /* GraphQL */ `
  subscription OnUpdateEngineCrawl($owner: String) {
    onUpdateEngineCrawl(owner: $owner) {
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
export const onDeleteEngineCrawl = /* GraphQL */ `
  subscription OnDeleteEngineCrawl($owner: String) {
    onDeleteEngineCrawl(owner: $owner) {
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
export const onCreateDomain = /* GraphQL */ `
  subscription OnCreateDomain($owner: String) {
    onCreateDomain(owner: $owner) {
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
export const onUpdateDomain = /* GraphQL */ `
  subscription OnUpdateDomain($owner: String) {
    onUpdateDomain(owner: $owner) {
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
export const onDeleteDomain = /* GraphQL */ `
  subscription OnDeleteDomain($owner: String) {
    onDeleteDomain(owner: $owner) {
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
