import { Box, FormControl, FormControlLabel, FormLabel, Radio, RadioGroup } from "@mui/material";
import { useState } from "react";

const MUIRadioButton = () =>{

    const [experience, setExperience] = useState('')
    const changeExperience = (event: React.ChangeEvent<HTMLInputElement>)=>{
        console.log(event.target.value)
        setExperience(event.target.value)
    }
    return (
        <Box>
            <FormControl>
                <FormLabel id="job-experience-group-label">Years of Experience</FormLabel>
                <RadioGroup
                    name="job-experience-group"
                    aria-labelledby="job-experience-group-label"
                    row
                    value={experience}
                    onChange={changeExperience}
                >
                    <FormControlLabel control={<Radio />} label="0-2" value="0-2"/>
                    <FormControlLabel control={<Radio />} label="3-5" value="3-5"/>
                    <FormControlLabel control={<Radio />} label="6-10" value="6-10"/>
                    <FormControlLabel control={<Radio />} label="10+" value="10+"/>
                </RadioGroup>
            </FormControl>
        </Box>
    )
}

export default MUIRadioButton;