import React, { useEffect, useState } from "react";
import { Domain } from "../../src/models";
import { DataStore } from '@aws-amplify/datastore';
import { useRouter } from 'next/router'

import { withAuthenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';

import {
    Button,
    Box,
    Typography,
    AppBar,
    Card,
    Container,
} from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import Link from '../../src/Link';

import MainToolbar from '../../src/components/MainToolbar'


function Domains({signOut, user}) {
    const [domain, setDomain] = useState([])
    const [work, setIsWorking] = useState(false)
    // const router = useRouter()
    const router = useRouter()
    const { id } = router.query

    useEffect(() => {
      fetchDomains()
      async function fetchDomains() {
        const domainData = await DataStore.query(Domain, id)
        console.log('domainData[0]', domainData[0])
        setDomain(domainData[0])
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
          <Box sx={{ flexGrow: 1, margin: '1rem'}}>
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
                    </Card>
            }

            </Box>
        </Container>
        </>
    )
}

export default withAuthenticator(Domains, {socialProviders:['amazon', 'facebook', 'google']});
