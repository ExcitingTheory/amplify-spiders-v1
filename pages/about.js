import * as React from 'react';
// import Paper from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';


import MainToolbar from '../src/components/MainToolbar'

export default function About() {
  return (
    <>
    <AppBar
        position="fixed"
        color="default"
    >
    <MainToolbar>
      <Box sx={{ flexGrow: 1, margin: '1rem'}}>
      <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          About Us
        </Typography>
      </Box>
    </MainToolbar>
    </AppBar>
    <Container

      style={{
        padding: '2rem 1rem',
        margin: '3rem auto',
        
    }}>
      <Card sx={{minHeight: '60vh'}}>
      <Typography variant="h2" component="div" sx={{ flexGrow: 1, textAlign: 'center', position: 'sticky', top: '20%' }}>
          Super Interesting Information About Us Goes Here...
        </Typography>
      </Card>

    </Container>
    </>
  );
}
