
    import { Box, Collapse, Divider, Drawer, IconButton, List, ListItemButton, ListItemIcon, ListItemText, ListSubheader, Typography } from '@mui/material';
import React, { useState } from 'react'
import MenuIcon from '@mui/icons-material/Menu';
import AutoGraphIcon from '@mui/icons-material/AutoGraph';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import HomeIcon from '@mui/icons-material/Home';
import DirectionsBoatIcon from '@mui/icons-material/DirectionsBoat';
import ThermostatIcon from '@mui/icons-material/Thermostat';
import RadarIcon from '@mui/icons-material/Radar';
import MapIcon from '@mui/icons-material/Map';
import HistoryIcon from '@mui/icons-material/History';
import styled from '@emotion/styled';

const Home = () => {
    const [open, setOpen] = React.useState(true);

    const handleClick = () => {
      setOpen(!open);
    };
    const Titrelist = styled(Box)(({ theme }) => ({
       
        varient:"h6",  color:"#191970"
    
    }));
    return (
        
<List sx={{ width: '100%', maxWidth: 500, bgcolor: 'background.paper' }}

    subheader={
        <ListSubheader component="div" id="nested-list-subheader">
         
            <Typography varient="h6" mr={2} color="#191970" >    < DirectionsBoatIcon /> AquaRob  </Typography>
        </ListSubheader>
  

    }></List>
  

    

    )
}
export default Home