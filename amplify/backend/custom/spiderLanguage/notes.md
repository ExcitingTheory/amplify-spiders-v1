mutation MyMutation {
  crawlEngines(domainID: "d4dc1945-f62e-4022-94b6-218bdf78430c", apexDomain: "bendbrewingco.com", postalCode: "97702", search: "Bend Brewing Company")
}






https://github.com/aws-amplify/amplify-category-api/issues/100
{
  "data": {
    "crawlEnginesLanguage": "{statusCode=400, body={\"data\":{\"createEngineCrawl\":null},\"errors\":[{\"path\":[\"createEngineCrawl\"],\"data\":null,\"errorType\":\"Unauthorized\",\"errorInfo\":null,\"locations\":[{\"line\":3,\"column\":5,\"sourceName\":null}],\"message\":\"Not Authorized to access createEngineCrawl on type EngineCrawl\"}]}}"
  }
}