import React, { useEffect, useState } from "react";
import { Domain, EngineCrawl } from "../../src/models";
import { DataStore, Predicates, SortDirection } from '@aws-amplify/datastore';
import { useRouter } from 'next/router'

import { withAuthenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';

import {
  Button,
  Item,
  Box,
  Typography,
  AppBar,
  Card,
  Container,
} from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import Link from '../../src/Link';
import MainToolbar from '../../src/components/MainToolbar'
import { ResponsiveBump } from '@nivo/bump'
import { ResponsiveHeatMap } from '@nivo/heatmap'

// make sure parent container have a defined height when using
// responsive component, otherwise height will be 0 and
// no chart will be rendered.
// website examples showcase many properties,
// you'll often use just a few of them.
const MyResponsiveHeatMap = ({ data /* see data tab */ }) => {

  console.log('MyResponsiveHeatMap', data)
  if (data) {

    return (
      <Card
        style={{
          margin: '2rem auto',
          minWidth: 'min-content',
          height: '35rem',
          display: 'block',
          padding: '2rem 1rem 6rem 2rem'
        }}>


        <ResponsiveHeatMap
          data={data}
          margin={{ top: 200, right: 100, bottom: 100, left: 200 }}
          valueFormat=">-.2%"
          axisTop={{
            tickSize: 5,
            tickPadding: 5,
            tickRotation: -90,
            legend: '',
            legendOffset: 46
          }}
          // axisRight={{
          //   tickSize: 5,
          //   tickPadding: 5,
          //   tickRotation: 0,
          //   legend: 'country',
          //   legendPosition: 'middle',
          //   legendOffset: 70
          // }}
          axisLeft={{
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            // legend: 'country',
            legendPosition: 'middle',
            legendOffset: -72
          }}
          colors={{
            type: 'quantize',
            scheme: 'green_blue',
            minValue: 0,
            maxValue: 1,
            steps: 10
            // divergeAt: 0.1
          }}
          emptyColor="#555555"
          borderColor={{
            from: 'color',
            modifiers: [
              [
                'darker',
                0.8
              ]
            ]
          }}
          legends={[
            {
              anchor: 'bottom',
              translateX: 0,
              translateY: 30,
              length: 400,
              thickness: 8,
              direction: 'row',
              tickPosition: 'after',
              tickSize: 3,
              tickSpacing: 4,
              tickOverlap: false,
              tickFormat: '>-.2%',
              title: 'More competitive →',
              titleAlign: 'start',
              titleOffset: 4
            }
          ]}
        />
      </Card>
    )
  }
  return null

}

  const MyResponsiveBump = ({ chartData }) => {

    console.log('MyResponsiveBump', chartData)
    if (chartData) {

      //   const {
      //     exactNameMatch,
      //     exactWebsiteMatch,
      //     exactWebsiteMatchHttp,
      //     foundWebsite,
      //     highScore,
      //     mostLikely,
      //     results
      //   } = engineCrawl
      //   console.log('MyResponsiveBum:  chartData, engineCrawl' )

      // if (exactNameMatch && results[exactNameMatch]) {
      //   console.log("results[exactNameMatch]", results[exactNameMatch])
      // }
      // if (exactWebsiteMatch && results[exactWebsiteMatch]) {
      //   console.log("results[exactWebsiteMatch]", results[exactWebsiteMatch])
      // }
      // if (exactWebsiteMatchHttp && results[exactWebsiteMatchHttp]) {
      //   console.log("results[exactWebsiteMatchHttp]", results[exactWebsiteMatchHttp])
      // }
      // if (highScore && results[highScore]) {
      //   console.log("results[highScore]", results[highScore])
      // }
      // if (highScore && results[mostLikely]) {
      //   console.log("results[mostLikely]", results[mostLikely])
      // }

      // console.log(JSON.stringify({
      //   exactNameMatch,
      //   exactWebsiteMatch,
      //   exactWebsiteMatchHttp,
      //   foundWebsite,
      //   highScore,
      //   mostLikely,
      //   results
      // }))

      // console.log('engineCrawl', engineCrawl)
      chartData = Array.from(chartData.values())

      function onStuffClick() {
        console.log('click', chartData)
        document.querySelector("path[data-testid='line.Cascade Lakes Brewing Company: https://www.cascadelakes.com/.interactive']").dispatchEvent(new MouseEvent('mouseover', { 'bubbles': true }));
      }

      return (
        <Card
          style={{
            margin: '2rem auto',
            minWidth: 'min-content',
            height: '35rem',
            display: 'block',
            padding: '2rem 1rem 6rem 2rem'
          }}>

          <h3>{name}</h3>

          <button onClick={onStuffClick}>Click</button>
          <ResponsiveBump
            data={chartData}
            colors={{ scheme: 'dark2' }}
            // colors={{ scheme: 'spectral' }}
            // legendLabel={(x) => {
            //   console.log('legendLabel.x', x)
            // }}
            lineWidth={3}
            activeLineWidth={6}
            inactiveLineWidth={3}
            inactiveOpacity={0.15}
            startLabelTextColor="black"
            endLabelTextColor="black"
            pointSize={10}
            activePointSize={16}
            inactivePointSize={0}
            pointColor={{ from: 'serie.color', modifiers: [] }}
            // pointColor={{ theme: 'inherit' }}
            pointBorderWidth={3}
            activePointBorderWidth={3}
            // pointBorderColor={{ from: 'serie.color' }}
            axisTop={{
              tickSize: 5,
              tickPadding: 5,
              tickRotation: 0,
              legend: '',
              legendPosition: 'middle',
              legendOffset: -36
            }}
            axisBottom={{
              tickSize: 5,
              tickPadding: 5,
              tickRotation: 0,
              legend: '',
              legendPosition: 'middle',
              legendOffset: 32
            }}
            axisLeft={{
              tickSize: 5,
              tickPadding: 5,
              tickRotation: 0,
              legend: 'ranking',
              legendPosition: 'middle',
              legendOffset: -40
            }}
            margin={{ top: 40, right: 400, bottom: 40, left: 60 }}
            axisRight={null}
          />
        </Card>)
    }
    return null
  }

  const Charts = function ({ bumpCharts, engineCrawls }) {

    // const {
    // citysearch,
    // google,
    // foursquare,
    // // facebook,
    // // keywordplanner,
    // yelp,
    // // infogroup,
    // yellowpages
    // } = bumpCharts

    const citysearchBumpChart = bumpCharts?.citysearch
    const googleBumpChart = bumpCharts?.google
    const foursquareBumpChart = bumpCharts?.foursquare
    // facebook,
    // keywordplanner,
    const yelpBumpChart = bumpCharts?.yelp
    // infogroup,
    const yellowpagesBumpChart = bumpCharts?.yellowpages





    console.log(JSON.stringify({
      citysearchBumpChart,
      googleBumpChart,
      foursquareBumpChart,
      // facebook,
      // keywordplanner,
      yelpBumpChart,
      // infogroup,
      yellowpagesBumpChart
    }))


    let lastCrawl = {}

    try {
      lastCrawl = engineCrawls.slice(-1)[0]
    } catch {
    }

    const lastCrawlCitysearch = lastCrawl?.citysearch
    const lastCrawlGoogle = lastCrawl?.google
    const lastCrawlFoursquare = lastCrawl?.foursquare
    const lastCrawlYelp = lastCrawl?.yelp
    const lastCrawlYellowpages = lastCrawl?.yellowpages

    const citysearchHeatmapChart = lastCrawlCitysearch?.heatmapChart
    const googleHeatmapChart = lastCrawlGoogle?.heatmapChart
    const foursquareHeatmapChart = lastCrawlFoursquare?.heatmapChart
    const yelpHeatmapChart = lastCrawlYelp?.heatmapChart
    const yellowpagesHeatmapChart = lastCrawlYellowpages?.heatmapChart

    console.log(JSON.stringify({
      lastCrawlCitysearch,
      lastCrawlGoogle,
      lastCrawlFoursquare,
      // facebook,
      // keywordplanner,
      lastCrawlYelp,
      // infogroup,
      lastCrawlYellowpages
    }))


    console.log(JSON.stringify({
      citysearchHeatmapChart,
      googleHeatmapChart,
      foursquareHeatmapChart,
      // facebook,
      // keywordplanner,
      yelpHeatmapChart,
      // infogroup,
      yellowpagesHeatmapChart
    }))

    return (
      <div>
        <MyResponsiveBump chartData={citysearchBumpChart} name="Citysearch" />
        <MyResponsiveHeatMap data={citysearchHeatmapChart} />

        <MyResponsiveBump chartData={googleBumpChart} name="Google" />
        <MyResponsiveHeatMap data={googleHeatmapChart} />

        <MyResponsiveBump chartData={foursquareBumpChart} name="Foursquare" />
        <MyResponsiveHeatMap data={foursquareHeatmapChart} />

        <MyResponsiveBump chartData={yelpBumpChart} name="Yelp" />
        <MyResponsiveHeatMap data={yelpHeatmapChart} />

        <MyResponsiveBump chartData={yellowpagesBumpChart} name="Yellowpages" />
        <MyResponsiveHeatMap data={yellowpagesHeatmapChart} />

      </div>
    )

  }


  function proccessMaps(data, inputMap) {
    if (data?.bumpChart) {
      if (inputMap) {
        data.bumpChart.forEach(function (chartItem) {
          if (inputMap.has(chartItem.id)) {
            const thisItem = inputMap.get(chartItem.id)
            const newData = thisItem.data.concat(chartItem.data)
            inputMap.set(chartItem.id, {
              id: chartItem.id,
              data: newData
            })
          } else {
            inputMap.set(chartItem.id, {
              id: chartItem.id,
              data: chartItem.data
            })
          }

        })
      } else {
        inputMap = new Map()
        data.bumpChart.forEach(function (chartItem) {
          inputMap.set(chartItem.id, {
            id: chartItem.id,
            data: chartItem.data
          })
        })
      }
    }

    return inputMap
  }


  function Domains({ signOut, user }) {
    const [domain, setDomain] = useState([])
    const [engineCrawls, setEngineCrawls] = useState([])
    const [bumpCharts, setBumpCharts] = useState({})
    const [work, setIsWorking] = useState(false)
    // const router = useRouter()
    const router = useRouter()
    const { id } = router.query



    useEffect(() => {
      fetchDomains()
      async function fetchDomains() {
        let domainData = await DataStore.query(Domain, id)
        domainData = domainData[0]
        // const engineCrawls = await DataStore.query(EngineCrawl)
        const engineCrawls = (await DataStore.query(EngineCrawl, Predicates.ALL, {
          sort: s => s.createdAt(SortDirection.ASCENDING)
        })).filter(c => c.domainID === domainData?.id);
        // const engineCrawls = (await DataStore.query(EngineCrawl)).filter(c => c.domainID === domainData?.id);
        console.log('domainData[0]', domainData)
        console.log('engineCrawls[0]', engineCrawls)
        setDomain(domainData)



        let maps = {
          citysearch: null,
          google: null,
          foursquare: null,
          // facebook: null,
          // keywordplanner: null,
          yelp: null,
          // infogroup: null,
          yellowpages: null
        }


        engineCrawls.forEach(function (element) {
          // console.log('engineCrawls.forEach.element ', element.id)
          const {
            citysearch,
            google,
            foursquare,
            // facebook,
            // keywordplanner,
            yelp,
            // infogroup,
            yellowpages
          } = element

          // console.log('engineCrawls.forEach.element ', element)

          maps['citysearch'] = proccessMaps(citysearch, maps['citysearch'])
          maps['google'] = proccessMaps(google, maps['google'])
          maps['foursquare'] = proccessMaps(foursquare, maps['foursquare'])
          maps['yelp'] = proccessMaps(yelp, maps['yelp'])
          maps['yellowpages'] = proccessMaps(yellowpages, maps['yellowpages'])

        })

        console.log("maps HERE ARE MAPS", maps)
        setEngineCrawls(engineCrawls)
        setBumpCharts(maps)
      }
      const subscription = DataStore.observe(Domain).subscribe(() => fetchDomains())

      return function cleanup() {
        subscription.unsubscribe();
      }
    }, [])

    return (
      <>
        <AppBar
          position="fixed"
          color="default"
        >
          <MainToolbar>
            <Box sx={{ flexGrow: 1, margin: '1rem' }}>
              <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                Domain
            </Typography>
            </Box>
          </MainToolbar>
        </AppBar>
        <Container
          style={{
            padding: '2rem 1rem',
            marginTop: '3rem'
          }}>

          <h1>hello {user.username}</h1>
          <button onClick={signOut}>Sign Out</button>

          <h1>Domain</h1>

          <Box>
            {!domain &&
              <div>Loading...</div>
            }
            {domain &&
              <>
                <Card
                  key={domain.id}
                  sx={{
                    margin: '1rem auto',
                    padding: '2rem',
                    flexGrow: '1',
                    minWidth: 'min-content'
                  }}
                >
                  <h2>{domain.name}</h2>
                  <div>{domain.description}</div>




                </Card>

                <Charts bumpCharts={bumpCharts} engineCrawls={engineCrawls} />
              </>
            }

          </Box>
        </Container>
      </>
    )
  }

  export default withAuthenticator(Domains, { socialProviders: ['amazon', 'facebook', 'google'] });
