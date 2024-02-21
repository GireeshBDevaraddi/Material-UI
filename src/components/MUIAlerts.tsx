import { CheckCircle } from "@mui/icons-material"
import { Alert, AlertTitle, Button, Stack } from "@mui/material"
import CheckIcon from '@mui/icons-material/Check';
const MUIAlerts = () => {
    return (
        <Stack spacing={2}>
            <Alert severity="error">Error Alert</Alert>
            <Alert severity="warning">Warning Alert</Alert>
            <Alert severity="info">Info Alert</Alert>
            <Alert severity="success">Success Alert</Alert>

            <Alert variant="outlined" severity="error">Error Alert</Alert>
            <Alert variant="outlined" severity="warning">Warning Alert</Alert>
            <Alert variant="outlined" severity="info">Info Alert</Alert>
            <Alert variant="outlined" severity="success">Success Alert</Alert>

            <Alert variant="filled" severity="error">
                <AlertTitle>Error</AlertTitle>
                Error Alert
            </Alert>
            <Alert variant="filled" severity="warning">
                <AlertTitle>Warning</AlertTitle>
                Warning Alert
            </Alert>
            <Alert variant="filled" severity="info">
                <AlertTitle>Info</AlertTitle>
                Info Alert
            </Alert>
            <Alert variant="filled" severity="success">
                <AlertTitle>Success</AlertTitle>
                Success Alert
            </Alert>
            <Alert variant="filled" severity="error" onClose={()=> alert("Alerted")}>
                <AlertTitle>Error</AlertTitle>
                Error Alert
            </Alert>
            <Alert variant="filled" severity="warning">
                <AlertTitle>Warning</AlertTitle>
                Warning Alert
            </Alert>
            <Alert variant="filled" severity="info" action={
                <Button color="inherit">
                    Undo
                </Button>
            }>
                <AlertTitle>Info</AlertTitle>
                Info Alert
            </Alert>
            <Alert variant="filled" severity="success" icon={<CheckIcon/>}>
                <AlertTitle>Success</AlertTitle>
                Success Alert
            </Alert>
        </Stack>
    )
}

export default MUIAlerts