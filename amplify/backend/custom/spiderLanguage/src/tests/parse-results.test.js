import { jest } from '@jest/globals';
import {
  getRequest,
  parseYelp,
  parseCitysearch,
  parseGoogle,
  parseYellowpages,
  parseFoursquare,
  syntacticSimilarity
} from '../lib.js';

import { createRequire } from "module";
const require = createRequire(import.meta.url);
const {
  yelp,
  citysearch,
  google,
  yellowpages,
  foursquare
} = require("./payloads.json");

jest.setTimeout(100000)
const search = 'Bend Brewing Company'
const postalCode = '97702'
const domainName = 'bendbrewingco.com'
const dateStamp = new Date().toLocaleDateString()

// test('syntacticSimilarity', async () => {
//   // const stuff = await syntacticSimilarity('bla', 'meow goes the cat')
//   // cosineSimilarityMatrix [ [ 1, 0.32879129557127995 ], [ 0.32879129557127995, 1 ] ]
//   const stuff = await syntacticSimilarity(['Nearly the same sentence', 'Similar sentence'])
  
//   // console.log(JSON.stringify(stuff))
//   expect(stuff).toStrictEqual([[1, 0.7191837706696863], [0.7191837706696863, 1]])
// });

// test('getRequest', async () => {
//   const stuff = await getRequest('https://www.google.com/')
//   // console.log(JSON.stringify(stuff?.data))
//   expect(JSON.stringify(stuff?.data)).toEqual(expect.stringMatching('Google'));
// });


// test('parseYelp', async () => {
//     // console.log(yelp)
//     const stuff = await parseYelp(yelp, search, postalCode, domainName, dateStamp)
//     // console.log(JSON.stringify(stuff))
//     expect(stuff).toStrictEqual({"results":[{"status":"fulfilled","value":{"key":0,"name":"Bend Brewing Company","score":0.9523809523809523,"websiteUrl":"http://www.bendbrewingco.com"}},{"status":"fulfilled","value":{"key":1,"name":"Crux Fermentation Project","score":0.07692307692307693}},{"status":"fulfilled","value":{"key":2,"name":"Old Ironwood Taps","score":0.047619047619047616}},{"status":"fulfilled","value":{"key":3,"name":"Deschutes Brewery Bend Public House","score":0.25}},{"status":"fulfilled","value":{"key":4,"name":"Sunriver Brewing Co - Sunriver Pub","score":0.2857142857142857}},{"status":"fulfilled","value":{"key":5,"name":"Immersion Brewing","score":0.38095238095238093}},{"status":"fulfilled","value":{"key":6,"name":"10 Barrel Brewing - West Side Bend","score":0.34285714285714286}},{"status":"fulfilled","value":{"key":7,"name":"GoodLife Brewing Company","score":0.64}},{"status":"fulfilled","value":{"key":8,"name":"Deschutes Brewery Tasting Room","score":0.2903225806451613}},{"status":"fulfilled","value":{"key":9,"name":"Sunriver Brewing Co - Galveston Pub","score":0.2777777777777778}},{"status":"fulfilled","value":{"key":10,"name":"Boneyard Beer","score":0.14285714285714285}},{"status":"fulfilled","value":{"key":11,"name":"Looney Bean Bend","score":0.3333333333333333}},{"status":"fulfilled","value":{"key":12,"name":"J DUB","score":0}},{"status":"fulfilled","value":{"key":13,"name":"Bridge 99 Brewery","score":0.23809523809523808}},{"status":"fulfilled","value":{"key":14,"name":"Craft Kitchen & Brewery","score":0.2916666666666667}},{"status":"fulfilled","value":{"key":15,"name":"McMenamins Old St. Francis School","score":0.11764705882352941}},{"status":"fulfilled","value":{"key":16,"name":"Boneyard Pub","score":0.09523809523809523}},{"status":"fulfilled","value":{"key":17,"name":"Worthy Brewing","score":0.42857142857142855}},{"status":"fulfilled","value":{"key":18,"name":"Kobold Brewing Tasting Room","score":0.35714285714285715}},{"status":"fulfilled","value":{"key":19,"name":"Wild Ride Brewing Co","score":0.5238095238095238}}],"highScore":1,"foundWebsite":true,"exactNameMatch":0})
// });

