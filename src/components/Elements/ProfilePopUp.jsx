import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import LogoutIcon from '@mui/icons-material/Logout';
import React, { useContext } from 'react';
import axios from 'axios';
import Person2Icon from '@mui/icons-material/Person2';
import { useNavigate } from 'react-router-dom';

const ProfilePopUp = ({ setOpenProfilePopUp, setToken }) => {
  const navigate = useNavigate();

  const handleLogOut = () => {
    axios
      .delete('https://jittery-wasp-undershirt.cyclic.cloud/logout', {
        withCredentials: true,
      })
      .then((response) => {
        setOpenProfilePopUp(false);
        setToken('');
        console.log('Deleted successfully:', response);
      })
      .catch((error) => {
        console.error('Error deleting data:', error);
      });
  };
  return (
    <div className="absolute scale-75 right-3 top-10">
      <Box sx={{ width: '100%', maxWidth: 360, bgcolor: '#111827', color: 'white' }}>
        <nav aria-label="main mailbox folders">
          <List>
            <ListItem
              disablePadding
              onClick={() => {
                navigate('/profile');
              }}
            >
              <ListItemButton>
                <ListItemIcon style={{ color: 'white' }}>
                  <Person2Icon />
                </ListItemIcon>
                <ListItemText primary="Profile" />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding onClick={handleLogOut}>
              <ListItemButton>
                <ListItemIcon style={{ color: 'white' }}>
                  <LogoutIcon />
                </ListItemIcon>
                <ListItemText primary="logout" />
              </ListItemButton>
            </ListItem>
          </List>
        </nav>
        <Divider />
      </Box>
    </div>
  );
};

export default ProfilePopUp;
