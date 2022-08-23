import React, { useEffect, useState } from "react";
import { Domain, EngineCrawl } from "../../src/models";
import { DataStore } from '@aws-amplify/datastore';
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

const MyResponsiveBump = ({ data /* see data tab */ }) => (
  <ResponsiveBump
    data={data}
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
)

const Charts = function ({bumpCharts}) {



  // const charts = engineCrawls.map(element => {
  const {
    citysearch,
    google,
    foursquare,
    // facebook,
    // keywordplanner,
    yelp,
    // infogroup,
    yellowpages
  } = bumpCharts

  console.log('bumpCharts', bumpCharts)

  if(citysearch) {
    console.log('Array.from(citysearch.values())', Array.from(citysearch.values()))
  }
  
  //   console.log('HERE', element)
  //   console.log(JSON.stringify({
  //     citysearch,
  //     google,
  //     foursquare,
  //     // facebook,
  //     // keywordplanner,
  //     yelp,
  //     infogroup,
  //     yellowpages
  //   }))

  return (
    <div>
      
      {citysearch &&
        <div style={{ height: '20rem' }}>
          Citysearch
          <MyResponsiveBump data={Array.from(citysearch.values())} />
        </div>
      }
        
      {google &&
        <div style={{ height: '20rem' }}>
          Google
          <MyResponsiveBump data={Array.from(google.values())} />
        </div>
      }

      {foursquare &&
        <div style={{ height: '20rem' }}>
          Foursquare
          <MyResponsiveBump data={Array.from(foursquare.values())} />
        </div>
      }
        
      {yelp &&
        <div style={{ height: '20rem' }}>
          Yelp
          <MyResponsiveBump data={Array.from(yelp.values())} />
        </div>
      }
        
      {yellowpages &&
        <div style={{ height: '20rem' }}>
          Yellowpages
          <MyResponsiveBump data={Array.from(yellowpages.values())} />
        </div>
      }
    </div>
  )

  // );


  // return(charts)
}


function proccessMaps(data, inputMap) {
  if (data?.bumpChart) {
    if (inputMap) {
      // console.log('maps?.citysearch citysearch.bumpChart', data.bumpChart)
      data.bumpChart.forEach(function (chartItem) {
        // console.log('data.bumpChart.forEach.chartItem 2nd', chartItem)
        if(inputMap.has(chartItem.id)){
          // console.log('map.has(chartItem.id)')
          const thisItem = inputMap.get(chartItem.id)
          // console.log('map.get(chartItem.id)', map.get(chartItem.id))
          const newData = thisItem.data.concat(chartItem.data)
          // console.log('thisItem.data.concat(chartItem.data)', newData)
          inputMap.set(chartItem.id, {
            id: chartItem.id,
            data: newData
          })
        } else {
          // console.log('else map.set(chartItem.id', map.has(chartItem.id))
          inputMap.set(chartItem.id, {
            id: chartItem.id,
            data: chartItem.data
          })
        }
        
      })
    } else {
      // console.log('no maps?.citysearch citysearch.bumpChart', citysearch.bumpChart)
      inputMap = new Map()
      data.bumpChart.forEach(function (chartItem) {
        // console.log('citysearch.bumpChart.forEach.chartItem 1st', chartItem)
        inputMap.set(chartItem.id, {
          id: chartItem.id,
          data: chartItem.data
        })
      })
    }
  }

  return inputMap
}



// TODO Send a mouseover to trigger highlighting?
// document.getElementById('xyz').dispatchEvent(new MouseEvent('mouseover', { 'bubbles': true }));
// $("path[data-testid='line.Cascade Lakes Brewing Company: https://www.cascadelakes.com/.interactive']").dispatchEvent(new MouseEvent('mouseover', { 'bubbles': true }));





function Domains({ signOut, user }) {
  const [domain, setDomain] = useState([])
  const [engineCrawls, setEngineCrawls] = useState([])
  const [bumpCharts, setBumpCharts] = useState({})
  const [work, setIsWorking] = useState(false)
  // const router = useRouter()
  const router = useRouter()
  const { id } = router.query

  function onStuffClick() {
    console.log('click')
    document.querySelector("path[data-testid='line.Cascade Lakes Brewing Company: https://www.cascadelakes.com/.interactive']").dispatchEvent(new MouseEvent('mouseover', { 'bubbles': true }));
  }


  useEffect(() => {
    fetchDomains()
    async function fetchDomains() {
      let domainData = await DataStore.query(Domain, id)
      domainData = domainData[0]
      // const engineCrawls = await DataStore.query(EngineCrawl)
      const engineCrawls = (await DataStore.query(EngineCrawl)).filter(c => c.domainID === domainData?.id);
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

              <button onClick={onStuffClick}>Click</button>

              <Charts bumpCharts={bumpCharts} />
              

            </Card>
          }

        </Box>
      </Container>
    </>
  )
}

export default withAuthenticator(Domains, { socialProviders: ['amazon', 'facebook', 'google'] });
