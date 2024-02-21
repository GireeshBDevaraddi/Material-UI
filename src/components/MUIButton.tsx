import { Button, ButtonGroup, IconButton, Stack, ToggleButton, ToggleButtonGroup } from "@mui/material";
import SendIcon from '@mui/icons-material/Send';
import FormatItalicIcon from '@mui/icons-material/FormatItalic';
import FormatUnderlinedIcon from '@mui/icons-material/FormatUnderlined';
import FormatBoldIcon from '@mui/icons-material/FormatBold';
import React, { useState } from "react";

const MUIButton = () => {

    const [formats, setFormats] = useState<string[]>([])
    const handleFormatchange = (events: React.MouseEvent<HTMLElement>, newFormats: string[]) => {
        console.log(newFormats)
        setFormats(newFormats)
    }

    const [exeformats, setExeformats] = useState<string[]>([])
    const handleExcusiveFormatchange = (events: React.MouseEvent<HTMLElement>, newFormats: string[])=>{
        console.log(events)
        setExeformats(newFormats)
    }
    return (
        <Stack spacing={4} >
            <Stack  display="block" spacing={2} direction={"row"}>
                <Button variant="text">TEXT</Button>
                <Button variant="contained">CONTAINED</Button>
                <Button variant="outlined">OUTLINED</Button>
            </Stack>
            <Stack display="block" spacing={2} direction={"row"}>
                <Button variant="contained" color="primary">Primary</Button>
                <Button variant="contained" color="secondary">Secondary</Button>
                <Button variant="contained" color="success">Success</Button>
                <Button variant="contained" color="warning">Warning</Button>
                <Button variant="contained" color="info">Info</Button>
                <Button variant="contained" color="error">Error</Button>
            </Stack>
            <Stack display="block" spacing={2} direction={"row"}>
                <Button variant="contained" size="small">Small</Button>
                <Button variant="contained" size="medium">Medium</Button>
                <Button variant="contained" size="large">Large</Button>
            </Stack>
            <Stack display="block" spacing={2} direction={"row"}>
                <Button variant="contained" startIcon={<SendIcon />}>Send</Button>
                <Button variant="contained" endIcon={<SendIcon />}>Send</Button>
                <IconButton color="warning" size="small" aria-label="send" >
                    <SendIcon/>
                </IconButton>
            </Stack>
            <Stack direction={"row"} display="block">
                <ButtonGroup variant="contained">
                    <Button >Left</Button>
                    <Button >Center</Button>
                    <Button >Right</Button>
                </ButtonGroup>
            </Stack>
            <Stack direction={"row"} display="block">
                <ToggleButtonGroup 
                    value={formats}
                    onChange={handleFormatchange}
                >
                    <ToggleButton value="bold"><FormatBoldIcon/></ToggleButton>
                    <ToggleButton value="underline"><FormatUnderlinedIcon/></ToggleButton>
                    <ToggleButton value="italic"><FormatItalicIcon/></ToggleButton>
                </ToggleButtonGroup>
            </Stack>
            <Stack direction={"row"} display="block">
                <ToggleButtonGroup 
                    value={exeformats}
                    onChange={handleExcusiveFormatchange}
                    exclusive
                >
                    <ToggleButton value="bold"><FormatBoldIcon/></ToggleButton>
                    <ToggleButton value="underline"><FormatUnderlinedIcon/></ToggleButton>
                    <ToggleButton value="italic"><FormatItalicIcon/></ToggleButton>
                </ToggleButtonGroup>
            </Stack>
        </Stack>
    )
}

export default MUIButton;