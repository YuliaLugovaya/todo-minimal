import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

function Header(props) {
  return (
    <header className='header'>
      <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar variant="dense" style={{ padding: "0 0 0 5vw" }}>
          <Typography variant="h6" color="inherit" component="div">
          ToDo-list
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
    </header>
  );
}

export default Header;