import { Box, Button, TextField, Typography } from "@mui/material";
import { useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import WithdrawModal from "./WithdrawModal";
import { ToastContainer } from "react-toastify";

export default function Withdraw() {
    const { uid } = useParams();
    const location = useLocation();
    const { user } = location.state;

    const [amount, setAmount] = useState(0);
    const [open, setOpen] = useState(false);
    function submit(e) {
        e.preventDefault();
        console.log(amount);
    }
    return (
        <Box>
            <ToastContainer />
            <form onSubmit={submit}>
                <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                    <Typography mb={3}>Enter the withdrawal amount</Typography>
                    <Typography mb={3} variant="subtitle2">User balance : <i className="green"> {user.balance} Rs</i></Typography>
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
                            onChange={e => setAmount(e.target.value)}
                        /></Box>
                </Box>
                <Box mt={3} sx={{ display: 'flex', flexDirection: 'column' }}>
                    <Typography mb={2}>Payment Channel</Typography>
                    <Button onClick={() => setOpen(true)} fullWidth variant="outlined">Go To Links</Button>
                </Box>
            </form>
            <WithdrawModal open={open} handleClose={() => setOpen(false)} amount={amount} uid={uid} />
        </Box>
    );
}