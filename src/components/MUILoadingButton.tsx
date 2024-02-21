import { Stack } from "@mui/material";
import { LoadingButton } from '@mui/lab';
import SaveIcon from '@mui/icons-material/Save';

const MUILoadingButton = ()=>{
    return (
        <Stack spacing={2} direction={'row'}>
            <LoadingButton>Loading Button</LoadingButton>
            <LoadingButton variant="outlined">Loading Button</LoadingButton>
            <LoadingButton variant="outlined" loading>Loading Button</LoadingButton>
            <LoadingButton variant="outlined" color="warning">Loading Button</LoadingButton>
            <LoadingButton variant="outlined" color="warning" loading>Loading Button</LoadingButton>
            <LoadingButton variant="outlined" color="warning">Loading Button</LoadingButton>
            <LoadingButton variant="outlined" color="warning" loadingIndicator="Loading..." loading>Loading Button</LoadingButton>
            <LoadingButton 
                variant="outlined" 
                color="warning" 
                loadingPosition="start" 
                startIcon={<SaveIcon/>}>Fetch Data</LoadingButton>
            <LoadingButton 
                variant="outlined" 
                color="warning" 
                loading 
                loadingPosition="start" 
                startIcon={<SaveIcon/>}>Fetch Data</LoadingButton>

        </Stack>
    )
}

export default MUILoadingButton;