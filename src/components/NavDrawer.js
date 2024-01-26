import React from "react";
import {
    Drawer,
    DrawerHeader,
    List,
    ListItem,
    ListItemText,
} from "@mui/material";
export const NavDrawer = () => {
    return (
        <Drawer anchor="left" open={true}>
            <ListItem>
                <ListItemText primary="ds"></ListItemText>
            </ListItem>
            {/* <DrawerHeader>kds</DrawerHeader> */}
        </Drawer>
    );
};
export default NavDrawer;
