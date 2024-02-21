import { AppBar, Button, IconButton, Menu, MenuItem, Stack, Toolbar, Typography } from "@mui/material";
import CatchingPokemonIcon from '@mui/icons-material/CatchingPokemon';
import React, { useState } from "react";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
const MUINavbar = () => {

    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>()
    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget)
    }
    const open = Boolean(anchorEl)
    const handleClose = () => {
        setAnchorEl(null)
    }
    return (
        <AppBar position="static">
            <Toolbar>
                <IconButton size="large" edge="start" color="inherit" aria-label="logo">
                    <CatchingPokemonIcon />
                </IconButton>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                    POKEMANAPP
                </Typography>
                <Stack spacing={2} direction={"row"}>
                    <Button color="inherit">Features</Button>
                    <Button color="inherit">Pricing</Button>
                    <Button color="inherit">About</Button>
                    <Button color="inherit">Login</Button>
                    <Button
                        id="resource-button"
                        color="inherit"
                        onClick={handleClick}
                        aria-controls={open ? 'resource-menu' : undefined}
                        aria-expanded={open ? 'true' : undefined}
                        aria-haspopup='true'
                        endIcon={open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}>Resources</Button>
                </Stack>
                <Menu
                    id="resource-menu"
                    open={open}
                    anchorEl={anchorEl}
                    MenuListProps={{
                        "aria-labelledby": "resource-button"
                    }}
                    onClose={handleClose}
                    anchorOrigin={{
                        vertical: 'bottom',
                        horizontal: 'left',
                      }}
                      transformOrigin={{
                        vertical: 'top',
                        horizontal: 'left',
                      }}
                >
                    <MenuItem onClick={handleClose}>Blog</MenuItem>
                    <MenuItem onClick={handleClose}>Contact-Us</MenuItem>
                </Menu>
            </Toolbar>
        </AppBar>
    )
}

export default MUINavbar;