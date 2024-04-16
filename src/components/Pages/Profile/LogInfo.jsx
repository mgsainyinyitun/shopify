import { Box,Typography } from "@mui/material";
import ScreenShareOutlinedIcon from '@mui/icons-material/ScreenShareOutlined';
import FeedOutlinedIcon from '@mui/icons-material/FeedOutlined';
import AddchartOutlinedIcon from '@mui/icons-material/AddchartOutlined';
import ProfileItem from "./ProfileItem";

export default function LogInfo() {
    return (
        <Box p={1} m={1} sx={{ display: 'flex', flexDirection: 'column' }}>
            <Typography variant="body2" mb={1}>
                Log Information
            </Typography>
            <ProfileItem
                icon={<AddchartOutlinedIcon />}
                title={'Recharge Log'}
            />
             <ProfileItem
                icon={<ScreenShareOutlinedIcon/>}
                title={'Withdrawal Log'}
            />
             <ProfileItem
                icon={<FeedOutlinedIcon/>}
                title={'Work Log'}
            />
        </Box>
    );
}