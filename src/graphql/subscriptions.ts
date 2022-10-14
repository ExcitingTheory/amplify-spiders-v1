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
      }
      nu {
        data
        parsed
        unstructured
      }
      lighthouse {
        data
        parsed
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
      domainID
      custom {
        data
        parsed
        unstructured
      }
      nu {
        data
        parsed
        unstructured
      }
      lighthouse {
        data
        parsed
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
      domainID
      custom {
        data
        parsed
        unstructured
      }
      nu {
        data
        parsed
        unstructured
      }
      lighthouse {
        data
        parsed
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
      search
      domainID
      postalCode
      keywordplanner {
        results {
          key
          name
          score
          websiteUrl
          address
        }
        bumpChart {
          id
          data {
            x
            y
          }
        }
        heatmapChart {
          id
          data {
            x
            y
          }
        }
        highScore
        foundWebsite
        mostLikely
        exactWebsiteMatch
        exactWebsiteMatchHttp
        exactNameMatch
        rank
      }
      citysearch {
        results {
          key
          name
          score
          websiteUrl
          address
        }
        bumpChart {
          id
          data {
            x
            y
          }
        }
        heatmapChart {
          id
          data {
            x
            y
          }
        }
        highScore
        foundWebsite
        mostLikely
        exactWebsiteMatch
        exactWebsiteMatchHttp
        exactNameMatch
        rank
      }
      google {
        results {
          key
          name
          score
          websiteUrl
          address
        }
        bumpChart {
          id
          data {
            x
            y
          }
        }
        heatmapChart {
          id
          data {
            x
            y
          }
        }
        highScore
        foundWebsite
        mostLikely
        exactWebsiteMatch
        exactWebsiteMatchHttp
        exactNameMatch
        rank
      }
      foursquare {
        results {
          key
          name
          score
          websiteUrl
          address
        }
        bumpChart {
          id
          data {
            x
            y
          }
        }
        heatmapChart {
          id
          data {
            x
            y
          }
        }
        highScore
        foundWebsite
        mostLikely
        exactWebsiteMatch
        exactWebsiteMatchHttp
        exactNameMatch
        rank
      }
      facebook {
        results {
          key
          name
          score
          websiteUrl
          address
        }
        bumpChart {
          id
          data {
            x
            y
          }
        }
        heatmapChart {
          id
          data {
            x
            y
          }
        }
        highScore
        foundWebsite
        mostLikely
        exactWebsiteMatch
        exactWebsiteMatchHttp
        exactNameMatch
        rank
      }
      yelp {
        results {
          key
          name
          score
          websiteUrl
          address
        }
        bumpChart {
          id
          data {
            x
            y
          }
        }
        heatmapChart {
          id
          data {
            x
            y
          }
        }
        highScore
        foundWebsite
        mostLikely
        exactWebsiteMatch
        exactWebsiteMatchHttp
        exactNameMatch
        rank
      }
      infogroup {
        results {
          key
          name
          score
          websiteUrl
          address
        }
        bumpChart {
          id
          data {
            x
            y
          }
        }
        heatmapChart {
          id
          data {
            x
            y
          }
        }
        highScore
        foundWebsite
        mostLikely
        exactWebsiteMatch
        exactWebsiteMatchHttp
        exactNameMatch
        rank
      }
      yellowpages {
        results {
          key
          name
          score
          websiteUrl
          address
        }
        bumpChart {
          id
          data {
            x
            y
          }
        }
        heatmapChart {
          id
          data {
            x
            y
          }
        }
        highScore
        foundWebsite
        mostLikely
        exactWebsiteMatch
        exactWebsiteMatchHttp
        exactNameMatch
        rank
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
        results {
          key
          name
          score
          websiteUrl
          address
        }
        bumpChart {
          id
          data {
            x
            y
          }
        }
        heatmapChart {
          id
          data {
            x
            y
          }
        }
        highScore
        foundWebsite
        mostLikely
        exactWebsiteMatch
        exactWebsiteMatchHttp
        exactNameMatch
        rank
      }
      citysearch {
        results {
          key
          name
          score
          websiteUrl
          address
        }
        bumpChart {
          id
          data {
            x
            y
          }
        }
        heatmapChart {
          id
          data {
            x
            y
          }
        }
        highScore
        foundWebsite
        mostLikely
        exactWebsiteMatch
        exactWebsiteMatchHttp
        exactNameMatch
        rank
      }
      google {
        results {
          key
          name
          score
          websiteUrl
          address
        }
        bumpChart {
          id
          data {
            x
            y
          }
        }
        heatmapChart {
          id
          data {
            x
            y
          }
        }
        highScore
        foundWebsite
        mostLikely
        exactWebsiteMatch
        exactWebsiteMatchHttp
        exactNameMatch
        rank
      }
      foursquare {
        results {
          key
          name
          score
          websiteUrl
          address
        }
        bumpChart {
          id
          data {
            x
            y
          }
        }
        heatmapChart {
          id
          data {
            x
            y
          }
        }
        highScore
        foundWebsite
        mostLikely
        exactWebsiteMatch
        exactWebsiteMatchHttp
        exactNameMatch
        rank
      }
      facebook {
        results {
          key
          name
          score
          websiteUrl
          address
        }
        bumpChart {
          id
          data {
            x
            y
          }
        }
        heatmapChart {
          id
          data {
            x
            y
          }
        }
        highScore
        foundWebsite
        mostLikely
        exactWebsiteMatch
        exactWebsiteMatchHttp
        exactNameMatch
        rank
      }
      yelp {
        results {
          key
          name
          score
          websiteUrl
          address
        }
        bumpChart {
          id
          data {
            x
            y
          }
        }
        heatmapChart {
          id
          data {
            x
            y
          }
        }
        highScore
        foundWebsite
        mostLikely
        exactWebsiteMatch
        exactWebsiteMatchHttp
        exactNameMatch
        rank
      }
      infogroup {
        results {
          key
          name
          score
          websiteUrl
          address
        }
        bumpChart {
          id
          data {
            x
            y
          }
        }
        heatmapChart {
          id
          data {
            x
            y
          }
        }
        highScore
        foundWebsite
        mostLikely
        exactWebsiteMatch
        exactWebsiteMatchHttp
        exactNameMatch
        rank
      }
      yellowpages {
        results {
          key
          name
          score
          websiteUrl
          address
        }
        bumpChart {
          id
          data {
            x
            y
          }
        }
        heatmapChart {
          id
          data {
            x
            y
          }
        }
        highScore
        foundWebsite
        mostLikely
        exactWebsiteMatch
        exactWebsiteMatchHttp
        exactNameMatch
        rank
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
        results {
          key
          name
          score
          websiteUrl
          address
        }
        bumpChart {
          id
          data {
            x
            y
          }
        }
        heatmapChart {
          id
          data {
            x
            y
          }
        }
        highScore
        foundWebsite
        mostLikely
        exactWebsiteMatch
        exactWebsiteMatchHttp
        exactNameMatch
        rank
      }
      citysearch {
        results {
          key
          name
          score
          websiteUrl
          address
        }
        bumpChart {
          id
          data {
            x
            y
          }
        }
        heatmapChart {
          id
          data {
            x
            y
          }
        }
        highScore
        foundWebsite
        mostLikely
        exactWebsiteMatch
        exactWebsiteMatchHttp
        exactNameMatch
        rank
      }
      google {
        results {
          key
          name
          score
          websiteUrl
          address
        }
        bumpChart {
          id
          data {
            x
            y
          }
        }
        heatmapChart {
          id
          data {
            x
            y
          }
        }
        highScore
        foundWebsite
        mostLikely
        exactWebsiteMatch
        exactWebsiteMatchHttp
        exactNameMatch
        rank
      }
      foursquare {
        results {
          key
          name
          score
          websiteUrl
          address
        }
        bumpChart {
          id
          data {
            x
            y
          }
        }
        heatmapChart {
          id
          data {
            x
            y
          }
        }
        highScore
        foundWebsite
        mostLikely
        exactWebsiteMatch
        exactWebsiteMatchHttp
        exactNameMatch
        rank
      }
      facebook {
        results {
          key
          name
          score
          websiteUrl
          address
        }
        bumpChart {
          id
          data {
            x
            y
          }
        }
        heatmapChart {
          id
          data {
            x
            y
          }
        }
        highScore
        foundWebsite
        mostLikely
        exactWebsiteMatch
        exactWebsiteMatchHttp
        exactNameMatch
        rank
      }
      yelp {
        results {
          key
          name
          score
          websiteUrl
          address
        }
        bumpChart {
          id
          data {
            x
            y
          }
        }
        heatmapChart {
          id
          data {
            x
            y
          }
        }
        highScore
        foundWebsite
        mostLikely
        exactWebsiteMatch
        exactWebsiteMatchHttp
        exactNameMatch
        rank
      }
      infogroup {
        results {
          key
          name
          score
          websiteUrl
          address
        }
        bumpChart {
          id
          data {
            x
            y
          }
        }
        heatmapChart {
          id
          data {
            x
            y
          }
        }
        highScore
        foundWebsite
        mostLikely
        exactWebsiteMatch
        exactWebsiteMatchHttp
        exactNameMatch
        rank
      }
      yellowpages {
        results {
          key
          name
          score
          websiteUrl
          address
        }
        bumpChart {
          id
          data {
            x
            y
          }
        }
        heatmapChart {
          id
          data {
            x
            y
          }
        }
        highScore
        foundWebsite
        mostLikely
        exactWebsiteMatch
        exactWebsiteMatchHttp
        exactNameMatch
        rank
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
          keywordplanner {
            results {
              key
              name
              score
              websiteUrl
              address
            }
            bumpChart {
              id
              data {
                x
                y
              }
            }
            heatmapChart {
              id
              data {
                x
                y
              }
            }
            highScore
            foundWebsite
            mostLikely
            exactWebsiteMatch
            exactWebsiteMatchHttp
            exactNameMatch
            rank
          }
          citysearch {
            results {
              key
              name
              score
              websiteUrl
              address
            }
            bumpChart {
              id
              data {
                x
                y
              }
            }
            heatmapChart {
              id
              data {
                x
                y
              }
            }
            highScore
            foundWebsite
            mostLikely
            exactWebsiteMatch
            exactWebsiteMatchHttp
            exactNameMatch
            rank
          }
          google {
            results {
              key
              name
              score
              websiteUrl
              address
            }
            bumpChart {
              id
              data {
                x
                y
              }
            }
            heatmapChart {
              id
              data {
                x
                y
              }
            }
            highScore
            foundWebsite
            mostLikely
            exactWebsiteMatch
            exactWebsiteMatchHttp
            exactNameMatch
            rank
          }
          foursquare {
            results {
              key
              name
              score
              websiteUrl
              address
            }
            bumpChart {
              id
              data {
                x
                y
              }
            }
            heatmapChart {
              id
              data {
                x
                y
              }
            }
            highScore
            foundWebsite
            mostLikely
            exactWebsiteMatch
            exactWebsiteMatchHttp
            exactNameMatch
            rank
          }
          facebook {
            results {
              key
              name
              score
              websiteUrl
              address
            }
            bumpChart {
              id
              data {
                x
                y
              }
            }
            heatmapChart {
              id
              data {
                x
                y
              }
            }
            highScore
            foundWebsite
            mostLikely
            exactWebsiteMatch
            exactWebsiteMatchHttp
            exactNameMatch
            rank
          }
          yelp {
            results {
              key
              name
              score
              websiteUrl
              address
            }
            bumpChart {
              id
              data {
                x
                y
              }
            }
            heatmapChart {
              id
              data {
                x
                y
              }
            }
            highScore
            foundWebsite
            mostLikely
            exactWebsiteMatch
            exactWebsiteMatchHttp
            exactNameMatch
            rank
          }
          infogroup {
            results {
              key
              name
              score
              websiteUrl
              address
            }
            bumpChart {
              id
              data {
                x
                y
              }
            }
            heatmapChart {
              id
              data {
                x
                y
              }
            }
            highScore
            foundWebsite
            mostLikely
            exactWebsiteMatch
            exactWebsiteMatchHttp
            exactNameMatch
            rank
          }
          yellowpages {
            results {
              key
              name
              score
              websiteUrl
              address
            }
            bumpChart {
              id
              data {
                x
                y
              }
            }
            heatmapChart {
              id
              data {
                x
                y
              }
            }
            highScore
            foundWebsite
            mostLikely
            exactWebsiteMatch
            exactWebsiteMatchHttp
            exactNameMatch
            rank
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
      WebCrawls {
        items {
          id
          url
          domainID
          custom {
            data
            parsed
            unstructured
          }
          nu {
            data
            parsed
            unstructured
          }
          lighthouse {
            data
            parsed
            unstructured
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
          keywordplanner {
            results {
              key
              name
              score
              websiteUrl
              address
            }
            bumpChart {
              id
              data {
                x
                y
              }
            }
            heatmapChart {
              id
              data {
                x
                y
              }
            }
            highScore
            foundWebsite
            mostLikely
            exactWebsiteMatch
            exactWebsiteMatchHttp
            exactNameMatch
            rank
          }
          citysearch {
            results {
              key
              name
              score
              websiteUrl
              address
            }
            bumpChart {
              id
              data {
                x
                y
              }
            }
            heatmapChart {
              id
              data {
                x
                y
              }
            }
            highScore
            foundWebsite
            mostLikely
            exactWebsiteMatch
            exactWebsiteMatchHttp
            exactNameMatch
            rank
          }
          google {
            results {
              key
              name
              score
              websiteUrl
              address
            }
            bumpChart {
              id
              data {
                x
                y
              }
            }
            heatmapChart {
              id
              data {
                x
                y
              }
            }
            highScore
            foundWebsite
            mostLikely
            exactWebsiteMatch
            exactWebsiteMatchHttp
            exactNameMatch
            rank
          }
          foursquare {
            results {
              key
              name
              score
              websiteUrl
              address
            }
            bumpChart {
              id
              data {
                x
                y
              }
            }
            heatmapChart {
              id
              data {
                x
                y
              }
            }
            highScore
            foundWebsite
            mostLikely
            exactWebsiteMatch
            exactWebsiteMatchHttp
            exactNameMatch
            rank
          }
          facebook {
            results {
              key
              name
              score
              websiteUrl
              address
            }
            bumpChart {
              id
              data {
                x
                y
              }
            }
            heatmapChart {
              id
              data {
                x
                y
              }
            }
            highScore
            foundWebsite
            mostLikely
            exactWebsiteMatch
            exactWebsiteMatchHttp
            exactNameMatch
            rank
          }
          yelp {
            results {
              key
              name
              score
              websiteUrl
              address
            }
            bumpChart {
              id
              data {
                x
                y
              }
            }
            heatmapChart {
              id
              data {
                x
                y
              }
            }
            highScore
            foundWebsite
            mostLikely
            exactWebsiteMatch
            exactWebsiteMatchHttp
            exactNameMatch
            rank
          }
          infogroup {
            results {
              key
              name
              score
              websiteUrl
              address
            }
            bumpChart {
              id
              data {
                x
                y
              }
            }
            heatmapChart {
              id
              data {
                x
                y
              }
            }
            highScore
            foundWebsite
            mostLikely
            exactWebsiteMatch
            exactWebsiteMatchHttp
            exactNameMatch
            rank
          }
          yellowpages {
            results {
              key
              name
              score
              websiteUrl
              address
            }
            bumpChart {
              id
              data {
                x
                y
              }
            }
            heatmapChart {
              id
              data {
                x
                y
              }
            }
            highScore
            foundWebsite
            mostLikely
            exactWebsiteMatch
            exactWebsiteMatchHttp
            exactNameMatch
            rank
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
      WebCrawls {
        items {
          id
          url
          domainID
          custom {
            data
            parsed
            unstructured
          }
          nu {
            data
            parsed
            unstructured
          }
          lighthouse {
            data
            parsed
            unstructured
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
          keywordplanner {
            results {
              key
              name
              score
              websiteUrl
              address
            }
            bumpChart {
              id
              data {
                x
                y
              }
            }
            heatmapChart {
              id
              data {
                x
                y
              }
            }
            highScore
            foundWebsite
            mostLikely
            exactWebsiteMatch
            exactWebsiteMatchHttp
            exactNameMatch
            rank
          }
          citysearch {
            results {
              key
              name
              score
              websiteUrl
              address
            }
            bumpChart {
              id
              data {
                x
                y
              }
            }
            heatmapChart {
              id
              data {
                x
                y
              }
            }
            highScore
            foundWebsite
            mostLikely
            exactWebsiteMatch
            exactWebsiteMatchHttp
            exactNameMatch
            rank
          }
          google {
            results {
              key
              name
              score
              websiteUrl
              address
            }
            bumpChart {
              id
              data {
                x
                y
              }
            }
            heatmapChart {
              id
              data {
                x
                y
              }
            }
            highScore
            foundWebsite
            mostLikely
            exactWebsiteMatch
            exactWebsiteMatchHttp
            exactNameMatch
            rank
          }
          foursquare {
            results {
              key
              name
              score
              websiteUrl
              address
            }
            bumpChart {
              id
              data {
                x
                y
              }
            }
            heatmapChart {
              id
              data {
                x
                y
              }
            }
            highScore
            foundWebsite
            mostLikely
            exactWebsiteMatch
            exactWebsiteMatchHttp
            exactNameMatch
            rank
          }
          facebook {
            results {
              key
              name
              score
              websiteUrl
              address
            }
            bumpChart {
              id
              data {
                x
                y
              }
            }
            heatmapChart {
              id
              data {
                x
                y
              }
            }
            highScore
            foundWebsite
            mostLikely
            exactWebsiteMatch
            exactWebsiteMatchHttp
            exactNameMatch
            rank
          }
          yelp {
            results {
              key
              name
              score
              websiteUrl
              address
            }
            bumpChart {
              id
              data {
                x
                y
              }
            }
            heatmapChart {
              id
              data {
                x
                y
              }
            }
            highScore
            foundWebsite
            mostLikely
            exactWebsiteMatch
            exactWebsiteMatchHttp
            exactNameMatch
            rank
          }
          infogroup {
            results {
              key
              name
              score
              websiteUrl
              address
            }
            bumpChart {
              id
              data {
                x
                y
              }
            }
            heatmapChart {
              id
              data {
                x
                y
              }
            }
            highScore
            foundWebsite
            mostLikely
            exactWebsiteMatch
            exactWebsiteMatchHttp
            exactNameMatch
            rank
          }
          yellowpages {
            results {
              key
              name
              score
              websiteUrl
              address
            }
            bumpChart {
              id
              data {
                x
                y
              }
            }
            heatmapChart {
              id
              data {
                x
                y
              }
            }
            highScore
            foundWebsite
            mostLikely
            exactWebsiteMatch
            exactWebsiteMatchHttp
            exactNameMatch
            rank
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
      WebCrawls {
        items {
          id
          url
          domainID
          custom {
            data
            parsed
            unstructured
          }
          nu {
            data
            parsed
            unstructured
          }
          lighthouse {
            data
            parsed
            unstructured
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
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
