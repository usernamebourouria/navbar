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

const Map = () => {
    const [open, setOpen] = React.useState(true);

    const handleClick = () => {
      setOpen(!open);
    };
    const Titrelist = styled(Box)(({ theme }) => ({
       
        varient:"h6",  color:"#191970"
    
    }));
    return (
        <List>
            <ListItemButton onClick={handleClick}>
                            <ListItemIcon>
                                < MapIcon sx={{ color:"#191970" }} />
                            </ListItemIcon>
                            <Titrelist> <ListItemText primary="Map" /></Titrelist>
                            {open ? <ExpandLess sx={{ color:"#191970" }}/> : <ExpandMore />}
                        </ListItemButton>
                        <Collapse in={open} timeout="auto" unmountOnExit>
                            <List component="div" disablePadding>
                                <ListItemButton sx={{ pl: 4 }}>
                                    <ListItemIcon>
                                        <ThermostatIcon  sx={{ color:"#191970" }}/>
                                    </ListItemIcon>
                                    <Titrelist> <ListItemText primary="temperature" /></Titrelist>
                                </ListItemButton>
                            </List>
                            <List component="div" disablePadding>
                                <ListItemButton sx={{ pl: 4 }}>
                                    <ListItemIcon>
                                        <RadarIcon sx={{ color:"#191970" }} />
                                    </ListItemIcon>
                                    <Titrelist> <ListItemText > Rssi </ListItemText></Titrelist>
                                </ListItemButton>
                            </List>
                        </Collapse>
                        <Divider />

        </List>

    )
}
export default Map