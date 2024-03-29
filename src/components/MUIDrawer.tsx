import { Box, Drawer, IconButton, Typography } from "@mui/material";
import { useState } from "react";
import MenuIcon from '@mui/icons-material/Menu';
const MUIDrawer = () =>{

    const [isDrawerOpen, setIsDrawerOpen] = useState(false)
    return(
        <>
        <IconButton size="large" edge="start" color="inherit" aria-label="logo" onClick={()=> setIsDrawerOpen(true)}>
            <MenuIcon/>Drawer
        </IconButton>
        <Drawer anchor="left" open={isDrawerOpen} onClose={()=>setIsDrawerOpen(false)}>
            <Box p={2} width='250p' textAlign='center' role='presentation'>

                <Typography variant="h6" component="div"> Side Bar</Typography>
            </Box>
        </Drawer>
        </>
        
    )
}

export default MUIDrawer;