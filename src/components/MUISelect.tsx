import { Box, MenuItem, Stack, TextField } from "@mui/material";
import React, { useState } from "react";

const MUISelect = () =>{

    const [country, setCountry] = useState<string>('');
    const changeSelectValue = (event: React.ChangeEvent<HTMLInputElement>) =>{
        console.log(event.target.value as string)
        console.log(event)
        setCountry(event.target.value as string)
    }

    const [countries, setCountries] = useState<string[]>([]);
    const changeSelectValues = (event: React.ChangeEvent<HTMLInputElement>) =>{
        const value = event.target.value;
        console.log(value)
        setCountries(typeof value === "string" ? value.split(",") : value)
    }

    return (
        <Stack spacing={4} display={"block"}>
           <Stack width="400px" direction={"row"} spacing={2}>
                <TextField label="Select Country" select fullWidth
                    onChange={changeSelectValue}
                    value={country}
                >
                    <MenuItem value="in">India</MenuItem>
                    <MenuItem value="us">USA</MenuItem>
                    <MenuItem value="ca">Canada</MenuItem>
                </TextField>
                <TextField label="Select Countries" fullWidth
                    onChange={changeSelectValues}
                    value={countries}
                    SelectProps={{
                        multiple: true
                    }}
                    select
                >
                    <MenuItem value="in">India</MenuItem>
                    <MenuItem value="us">USA</MenuItem>
                    <MenuItem value="ca">Canada</MenuItem>
                </TextField>
           </Stack>
           
        </Stack>
    )
}

export default MUISelect;