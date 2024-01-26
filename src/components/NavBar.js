import { AppBar, Toolbar, IconButton, Typography, Stack } from '@mui/material'
// import {SearchBar} from "./SearchBar"
import SearchBar from './SearchBar';
import Notification from './Notification';
import Profile from './Profile';
import NavDrawer from './NavDrawer';

export const NavBar = () => {
    return (
        <AppBar position ="static" sx={{p: 0}}>
            <Toolbar>
                {/* <Typography variant="h6" component="div">
                    POKEMONAPP
                </Typography> */}
                <Stack direction="row" justifyContent="space-between" alignItems="center" 
                    style={{flexGrow: 1}} >
                    <Typography>Dashboard</Typography>
                    <Stack direction="row" alignItems="center" spacing={2}>
                        <SearchBar></SearchBar>
                        <Notification></Notification>
                        <Profile></Profile>
                    </Stack>
                </Stack>
                {/* <NavDrawer></NavDrawer> */}
            </Toolbar>
        </AppBar>
    )
}

export default NavBar;