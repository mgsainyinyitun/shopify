import { Box, Typography } from "@mui/material";
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';

import Image1 from "../../../imgs/products/1.png"
import Image2 from "../../../imgs/products/2.jpg"
import Image3 from "../../../imgs/products/3.jpg"
import Image4 from "../../../imgs/products/4.jpg"
import Image5 from "../../../imgs/products/5.jpg"

export default function ProductList() {
    return (
        <Box mt={2} sx={{ display: 'flex', flexDirection: 'column' }}>
            <Typography variant="h6" color="text.secondary">
                Qualtity Trader
            </Typography>

            <List sx={{ width: '100%', bgcolor: 'background.paper' }}>
                <ListItem>
                    <ListItemAvatar>
                        <Avatar alt="product 1" src={Image1} />
                    </ListItemAvatar>
                    <ListItemText secondary="tokopedia — Tokopedia is an online sales website in Indonesia that is being accelerated to make it easier for all communities" />
                </ListItem>
                <ListItem>
                    <ListItemAvatar>
                        <Avatar alt="product 1" src={Image2} />
                    </ListItemAvatar>
                    <ListItemText
                        secondary="Mercado Libre —Latin America's largest e-commerce platform, with nearly 150 million monthly users." />
                </ListItem>
                <ListItem >
                    <ListItemAvatar>
                        <Avatar alt="product 1" src={Image3} />
                    </ListItemAvatar>
                    <ListItemText secondary="Lazada —It has thousands of merchants and annual sales of approximately US$1.5 billion." />
                </ListItem>
                <ListItem>
                    <ListItemAvatar>
                        <Avatar alt="product 1" src={Image4} />
                    </ListItemAvatar>
                    <ListItemText  secondary="Shopee —More than 180 million products available." />
                </ListItem>
                <ListItem >
                    <ListItemAvatar>
                        <Avatar alt="product 1" src={Image5} />
                    </ListItemAvatar>
                    <ListItemText  secondary="Shein —Everything you love, now at your fingertips! SHEIN is a fun and ultra-affordable online shopping platform. From fashion apparel to home, beauty, accessories, shoes and pet, plus electronics, tools, office and more, SHEIN is dedicated to meet all your need" />
                </ListItem>
            </List>
        </Box>
    )

}