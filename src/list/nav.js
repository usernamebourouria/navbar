import { Box, Divider, Drawer, IconButton, List, ListItemButton, ListItemIcon, ListItemText, ListSubheader, Typography } from '@mui/material';
import React, { useState } from 'react'
import MenuIcon from '@mui/icons-material/Menu';
import Map from './map';
import Graph from './graphe';
import Home from './home';
import History from './histor';
const Nav = () => {
    const [Openlist, setopen] = useState(false)
    const [open, setOpen] = React.useState(true);
    return (
        <React.Fragment>
            <Drawer open={Openlist}
                onClose={() => setopen(false)}
            >
                <Box sx={{ width: Openlist === 'top' || Openlist === 'bottom' ? 'auto' : 250 }} >
                    <List >
                        <Home />
                        <Divider />
                        <Graph />
                        <Map />
                        <History />
                    </List>
                </Box>
            </Drawer>
            <IconButton
                onClick={() => setopen(!Openlist)}
                size="large"
                edge="start"
                color="blue"
                aria-label="menu"
                sx={{ mr: 2 }}
            >
                <MenuIcon />
            </IconButton>
        </React.Fragment >
    )
}
export default Nav;