// test('parseCitysearch', async () => {
//   let stuff = await parseCitysearch(citysearch, search, postalCode, domainName, dateStamp)
//   // console.log(JSON.stringify(stuff))
//   expect(stuff).toStrictEqual({ "results": [{ "status": "fulfilled", "value": { "key": 0, "name": "The Original Bend Transmission Company", "score": 0.358974358974359 } }, { "status": "fulfilled", "value": { "key": 1, "name": "Bend Movers", "score": 0.23809523809523808 } }, { "status": "fulfilled", "value": { "key": 2, "name": "Bend On-Site Screening", "score": 0.391304347826087 } }, { "status": "fulfilled", "value": { "key": 3, "name": "Bend Tree Service", "score": 0.2857142857142857 } }, { "status": "fulfilled", "value": { "key": 4, "name": "Bend Glass & Mirror", "score": 0.23809523809523808 } }, { "status": "fulfilled", "value": { "key": 5, "name": "Residence Inn By Marriott Bend", "score": 0.25806451612903225 } }, { "status": "fulfilled", "value": { "key": 6, "name": "Springhill Suites By Marriott Bend", "score": 0.22857142857142856 } }, { "status": "fulfilled", "value": { "key": 7, "name": "La Quinta Inn By Wyndham Bend", "score": 0.23333333333333334 } }, { "status": "fulfilled", "value": { "key": 8, "name": "Bend Veterinary Specialty & Emergency Center", "score": 0.17777777777777778 } }, { "status": "fulfilled", "value": { "key": 9, "name": "Therapeutic Associates Physical Thrpy-Athletic Club Of Bend", "score": 0.1 } }, { "status": "fulfilled", "value": { "key": 10, "name": "Entrada Lodge", "score": 0.047619047619047616 } }, { "status": "fulfilled", "value": { "key": 11, "name": "Central Oregon Fence Company", "score": 0.3448275862068966 } }, { "status": "fulfilled", "value": { "key": 12, "name": "Bend Courier Company", "score": 0.6190476190476191 } }, { "status": "fulfilled", "value": { "key": 13, "name": "Element Bend", "score": 0.23809523809523808 } }, { "status": "fulfilled", "value": { "key": 14, "name": "Cynthia's of Bend", "score": 0.2857142857142857 } }, { "status": "fulfilled", "value": { "key": 15, "name": "BMW of Bend", "score": 0.23809523809523808 } }, { "status": "fulfilled", "value": { "key": 16, "name": "Chevrolet of Bend", "score": 0.2857142857142857 } }, { "status": "fulfilled", "value": { "key": 17, "name": "Porsche Bend", "score": 0.23809523809523808 } }, { "status": "fulfilled", "value": { "key": 18, "name": "Audi Bend", "score": 0.23809523809523808 } }, { "status": "fulfilled", "value": { "key": 19, "name": "BMW of Bend", "score": 0.23809523809523808 } }], "highScore": 0.6190476190476191, "foundWebsite": false, "mostLikely": 12, "exactWebsiteMatch": -1, "exactWebsiteMatchHttp": -1, "exactNameMatch": -1 })
// });

