import { BottomNavigation, BottomNavigationAction } from "@mui/material";
import HomeIcon from '@mui/icons-material/Home';
import FavoriteIcon from '@mui/icons-material/Favorite';
import PersonIcon from '@mui/icons-material/Person';
import { useState } from "react";

const MUIBottomNavigation = () => {
    const [value, setValue] = useState()
    return (
        <BottomNavigation
            sx={{
                width: '100%'
                //position: 'absolute',
                // bottom: 0
            }} 
            value={value} 
            onChange={(_, newValue) => setValue(newValue)} 
            showLabels
        >
            <BottomNavigationAction label="Home" icon={<HomeIcon />} />
            <BottomNavigationAction label="Favorite" icon={<FavoriteIcon />} />
            <BottomNavigationAction label="Profile" icon={<PersonIcon />} />
        </BottomNavigation>
    )
}
export default MUIBottomNavigation;