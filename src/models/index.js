// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { WebCrawl, EngineCrawl, Domain, WebResult, ParsedEngineResult, Coordinate, BumpChart, EngineResult } = initSchema(schema);

export {
  WebCrawl,
  EngineCrawl,
  Domain,
  WebResult,
  ParsedEngineResult,
  Coordinate,
  BumpChart,
  EngineResult
};