import { Box, Button, TextField, Typography } from "@mui/material";
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
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

export default function SignIn() {
    const navigate = useNavigate();
    function handleSignin(e) {
        e.preventDefault();
        console.log(formData);

        const url = `${API_HOST}/auth/login`;

        axios.post(url,{
            username:formData.username,
            password:formData.password
        })
            .then(response => {
                localStorage.setItem('accessToken', response.data.accessToken);
                localStorage.setItem("user_id",response.data.uid)
                navigate("/");
            })
            .catch(error => {
                console.error(error);
            });

    }

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const [formData, setFormData] = useState({
        username: '',
        password: '',
    });

    return (
        <Box >
            <Box display={'flex'} alignItems={'center'}>
                <PersonOutlineOutlinedIcon sx={{ marginRight: 3 }} />
                <Typography sx={{ marginRight: 3 }} >Login </Typography>
                <Box sx={{ border: '1px solid black', width: '100%' }}>
                </Box>
            </Box>
            <br />
            <form onSubmit={handleSignin}>
                <Box>
                    <Box mt={3}>
                        <RoundedTextField
                            label="Username/ Mobile Phone number"
                            onChange={handleChange}
                            value={formData.username}
                            name="username"
                            required
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
                    <Box mt={3} display={'flex'} justifyContent={'space-between'}>
                        <Button type="submit" fullWidth sx={{ borderRadius: 20 }} variant="contained" disableElevation>SIGN IN</Button>
                        <Box sx={{ width: '10px' }} />
                        <Button fullWidth sx={{ borderRadius: 20 }} onClick={()=>navigate("/signup")} variant="outlined">SIGN UP</Button>
                    </Box>
                </Box >
            </form>
        </Box >
    )
}