/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateWebCrawlInput = {
  id?: string | null,
  url?: string | null,
  dateTime?: string | null,
  domainID: string,
  custom?: WebResultInput | null,
  nu?: WebResultInput | null,
  lighthouse?: WebResultInput | null,
  owner?: string | null,
  _version?: number | null,
};

export type WebResultInput = {
  data?: string | null,
  type?: WEBCRAWLERS | null,
  unstructured?: string | null,
};

export enum WEBCRAWLERS {
  NU = "NU",
  LIGHTHOUSE = "LIGHTHOUSE",
  CUSTOM = "CUSTOM",
}


export type ModelWebCrawlConditionInput = {
  url?: ModelStringInput | null,
  dateTime?: ModelStringInput | null,
  domainID?: ModelIDInput | null,
  owner?: ModelStringInput | null,
  and?: Array< ModelWebCrawlConditionInput | null > | null,
  or?: Array< ModelWebCrawlConditionInput | null > | null,
  not?: ModelWebCrawlConditionInput | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type WebCrawl = {
  __typename: "WebCrawl",
  id: string,
  url?: string | null,
  dateTime?: string | null,
  domainID: string,
  custom?: WebResult | null,
  nu?: WebResult | null,
  lighthouse?: WebResult | null,
  owner?: string | null,
  createdAt: string,
  updatedAt: string,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
};

export type WebResult = {
  __typename: "WebResult",
  data?: string | null,
  type?: WEBCRAWLERS | null,
  unstructured?: string | null,
};

export type UpdateWebCrawlInput = {
  id: string,
  url?: string | null,
  dateTime?: string | null,
  domainID?: string | null,
  custom?: WebResultInput | null,
  nu?: WebResultInput | null,
  lighthouse?: WebResultInput | null,
  owner?: string | null,
  _version?: number | null,
};

export type DeleteWebCrawlInput = {
  id: string,
  _version?: number | null,
};

export type CreateEngineCrawlInput = {
  id?: string | null,
  dateTime?: string | null,
  search?: string | null,
  domainID: string,
  zipCode?: string | null,
  keywordPlanner?: EngineResultInput | null,
  google?: EngineResultInput | null,
  foursquare?: EngineResultInput | null,
  facebook?: EngineResultInput | null,
  yelp?: EngineResultInput | null,
  infogroup?: EngineResultInput | null,
  yellowPages?: EngineResultInput | null,
  owner?: string | null,
  _version?: number | null,
};

export type EngineResultInput = {
  data?: string | null,
  jsonPathToRecord?: string | null,
  rank?: number | null,
  totalResults?: number | null,
  type?: ENGINECRAWLERS | null,
};

export enum ENGINECRAWLERS {
  KEYWORD_PLANNER = "KEYWORD_PLANNER",
  GOOGLE = "GOOGLE",
  FOURSQUARE = "FOURSQUARE",
  FACEBOOK = "FACEBOOK",
  YELP = "YELP",
  INFOGROUP = "INFOGROUP",
  YELLOW_PAGES = "YELLOW_PAGES",
}


export type ModelEngineCrawlConditionInput = {
  dateTime?: ModelStringInput | null,
  search?: ModelStringInput | null,
  domainID?: ModelIDInput | null,
  zipCode?: ModelStringInput | null,
  owner?: ModelStringInput | null,
  and?: Array< ModelEngineCrawlConditionInput | null > | null,
  or?: Array< ModelEngineCrawlConditionInput | null > | null,
  not?: ModelEngineCrawlConditionInput | null,
};

export type EngineCrawl = {
  __typename: "EngineCrawl",
  id: string,
  dateTime?: string | null,
  search?: string | null,
  domainID: string,
  zipCode?: string | null,
  keywordPlanner?: EngineResult | null,
  google?: EngineResult | null,
  foursquare?: EngineResult | null,
  facebook?: EngineResult | null,
  yelp?: EngineResult | null,
  infogroup?: EngineResult | null,
  yellowPages?: EngineResult | null,
  owner?: string | null,
  createdAt: string,
  updatedAt: string,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
};

export type EngineResult = {
  __typename: "EngineResult",
  data?: string | null,
  jsonPathToRecord?: string | null,
  rank?: number | null,
  totalResults?: number | null,
  type?: ENGINECRAWLERS | null,
};

export type UpdateEngineCrawlInput = {
  id: string,
  dateTime?: string | null,
  search?: string | null,
  domainID?: string | null,
  zipCode?: string | null,
  keywordPlanner?: EngineResultInput | null,
  google?: EngineResultInput | null,
  foursquare?: EngineResultInput | null,
  facebook?: EngineResultInput | null,
  yelp?: EngineResultInput | null,
  infogroup?: EngineResultInput | null,
  yellowPages?: EngineResultInput | null,
  owner?: string | null,
  _version?: number | null,
};

export type DeleteEngineCrawlInput = {
  id: string,
  _version?: number | null,
};

export type CreateDomainInput = {
  id?: string | null,
  name?: string | null,
  owner?: string | null,
  _version?: number | null,
};

export type ModelDomainConditionInput = {
  name?: ModelStringInput | null,
  owner?: ModelStringInput | null,
  and?: Array< ModelDomainConditionInput | null > | null,
  or?: Array< ModelDomainConditionInput | null > | null,
  not?: ModelDomainConditionInput | null,
};

export type Domain = {
  __typename: "Domain",
  id: string,
  name?: string | null,
  owner?: string | null,
  EngineCrawls?: ModelEngineCrawlConnection | null,
  WebCrawls?: ModelWebCrawlConnection | null,
  createdAt: string,
  updatedAt: string,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
};

export type ModelEngineCrawlConnection = {
  __typename: "ModelEngineCrawlConnection",
  items:  Array<EngineCrawl | null >,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type ModelWebCrawlConnection = {
  __typename: "ModelWebCrawlConnection",
  items:  Array<WebCrawl | null >,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type UpdateDomainInput = {
  id: string,
  name?: string | null,
  owner?: string | null,
  _version?: number | null,
};

export type DeleteDomainInput = {
  id: string,
  _version?: number | null,
};

export type ModelWebCrawlFilterInput = {
  id?: ModelIDInput | null,
  url?: ModelStringInput | null,
  dateTime?: ModelStringInput | null,
  domainID?: ModelIDInput | null,
  owner?: ModelStringInput | null,
  and?: Array< ModelWebCrawlFilterInput | null > | null,
  or?: Array< ModelWebCrawlFilterInput | null > | null,
  not?: ModelWebCrawlFilterInput | null,
};

export type ModelEngineCrawlFilterInput = {
  id?: ModelIDInput | null,
  dateTime?: ModelStringInput | null,
  search?: ModelStringInput | null,
  domainID?: ModelIDInput | null,
  zipCode?: ModelStringInput | null,
  owner?: ModelStringInput | null,
  and?: Array< ModelEngineCrawlFilterInput | null > | null,
  or?: Array< ModelEngineCrawlFilterInput | null > | null,
  not?: ModelEngineCrawlFilterInput | null,
};

export type ModelDomainFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  owner?: ModelStringInput | null,
  and?: Array< ModelDomainFilterInput | null > | null,
  or?: Array< ModelDomainFilterInput | null > | null,
  not?: ModelDomainFilterInput | null,
};

export type ModelDomainConnection = {
  __typename: "ModelDomainConnection",
  items:  Array<Domain | null >,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type CrawlEnginesMutationVariables = {
  search?: string | null,
  postalCode?: string | null,
};

export type CrawlEnginesMutation = {
  crawlEngines?: string | null,
};

export type CrawlKeywordsMutationVariables = {
  search?: string | null,
  url?: string | null,
};

export type CrawlKeywordsMutation = {
  crawlKeywords?: string | null,
};

export type CrawlWebsMutationVariables = {
  url?: string | null,
};

export type CrawlWebsMutation = {
  crawlWebs?: string | null,
};

export type CreateWebCrawlMutationVariables = {
  input: CreateWebCrawlInput,
  condition?: ModelWebCrawlConditionInput | null,
};

export type CreateWebCrawlMutation = {
  createWebCrawl?:  {
    __typename: "WebCrawl",
    id: string,
    url?: string | null,
    dateTime?: string | null,
    domainID: string,
    custom?:  {
      __typename: "WebResult",
      data?: string | null,
      type?: WEBCRAWLERS | null,
      unstructured?: string | null,
    } | null,
    nu?:  {
      __typename: "WebResult",
      data?: string | null,
      type?: WEBCRAWLERS | null,
      unstructured?: string | null,
    } | null,
    lighthouse?:  {
      __typename: "WebResult",
      data?: string | null,
      type?: WEBCRAWLERS | null,
      unstructured?: string | null,
    } | null,
    owner?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type UpdateWebCrawlMutationVariables = {
  input: UpdateWebCrawlInput,
  condition?: ModelWebCrawlConditionInput | null,
};

export type UpdateWebCrawlMutation = {
  updateWebCrawl?:  {
    __typename: "WebCrawl",
    id: string,
    url?: string | null,
    dateTime?: string | null,
    domainID: string,
    custom?:  {
      __typename: "WebResult",
      data?: string | null,
      type?: WEBCRAWLERS | null,
      unstructured?: string | null,
    } | null,
    nu?:  {
      __typename: "WebResult",
      data?: string | null,
      type?: WEBCRAWLERS | null,
      unstructured?: string | null,
    } | null,
    lighthouse?:  {
      __typename: "WebResult",
      data?: string | null,
      type?: WEBCRAWLERS | null,
      unstructured?: string | null,
    } | null,
    owner?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type DeleteWebCrawlMutationVariables = {
  input: DeleteWebCrawlInput,
  condition?: ModelWebCrawlConditionInput | null,
};

export type DeleteWebCrawlMutation = {
  deleteWebCrawl?:  {
    __typename: "WebCrawl",
    id: string,
    url?: string | null,
    dateTime?: string | null,
    domainID: string,
    custom?:  {
      __typename: "WebResult",
      data?: string | null,
      type?: WEBCRAWLERS | null,
      unstructured?: string | null,
    } | null,
    nu?:  {
      __typename: "WebResult",
      data?: string | null,
      type?: WEBCRAWLERS | null,
      unstructured?: string | null,
    } | null,
    lighthouse?:  {
      __typename: "WebResult",
      data?: string | null,
      type?: WEBCRAWLERS | null,
      unstructured?: string | null,
    } | null,
    owner?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type CreateEngineCrawlMutationVariables = {
  input: CreateEngineCrawlInput,
  condition?: ModelEngineCrawlConditionInput | null,
};

export type CreateEngineCrawlMutation = {
  createEngineCrawl?:  {
    __typename: "EngineCrawl",
    id: string,
    dateTime?: string | null,
    search?: string | null,
    domainID: string,
    zipCode?: string | null,
    keywordPlanner?:  {
      __typename: "EngineResult",
      data?: string | null,
      jsonPathToRecord?: string | null,
      rank?: number | null,
      totalResults?: number | null,
      type?: ENGINECRAWLERS | null,
    } | null,
    google?:  {
      __typename: "EngineResult",
      data?: string | null,
      jsonPathToRecord?: string | null,
      rank?: number | null,
      totalResults?: number | null,
      type?: ENGINECRAWLERS | null,
    } | null,
    foursquare?:  {
      __typename: "EngineResult",
      data?: string | null,
      jsonPathToRecord?: string | null,
      rank?: number | null,
      totalResults?: number | null,
      type?: ENGINECRAWLERS | null,
    } | null,
    facebook?:  {
      __typename: "EngineResult",
      data?: string | null,
      jsonPathToRecord?: string | null,
      rank?: number | null,
      totalResults?: number | null,
      type?: ENGINECRAWLERS | null,
    } | null,
    yelp?:  {
      __typename: "EngineResult",
      data?: string | null,
      jsonPathToRecord?: string | null,
      rank?: number | null,
      totalResults?: number | null,
      type?: ENGINECRAWLERS | null,
    } | null,
    infogroup?:  {
      __typename: "EngineResult",
      data?: string | null,
      jsonPathToRecord?: string | null,
      rank?: number | null,
      totalResults?: number | null,
      type?: ENGINECRAWLERS | null,
    } | null,
    yellowPages?:  {
      __typename: "EngineResult",
      data?: string | null,
      jsonPathToRecord?: string | null,
      rank?: number | null,
      totalResults?: number | null,
      type?: ENGINECRAWLERS | null,
    } | null,
    owner?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type UpdateEngineCrawlMutationVariables = {
  input: UpdateEngineCrawlInput,
  condition?: ModelEngineCrawlConditionInput | null,
};

export type UpdateEngineCrawlMutation = {
  updateEngineCrawl?:  {
    __typename: "EngineCrawl",
    id: string,
    dateTime?: string | null,
    search?: string | null,
    domainID: string,
    zipCode?: string | null,
    keywordPlanner?:  {
      __typename: "EngineResult",
      data?: string | null,
      jsonPathToRecord?: string | null,
      rank?: number | null,
      totalResults?: number | null,
      type?: ENGINECRAWLERS | null,
    } | null,
    google?:  {
      __typename: "EngineResult",
      data?: string | null,
      jsonPathToRecord?: string | null,
      rank?: number | null,
      totalResults?: number | null,
      type?: ENGINECRAWLERS | null,
    } | null,
    foursquare?:  {
      __typename: "EngineResult",
      data?: string | null,
      jsonPathToRecord?: string | null,
      rank?: number | null,
      totalResults?: number | null,
      type?: ENGINECRAWLERS | null,
    } | null,
    facebook?:  {
      __typename: "EngineResult",
      data?: string | null,
      jsonPathToRecord?: string | null,
      rank?: number | null,
      totalResults?: number | null,
      type?: ENGINECRAWLERS | null,
    } | null,
    yelp?:  {
      __typename: "EngineResult",
      data?: string | null,
      jsonPathToRecord?: string | null,
      rank?: number | null,
      totalResults?: number | null,
      type?: ENGINECRAWLERS | null,
    } | null,
    infogroup?:  {
      __typename: "EngineResult",
      data?: string | null,
      jsonPathToRecord?: string | null,
      rank?: number | null,
      totalResults?: number | null,
      type?: ENGINECRAWLERS | null,
    } | null,
    yellowPages?:  {
      __typename: "EngineResult",
      data?: string | null,
      jsonPathToRecord?: string | null,
      rank?: number | null,
      totalResults?: number | null,
      type?: ENGINECRAWLERS | null,
    } | null,
    owner?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type DeleteEngineCrawlMutationVariables = {
  input: DeleteEngineCrawlInput,
  condition?: ModelEngineCrawlConditionInput | null,
};

export type DeleteEngineCrawlMutation = {
  deleteEngineCrawl?:  {
    __typename: "EngineCrawl",
    id: string,
    dateTime?: string | null,
    search?: string | null,
    domainID: string,
    zipCode?: string | null,
    keywordPlanner?:  {
      __typename: "EngineResult",
      data?: string | null,
      jsonPathToRecord?: string | null,
      rank?: number | null,
      totalResults?: number | null,
      type?: ENGINECRAWLERS | null,
    } | null,
    google?:  {
      __typename: "EngineResult",
      data?: string | null,
      jsonPathToRecord?: string | null,
      rank?: number | null,
      totalResults?: number | null,
      type?: ENGINECRAWLERS | null,
    } | null,
    foursquare?:  {
      __typename: "EngineResult",
      data?: string | null,
      jsonPathToRecord?: string | null,
      rank?: number | null,
      totalResults?: number | null,
      type?: ENGINECRAWLERS | null,
    } | null,
    facebook?:  {
      __typename: "EngineResult",
      data?: string | null,
      jsonPathToRecord?: string | null,
      rank?: number | null,
      totalResults?: number | null,
      type?: ENGINECRAWLERS | null,
    } | null,
    yelp?:  {
      __typename: "EngineResult",
      data?: string | null,
      jsonPathToRecord?: string | null,
      rank?: number | null,
      totalResults?: number | null,
      type?: ENGINECRAWLERS | null,
    } | null,
    infogroup?:  {
      __typename: "EngineResult",
      data?: string | null,
      jsonPathToRecord?: string | null,
      rank?: number | null,
      totalResults?: number | null,
      type?: ENGINECRAWLERS | null,
    } | null,
    yellowPages?:  {
      __typename: "EngineResult",
      data?: string | null,
      jsonPathToRecord?: string | null,
      rank?: number | null,
      totalResults?: number | null,
      type?: ENGINECRAWLERS | null,
    } | null,
    owner?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type CreateDomainMutationVariables = {
  input: CreateDomainInput,
  condition?: ModelDomainConditionInput | null,
};

export type CreateDomainMutation = {
  createDomain?:  {
    __typename: "Domain",
    id: string,
    name?: string | null,
    owner?: string | null,
    EngineCrawls?:  {
      __typename: "ModelEngineCrawlConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    WebCrawls?:  {
      __typename: "ModelWebCrawlConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type UpdateDomainMutationVariables = {
  input: UpdateDomainInput,
  condition?: ModelDomainConditionInput | null,
};

export type UpdateDomainMutation = {
  updateDomain?:  {
    __typename: "Domain",
    id: string,
    name?: string | null,
    owner?: string | null,
    EngineCrawls?:  {
      __typename: "ModelEngineCrawlConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    WebCrawls?:  {
      __typename: "ModelWebCrawlConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type DeleteDomainMutationVariables = {
  input: DeleteDomainInput,
  condition?: ModelDomainConditionInput | null,
};

export type DeleteDomainMutation = {
  deleteDomain?:  {
    __typename: "Domain",
    id: string,
    name?: string | null,
    owner?: string | null,
    EngineCrawls?:  {
      __typename: "ModelEngineCrawlConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    WebCrawls?:  {
      __typename: "ModelWebCrawlConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type GetWebCrawlQueryVariables = {
  id: string,
};

export type GetWebCrawlQuery = {
  getWebCrawl?:  {
    __typename: "WebCrawl",
    id: string,
    url?: string | null,
    dateTime?: string | null,
    domainID: string,
    custom?:  {
      __typename: "WebResult",
      data?: string | null,
      type?: WEBCRAWLERS | null,
      unstructured?: string | null,
    } | null,
    nu?:  {
      __typename: "WebResult",
      data?: string | null,
      type?: WEBCRAWLERS | null,
      unstructured?: string | null,
    } | null,
    lighthouse?:  {
      __typename: "WebResult",
      data?: string | null,
      type?: WEBCRAWLERS | null,
      unstructured?: string | null,
    } | null,
    owner?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type ListWebCrawlsQueryVariables = {
  filter?: ModelWebCrawlFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListWebCrawlsQuery = {
  listWebCrawls?:  {
    __typename: "ModelWebCrawlConnection",
    items:  Array< {
      __typename: "WebCrawl",
      id: string,
      url?: string | null,
      dateTime?: string | null,
      domainID: string,
      owner?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type SyncWebCrawlsQueryVariables = {
  filter?: ModelWebCrawlFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncWebCrawlsQuery = {
  syncWebCrawls?:  {
    __typename: "ModelWebCrawlConnection",
    items:  Array< {
      __typename: "WebCrawl",
      id: string,
      url?: string | null,
      dateTime?: string | null,
      domainID: string,
      owner?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type GetEngineCrawlQueryVariables = {
  id: string,
};

export type GetEngineCrawlQuery = {
  getEngineCrawl?:  {
    __typename: "EngineCrawl",
    id: string,
    dateTime?: string | null,
    search?: string | null,
    domainID: string,
    zipCode?: string | null,
    keywordPlanner?:  {
      __typename: "EngineResult",
      data?: string | null,
      jsonPathToRecord?: string | null,
      rank?: number | null,
      totalResults?: number | null,
      type?: ENGINECRAWLERS | null,
    } | null,
    google?:  {
      __typename: "EngineResult",
      data?: string | null,
      jsonPathToRecord?: string | null,
      rank?: number | null,
      totalResults?: number | null,
      type?: ENGINECRAWLERS | null,
    } | null,
    foursquare?:  {
      __typename: "EngineResult",
      data?: string | null,
      jsonPathToRecord?: string | null,
      rank?: number | null,
      totalResults?: number | null,
      type?: ENGINECRAWLERS | null,
    } | null,
    facebook?:  {
      __typename: "EngineResult",
      data?: string | null,
      jsonPathToRecord?: string | null,
      rank?: number | null,
      totalResults?: number | null,
      type?: ENGINECRAWLERS | null,
    } | null,
    yelp?:  {
      __typename: "EngineResult",
      data?: string | null,
      jsonPathToRecord?: string | null,
      rank?: number | null,
      totalResults?: number | null,
      type?: ENGINECRAWLERS | null,
    } | null,
    infogroup?:  {
      __typename: "EngineResult",
      data?: string | null,
      jsonPathToRecord?: string | null,
      rank?: number | null,
      totalResults?: number | null,
      type?: ENGINECRAWLERS | null,
    } | null,
    yellowPages?:  {
      __typename: "EngineResult",
      data?: string | null,
      jsonPathToRecord?: string | null,
      rank?: number | null,
      totalResults?: number | null,
      type?: ENGINECRAWLERS | null,
    } | null,
    owner?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type ListEngineCrawlsQueryVariables = {
  filter?: ModelEngineCrawlFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListEngineCrawlsQuery = {
  listEngineCrawls?:  {
    __typename: "ModelEngineCrawlConnection",
    items:  Array< {
      __typename: "EngineCrawl",
      id: string,
      dateTime?: string | null,
      search?: string | null,
      domainID: string,
      zipCode?: string | null,
      owner?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type SyncEngineCrawlsQueryVariables = {
  filter?: ModelEngineCrawlFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncEngineCrawlsQuery = {
  syncEngineCrawls?:  {
    __typename: "ModelEngineCrawlConnection",
    items:  Array< {
      __typename: "EngineCrawl",
      id: string,
      dateTime?: string | null,
      search?: string | null,
      domainID: string,
      zipCode?: string | null,
      owner?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type GetDomainQueryVariables = {
  id: string,
};

export type GetDomainQuery = {
  getDomain?:  {
    __typename: "Domain",
    id: string,
    name?: string | null,
    owner?: string | null,
    EngineCrawls?:  {
      __typename: "ModelEngineCrawlConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    WebCrawls?:  {
      __typename: "ModelWebCrawlConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type ListDomainsQueryVariables = {
  filter?: ModelDomainFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListDomainsQuery = {
  listDomains?:  {
    __typename: "ModelDomainConnection",
    items:  Array< {
      __typename: "Domain",
      id: string,
      name?: string | null,
      owner?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type SyncDomainsQueryVariables = {
  filter?: ModelDomainFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncDomainsQuery = {
  syncDomains?:  {
    __typename: "ModelDomainConnection",
    items:  Array< {
      __typename: "Domain",
      id: string,
      name?: string | null,
      owner?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type OnCreateWebCrawlSubscriptionVariables = {
  owner?: string | null,
};

export type OnCreateWebCrawlSubscription = {
  onCreateWebCrawl?:  {
    __typename: "WebCrawl",
    id: string,
    url?: string | null,
    dateTime?: string | null,
    domainID: string,
    custom?:  {
      __typename: "WebResult",
      data?: string | null,
      type?: WEBCRAWLERS | null,
      unstructured?: string | null,
    } | null,
    nu?:  {
      __typename: "WebResult",
      data?: string | null,
      type?: WEBCRAWLERS | null,
      unstructured?: string | null,
    } | null,
    lighthouse?:  {
      __typename: "WebResult",
      data?: string | null,
      type?: WEBCRAWLERS | null,
      unstructured?: string | null,
    } | null,
    owner?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnUpdateWebCrawlSubscriptionVariables = {
  owner?: string | null,
};

export type OnUpdateWebCrawlSubscription = {
  onUpdateWebCrawl?:  {
    __typename: "WebCrawl",
    id: string,
    url?: string | null,
    dateTime?: string | null,
    domainID: string,
    custom?:  {
      __typename: "WebResult",
      data?: string | null,
      type?: WEBCRAWLERS | null,
      unstructured?: string | null,
    } | null,
    nu?:  {
      __typename: "WebResult",
      data?: string | null,
      type?: WEBCRAWLERS | null,
      unstructured?: string | null,
    } | null,
    lighthouse?:  {
      __typename: "WebResult",
      data?: string | null,
      type?: WEBCRAWLERS | null,
      unstructured?: string | null,
    } | null,
    owner?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnDeleteWebCrawlSubscriptionVariables = {
  owner?: string | null,
};

export type OnDeleteWebCrawlSubscription = {
  onDeleteWebCrawl?:  {
    __typename: "WebCrawl",
    id: string,
    url?: string | null,
    dateTime?: string | null,
    domainID: string,
    custom?:  {
      __typename: "WebResult",
      data?: string | null,
      type?: WEBCRAWLERS | null,
      unstructured?: string | null,
    } | null,
    nu?:  {
      __typename: "WebResult",
      data?: string | null,
      type?: WEBCRAWLERS | null,
      unstructured?: string | null,
    } | null,
    lighthouse?:  {
      __typename: "WebResult",
      data?: string | null,
      type?: WEBCRAWLERS | null,
      unstructured?: string | null,
    } | null,
    owner?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnCreateEngineCrawlSubscriptionVariables = {
  owner?: string | null,
};

export type OnCreateEngineCrawlSubscription = {
  onCreateEngineCrawl?:  {
    __typename: "EngineCrawl",
    id: string,
    dateTime?: string | null,
    search?: string | null,
    domainID: string,
    zipCode?: string | null,
    keywordPlanner?:  {
      __typename: "EngineResult",
      data?: string | null,
      jsonPathToRecord?: string | null,
      rank?: number | null,
      totalResults?: number | null,
      type?: ENGINECRAWLERS | null,
    } | null,
    google?:  {
      __typename: "EngineResult",
      data?: string | null,
      jsonPathToRecord?: string | null,
      rank?: number | null,
      totalResults?: number | null,
      type?: ENGINECRAWLERS | null,
    } | null,
    foursquare?:  {
      __typename: "EngineResult",
      data?: string | null,
      jsonPathToRecord?: string | null,
      rank?: number | null,
      totalResults?: number | null,
      type?: ENGINECRAWLERS | null,
    } | null,
    facebook?:  {
      __typename: "EngineResult",
      data?: string | null,
      jsonPathToRecord?: string | null,
      rank?: number | null,
      totalResults?: number | null,
      type?: ENGINECRAWLERS | null,
    } | null,
    yelp?:  {
      __typename: "EngineResult",
      data?: string | null,
      jsonPathToRecord?: string | null,
      rank?: number | null,
      totalResults?: number | null,
      type?: ENGINECRAWLERS | null,
    } | null,
    infogroup?:  {
      __typename: "EngineResult",
      data?: string | null,
      jsonPathToRecord?: string | null,
      rank?: number | null,
      totalResults?: number | null,
      type?: ENGINECRAWLERS | null,
    } | null,
    yellowPages?:  {
      __typename: "EngineResult",
      data?: string | null,
      jsonPathToRecord?: string | null,
      rank?: number | null,
      totalResults?: number | null,
      type?: ENGINECRAWLERS | null,
    } | null,
    owner?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnUpdateEngineCrawlSubscriptionVariables = {
  owner?: string | null,
};

export type OnUpdateEngineCrawlSubscription = {
  onUpdateEngineCrawl?:  {
    __typename: "EngineCrawl",
    id: string,
    dateTime?: string | null,
    search?: string | null,
    domainID: string,
    zipCode?: string | null,
    keywordPlanner?:  {
      __typename: "EngineResult",
      data?: string | null,
      jsonPathToRecord?: string | null,
      rank?: number | null,
      totalResults?: number | null,
      type?: ENGINECRAWLERS | null,
    } | null,
    google?:  {
      __typename: "EngineResult",
      data?: string | null,
      jsonPathToRecord?: string | null,
      rank?: number | null,
      totalResults?: number | null,
      type?: ENGINECRAWLERS | null,
    } | null,
    foursquare?:  {
      __typename: "EngineResult",
      data?: string | null,
      jsonPathToRecord?: string | null,
      rank?: number | null,
      totalResults?: number | null,
      type?: ENGINECRAWLERS | null,
    } | null,
    facebook?:  {
      __typename: "EngineResult",
      data?: string | null,
      jsonPathToRecord?: string | null,
      rank?: number | null,
      totalResults?: number | null,
      type?: ENGINECRAWLERS | null,
    } | null,
    yelp?:  {
      __typename: "EngineResult",
      data?: string | null,
      jsonPathToRecord?: string | null,
      rank?: number | null,
      totalResults?: number | null,
      type?: ENGINECRAWLERS | null,
    } | null,
    infogroup?:  {
      __typename: "EngineResult",
      data?: string | null,
      jsonPathToRecord?: string | null,
      rank?: number | null,
      totalResults?: number | null,
      type?: ENGINECRAWLERS | null,
    } | null,
    yellowPages?:  {
      __typename: "EngineResult",
      data?: string | null,
      jsonPathToRecord?: string | null,
      rank?: number | null,
      totalResults?: number | null,
      type?: ENGINECRAWLERS | null,
    } | null,
    owner?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnDeleteEngineCrawlSubscriptionVariables = {
  owner?: string | null,
};

export type OnDeleteEngineCrawlSubscription = {
  onDeleteEngineCrawl?:  {
    __typename: "EngineCrawl",
    id: string,
    dateTime?: string | null,
    search?: string | null,
    domainID: string,
    zipCode?: string | null,
    keywordPlanner?:  {
      __typename: "EngineResult",
      data?: string | null,
      jsonPathToRecord?: string | null,
      rank?: number | null,
      totalResults?: number | null,
      type?: ENGINECRAWLERS | null,
    } | null,
    google?:  {
      __typename: "EngineResult",
      data?: string | null,
      jsonPathToRecord?: string | null,
      rank?: number | null,
      totalResults?: number | null,
      type?: ENGINECRAWLERS | null,
    } | null,
    foursquare?:  {
      __typename: "EngineResult",
      data?: string | null,
      jsonPathToRecord?: string | null,
      rank?: number | null,
      totalResults?: number | null,
      type?: ENGINECRAWLERS | null,
    } | null,
    facebook?:  {
      __typename: "EngineResult",
      data?: string | null,
      jsonPathToRecord?: string | null,
      rank?: number | null,
      totalResults?: number | null,
      type?: ENGINECRAWLERS | null,
    } | null,
    yelp?:  {
      __typename: "EngineResult",
      data?: string | null,
      jsonPathToRecord?: string | null,
      rank?: number | null,
      totalResults?: number | null,
      type?: ENGINECRAWLERS | null,
    } | null,
    infogroup?:  {
      __typename: "EngineResult",
      data?: string | null,
      jsonPathToRecord?: string | null,
      rank?: number | null,
      totalResults?: number | null,
      type?: ENGINECRAWLERS | null,
    } | null,
    yellowPages?:  {
      __typename: "EngineResult",
      data?: string | null,
      jsonPathToRecord?: string | null,
      rank?: number | null,
      totalResults?: number | null,
      type?: ENGINECRAWLERS | null,
    } | null,
    owner?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnCreateDomainSubscriptionVariables = {
  owner?: string | null,
};

export type OnCreateDomainSubscription = {
  onCreateDomain?:  {
    __typename: "Domain",
    id: string,
    name?: string | null,
    owner?: string | null,
    EngineCrawls?:  {
      __typename: "ModelEngineCrawlConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    WebCrawls?:  {
      __typename: "ModelWebCrawlConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnUpdateDomainSubscriptionVariables = {
  owner?: string | null,
};

export type OnUpdateDomainSubscription = {
  onUpdateDomain?:  {
    __typename: "Domain",
    id: string,
    name?: string | null,
    owner?: string | null,
    EngineCrawls?:  {
      __typename: "ModelEngineCrawlConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    WebCrawls?:  {
      __typename: "ModelWebCrawlConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnDeleteDomainSubscriptionVariables = {
  owner?: string | null,
};

export type OnDeleteDomainSubscription = {
  onDeleteDomain?:  {
    __typename: "Domain",
    id: string,
    name?: string | null,
    owner?: string | null,
    EngineCrawls?:  {
      __typename: "ModelEngineCrawlConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    WebCrawls?:  {
      __typename: "ModelWebCrawlConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};
