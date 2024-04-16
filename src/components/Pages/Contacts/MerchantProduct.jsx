import { Box, ListItemText, Avatar, ListItem, IconButton, ListItemAvatar, Button, Card, Typography, Rating } from "@mui/material";
import ImageIcon from '@mui/icons-material/Image';
import LightButton from "../../common/LightButton";
export default function MerchantProduct(props) {


    const ButtonInfo = () => {
        return (
            <Box sx={{ display: 'flex', justifyContent: 'space-between', width: '80%' }}>
                <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <Typography>Price</Typography>
                    <Typography>B$ 200</Typography>
                </Box>

                <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <Typography>Rating</Typography>
                    <Rating value={3} />
                </Box>
            </Box>
        )
    }


    return (
        <>
            <ListItem >
                <ListItemAvatar>
                    <Avatar>
                        <ImageIcon />
                    </Avatar>
                </ListItemAvatar>
                <ListItemText
                    primary={props.info}
                    secondary={<ButtonInfo />}
                />

            </ListItem>
            <LightButton
                text = {'SIGN'}
                style ={{width:'100%'}}
            />
            {/* <Button variant="contained" disableElevation sx={{width:'100%', background: '#ede7f6', color: 'green' }}>
                SIGN
            </Button> */}
        </>
    );
}