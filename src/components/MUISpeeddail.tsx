import {SpeedDial, SpeedDialAction, SpeedDialIcon, Stack } from "@mui/material";
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import PrintIcon from '@mui/icons-material/Print';
import ShareIcon from '@mui/icons-material/Share';
import EditIcon from '@mui/icons-material/Edit';
const MUISpeedDail = ()=>{
    return(
        <Stack spacing={4} direction={'row'}>
            <SpeedDial 
            ariaLabel={"Nav Speed Dail"}
            //sx={{position: "absolute", bottom: 16, right: 16}}  
            icon={<SpeedDialIcon/> }      
        >
            <SpeedDialAction icon={<ContentCopyIcon/>} tooltipTitle="Copy" />
            <SpeedDialAction icon={<PrintIcon/>} tooltipTitle="Print" />
            <SpeedDialAction icon={<ShareIcon/>} tooltipTitle="Share" />
        </SpeedDial>
        
        <SpeedDial 
            ariaLabel={"Nav Speed Dail"}
            //sx={{position: "absolute", bottom: 16, right: 16}}  
            icon={<SpeedDialIcon openIcon={<EditIcon/>}/> }      
        >
            <SpeedDialAction icon={<ContentCopyIcon/>} tooltipTitle="Copy" tooltipOpen/>
            <SpeedDialAction icon={<PrintIcon/>} tooltipTitle="Print" tooltipOpen/>
            <SpeedDialAction icon={<ShareIcon/>} tooltipTitle="Share" tooltipOpen/>
        </SpeedDial>
        </Stack>
    )
}

export default MUISpeedDail;