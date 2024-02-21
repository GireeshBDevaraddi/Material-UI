import { Avatar, Box, Divider, List, ListItem, ListItemAvatar, ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import EmailIcon from '@mui/icons-material/Email';

const MUIList = () => {
    return (
        <Box
            sx={{
                width: '100%',
                //bgcolor: '#efefef',
                display: 'flex',
                direction: "row",
                margin: "10px"
            }}
        >
            <List sx={{ margin: "10px", bgcolor: '#efefef' }}>
                <ListItem>
                    <ListItemText primary="List Item 1" />
                </ListItem>
                <ListItem>
                    <ListItemText primary="List Item 2" />
                </ListItem>
                <ListItem>
                    <ListItemText primary="List Item 3" />
                </ListItem>
            </List>
            <List sx={{ margin: "10px", bgcolor: '#efefef' }}>
                <ListItem>
                    <ListItemIcon><EmailIcon /></ListItemIcon>
                    <ListItemText primary="List Item 1" />
                </ListItem>
                <ListItem>
                    <ListItemIcon><EmailIcon /></ListItemIcon>
                    <ListItemText primary="List Item 2" />
                </ListItem>
                <ListItem>
                    <ListItemIcon><EmailIcon /></ListItemIcon>
                    <ListItemText primary="List Item 3" />
                </ListItem>
            </List>
            <List sx={{ margin: "10px", bgcolor: '#efefef' }}>
                <ListItem>
                    <ListItemAvatar>
                        <Avatar>
                            <EmailIcon />
                        </Avatar>
                    </ListItemAvatar>
                    <ListItemText primary="List Item 1" />
                </ListItem>
                <ListItem>
                    <ListItemAvatar>
                        <Avatar>
                            <EmailIcon />
                        </Avatar>
                    </ListItemAvatar>
                    <ListItemText primary="List Item 2" />
                </ListItem>
                <ListItem>
                    <ListItemAvatar>
                        <Avatar>
                            <EmailIcon />
                        </Avatar>
                    </ListItemAvatar>
                    <ListItemText primary="List Item 3" />
                </ListItem>
            </List>
            <List sx={{ margin: "10px", bgcolor: '#efefef' }}>
                <ListItem>
                    <ListItemAvatar>
                        <Avatar>
                            <EmailIcon />
                        </Avatar>
                    </ListItemAvatar>
                    <ListItemText primary="List Item 1" secondary="Secondary Item 1" />
                </ListItem>
                <ListItem>
                    <ListItemAvatar>
                        <Avatar>
                            <EmailIcon />
                        </Avatar>
                    </ListItemAvatar>
                    <ListItemText primary="List Item 2" secondary="Secondary Item 2" />
                </ListItem>
                <ListItem>
                    <ListItemAvatar>
                        <Avatar>
                            <EmailIcon />
                        </Avatar>
                    </ListItemAvatar>
                    <ListItemText primary="List Item 3" secondary="Secondary Item 3" />
                </ListItem>
            </List>
            <List sx={{ margin: "10px", bgcolor: '#efefef' }}>
                <ListItem>
                    <ListItemButton>
                        <ListItemAvatar>
                            <Avatar>
                                <EmailIcon />
                            </Avatar>
                        </ListItemAvatar>
                        <ListItemText primary="List Item 1" secondary="Secondary Item 1" />
                    </ListItemButton>
                </ListItem>
                <Divider />
                <ListItem>
                    <ListItemButton>
                        <ListItemAvatar>
                            <Avatar>
                                <EmailIcon />
                            </Avatar>
                        </ListItemAvatar>
                        <ListItemText primary="List Item 2" secondary="Secondary Item 2" />
                    </ListItemButton>
                </ListItem>
                <Divider />
                <ListItem>
                    <ListItemButton>
                        <ListItemAvatar>
                            <Avatar>
                                <EmailIcon />
                            </Avatar>
                        </ListItemAvatar>
                        <ListItemText primary="List Item 3" secondary="Secondary Item 3" />
                    </ListItemButton>
                </ListItem>
            </List>
        </Box>
    )
}

export default MUIList;