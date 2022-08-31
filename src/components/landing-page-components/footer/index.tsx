import React from 'react'
import { FacebookOutlined } from '@mui/icons-material'
import { Box, Typography } from '@mui/material'
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';

const Footer = () => {
    return (
        <Box sx={{ display: 'flex', justifyContent: 'space-between', padding: "60px 40px" }}>
            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '50%', color: process.env.REACT_APP_PRIMARY_COLOR }}>
                <Box>
                    <Typography sx={{ marginBottom: 1, fontWeight: 'bold' }}>Text</Typography>
                    <Typography sx={{ marginBottom: 1, fontSize: 13 }}>Text</Typography>
                    <Typography sx={{ marginBottom: 1, fontSize: 13 }}>Text</Typography>
                    <Typography sx={{ marginBottom: 1, fontSize: 13 }}>Text</Typography>
                </Box>
                <Box>
                    <Typography sx={{ marginBottom: 1, fontWeight: 'bold' }}>Text</Typography>
                    <Typography sx={{ marginBottom: 1, fontSize: 13 }}>Text</Typography>
                    <Typography sx={{ marginBottom: 1, fontSize: 13 }}>Text</Typography>
                    <Typography sx={{ marginBottom: 1, fontSize: 13 }}>Text</Typography>
                </Box>
                <Box>
                    <Typography sx={{ marginBottom: 1, fontWeight: 'bold' }}>Text</Typography>
                    <Typography sx={{ marginBottom: 1, fontSize: 13 }}>Text</Typography>
                    <Typography sx={{ marginBottom: 1, fontSize: 13 }}>Text</Typography>
                    <Typography sx={{ marginBottom: 1, fontSize: 13 }}>Text</Typography>
                </Box>
                <Box>
                    <Typography sx={{ marginBottom: 1, fontWeight: 'bold' }}>Text</Typography>
                    <Typography sx={{ marginBottom: 1, fontSize: 13 }}>Text</Typography>
                    <Typography sx={{ marginBottom: 1, fontSize: 13 }}>Text</Typography>
                    <Typography sx={{ marginBottom: 1, fontSize: 13 }}>Text</Typography>
                </Box>
            </Box>
            <Box display="flex">
                <FacebookOutlined color='primary' fontSize="medium" sx={{ marginLeft: 3 }} />
                <FacebookRoundedIcon color='primary' fontSize="medium" sx={{ marginLeft: 3 }} />
                <FacebookRoundedIcon color='primary' fontSize="medium" sx={{ marginLeft: 3 }} />
                <FacebookRoundedIcon color='primary' fontSize="medium" sx={{ marginLeft: 3 }} />
            </Box>
        </Box>
    )
}

export default Footer