// test('parseGoogle', async () => {
//   const stuff = await parseGoogle(google, search, postalCode, domainName, dateStamp, dateStamp)
//   console.log(JSON.stringify(stuff))
//   expect(stuff).toStrictEqual({"results":[{"status":"fulfilled","value":{"key":0,"name":"Bend Brewing Company","score":0.9523809523809523,"websiteUrl":"https://www.bendbrewingco.com/"}},{"status":"fulfilled","value":{"key":1,"name":"Deschutes Brewery | Deschutes Brewery","score":0.13157894736842105,"websiteUrl":"https://www.deschutesbrewery.com/"}},{"status":"fulfilled","value":{"key":2,"name":"PUB MENU — Bend Brewing Company","score":0.625,"websiteUrl":"https://www.bendbrewingco.com/the-pub"}},{"status":"fulfilled","value":{"key":3,"name":"GoodLife Brewing - Great Bend Beer in Oregon","score":0.26666666666666666,"websiteUrl":"https://www.goodlifebrewing.com/"}},{"status":"fulfilled","value":{"key":4,"name":"10 Barrel Brewing Co. – Drink Beer Outside – Bend, Oregon","score":0.22413793103448276,"websiteUrl":"https://10barrel.com/"}},{"status":"fulfilled","value":{"key":5,"name":"Breweries in Bend Oregon | Worthy Brewing | Strata IPA","score":0.2545454545454545,"websiteUrl":"https://worthy.beer/"}},{"status":"fulfilled","value":{"key":6,"name":"Cascade Lakes Brewing Company","score":0.5333333333333333,"websiteUrl":"https://www.cascadelakes.com/"}},{"status":"fulfilled","value":{"key":7,"name":"Sunriver Brewing Company: Home","score":0.4838709677419355,"websiteUrl":"https://www.sunriverbrewingcompany.com/"}},{"status":"fulfilled","value":{"key":8,"name":"Immersion Brewing: Home","score":0.3333333333333333,"websiteUrl":"https://imbrewing.com/"}},{"status":"fulfilled","value":{"key":9,"name":"17 Killer Breweries and Brewpubs in Bend, Oregon","score":0.20408163265306123,"websiteUrl":"https://pdx.eater.com/maps/bend-oregon-breweries-brewpubs"}}],"highScore":1,"foundWebsite":true,"mostLikely":2,"exactWebsiteMatch":0,"exactWebsiteMatchHttp":-1,"exactNameMatch":0})
// });

// test('parseYellowpages', async () => {
//   const stuff = await parseYellowpages(yellowpages, search, postalCode, domainName, dateStamp)
//   console.log(JSON.stringify(stuff))
//   expect(stuff).toStrictEqual({"results":[{"status":"fulfilled","value":{"key":0,"name":"Bend Brewing Company","score":0.9523809523809523}},{"status":"fulfilled","value":{"key":1,"name":"Bend Brewing Co","score":0.6666666666666666}}],"highScore":1,"mostLikely":0,"exactNameMatch":0})
// });

test('parseFoursquare', async () => {
  const stuff = await parseFoursquare(foursquare, search, postalCode, domainName, dateStamp)
  // console.log(JSON.stringify(stuff))
  expect(stuff).toStrictEqual({"results":[{"status":"fulfilled","value":{"key":0,"name":"GoodLife Brewing Company","score":0.64}},{"status":"fulfilled","value":{"key":1,"name":"Worthy Brewing Co.","score":0.5238095238095238}},{"status":"fulfilled","value":{"key":2,"name":"10 Barrel Brewing","score":0.38095238095238093}},{"status":"fulfilled","value":{"key":3,"name":"Bend Pet Express","score":0.2857142857142857}},{"status":"fulfilled","value":{"key":4,"name":"Bend Rock Gym","score":0.23809523809523808}},{"status":"fulfilled","value":{"key":5,"name":"Farewell Bend Park","score":0.38095238095238093}},{"status":"fulfilled","value":{"key":6,"name":"Hilton Garden Inn Bend","score":0.2608695652173913}},{"status":"fulfilled","value":{"key":7,"name":"River Pig Saloon Bend","score":0.2727272727272727}},{"status":"fulfilled","value":{"key":8,"name":"Immersion Brewing","score":0.38095238095238093}},{"status":"fulfilled","value":{"key":9,"name":"Coach Outlet Bend","score":0.3333333333333333}}],"highScore":0.64,"mostLikely":0,"exactNameMatch":-1})
});