import React, { useEffect, useState } from "react";
import { Domain, EngineCrawl } from "../../src/models";
import { DataStore, Predicates, SortDirection } from '@aws-amplify/datastore';
import { useRouter } from 'next/router'

import { withAuthenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';

import {
  Button,
  Item,
  TableContainer,
  Paper,
  Table,
  TableRow,
  TableHead,
  TableCell,
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
      <Box
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
          valueFormat=" >-.0~%"
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
              tickFormat: ' >-.0~%',
              title: 'More competitive →',
              titleAlign: 'start',
              titleOffset: 4
            }
          ]}
        />
      </Box>
    )
  }
  return null

}

const MyResponsiveBump = ({ chartData, name }) => {

  console.log('MyResponsiveBump', chartData)
  if (chartData) {
    chartData = Array.from(chartData.values())

    return (
      <Box
        style={{
          margin: '2rem auto',
          minWidth: 'min-content',
          height: '35rem',
          display: 'block',
          padding: '2rem 1rem 6rem 2rem'
        }}>

        {/* <h3>{name}</h3> */}

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
      </Box>)
  }
  return null
}

const Summary = function ({ data, chartData, term }) {

  if (data) {

    const {
      exactNameMatch,
      exactWebsiteMatch,
      exactWebsiteMatchHttp,
      foundWebsite,
      highScore,
      mostLikely,
      // results
    } = data
    //   console.log('MyResponsiveBum:  chartData, engineCrawl' )


    console.log('Summary.data', data)

    // console.log('engineCrawl', engineCrawl)
    const lineTitles = Array.from(chartData.keys())

    console.log(lineTitles)

    function highlightLine(name) {
      // console.log('highlightLine.click: ', name)
      const selector = `path[data-testid="line.${name}.interactive"]`
      document.querySelector(selector).dispatchEvent(new MouseEvent('mouseover', { 'bubbles': true }));
      // document.querySelector(`path[data-testid="line.The Original Bend Transmission Company: 61522 American Loop.interactive"]`).dispatchEvent(new MouseEvent('mouseover', { 'bubbles': true }));
    }

    console.log('data, chartData', data)

    const roundedHighScore = Math.round((highScore + Number.EPSILON) * 100)
  
  return (
    <Box sx={{ margin: '1rem', padding: '1rem' }}>
      <h2>Search Term: "{term}"</h2>
      {(exactNameMatch > -1 || exactWebsiteMatch > -1 || exactWebsiteMatchHttp> -1  || mostLikely > -1 ) &&
      <TableContainer component={Paper} sx={{width: '50vw'}}>
      <Table size="small">
          <TableHead>
          <TableCell variant="head">Summary</TableCell>
          <TableCell variant="head">Control</TableCell>
          </TableHead>
        {exactNameMatch > -1 && 
          <TableRow>
          <TableCell variant="head">Exact Match #{exactNameMatch + 1} </TableCell>
          <TableCell><Button onMouseUp={() => {highlightLine(lineTitles[exactNameMatch])}}>Highlight</Button></TableCell>
          </TableRow>
        }
        {exactWebsiteMatch > -1 && 
          <TableRow>
          <TableCell variant="head">Https Website #{exactWebsiteMatch + 1} </TableCell>
          <TableCell><Button onMouseUp={() => {highlightLine(lineTitles[exactWebsiteMatch])}}>Highlight</Button></TableCell>
          </TableRow>
        }
        {exactWebsiteMatchHttp > -1 && 
          <TableRow>
          <TableCell variant="head">Http Website #{exactWebsiteMatchHttp + 1} </TableCell>
          <TableCell><Button onMouseUp={() => {highlightLine(lineTitles[exactNameMatch])}}>Highlight</Button></TableCell>
          </TableRow>
        }

        {mostLikely > -1 &&
          <TableRow>
          <TableCell variant="head">{roundedHighScore}% Match #{mostLikely + 1} </TableCell>
          <TableCell><Button onMouseUp={() => {highlightLine(lineTitles[mostLikely])}}>Highlight</Button></TableCell>
          </TableRow>
        }
          

      </Table>
      </TableContainer>
      }
    </Box>)
  } else {
    return null
  }
  




}


