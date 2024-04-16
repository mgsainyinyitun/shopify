import { Box, Typography } from "@mui/material";
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import ImageIcon from '@mui/icons-material/Image';
import WorkIcon from '@mui/icons-material/Work';
import BeachAccessIcon from '@mui/icons-material/BeachAccess';
import IconButton from '@mui/material/IconButton';

export default function Ranking() {
    const users = [
        {
            name: "User_**3313d9",
            money: "Rs 8238892",
        },
        {
            name: "User_**8eea6e",
            money: "Rs 7220012",
        },
        {
            name: "User_**dd1869",
            money: "Rs 6923020",
        },
        {
            name: "User_**e7a121",
            money: "Rs 5292831",
        },
        {
            name: "User_**2F26ac",
            money: "Rs 4123990",
        },
        {
            name: "User_**f327ee",
            money: "Rs 3299230",
        },
        {
            name: "User_**9a3e0a",
            money: "Rs 3112899",
        },
        {
            name: "User_**7dee78",
            money: "Rs 2928920",
        },
        {
            name: "User_**f20018",
            money: "Rs 2889029",
        },
        {
            name: "User_**a49149",
            money: "Rs 1002992",
        },

    ]

    return (
        <Box mt={2} sx={{ display: 'flex', flexDirection: 'column' }}>
            <Typography variant="h6" color="text.secondary">
                Personal Income Ranking
            </Typography>

            <List sx={{ width: '100%', bgcolor: 'background.paper' }}>
                {
                    users.map(usr => {
                        return (
                            <ListItem
                                secondaryAction={
                                    <IconButton edge="end" aria-label="comments">
                                        <Typography>{usr.money}</Typography>
                                    </IconButton>
                                }
                            >
                                <ListItemAvatar>
                                    <Avatar>
                                       U
                                    </Avatar>
                                </ListItemAvatar>
                                <ListItemText primary={usr.name} />
                            </ListItem>
                        );
                    })
                }
            </List>
        </Box>
    );
}