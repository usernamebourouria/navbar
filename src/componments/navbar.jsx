import styled from '@emotion/styled';
import { AppBar, Avatar, Badge, Box, Button, IconButton, Toolbar, Tooltip, Typography } from '@mui/material';
import SailingIcon from '@mui/icons-material/Sailing';
import React from 'react';
import CircleNotificationsIcon from '@mui/icons-material/CircleNotifications';
import ErrorIcon from '@mui/icons-material/Error';
import Nav from '../list/nav';
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
                        <Tooltip title="il y 20 notification ">
                            <IconButton>
                                <Badge badgeContent={20} color="error">
                                    <CircleNotificationsIcon sx={{ fontSize: 38, color: "#191970" }} />
                                </Badge>
                            </IconButton>
                        </Tooltip>

                        <Tooltip title="pas d error ">
                            <IconButton>

                                <Badge badgeContent={1} color="error">
                                    <ErrorIcon sx={{ fontSize: 38, color: "#191970" }} />
                                </Badge>

                            </IconButton>
                        </Tooltip>
                        <Button variant="outlined"  >
                            <Typography mr={2} varient="h6" color="#191970"> samy bendayka</Typography>

                            <Avatar mr={2}
                                sx={{ width: 40, height: 40 }}
                                src="bendayha.png"
                            > </Avatar>
                        </Button>
                        {/* LENA NKALIO EL SRC VARIABLE SI UTILISATEUR 7AT PHOTO OLA BINE AAVTAR AVATR N7TOU AWEL 7ARF MEN ESMOU PLUS NA9DROU N7ATOU COULEUR YETHA H BLEU OU F  ROSE COMME CA sx={{ bgcolor: deepOrange[500]  */}
                    </Icons>
                </Styletoolbar>



            </AppBar>
        </Box>
    )
}
export default Navbar