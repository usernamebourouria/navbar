import styled from '@emotion/styled';
import { AppBar,  Badge, Box, Button, IconButton, Toolbar, Tooltip, Typography } from '@mui/material';
import SailingIcon from '@mui/icons-material/Sailing';
import React from 'react';
import CircleNotificationsIcon from '@mui/icons-material/CircleNotifications';
import ErrorIcon from '@mui/icons-material/Error';
import Nav from '../list/nav';
import Avatarbar from '../composontdenavbar/avatar';
import Error from '../composontdenavbar/error';
const Styletoolbar = styled(Toolbar)({
    display: "flex",
    justifyContent: "space-between"
})

const Icons = styled(Box)(({ theme }) => ({
    display: "flex",
    gap: "20px",
    alignItems: 'center'

}));


const Navbar = () => {






    return (
        <Box>
            <AppBar sx={{ bgcolor: "#fff" }} position="fixed">
                <Styletoolbar>
                    <Icons>
                        <Nav />
                        <Typography varient="h6" mr={2} color="#191970" >AquaRob  <SailingIcon /></Typography>
                    </Icons>
                    <Icons>
                       <Error/>
                         <Avatarbar/>
                    </Icons>
                </Styletoolbar>



            </AppBar>
        </Box>
    )
}
export default Navbar