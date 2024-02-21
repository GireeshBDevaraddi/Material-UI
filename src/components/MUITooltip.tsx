import { IconButton, Tooltip } from "@mui/material"
import DeleteIcon from '@mui/icons-material/Delete';
const MUITooltip = () =>{
    return(
        <Tooltip title="Delete" arrow>
            <IconButton>
                <DeleteIcon/>
            </IconButton>
        </Tooltip>
    )
}

export default MUITooltip