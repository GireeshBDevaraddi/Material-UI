import { CircularProgress, LinearProgress, Stack } from "@mui/material"

const MUIProgress = () => {
    return (
        <Stack>
            <Stack spacing={2} direction={'row'}>
                <CircularProgress></CircularProgress>
                <CircularProgress color="success"></CircularProgress>
                <CircularProgress variant="determinate" value={60} color="success"></CircularProgress>
            </Stack>
            <Stack spacing={2} >
                <LinearProgress></LinearProgress>
                <LinearProgress color="warning"></LinearProgress>
                <LinearProgress variant="determinate" value={60} color="success"></LinearProgress>
            </Stack>
        </Stack>
    )
}

export default MUIProgress