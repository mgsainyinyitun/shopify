import { Box, Button, TextField, Typography } from "@mui/material";
import PersonAddAltOutlinedIcon from '@mui/icons-material/PersonAddAltOutlined';
import { useState } from "react";
import { API_HOST } from "../../../constant";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const RoundedTextField = (props) => {
    return (
        <TextField
            {...props}
            id="outlined-basic"
            variant="outlined"
            size="small"
            fullWidth
            sx={{
                '& .MuiOutlinedInput-root': {
                    borderRadius: '20px', // Customize the border radius
                },
            }}
        />
    );
};

export default function SignUp() {
    const navigate = useNavigate();
    function handleSignin(e) {
        e.preventDefault();
        console.log(formData);

        const url = `${API_HOST}/auth/register`;

        if (formData.password === formData.cpassword) {
            axios.post(url, {
                username: formData.username,
                phone: formData.phone,
                password: formData.password
            })
                .then(response => {
                    console.log(response)
                    navigate("/signin");
                })
                .catch(error => {
                    console.error(error);
                });
        }else{
            console.log("password not match");
        }
    }

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const [formData, setFormData] = useState({
        username: '',
        phone: '',
        password: '',
        cpassword: '',
    });

    return (
        <Box >
            <Box display={'flex'} alignItems={'center'}>
                <PersonAddAltOutlinedIcon sx={{ marginRight: 3 }} />
                <Typography sx={{ marginRight: 3 }} >Register </Typography>
                <Box sx={{ border: '1px solid black', width: '100%' }}>
                </Box>
            </Box>
            <br />
            <form onSubmit={handleSignin}>
                <Box>
                    <Box mt={3}>
                        <RoundedTextField
                            label="Username"
                            onChange={handleChange}
                            value={formData.username}
                            name="username"
                            required
                        />
                    </Box>
                    <Box mt={3}>
                        <RoundedTextField
                            label="Phone number"
                            onChange={handleChange}
                            value={formData.phone}
                            name="phone"
                        />
                    </Box>
                    <Box mt={3}>
                        <RoundedTextField
                            label="Password"
                            onChange={handleChange}
                            value={formData.password}
                            name="password"
                            type="password"
                            required
                        />
                    </Box>
                    <Box mt={3}>
                        <RoundedTextField
                            label="Confirm Password"
                            onChange={handleChange}
                            value={formData.cpassword}
                            name="cpassword"
                            type="password"
                            required
                        />
                    </Box>

                    <Box mt={3} display={'flex'} justifyContent={'space-between'}>
                        <Button type="submit" fullWidth sx={{ borderRadius: 20 }} variant="contained" disableElevation>SIGN UP</Button>
                        <Box sx={{ width: '10px' }} />
                        <Button fullWidth sx={{ borderRadius: 20 }} onClick={() => navigate("/signin")} variant="outlined" >SIGN IN</Button>
                    </Box>
                </Box >
            </form>
        </Box >
    )
}