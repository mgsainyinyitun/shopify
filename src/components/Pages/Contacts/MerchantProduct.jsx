import { Box, ListItemText, Avatar, ListItem, IconButton, ListItemAvatar, Button, Card, Typography, Rating } from "@mui/material";
import ImageIcon from '@mui/icons-material/Image';
import LightButton from "../../common/LightButton";
import axios from "axios";
import { API_HOST } from "../../../constant";
import { useState } from "react";
export default function MerchantProduct(props) {

    const ButtonInfo = (props) => {
        return (
            <Box mt={3} sx={{ display: 'flex', justifyContent: 'space-between', width: '80%' }}>
                <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <Typography fontSize={13}>Price</Typography>
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

    const [imageData,setImageData] = useState(null);

    function showImage(merchant) {
        const token = localStorage.getItem("accessToken");
        const url = `${API_HOST}/merchant/image/get`;
        axios.post(url, {
            "uuid":merchant.imageUuid
        }, {
            responseType: 'arraybuffer',
            mode: 'no-cors',
            headers: {
                'Authorization': `Bearer ${token}`
            },
        })
            .then(response => {
                const base64String = btoa(
                    new Uint8Array(response.data).reduce(
                      (data, byte) => data + String.fromCharCode(byte),
                      ''
                    )
                  );
                  setImageData(`data:image/png;base64,${base64String}`)
            
            })
            .catch(error => {
                console.log(error);
                console.log("there is some error;")
                
            });
    }

    return (
        <>
            <ListItem >
                <ListItemAvatar>
                    {
                            props.merchant ? showImage(props.merchant) : null
                    }
                    <Avatar src={imageData}/>
                </ListItemAvatar>
                {
                    props.merchant ? <ListItemText
                        primary={<TextInfo merchant={props.merchant} />}
                        secondary={<ButtonInfo merchant={props.merchant} />}
                    /> : null
                }

            </ListItem>
            <LightButton
                text={'SIGN'}
                style={{ width: '100%' }}
            />
        </>
    );
}