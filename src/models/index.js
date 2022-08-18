// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';

const Webcrawlers = {
  "NU": "NU",
  "LIGHTHOUSE": "LIGHTHOUSE",
  "CUSTOM": "CUSTOM"
};

const Enginecrawlers = {
  "KEYWORD_PLANNER": "KEYWORD_PLANNER",
  "GOOGLE": "GOOGLE",
  "FOURSQUARE": "FOURSQUARE",
  "FACEBOOK": "FACEBOOK",
  "YELP": "YELP",
  "INFOGROUP": "INFOGROUP",
  "CITYSEARCH": "CITYSEARCH",
  "YELLOW_PAGES": "YELLOW_PAGES"
};

const { WebCrawl, EngineCrawl, Domain, WebResult, ParsedEngineResultValue, ParsedEngineResult, EngineResult } = initSchema(schema);

export {
  WebCrawl,
  EngineCrawl,
  Domain,
  Webcrawlers,
  Enginecrawlers,
  WebResult,
  ParsedEngineResultValue,
  ParsedEngineResult,
  EngineResult
};