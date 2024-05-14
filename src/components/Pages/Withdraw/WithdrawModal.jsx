import { Box, Button, Modal, Typography } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import { API_HOST } from "../../../constant";
import { grey } from "@mui/material/colors";
import { showToast } from "../../common/Notification";
const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: "90%",
    minHeight: "40%",
    bgcolor: 'background.paper',
    borderRadius: 2,
    boxShadow: 24,
    p: 4,
};

export default function WithdrawModal({ open, handleClose, amount, uid }) {
    const [banks, setBanks] = useState([]);

    useEffect(() => {
        const token = localStorage.getItem("accessToken");
        let url = `${API_HOST}/user/bank/all`;

        axios.get(url, {
            mode: 'no-cors',
            params: {},
            headers: {
                'Authorization': `Bearer ${token}`
            },
        })
            .then(response => {
                console.log(response.data.banks);
                setBanks(response.data.banks);
            })
            .catch(error => {
                console.error(error);
                console.log("there is some error;")
            });
    }, []);


    function submitWithdraw(bank) {
        console.log(bank);
        console.log(amount);

        const data = {
            uid,
            userBankInfoId: bank.id,
            amount,
        }
        console.log(data);

        const token = localStorage.getItem("accessToken");
        const url = `${API_HOST}/withdraw/request`;

        axios.post(url, data,
            {
                mode: 'no-cors',
                headers: {
                    'Authorization': `Bearer ${token}`
                },
            }
        ).then(response => {
            console.log("success:", response.data);
            showToast("Successfully request to withdraw.", "success");
            handleClose();
        }).catch(err => {
            console.log(err);
            showToast(`Error request to withdraw. ${err.data}`, "error");
            console.log("some error in linking bank");
        })
    }

    return (
        <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box sx={style}>
                <Typography mb={5} id="modal-modal-title" variant="h6" component="h2">
                    Linked Bank
                </Typography>
                {banks.length === 0 ? <Box>No Bank Linked!</Box> : null}
                {
                    banks.map(b => {
                        return (
                            <Box display='flex' justifyContent='space-between' m={1} p={1} sx={{ borderRadius: '5px', background: 'rgba(0,255,0,0.1)' }}>
                                <Box>
                                    <Typography color='primary'>{b.bank.name}</Typography>
                                    <Box>
                                        <Typography variant="subtitle2" fontSize={10} color={grey}>Account: {b.account}</Typography>
                                        <Typography variant="subtitle2" fontSize={10} color={grey} >Phone : {b.phone} </Typography>
                                    </Box>
                                </Box>
                                <Button onClick={() => submitWithdraw(b)} variant="outlined" sx={{ height: 30 }}>CHOOSE</Button>
                            </Box>)
                    })
                }
            </Box>
        </Modal>
    )
}