import { Box, Typography, Card, CardContent, Button } from "@mui/material";
import LightButton from "../../common/LightButton";
import ImageSlider from "./ImageSlider";
export default function ShowCase() {
    return (
        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
            <Box sx={{ display: 'flex', width: '100%', justifyContent: 'space-around' }}>
                <Card sx={{ maxWidth: 275, border: 'none', boxShadow: 'none' }}>
                    <CardContent sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                        <Typography>
                            Contracted traders
                        </Typography>
                        <Typography sx={{ fontSize: 14 }} gutterBottom>
                            2804
                        </Typography>
                        <br />
                        <Typography sx={{ mb: 1.5 }} color="text.secondary">
                            Member
                        </Typography>
                        <Typography variant="body2">
                            12789
                        </Typography>
                    </CardContent>
                </Card>
                <Card sx={{ maxWidth: 275, border: 'none', boxShadow: 'none' }}>
                    <CardContent sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                        <Typography sx={{ fontSize: 14 }}  gutterBottom>
                            Products Total
                        </Typography>
                        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                            280
                        </Typography>
                        <br />
                        <Typography sx={{ mb: 1.5 }} color="text.secondary">
                            Order Quantity
                        </Typography>
                        <Typography variant="body2">
                            983567
                        </Typography>
                    </CardContent>
                </Card>
            </Box>

            {/* <Button variant="contained" disableElevation sx={{background:'#ede7f6',color:'green'}}>
               BEGIIN TO WORK
            </Button> */}
            <LightButton
                text={'BEGIN TO WORK'}
            />


            {/* <Box sx={{ width: '100%',height:'200px',overflow:'hidden'}}>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPxfrd4wI6J8H-TTm5xSWZXPglddGveslM8Og3I4u_bA&s"
                    className="showcase-img"
                    alt="Product of the Image" />
            </Box> */}
        </Box>
    );
}