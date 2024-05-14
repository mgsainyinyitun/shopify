import { Avatar, Box, Button, Typography } from "@mui/material";
import { grey } from "@mui/material/colors";
import { useEffect, useState } from "react";
import { getImageFromDb } from "../../../utils/ImageUtils";

export default function WithdrawBankItem({ b, submitWithdraw }) {
    const [image, setImage] = useState(null);
    useEffect(() => {
        if (b.bank) {
            getImageFromDb(b.bank.imageId, setImage);
        }
    }, [b]);

    return (
        <Box display='flex' justifyContent='space-between' alignItems={'center'} m={1} p={1} sx={{ borderRadius: '5px', background: 'rgba(0,255,0,0.1)' }}>
            <Box>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <img src={image} width={50}/>
                    <Box ml={3}>
                        <Typography color='primary'>{b.bank.name}</Typography>
                        <Typography variant="subtitle2" fontSize={10} color={grey}>Name: {b.name}</Typography>
                        <Typography variant="subtitle2" fontSize={10} color={grey} >Phone : {b.phone} </Typography>
                    </Box>
                </Box>
            </Box>
            <Button sx={{ borderRadius: 15, height: 30 }} onClick={() => submitWithdraw(b)} variant="outlined">CHOOSE</Button>
        </Box>
    );

}