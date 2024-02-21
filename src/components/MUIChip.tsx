import { Avatar, Chip, Stack } from "@mui/material";
import FaceIcon from '@mui/icons-material/Face';
import { useState } from "react";
const MUIChip =()=>{
    const[chips, setChips] =useState(['Chip-1','Chip-2','Chip-3'])
    const handleDelete = (upChip: string) =>{
        setChips(chips => chips.filter(chip => chip !== upChip))
    }
    return(
        <Stack spacing={4} direction={'row'}>
            <Chip label="Chip"></Chip>
            <Chip label="Chip" color="secondary"></Chip>
            <Chip label="Chip" color="secondary" size="small"></Chip>
            <Chip label="Chip Outlined" color="secondary" variant="outlined"></Chip>
            <Chip label="Chip Outlined" color="secondary" variant="outlined" icon={<FaceIcon/>}></Chip>
            <Chip label="Chip Outlined" color="secondary" variant="outlined" avatar={<Avatar>V</Avatar>}></Chip>
            <Chip label="Delete" color="error" variant="outlined" onDelete={()=> alert('Deleted')}></Chip>
            {
                chips.map(chip =>(
                    <Chip key={chip} label={chip} color="error" variant="outlined" onDelete={()=> handleDelete(chip)}/>
                ))
            }
        </Stack>
    )
}
export default MUIChip;