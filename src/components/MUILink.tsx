import { Link, Stack, Typography } from "@mui/material";

const MUILink = () =>{
    return (
        <Stack spacing={2} direction={'row'}  m={4}>
            <Link href="#">Link</Link>
            <Link href="#" color={"secondary"}>Color Link</Link>
            <Link href="#" underline="none">No Underline Link</Link>
            <Typography variant="h6">
                <Link href="#" underline="none">H6 Link</Link>
            </Typography>
        </Stack>
    )
}

export default MUILink;