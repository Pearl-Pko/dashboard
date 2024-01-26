import React from "react";
import {
    List,
    ListItem,
    ListItemText,
    Stack,
    Paper,
    Grid,
    Typography,
    Table,
    TableContainer,
    TableHead,
    TableCell,
    TableRow,
    TableBody,
} from "@mui/material";
import data from "../data";

export const Order = () => {
    console.log(data);
    return (
        // <Paper>
        //     <Stack direction="row">
        //         <Typography>Last Orders</Typography>
        //         <Typography>See All</Typography>
        //     </Stack>
        //     <Grid container>
        //         <Grid item xs={12}>
        //             <Grid container>
        //                 {["Name", "Date", "Amount", "Status", "Invoice"].map(
        //                     (value, index) => (
        //                         <Grid item xs>
        //                             {value}
        //                         </Grid>
        //                     )
        //                 )}
        //             </Grid>
        //         </Grid>
        //         {data.map((user) => (
        //             <Grid item xs={12}>
        //                 <Grid container>
        //                     <Grid>
        //                         <Grid item xs>

        //                         </Grid>
        //                     </Grid>
        //                 </Grid>
        //             </Grid>
        //         ))}
        //     </Grid>
        // </Paper>

        // <List>
        //   <ListItem>
        //     <ListItemText primary="Item 1" />
        //   </ListItem>
        //   <ListItem>
        //     <ListItemText primary="Item 2" />
        //   </ListItem>
        //   <ListItem>
        //     <ListItemText primary="Item 3" />
        //   </ListItem>
        // </List>

        <Paper>
            <Stack direction="row" justifyContent="space-between">
                <Typography>Last Orders</Typography>
                <Typography>See All</Typography>
            </Stack>
            <TableContainer>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>Name</TableCell>
                            <TableCell>Date</TableCell>
                            <TableCell>Amount</TableCell>
                            <TableCell>Status</TableCell>
                            <TableCell>Invoice</TableCell>
                        </TableRow>
                    </TableHead>
                    {data["orders"].map((user, index) => (
                        <TableRow key={index}>
                            <TableCell>{user.name}</TableCell>
                            <TableCell>{user.date}</TableCell>
                            <TableCell>{user.amount}</TableCell>
                            <TableCell>{user.status}</TableCell>
                            <TableCell>View</TableCell>
                        </TableRow>
                    ))}
                    <TableBody></TableBody>
                </Table>
            </TableContainer>
        </Paper>
    );
};

export default Order;
