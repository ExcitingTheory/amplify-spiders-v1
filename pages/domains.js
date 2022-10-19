import React, { useEffect, useState } from "react";
import { Domain } from "../src/models";
import { DataStore } from '@aws-amplify/datastore';

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
import Link from '../src/Link';

import MainToolbar from '../src/components/MainToolbar'


function Domains({signOut,user}) {
    const [domains, setDomains] = useState([])
    const [work, setIsWorking] = useState(false)
    // const router = useRouter()

    useEffect(() => {
      fetchDomains()
      async function fetchDomains() {
        const domainData = await DataStore.query(Domain)
        setDomains(domainData)
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
              Domains
            </Typography>
          </Box>
        </MainToolbar>
        </AppBar>
        <Container
            style={{
                padding: '2rem 1rem',
                marginTop: '3rem'
            }}>

            {/* <h1>hello {user.username}</h1>
            <button onClick={signOut}>Sign Out</button> */}
    
            <h1>Domains &nbsp;<Button variant="outlined" color="primary" ><AddIcon />&nbsp;Create New</Button></h1>
    
            <Box>
            {!domains &&
                <div>Loading...</div>
            }
            {domains &&
                domains.map(function (domain) {
                    return (
                        <Card 
                            key={domain.id}
                            sx={{
                                margin: '1rem auto',
                                padding: '2rem',
                                flexGrow: '1',
                                minWidth: 'min-content'
                            }}
                        >
                            <Link href={`/domain/${domain.id}`} color='secondary' disabled={work}>
                                <h2>{domain.name || 'Untitled Domain'}</h2>
                            </Link>
                            <div>{domain.description}</div>
                        </Card>
                    )
                })
            }
            </Box>
        </Container>
        </>
    )
}

export default withAuthenticator(Domains);
// export default withAuthenticator(Domains, {socialProviders:['amazon', 'facebook', 'google']});
