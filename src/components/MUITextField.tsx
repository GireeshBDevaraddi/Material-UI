import { IconButton, InputAdornment, Stack, TextField } from "@mui/material";
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import { useState } from "react";
const MUITextField = ()=>{

    const [showPassword, setShowPassword] = useState(false)
    const [changeType, setchangeType] = useState("password")
    const changePasswordVisibility = ()=>{
        if(showPassword){
            setchangeType("password")
        }else{
            setchangeType("text")
        }
        setShowPassword(!showPassword)
        
    }
    return (
        <Stack spacing={4}>
            <Stack spacing={2} direction={"row"} display="block">
                <TextField label="Outlined"  variant="outlined"/>
                <TextField label="Filled"  variant="filled"/>
                <TextField label="Standard"  variant="standard"/>
            </Stack>
            <Stack spacing={2} direction={"row"} display="block">
                <TextField label="Small Secondary"  size="small" color="secondary"/>
                <TextField label="Medium Error"  size="medium" color="error" variant="filled"/>
                <TextField label="Small Success"  size="small" color="success"variant="standard"/>
            </Stack>
            <Stack spacing={2} direction={"row"} display="block">
                <TextField label="Input the Data"  required/>
                <TextField label="Input the Data"  required helperText="It is must Required"/>
                <TextField label="Password" required helperText="It is must Required" type="password"/>
                <TextField label="Read Only" InputProps={{readOnly: true}}/>
            </Stack>
            <Stack spacing={2} direction={"row"} display="block">
                <TextField label="Amount" InputProps={{
                    startAdornment: <InputAdornment position="start"> $ </InputAdornment>
                }}/>
                <TextField label="Weight" InputProps={{
                    endAdornment: <InputAdornment position="end"> Kg </InputAdornment>
                }}/>
                <TextField label="Password" InputProps={{
                    endAdornment: <InputAdornment position="end"><VisibilityIcon /></InputAdornment>
                }}/>
                <TextField label="Password Visibility" type={changeType} InputProps={{
                    endAdornment: <InputAdornment position="end">
                        <IconButton
                            onClick={changePasswordVisibility}
                        >
                            {showPassword ? <VisibilityIcon /> : <VisibilityOffIcon/>}
                        </IconButton>
                    </InputAdornment>
                }}/>
            </Stack>
        </Stack>
    )
}

export default MUITextField;