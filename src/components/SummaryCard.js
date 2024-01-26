import React from 'react'
import { Card, Typography, Box, CardContent } from '@mui/material'

export const SummaryCard = () => {
  return (
    <Card>
        <CardContent sx={{flexGrow: 1}}>
            <Box>
                ds
            </Box>
            <Box>
                <Typography>Total Order</Typography>
                <Typography>350</Typography>
            </Box>
            <Box sx={{display: "flex", justifyContent:"space-between"}}>
                <Box>23.5%</Box>
                <Box>vs. previous month</Box>
            </Box>
        </CardContent>
    </Card>
  )
}

export default SummaryCard