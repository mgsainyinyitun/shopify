import { Box, Typography } from "@mui/material";
import AccountBalanceWalletOutlinedIcon from '@mui/icons-material/AccountBalanceWalletOutlined';
import LanguageOutlinedIcon from '@mui/icons-material/LanguageOutlined';
import ProfileItem from "./ProfileItem";
import { Link } from "react-router-dom";

export default function Configuration() {
    return (
        <Box p={1} m={1} sx={{ display: 'flex', flexDirection: 'column' }}>
            <Typography variant="body2" mb={1}>
                Configuration
            </Typography>
            <Link to={"/link"} style={{textDecoration:'none',color:'black'}}>
                <ProfileItem
                    icon={<AccountBalanceWalletOutlinedIcon />}
                    title={'Link Information'}
                />
            </Link>
            <ProfileItem
                icon={<LanguageOutlinedIcon />}
                title={'Language'}
            />
        </Box>
    );
}