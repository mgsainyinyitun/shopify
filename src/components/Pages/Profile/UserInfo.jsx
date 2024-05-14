import { Box, Typography, Button, Rating, IconButton, Chip } from "@mui/material";
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import AccountBalanceWalletOutlinedIcon from '@mui/icons-material/AccountBalanceWalletOutlined';
import WalletOutlinedIcon from '@mui/icons-material/WalletOutlined';
import SyncOutlinedIcon from '@mui/icons-material/SyncOutlined';
import ProfileItem from "./ProfileItem";
import { useNavigate } from "react-router-dom";

export default function UserInfo(props) {

    const navigate = useNavigate();

    const UserRating = ({ user }) => {
        return (
            <Box display={"flex"}>
                <Typography mr={1} variant="body2" color={"gray"} fontSize={13}>Qualification </Typography>
                <Rating size="small" value={user.membership} />
            </Box>);
    }

    return (
        <Box p={1} m={1} sx={{ display: 'flex', flexDirection: 'column' }}>
            <Box display={"flex"} justifyContent={"space-between"}>
                <Typography variant="body2" mb={1}>
                    User Information
                </Typography>
                <UserRating user={props.user} />
            </Box>
            <ProfileItem
                icon={<PersonOutlineOutlinedIcon sx={{ color: 'green' }} />}
                title={`(${props.user.uid})${props.user.username}`}
                description={props.user.phone}
                leftContent={<Button><Chip label="Invite Friend" size="small" /></Button>}
            />
            <ProfileItem
                icon={<AccountBalanceWalletOutlinedIcon />}
                title={'Balance'}
                description={`Rs/ ${props.user.balance}`}
                leftContent={<IconButton><SyncOutlinedIcon /></IconButton>}
            />
            <ProfileItem
                icon={<WalletOutlinedIcon />}
                title={'Total revenue'}
                description={`Rs/ ${props.user.revenue}`}
                leftContent={<Button variant="outlined" size="small">BEGIN</Button>}
            />

            <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>


                <Button variant="outlined" sx={{ marginRight: "5px", color: 'green' }} fullWidth>DEPOSIT</Button>

                <Button onClick={() => 
                    navigate(`/profile/withdraw/${props.user.uid}`, {
                        replace: false,
                        state: {
                            user:props.user
                        }
                    }
                    // navigate(`/profile/withdraw/${props.user.uid}`

                    )} variant="outlined" fullWidth sx={{ marginRight: "5px" }}>WITHDRWL</Button>

                {/* <Button variant="contained" ml={5} disableElevation sx={{ minWidth:550, background: '#ede7f6', color: 'green' }}>
                    DEPOSIT
                </Button>
                <Button variant="contained" disableElevation sx={{minWidth:550, background: '#ede7f6', color: 'green' }}>
                    WITHDRAWL
                </Button> */}
            </Box>
        </Box>
    );
}