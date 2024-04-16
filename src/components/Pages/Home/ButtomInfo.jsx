import { Box, Divider, Typography } from "@mui/material";
import Image1 from "../../../imgs/products/1.png"
import Image2 from "../../../imgs/products/2.jpg"
import Image3 from "../../../imgs/products/3.jpg"
import Image5 from "../../../imgs/products/5.jpg"

export default function ButtomInfo() {
    return (
        <Box>
            <Typography>
                <br />
                Introduction to the platform
            </Typography>

            <br />
            <p>
                An innovative online shopping platform that gives users the opportunity to earn commissions for purchasing products. Whether you're a regular consumer or a social media influencer, as long as you have access to the internet and enthusiasm, you can earn extra income on our platform.
            </p>

            <br />
            <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                <img src={Image1} alt={`Image`} width={80} />
                <img src={Image2} alt={`Image`} width={80} />
                <img src={Image3} alt={`Image`} width={80} />
                <img src={Image5} alt={`Image`} width={80} />
            </Box>
            <br />
            <Divider />
            <br />
            <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                2024 — Shopify
            </Box>
            <br />
        </Box>
    )
}