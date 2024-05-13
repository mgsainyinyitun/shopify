import { Box, ListItemText, Avatar, ListItem, ListItemAvatar, Typography, Rating, Modal, Button } from "@mui/material";
import LightButton from "../../common/LightButton";
import axios from "axios";
import { API_HOST } from "../../../constant";
import { useState } from "react";
import NotificationAlert from "../../common/NotificationAlert";
import { getImageFromDb } from "../../../utils/ImageUtils";
export default function MerchantProduct(props) {


    const [open, setOpen] = useState(false);
    const [imageData, setImageData] = useState(null);

    const [message, setMessage] = useState('');
    const [type, setType] = useState('success');
    const [showMsg, setShowMsg] = useState(false);

    const ButtonInfo = (props) => {
        return (
            <Box mt={3} sx={{ display: 'flex', justifyContent: 'space-around', width: '80%' }}>
                <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <Typography fontSize={13}>Lowest Limit Price</Typography>
                    <Typography fontSize={13}>Rs {props.merchant.lowerLimit}</Typography>
                </Box>

                <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <Typography fontSize={13}>Rating</Typography>
                    <Rating size={"small"} value={props.merchant.rating} unselectable="true" />
                </Box>
            </Box>
        )
    }

    const TextInfo = (props) => {
        const { merchant } = props;
        return (
            <Typography variant="body1" color={'gray'}>
                <b> {merchant.name} </b> — {merchant.description}
            </Typography>
        )
    }

    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: "90%",
        minHeight: "20%",
        bgcolor: 'background.paper',
        borderRadius: 2,
        boxShadow: 24,
        p: 4,
    };

    function showImage(merchant) {
        getImageFromDb(merchant.imageUuid, setImageData);
    }


    function onSign() {
        console.log("signing ...")
        const { merchant } = props;
        console.log(merchant)
        const url = `${API_HOST}/contract/sign`;
        const token = localStorage.getItem("accessToken");
        axios.post(url, { merchantId: merchant.id }, {
            mode: 'no-cors',
            headers: {
                'Authorization': `Bearer ${token}`
            },
        })
            .then(response => {
                console.log(response)
                setMessage("Successfully Contract with Merchant!")
                setShowMsg(true);
                setType("success");
                setOpen(false);
            })
            .catch(error => {
                const er = error.response.data.message || "Something went wrong! Please try again later";
                setMessage(`${er}`)
                setShowMsg(true);
                setType("error");
                console.error(error);
                setOpen(false);
            });
    }


    return (
        <>
            <NotificationAlert
                type={type}
                show={showMsg}
                setShow={setShowMsg}
                message={message}
            />
            <ListItem >
                <ListItemAvatar>
                    {
                        props.merchant ? showImage(props.merchant) : null
                    }
                    <Avatar src={imageData} />
                </ListItemAvatar>
                {
                    props.merchant ? <ListItemText
                        primary={<TextInfo merchant={props.merchant} />}
                        secondary={<ButtonInfo merchant={props.merchant} />}
                    /> : null
                }

            </ListItem>
            <LightButton
                disabled={props.merchant.id === 3 || props.merchant.id === 4 || props.merchant.id === 6 ? true : false}
                onClick={() => setOpen(true)}
                text={'SIGN'}
                style={{ width: '100%' }}
            />

            <Modal
                open={open}
                onClose={() => setOpen(false)}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Typography textAlign={"center"} mb={5} id="modal-modal-title" variant="h6" component="h2">
                        Are you sure want to sign the contract?
                    </Typography>

                    <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                        <Button sx={{ marginRight: 1 }} fullWidth onClick={() => setOpen(false)} variant="outlined">CANCEL</Button>
                        <Button fullWidth onClick={onSign} variant="contained">CONFIRM</Button>
                    </Box>
                </Box>
            </Modal>
        </>
    );
}