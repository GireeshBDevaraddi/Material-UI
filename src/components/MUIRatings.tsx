import { Box, Rating, Stack } from "@mui/material";
import React, { useState } from "react";
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

const MUIRatings = () => {

    const [ratings, setRatings] = useState<number | null>(null)
    const giveRatings = (_event: React.ChangeEvent<{}>, value: number | null) => {
        console.log(value)
        setRatings(value)
    }
    return (
        <Stack spacing={2} display="block">
            <Rating value={ratings} onChange={giveRatings} precision={0.5}  color="error" /><br></br>
            <Rating 
                value={ratings} 
                onChange={giveRatings} 
                
                icon={<FavoriteIcon fontSize="inherit" color="error"/>}
                emptyIcon={<FavoriteBorderIcon fontSize="inherit"/>}
            />
        </Stack>
    )
}

export default MUIRatings;