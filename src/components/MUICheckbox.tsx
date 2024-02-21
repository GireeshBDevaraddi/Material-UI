import { Box, Checkbox, FormControl, FormControlLabel, FormGroup, FormLabel } from "@mui/material";
import React, { useState } from "react";
import BookmarkIcon from '@mui/icons-material/Bookmark';
import BookmarkAddedIcon from '@mui/icons-material/BookmarkAdded';

const MUICheckbox = () =>{

    const [acceptTnC, setAcceptTnC] = useState(false)
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>)=>{
        console.log(event)
        setAcceptTnC(event.target.checked)
    }

    const [skills, setSkills] = useState<string[]>([])
    console.log(skills)
    const handleSkillChange = (event: React.ChangeEvent<HTMLInputElement>) =>{
        console.log(event)
        const index = skills.indexOf(event.target.value)
        if(index === -1){
            setSkills([...skills, event.target.value])
        }else{
            setSkills(skills.filter((skill)=> skill !== event.target.value))
        }
    }
    return (
        <Box>
            <Box>
                <FormControlLabel 
                    label="Accept Terms & conditions"
                    control={<Checkbox checked={acceptTnC} onChange={handleChange}/>}
                />
            </Box>
            <Box>
                <Checkbox 
                    icon={<BookmarkIcon/>}
                    checkedIcon={<BookmarkAddedIcon/>}
                    checked={acceptTnC}
                    onChange={handleChange}
                />
            </Box>

            <Box>
                <FormControl>
                    <FormLabel>Skills</FormLabel>
                    <FormGroup row>
                        <FormControlLabel 
                            label="HTML"
                            value="html"
                            control={<Checkbox color="error" checked={skills.includes('html')} onChange={handleSkillChange} />}
                        />
                        <FormControlLabel 
                            label="CSS"
                            value="css"
                            control={<Checkbox color="secondary" checked={skills.includes('css')} onChange={handleSkillChange} />}
                        />
                        <FormControlLabel 
                            label="JAVASCRIPT"
                            value="js"
                            control={<Checkbox color="success" checked={skills.includes('js')} onChange={handleSkillChange} />}
                        />
                    </FormGroup>
                </FormControl>
            </Box>
        </Box>
    )
}

export default MUICheckbox;