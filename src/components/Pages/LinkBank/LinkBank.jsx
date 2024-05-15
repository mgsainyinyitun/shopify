import { Alert, Avatar, Box, Button, IconButton, InputLabel, ListItemIcon, MenuItem, Modal, OutlinedInput, Select, Snackbar, TextField, Typography } from "@mui/material";
import LinkedBankList from "./LinkedBankList";
import { useEffect, useState } from "react";
import AccountBalanceOutlinedIcon from '@mui/icons-material/AccountBalanceOutlined';
import CheckIcon from '@mui/icons-material/Check';
import CloseIcon from '@mui/icons-material/Close';

import { API_HOST } from "../../../constant";
import axios from "axios";
import NotificationAlert from "../../common/NotificationAlert";
import { getImageFromDb } from "../../../utils/ImageUtils";
import BankItem from "./BankItem";
import BankMenuItem from "./BankMenuItem";
import { ToastContainer } from "react-toastify";
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

export default function LinkBank() {

    const [open, setOpen] = useState(false);
    const [bankInput, setBankInput] = useState(false);
    const [abanks, setaBanks] = useState([]);
    const [banks, setBanks] = useState([]);
    const [showSuccessMsg, setShowSuccessMsg] = useState(false);
    const [Msg, setMsg] = useState('');

    const [formData, setFormData] = useState({
        name: "",
        identification: "",
        userId: localStorage.getItem('user_id'),
        bankId: null,
        email: "",
        phone: ""
    });

    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    function handleBankInputOpen() {
        setOpen(false);
        setBankInput(true);
    }
    const handleBankInputClose = () => setBankInput(false);

    function handleBankInfoSubmit(e) {
        e.preventDefault();

        console.log(parseInt(localStorage.getItem('user_id')))

        console.log("submit");
        console.log(formData)

        const token = localStorage.getItem("accessToken");
        const url = `${API_HOST}/user/bank/create`;
        axios.post(url, formData,
            {
                mode: 'no-cors',
                headers: {
                    'Authorization': `Bearer ${token}`
                },
            }
        ).then(response => {
            console.log("success:", response.data);
            setBankInput(false);
            setMsg("Successfully Linked Bank");
            setShowSuccessMsg(true);
        }).catch(err => {
            console.log(err);
            showToast(err.response.data.message, "error");
            console.log("some error in linking bank");
        })
    }

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
                console.log(error);
                console.log("there is some error;")
            });

        url = `${API_HOST}/bank/all`;
        axios.get(url, {
            mode: 'no-cors',
            params: {},
            headers: {
                'Authorization': `Bearer ${token}`
            },
        })
            .then(response => {
                console.log(response.data.banks);
                setaBanks(response.data.banks);
            })
            .catch(error => {
                console.log(error);
                console.log("there is some error;")
            });
    }, []);

    return (
        <Box sx={{}}>
            <ToastContainer/>
            <NotificationAlert
                type={"success"}
                show={showSuccessMsg}
                setShow={setShowSuccessMsg}
                message={Msg}
            />

            <Typography color={"gray"}>
                Link Management
            </Typography>

            <LinkedBankList />
            <Button onClick={handleOpen} variant="outlined" fullWidth >LINK BANK</Button>

            <Typography mt={5}>Linked Bank </Typography>

            {
                banks.map(b => {
                    return (
                        <BankItem
                            userBank={b}
                        />
                    )
                })
            }


            {/** Modal Section */}
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Typography mb={5} id="modal-modal-title" variant="h6" component="h2">
                        Select In Channel
                    </Typography>
                    <Button onClick={handleBankInputOpen} variant="outlined" fullWidth startIcon={<AccountBalanceOutlinedIcon color="green" />}>
                        PENPANCO
                    </Button>
                </Box>
            </Modal>

            <Modal
                open={bankInput}
                onClose={handleBankInputClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <form onSubmit={handleBankInfoSubmit}>
                    <Box sx={style}>
                        <Typography mb={5} id="modal-modal-title" variant="h6" component="h2">
                            LINK INFORMATION
                        </Typography>
                        <Box>
                            <Box mt={3}>
                                {/* <InputLabel id="choose_bank">Choose Bank</InputLabel> */}
                                <Select
                                    labelId="choose_bank"
                                    name="bankId"
                                    required
                                    fullWidth
                                    size="small"
                                    onChange={handleChange}
                                    input={<OutlinedInput />}

                                >
                                    {
                                        abanks.map(bank => {
                                            return (
                                                <MenuItem value={bank.id}>
                                                    {bank.name}
                                                </MenuItem>);
                                        })
                                    }
                                </Select>
                            </Box>
                            <Box mt={3}>
                                <TextField
                                    label="Name"
                                    name="name"
                                    required
                                    fullWidth
                                    onChange={handleChange}
                                    size="small"
                                />
                            </Box>
                            <Box mt={3}>
                                <TextField
                                    label="Phone Number"
                                    name="phone"
                                    required
                                    fullWidth
                                    onChange={handleChange}
                                    size="small"
                                />
                            </Box>
                            <Box mt={3}>
                                <TextField
                                    label="E-mail (Optional)"
                                    name="email"
                                    onChange={handleChange}
                                    fullWidth
                                    size="small"
                                />
                            </Box>
                            <Box mt={3}>
                                <TextField
                                    label="CPF Number (Optional)"
                                    name="identification"
                                    fullWidth
                                    onChange={handleChange}
                                    size="small"
                                />
                            </Box>
                        </Box>

                        <Box sx={{ display: 'flex', justifyContent: "space-between" }} mt={3}>
                            <Box width={"80%"} />
                            <Box display={"flex"}>
                                <Button sx={{ marginRight: 1 }} onClick={handleBankInputClose} variant="outlined" fullWidth>CANCEL</Button>
                                <Button type="submit" variant="contained" fullWidth>CONFIRM</Button>
                            </Box>
                        </Box>
                    </Box>
                </form>
            </Modal>
        </Box>
    )

}