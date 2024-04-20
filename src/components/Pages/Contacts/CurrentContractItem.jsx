import { Avatar, Box, Button, Chip, IconButton, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { getImageFromDb } from "../../../utils/ImageUtils";

export default function CurrentContractItem({ merchant, status }) {

    const [imageData, setImageData] = useState(null);

    useEffect(() => {
        getImageFromDb(merchant.imageUuid, setImageData);
    }, []);

    return (
        <Box m={1} p={1}
            sx={{
                background: 'rgba(0,255,0,0.05)',
                borderRadius: '10px',
                border: '1px solid rgba(0,255,0,0.2)', display: 'flex', alignItems: 'center',
                justifyContent: "space-between"
            }}

        >
            <Box display={"flex"} alignItems={"center"}>
                <Avatar src={imageData} />
                <Typography color={"gray"}>
                    <b> {merchant.name} </b> — {merchant.description}
                </Typography>
            </Box>

            {
                status === "APPROVED" ?
                    <Button sx={{borderRadius:'20px'}} variant="outlined" size="small">{status}</Button> :
                    <Chip size="small" label={status} />
            }
        </Box>
    );
}