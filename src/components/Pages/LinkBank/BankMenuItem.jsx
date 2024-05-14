import { Avatar, ListItemIcon, MenuItem } from "@mui/material";
import { useEffect, useState } from "react";
import { getImageFromDb } from "../../../utils/ImageUtils";

export default function BankMenuItem({ bank }) {
    const [imageData, setImageData] = useState(null);

    // useEffect(() => {
    //     getImageFromDb(bank.imageId, setImageData);
    // }, [bank]);

    return (
        <MenuItem value={bank.id}>
            {/* <ListItemIcon>
                <Avatar src={imageData} />
            </ListItemIcon> */}
            {bank.name}
        </MenuItem>
    );
}