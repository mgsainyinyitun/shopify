import { Box,Typography } from "@mui/material";
import AccountBalanceWalletOutlinedIcon from '@mui/icons-material/AccountBalanceWalletOutlined';
import LanguageOutlinedIcon from '@mui/icons-material/LanguageOutlined';
import ProfileItem from "./ProfileItem";

export default function Configuration() {
    return (
        <Box p={1} m={1} sx={{ display: 'flex', flexDirection: 'column' }}>
            <Typography variant="body2" mb={1}>
                Configuration
            </Typography>
            <ProfileItem
                icon={<AccountBalanceWalletOutlinedIcon />}
                title={'Link Information'}
            />
             <ProfileItem
                icon={<LanguageOutlinedIcon/>}
                title={'Language'}
            />
        </Box>
    );
}