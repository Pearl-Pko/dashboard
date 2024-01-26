import { Paper, Typography, Stack, List, ListItem, LinearProgress } from '@mui/material';
import React from 'react'
import data from '../data';

export const Platform = () => {
  return (
    <Paper>
        <Stack direction="row" style={{flexGrow: 1}} justifyContent="space-between">
            <Typography>Top Platform</Typography>
            <Typography>See all</Typography>
        </Stack>
        <List>
            {data["platforms"].map((value, index) => (
                <ListItem >
                    <Stack style={{flexGrow: 1}}>
                        <Typography>{value.name}</Typography>
                        <LinearProgress variant="determinate" value={(value.profit/5000000) * 100}></LinearProgress>
                        <Stack direction="row" style={{flexGrow: 1}} justifyContent="space-between">
                            <Typography>{value.profit}</Typography>
                            <Typography>{value.netGain}</Typography>
                        </Stack>
                    </Stack>
                </ListItem>
            ))}
        </List>
    </Paper>
  )
}

export default Platform;