const Charts = function ({data, term}) {

  console.log('Charts.data, term', data, term)

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

  const citysearchBumpChart = data?.citysearch
  const googleBumpChart = data?.google
  const foursquareBumpChart = data?.foursquare
  // facebook,
  // keywordplanner,
  const yelpBumpChart = data?.yelp
  // infogroup,
  const yellowpagesBumpChart = data?.yellowpages


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
    lastCrawl = data['engineCrawls'].slice(-1)[0]
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


  // console.log(JSON.stringify({
  //   citysearchHeatmapChart,
  //   googleHeatmapChart,
  //   foursquareHeatmapChart,
  //   // facebook,
  //   // keywordplanner,
  //   yelpHeatmapChart,
  //   // infogroup,
  //   yellowpagesHeatmapChart
  // }))

  return (
    <Card>
      <Summary data={lastCrawlCitysearch} chartData={citysearchBumpChart} term={term} />
      <MyResponsiveBump chartData={citysearchBumpChart} name="Citysearch" />
      <MyResponsiveHeatMap data={citysearchHeatmapChart} />

      <Summary data={lastCrawlGoogle} chartData={googleBumpChart} term={term} />
      <MyResponsiveBump chartData={googleBumpChart} name="Google" />
      <MyResponsiveHeatMap data={googleHeatmapChart} />

      <MyResponsiveBump chartData={foursquareBumpChart} name="Foursquare" />
      <MyResponsiveHeatMap data={foursquareHeatmapChart} />

      <MyResponsiveBump chartData={yelpBumpChart} name="Yelp" />
      <MyResponsiveHeatMap data={yelpHeatmapChart} />

      <MyResponsiveBump chartData={yellowpagesBumpChart} name="Yellowpages" />
      <MyResponsiveHeatMap data={yellowpagesHeatmapChart} />

    </Card>
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


function DomainDetail({ signOut, user }) {
  const [domain, setDomain] = useState({})
  // const [engineCrawls, setEngineCrawls] = useState([])
  // const [bumpCharts, setBumpCharts] = useState({})
  const [chartsBySearchTerm, setChartsBySearchTerm] = useState({})
  const [work, setIsWorking] = useState(false)
  // const router = useRouter()
  const router = useRouter()
  const { id } = router.query

  console.log('DomainDetail.router.query', router.query)
  console.log('const { id } = router.query', id)
  console.log('DomainDetail.domain: ', domain)
  // console.log('DomainDetail.engineCrawls:', engineCrawls)

  useEffect(() => {
    if (!id) {
      return
    }
    fetchEngineCrawls()
    async function fetchEngineCrawls() {
      console.log('fetchEngineCrawls')
      const response = await DataStore.query(EngineCrawl, Predicates.ALL, {
        sort: s => s.createdAt(SortDirection.ASCENDING)
      })
      const filteredData = response.filter(c => c.domainID === id)
      

      let sort = {}


      filteredData.forEach(function (element) {

        // let maps = {
        //   citysearch: null,
        //   google: null,
        //   foursquare: null,
        //   // facebook: null,
        //   // keywordplanner: null,
        //   yelp: null,
        //   // infogroup: null,
        //   yellowpages: null
        // }
        
        console.log('engineCrawls.forEach.element ', element.id)
        const {
          citysearch,
          google,
          foursquare,
          // facebook,
          // keywordplanner,
          yelp,
          // infogroup,
          yellowpages,
          createdAt,
          postalCode,
          search
        } = element

        const searchKey = [search, postalCode].join(' ')


        console.log('engineCrawls.forEach.element ', element)



        if(sort[searchKey]) {
          
          sort[searchKey]['citysearch'] = proccessMaps(citysearch, sort[searchKey]['citysearch'])
          sort[searchKey]['google'] = proccessMaps(google, sort[searchKey]['google'])
          sort[searchKey]['foursquare'] = proccessMaps(foursquare, sort[searchKey]['foursquare'])
          sort[searchKey]['yelp'] = proccessMaps(yelp, sort[searchKey]['yelp'])
          sort[searchKey]['yellowpages'] = proccessMaps(yellowpages, sort[searchKey]['yellowpages'])


          sort[searchKey]['engineCrawls'].push(element)


        } else {

          sort[searchKey] = {
            citysearch: null,
            google: null,
            foursquare: null,
            // facebook: null,
            // keywordplanner: null,
            yelp: null,
            // infogroup: null,
            yellowpages: null,
            engineCrawls: []
          }
        }
      })

      // console.log("maps HERE ARE MAPS", maps)
      console.log("sort HERE ARE sorted MAPS", sort)
      setChartsBySearchTerm(sort) //maps used to be
      // setEngineCrawls(filteredData)
    }
    const subscription = DataStore.observeQuery(EngineCrawl, Predicates.ALL, {
      sort: s => s.createdAt(SortDirection.ASCENDING)
    }).subscribe(() => fetchEngineCrawls())

    return function cleanup() {
      subscription.unsubscribe();
    }
  }, [id])

  useEffect(() => {
    if (!id) {
      return;
    }
    fetchDomain()
    async function fetchDomain() {
      const response = await DataStore.query(Domain, id)
      console.log('fetchDomain.response', response)
      setDomain(response)
    }
    const subscription = DataStore.observe(Domain, id).subscribe(() => fetchDomain())

    return function cleanup() {
      subscription.unsubscribe();
    }

  }, [id])


  console.log('chartsBySearchTerm', chartsBySearchTerm)


  return (
    <>
      <AppBar
        position="static"
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
      <Container>
        <Box>
          {!domain &&
            <div>Loading...</div>
          }
          {domain &&
            <>
              <Box
                key={domain.id}
                sx={{
                  margin: '1rem auto',
                  padding: '2rem',
                  flexGrow: '1',
                  minWidth: 'min-content'
                }}
              >
                <h1>{domain.name}</h1>
              </Box>
              {Object.keys(chartsBySearchTerm).length > 0 &&
                Object.entries(chartsBySearchTerm).map((item, key)=>{
                  console.log('chartsBySearchTerm, item, key', item[0], item[1])
                return <Charts data={item[1]} term={item[0]} key={key} />
              })
              }

              {/* <Charts bumpCharts={bumpCharts} engineCrawls={engineCrawls} /> */}
            </>
          }

        </Box>
      </Container>
    </>
  )
}
export default withAuthenticator(DomainDetail)
// export default withAuthenticator(DomainDetail, { socialProviders: ['amazon', 'facebook', 'google'] });
