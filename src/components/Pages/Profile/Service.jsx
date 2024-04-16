import { Box,Typography } from "@mui/material";
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import ProfileItem from "./ProfileItem";

export default function Service() {
    return (
        <Box p={1} m={1} sx={{ display: 'flex', flexDirection: 'column' }}>
            <Typography variant="body2" mb={1}>
                Service
            </Typography>
            <ProfileItem
                icon={<NotificationsNoneOutlinedIcon />}
                title={'Message Nofification'}
            />
        </Box>
    );
}