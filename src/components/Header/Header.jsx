import { Box, Button, IconButton, ListItemIcon, ListItemText, Menu, MenuItem, MenuList, Typography } from "@mui/material";
import LanguageIcon from '@mui/icons-material/Language';
import icon from "../../imgs/icon/iconpng.jpg";
import { ContentCut } from "@mui/icons-material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Header() {
    const [anchorEl, setAnchorEl] = useState(null);
    const navigate = useNavigate();
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };
    
    const handleProfile = () => {
        navigate("/profile");
    }

    const handleLogout = () => {
        localStorage.setItem("accessToken", "");
        localStorage.setItem("user_id", "");
        navigate("/signin");
    }

    return (
        <header>
            <Box p={1} sx={{ borderBottom: "1px solid rgba(255,0,0,0.1)", zIndex: 1, background: 'white', display: 'flex', justifyContent: 'space-between', position: 'fixed', top: 0, width: '100%' }}>
                <Box ml={1} sx={{ display: 'flex', alignItems: 'center' }}>
                    <Box>
                        <img src={icon} width={120} />
                    </Box>
                </Box>
                <Box mr={1}>
                    <IconButton
                        onClick={handleClick}
                    >
                        <LanguageIcon />
                    </IconButton>
                    <Menu
                        id="fade-menu"
                        MenuListProps={{
                            'aria-labelledby': 'fade-button',
                        }}
                        anchorEl={anchorEl}
                        open={Boolean(anchorEl)}
                        onClose={handleClose}
                    >
                        <MenuItem onClick={handleProfile}>Profile</MenuItem>
                        {/* <MenuItem onClick={handleClose}>My account</MenuItem> */}
                        <MenuItem onClick={handleLogout}>Logout</MenuItem>
                    </Menu>
                </Box>
            </Box>
        </header>
    );
}

export default Header;