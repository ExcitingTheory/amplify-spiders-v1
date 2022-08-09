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
  "YELLOW_PAGES": "YELLOW_PAGES"
};

const { Post, WebCrawl, EngineCrawl, Domain, WebResult, EngineResult } = initSchema(schema);

export {
  Post,
  WebCrawl,
  EngineCrawl,
  Domain,
  Webcrawlers,
  Enginecrawlers,
  WebResult,
  EngineResult
};