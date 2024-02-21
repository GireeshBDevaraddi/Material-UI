import { Badge, Stack } from "@mui/material";
import EmailIcon from '@mui/icons-material/Email';
import CircleNotificationsIcon from '@mui/icons-material/CircleNotifications';
const MUIBadge = () => {
    return (
        <Stack spacing={4} direction={'row'}>
            <Badge badgeContent={5} color="primary">
                <EmailIcon />
            </Badge>
            <Badge badgeContent={5} color="secondary">
                <EmailIcon />
            </Badge>
            <Badge badgeContent={20} color="secondary">
                <CircleNotificationsIcon />
            </Badge>
            <Badge badgeContent={0} color="secondary" showZero>
                <CircleNotificationsIcon />
            </Badge>
            <Badge badgeContent={100} color="secondary">
                <CircleNotificationsIcon />
            </Badge>
            <Badge badgeContent={200} color="secondary" max={999}>
                <CircleNotificationsIcon />
            </Badge>
            <Badge badgeContent={200} color="secondary" max={999} variant="dot">
                <CircleNotificationsIcon />
            </Badge>
        </Stack>
    )
}

export default MUIBadge;