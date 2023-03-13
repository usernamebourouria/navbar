import {  Badge, Box, Button, IconButton, Toolbar, Tooltip, Typography } from '@mui/material';

import React from 'react';
import ErrorIcon from '@mui/icons-material/Error';


const Error = () => {
    
    return (
        <Tooltip title="pas d error ">
        <IconButton>

            <Badge badgeContent={1} color="error">
                <ErrorIcon sx={{ fontSize: 38, color: "#191970" }} />
            </Badge>

        </IconButton>

    </Tooltip>
    

    )
}
export default Error