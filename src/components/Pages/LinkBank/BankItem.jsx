import { useEffect, useState } from "react"
import { getImageFromDb } from "../../../utils/ImageUtils";
import { Avatar, Box, Typography } from "@mui/material";

export default function BankItem({ userBank }) {
    const [imageData, setImageData] = useState(null);

    useEffect(() => {
        console.log("to get image:", userBank)
        getImageFromDb(userBank.bank.imageId, setImageData);
    }, [userBank])

    return (
        <Box m={1} p={1} sx={{ border: '1px solid teal', borderRadius: '5px' }} justifyContent='space-between' display='flex' alignItems='center'>
            <Box mr={3}>
                {/* <Avatar src={imageData} /> */}
                {imageData ? 
                (<img src={imageData} width={50} height={50} />) : <Avatar />}

            </Box>
            <Box width='100%'>
                <Typography>{userBank.name}</Typography>
                <Box>
                    <Typography>E-mail: {userBank.email}</Typography>
                    <Typography>Phone : {userBank.phone} </Typography>
                </Box>
            </Box>
        </Box>
    )
}