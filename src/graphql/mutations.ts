/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const crawlEnginesLanguage = /* GraphQL */ `
  mutation CrawlEnginesLanguage(
    $search: String
    $postalCode: String
    $domainID: String
    $apexDomain: String
  ) {
    crawlEnginesLanguage(
      search: $search
      postalCode: $postalCode
      domainID: $domainID
      apexDomain: $apexDomain
    )
  }
`;
export const crawlEngines = /* GraphQL */ `
  mutation CrawlEngines(
    $search: String
    $postalCode: String
    $domainID: String
    $apexDomain: String
  ) {
    crawlEngines(
      search: $search
      postalCode: $postalCode
      domainID: $domainID
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
