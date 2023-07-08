import { ModelInit, MutableModel } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled, AsyncCollection } from "@aws-amplify/datastore";

type EagerWebResult = {
  readonly data?: string | null;
  readonly parsed?: string | null;
  readonly unstructured?: string | null;
}

type LazyWebResult = {
  readonly data?: string | null;
  readonly parsed?: string | null;
  readonly unstructured?: string | null;
}

export declare type WebResult = LazyLoading extends LazyLoadingDisabled ? EagerWebResult : LazyWebResult

export declare const WebResult: (new (init: ModelInit<WebResult>) => WebResult)

type EagerParsedEngineResult = {
  readonly key?: number | null;
  readonly name?: string | null;
  readonly score?: number | null;
  readonly websiteUrl?: string | null;
  readonly address?: string | null;
}

type LazyParsedEngineResult = {
  readonly key?: number | null;
  readonly name?: string | null;
  readonly score?: number | null;
  readonly websiteUrl?: string | null;
  readonly address?: string | null;
}

export declare type ParsedEngineResult = LazyLoading extends LazyLoadingDisabled ? EagerParsedEngineResult : LazyParsedEngineResult

export declare const ParsedEngineResult: (new (init: ModelInit<ParsedEngineResult>) => ParsedEngineResult)

type EagerCoordinate = {
  readonly x?: string | null;
  readonly y?: number | null;
}

type LazyCoordinate = {
  readonly x?: string | null;
  readonly y?: number | null;
}

export declare type Coordinate = LazyLoading extends LazyLoadingDisabled ? EagerCoordinate : LazyCoordinate

export declare const Coordinate: (new (init: ModelInit<Coordinate>) => Coordinate)

type EagerChart = {
  readonly id?: string | null;
  readonly data?: (Coordinate | null)[] | null;
}

type LazyChart = {
  readonly id?: string | null;
  readonly data?: (Coordinate | null)[] | null;
}

export declare type Chart = LazyLoading extends LazyLoadingDisabled ? EagerChart : LazyChart

export declare const Chart: (new (init: ModelInit<Chart>) => Chart)

type EagerEngineResult = {
  readonly results?: (ParsedEngineResult | null)[] | null;
  readonly bumpChart?: (Chart | null)[] | null;
  readonly heatmapChart?: (Chart | null)[] | null;
  readonly highScore?: number | null;
  readonly foundWebsite?: boolean | null;
  readonly mostLikely?: number | null;
  readonly exactWebsiteMatch?: number | null;
  readonly exactWebsiteMatchHttp?: number | null;
  readonly exactNameMatch?: number | null;
  readonly rank?: number | null;
}

type LazyEngineResult = {
  readonly results?: (ParsedEngineResult | null)[] | null;
  readonly bumpChart?: (Chart | null)[] | null;
  readonly heatmapChart?: (Chart | null)[] | null;
  readonly highScore?: number | null;
  readonly foundWebsite?: boolean | null;
  readonly mostLikely?: number | null;
  readonly exactWebsiteMatch?: number | null;
  readonly exactWebsiteMatchHttp?: number | null;
  readonly exactNameMatch?: number | null;
  readonly rank?: number | null;
}

export declare type EngineResult = LazyLoading extends LazyLoadingDisabled ? EagerEngineResult : LazyEngineResult

export declare const EngineResult: (new (init: ModelInit<EngineResult>) => EngineResult)

type WebCrawlMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type EngineCrawlMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type DomainMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type EagerWebCrawl = {
  readonly id: string;
  readonly url?: string | null;
  readonly domainID: string;
  readonly custom?: WebResult | null;
  readonly nu?: WebResult | null;
  readonly lighthouse?: WebResult | null;
  readonly owner?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyWebCrawl = {
  readonly id: string;
  readonly url?: string | null;
  readonly domainID: string;
  readonly custom?: WebResult | null;
  readonly nu?: WebResult | null;
  readonly lighthouse?: WebResult | null;
  readonly owner?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type WebCrawl = LazyLoading extends LazyLoadingDisabled ? EagerWebCrawl : LazyWebCrawl

export declare const WebCrawl: (new (init: ModelInit<WebCrawl, WebCrawlMetaData>) => WebCrawl) & {
  copyOf(source: WebCrawl, mutator: (draft: MutableModel<WebCrawl, WebCrawlMetaData>) => MutableModel<WebCrawl, WebCrawlMetaData> | void): WebCrawl;
}

type EagerEngineCrawl = {
  readonly id: string;
  readonly search?: string | null;
  readonly domainID: string;
  readonly postalCode?: string | null;
  readonly keywordplanner?: EngineResult | null;
  readonly citysearch?: EngineResult | null;
  readonly google?: EngineResult | null;
  readonly foursquare?: EngineResult | null;
  readonly facebook?: EngineResult | null;
  readonly yelp?: EngineResult | null;
  readonly infogroup?: EngineResult | null;
  readonly yellowpages?: EngineResult | null;
  readonly owner?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyEngineCrawl = {
  readonly id: string;
  readonly search?: string | null;
  readonly domainID: string;
  readonly postalCode?: string | null;
  readonly keywordplanner?: EngineResult | null;
  readonly citysearch?: EngineResult | null;
  readonly google?: EngineResult | null;
  readonly foursquare?: EngineResult | null;
  readonly facebook?: EngineResult | null;
  readonly yelp?: EngineResult | null;
  readonly infogroup?: EngineResult | null;
  readonly yellowpages?: EngineResult | null;
  readonly owner?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type EngineCrawl = LazyLoading extends LazyLoadingDisabled ? EagerEngineCrawl : LazyEngineCrawl

export declare const EngineCrawl: (new (init: ModelInit<EngineCrawl, EngineCrawlMetaData>) => EngineCrawl) & {
  copyOf(source: EngineCrawl, mutator: (draft: MutableModel<EngineCrawl, EngineCrawlMetaData>) => MutableModel<EngineCrawl, EngineCrawlMetaData> | void): EngineCrawl;
}

type EagerDomain = {
  readonly id: string;
  readonly name?: string | null;
  readonly owner?: string | null;
  readonly EngineCrawls?: (EngineCrawl | null)[] | null;
  readonly WebCrawls?: (WebCrawl | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyDomain = {
  readonly id: string;
  readonly name?: string | null;
  readonly owner?: string | null;
  readonly EngineCrawls: AsyncCollection<EngineCrawl>;
  readonly WebCrawls: AsyncCollection<WebCrawl>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Domain = LazyLoading extends LazyLoadingDisabled ? EagerDomain : LazyDomain

export declare const Domain: (new (init: ModelInit<Domain, DomainMetaData>) => Domain) & {
  copyOf(source: Domain, mutator: (draft: MutableModel<Domain, DomainMetaData>) => MutableModel<Domain, DomainMetaData> | void): Domain;
}