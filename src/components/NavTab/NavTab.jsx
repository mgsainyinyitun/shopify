import { Box, Tabs, Tab } from "@mui/material";
import PersonPinIcon from '@mui/icons-material/PersonPin';

import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import FormatListBulletedOutlinedIcon from '@mui/icons-material/FormatListBulletedOutlined';
import EngineeringOutlinedIcon from '@mui/icons-material/EngineeringOutlined';
import { useNavigate } from 'react-router-dom';
import { useState } from "react";
export default function NavTab() {

    const [value, setValue] = useState(0);
    const navigate = useNavigate();
    
    const handleChange = (event, newValue) => {
        setValue(newValue);
        switch (newValue) {
            case 0: navigate('/'); break;
            case 1: navigate('/contacts'); break;
            case 2: navigate('/job'); break;
            case 3: navigate('/profile'); break;
            default:
                break;
        }
    };

    return (
        <Box sx={{ border:'1px solid red', background: 'white', display: 'flex', justifyContent: 'center', bottom: 0, position: 'fixed', width: '100%', borderTop: '1px solid gray' }} >
            <Tabs value={value} onChange={handleChange} aria-label="icon tabs example">
                <Tab icon={< HomeOutlinedIcon />} aria-label="Home" />
                <Tab icon={<FormatListBulletedOutlinedIcon />} aria-label="Contacts" />
                <Tab icon={<EngineeringOutlinedIcon />} aria-label="Job" />
                <Tab icon={<PersonPinIcon />} aria-label="My Account" />
            </Tabs>
        </Box>
    );
}