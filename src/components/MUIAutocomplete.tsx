import { Autocomplete, Stack, TextField } from "@mui/material";
import { useState } from "react";

 const MUIAutocomplete = () =>{
    const skills = ["HTML", "CSS", "JAVASCRIPT", "REACT", "ANGULAR", "NEXTJS"]
    const [skill, setSkill] = useState<string | null>(null)
    const handleChange = (event: any, newSkill: string | null)=>{
        console.log(newSkill)
        setSkill(newSkill)
    }
    return (
        <Stack spacing={2} width={"250px"} display={"block"}>
            <Autocomplete 
                options={skills}
                renderInput={(params)=> <TextField {...params} label="Skills" />}
                value={skill}
                onChange={handleChange}
            />
        </Stack>
    )
}

export default MUIAutocomplete;