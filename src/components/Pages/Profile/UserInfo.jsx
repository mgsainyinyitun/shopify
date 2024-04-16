import { Box, Typography, Button } from "@mui/material";
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import AccountBalanceWalletOutlinedIcon from '@mui/icons-material/AccountBalanceWalletOutlined';
import WalletOutlinedIcon from '@mui/icons-material/WalletOutlined';
import ProfileItem from "./ProfileItem";
import LightButton from "../../common/LightButton";

export default function UserInfo() {
    return (
        <Box p={1} m={1} sx={{ display: 'flex', flexDirection: 'column' }}>
            <Typography variant="body2" mb={1}>
                User Information
            </Typography>
            <ProfileItem
                icon={<PersonOutlineOutlinedIcon sx={{ color: 'green' }} />}
                title={'(8082210946)09259433298'}
                description={'09259433298'}
            />
            <ProfileItem
                icon={<AccountBalanceWalletOutlinedIcon />}
                title={'Balance'}
                description={'MN$ 725.44'}
            />
            <ProfileItem
                icon={<WalletOutlinedIcon />}
                title={'Total revenue'}
                description={'247.06'}
            />

            <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                <Button variant="contained" ml={5} disableElevation sx={{ minWidth:550, background: '#ede7f6', color: 'green' }}>
                    DEPOSIT
                </Button>
                <Button variant="contained" disableElevation sx={{minWidth:550, background: '#ede7f6', color: 'green' }}>
                    WITHDRAWL
                </Button>
            </Box>
        </Box>
    );
}