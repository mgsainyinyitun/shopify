import { Box, Button, TextField, Typography } from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Withdraw() {
    const navigate = useNavigate();
    const [amount, setAmount] = useState(0);
    function submit(e){
        e.preventDefault();
        console.log(amount);
    }
    return (
        <Box>
            <form onSubmit={submit}>
                <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                    <Typography mb={3}>Enter the withdrawal amount</Typography>
                    <Box display={'flex'} alignItems={'center'}>
                        <Typography mr={1} color={'gray'} variant="h5"><i>Rs</i></Typography>
                        <TextField
                            InputProps={{ style: { borderRadius: '50px' } }}
                            id="outlined-password-input"
                            label="Amount"
                            type="search"
                            autoComplete="current-password"
                            size="small"
                            fullWidth
                            onChange={e=>setAmount(e.target.value)}
                        /></Box>
                </Box>
                <Box mt={3} sx={{ display: 'flex', flexDirection: 'column' }}>
                    <Typography mb={2}>Payment Channel</Typography>
                    <Button type="submit" fullWidth variant="outlined">Go To Links</Button>
                </Box>
            </form>
        </Box>
    );
}