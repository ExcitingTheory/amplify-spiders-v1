import * as React from 'react';
// import AppBar from '@mui/material/AppBar';
// import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
// import Typography from '@mui/material/Typography';
// import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Box from '@mui/material/Box';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import BatteryUnknownIcon from '@mui/icons-material/BatteryUnknown';
import HomeIcon from '@mui/icons-material/Home';
import LanguageIcon from '@mui/icons-material/Language';
import PeopleIcon from '@mui/icons-material/People';


export default function MainToolbar({ children }) {
  const [state, setState] = React.useState({
    // top: false,
    left: false,
    // bottom: false,
    // right: false,
  });

  const toggleDrawer = (anchor, open) =>
    (event) => {
      if (
        event &&
        event.type === 'keydown' &&
        ((event).key === 'Tab' ||
          (event).key === 'Shift')
      ) {
        return;
      }

      setState({ ...state, [anchor]: open });
    };


  return (
    <>
      <Toolbar>
        <IconButton
          size="large"
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ mr: 2 }}
          onClick={toggleDrawer('left', true)}
        >
          <MenuIcon />
        </IconButton>
        {/* <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}> */}
        {children &&
          children
        }
        {/* </Typography> */}
        <Button disabled color="inherit">Login</Button>
      </Toolbar>
      {(['left']).map((anchor) => (
        <React.Fragment key={anchor}>
          {/* <Button onClick={toggleDrawer(anchor, true)}>{anchor}</Button> */}
          <SwipeableDrawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
            onOpen={toggleDrawer(anchor, true)}
          >
            <Box
              sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
              role="presentation"
              onClick={toggleDrawer(anchor, false)}
              onKeyDown={toggleDrawer(anchor, false)}
            >
              <List>
              <ListItem disablePadding>
                  <ListItemButton component="a" href='/'>
                    <ListItemIcon>
                      <HomeIcon />
                    </ListItemIcon>
                    <ListItemText primary='Home' />
                  </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                  <ListItemButton component="a" href='/about'>
                    <ListItemIcon>
                      <BatteryUnknownIcon />
                    </ListItemIcon>
                    <ListItemText primary='About Us' />
                  </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                  <ListItemButton component="a" href='/domains'>
                    <ListItemIcon>
                      <LanguageIcon />
                    </ListItemIcon>
                    <ListItemText primary='Domains' />
                  </ListItemButton>
                </ListItem>
              </List>
            </Box>
          </SwipeableDrawer>
        </React.Fragment>
      ))}
    </>
  );
}