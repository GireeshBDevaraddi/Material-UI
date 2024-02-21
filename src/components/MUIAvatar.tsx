import { Avatar, AvatarGroup, Stack } from "@mui/material"

const MUIAvatar = () => {
    return (
        <Stack spacing={4}>
            <Stack spacing={1} direction={'row'}>
                <Avatar sx={{ backgroundColor: 'primary.light' }}>BW</Avatar>
                <Avatar sx={{ backgroundColor: 'success.light' }}>GB</Avatar>
                <Avatar>CK</Avatar>
            </Stack>
            <Stack spacing={1} direction={'row'}>
                <AvatarGroup>
                    <Avatar sx={{ backgroundColor: 'primary.light' }}>BW</Avatar>
                    <Avatar sx={{ backgroundColor: 'success.light' }}>GB</Avatar>
                    <Avatar>CK</Avatar>
                    <Avatar>DB</Avatar>
                </AvatarGroup>
            </Stack>
            <Stack spacing={1} direction={'row'}>
                <AvatarGroup max={3}>
                    <Avatar sx={{ backgroundColor: 'primary.light' }}>BW</Avatar>
                    <Avatar sx={{ backgroundColor: 'success.light' }}>GB</Avatar>
                    <Avatar>CK</Avatar>
                    <Avatar>DB</Avatar>
                </AvatarGroup>
            </Stack>
            <Stack spacing={1} direction={'row'}>
                
                    <Avatar sx={{ backgroundColor: 'primary.light', width: 48, height: 48 }} variant="square">BW</Avatar>
                    <Avatar sx={{ backgroundColor: 'success.light', width: 48, height: 48  }} variant="square">GB</Avatar>
                    <Avatar>CK</Avatar>
                    <Avatar>DB</Avatar>
            </Stack>
        </Stack>
    )
}

export default MUIAvatar