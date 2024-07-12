// components/BottomNav.js
"use client"
import React ,{useState} from 'react';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import HomeIcon from '@mui/icons-material/Home';
import SportsCricketIcon from '@mui/icons-material/SportsCricket';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import GroupIcon from '@mui/icons-material/Group';
import GroupAddIcon from '@mui/icons-material/GroupAdd';
import { useRouter } from 'next/navigation';
const Navbar = () => {
    const [value, setValue] = useState('home');
const router=useRouter()
    const handleNavigation = (event, newValue) => {
      setValue(newValue);
      switch (newValue) {
        case 'home':
          router.push('/dashboard/home');
          break;
        case 'mycricket':
          router.push('/dashboard/mycricket');
          break;
        case 'creatematch':
          router.push('/dashboard/creatematch');
          break;
        case 'myteams':
          router.push('/dashboard/myteams');
          break;
        case 'createteam':
          router.push('/dashboard/createteam');
          break;
        default:
          break;
      }
    };
  
  return (
    <BottomNavigation
      sx={{ width: '100%', position: 'fixed', bottom: 0 ,height: 80,alignItems: 'center'}}
      onChange={handleNavigation}
      value={value}
    >
      <BottomNavigationAction
        label="Home"
        value='home'
        icon={<HomeIcon sx={{ fontSize: 35 }} />}
      />
      <BottomNavigationAction
        label="My Cricket"
        value='mycricket'
        icon={<SportsCricketIcon sx={{ fontSize: 35 }} />}
      />
      <BottomNavigationAction
        label="Create Match"
        value='creatematch'
        icon={<AddCircleOutlineIcon sx={{ fontSize: 35 }} />}
      />
      <BottomNavigationAction
        label="MyTeams"
        value='myteams'
        icon={<GroupIcon sx={{ fontSize: 35 }} />}
      />
       <BottomNavigationAction
        label="create team"
        value='createteam'
        icon={<GroupAddIcon sx={{ fontSize: 35 }} />}
      />
    </BottomNavigation>
  );
};

export default Navbar;
