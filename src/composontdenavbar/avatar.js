import {Avatar, Button, Typography } from '@mui/material';

import React from 'react';

const Avatarbar = () => {
    
    return (
        <Button variant="outlined"  >
        <Typography mr={2} varient="h6" color="#191970"> samy bendayka</Typography>

        <Avatar mr={2}
            sx={{ width: 40, height: 40 }}
            src="bendayha.png"

        > </Avatar>
    </Button>
    

    )
}
export default Avatarbar