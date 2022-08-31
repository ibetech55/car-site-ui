import React from 'react'
import { Box, Typography } from '@mui/material'

const Section3 = () => {
    return (
        <Box sx={{ padding: 4, background: process.env.REACT_APP_PRIMARY_COLOR, color: "#fff" }}>
            <Typography variant="h3" sx={{ textAlign: 'center', marginBottom: 2 }}>Section 3</Typography>
            <Typography>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rem ratione voluptatum, officia error esse veritatis ipsam! Enim perspiciatis laborum placeat. Cumque modi harum vero quibusdam, doloribus odio laboriosam quo deserunt iusto voluptates soluta, veritatis repudiandae obcaecati culpa et! Necessitatibus rem enim sapiente aspernatur quod dolorem, deserunt libero ea nisi tempore.</Typography>
        </Box>
    )
}

export default Section3