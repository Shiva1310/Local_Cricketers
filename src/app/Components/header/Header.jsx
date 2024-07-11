// components/Header.js
import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import AccountCircle from '@mui/icons-material/AccountCircle';
import NotificationsIcon from '@mui/icons-material/Notifications';

const Header = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          User Name
        </Typography>
        <IconButton edge="end" color="inherit" aria-label="notifications"  sx={{ p: 0, mr: 2 }}>
          <NotificationsIcon  sx={{ fontSize: 35 }}/>
        </IconButton>
        <IconButton edge="end" color="inherit" aria-label="account"   sx={{ p: 0, mr: 2 }}>
          <AccountCircle sx={{ fontSize: 35 }} />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
