import { Box, FormControlLabel, Switch } from "@mui/material";
import { useState } from "react";

const MUISwitch = () =>{

    const [checked, setChecked] = useState(false)
    const toggleSwitch = (event: React.ChangeEvent<HTMLInputElement>)=>{
        console.log(event.target.checked)
        setChecked(event.target.checked)
    }
    return (
        <Box>
            <FormControlLabel
                label="Dark Mode"
                control={<Switch checked={checked} onChange={toggleSwitch}/>}
            />

            
        </Box>
    )
}

export default MUISwitch;