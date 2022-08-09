import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";

export enum Webcrawlers {
  NU = "NU",
  LIGHTHOUSE = "LIGHTHOUSE",
  CUSTOM = "CUSTOM"
}

export enum Enginecrawlers {
  KEYWORD_PLANNER = "KEYWORD_PLANNER",
  GOOGLE = "GOOGLE",
  FOURSQUARE = "FOURSQUARE",
  FACEBOOK = "FACEBOOK",
  YELP = "YELP",
  INFOGROUP = "INFOGROUP",
  YELLOW_PAGES = "YELLOW_PAGES"
}

export declare class WebResult {
  readonly data?: string | null;
  readonly type?: Webcrawlers | keyof typeof Webcrawlers | null;
  readonly unstructured?: string | null;
  constructor(init: ModelInit<WebResult>);
}

export declare class EngineResult {
  readonly data?: string | null;
  readonly jsonPathToRecord?: string | null;
  readonly rank?: number | null;
  readonly totalResults?: number | null;
  readonly type?: Enginecrawlers | keyof typeof Enginecrawlers | null;
  constructor(init: ModelInit<EngineResult>);
}

type WebCrawlMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type EngineCrawlMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type DomainMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

export declare class WebCrawl {
  readonly id: string;
  readonly url?: string | null;
  readonly dateTime?: string | null;
  readonly domainID: string;
  readonly custom?: WebResult | null;
  readonly nu?: WebResult | null;
  readonly lighthouse?: WebResult | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<WebCrawl, WebCrawlMetaData>);
  static copyOf(source: WebCrawl, mutator: (draft: MutableModel<WebCrawl, WebCrawlMetaData>) => MutableModel<WebCrawl, WebCrawlMetaData> | void): WebCrawl;
}

export declare class EngineCrawl {
  readonly id: string;
  readonly dateTime?: string | null;
  readonly search?: string | null;
  readonly domainID: string;
  readonly zipCode?: string | null;
  readonly keywordPlanner?: EngineResult | null;
  readonly google?: EngineResult | null;
  readonly foursquare?: EngineResult | null;
  readonly facebook?: EngineResult | null;
  readonly yelp?: EngineResult | null;
  readonly infogroup?: EngineResult | null;
  readonly yellowPages?: EngineResult | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<EngineCrawl, EngineCrawlMetaData>);
  static copyOf(source: EngineCrawl, mutator: (draft: MutableModel<EngineCrawl, EngineCrawlMetaData>) => MutableModel<EngineCrawl, EngineCrawlMetaData> | void): EngineCrawl;
}

export declare class Domain {
  readonly id: string;
  readonly name?: string | null;
  readonly EngineCrawls?: (EngineCrawl | null)[] | null;
  readonly WebCrawls?: (EngineCrawl | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<Domain, DomainMetaData>);
  static copyOf(source: Domain, mutator: (draft: MutableModel<Domain, DomainMetaData>) => MutableModel<Domain, DomainMetaData> | void): Domain;
}