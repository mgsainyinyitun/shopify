import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Image1 from "../../../imgs/1.jpg";
import Image2 from "../../../imgs/2.jpg";
import { Box } from "@mui/material";

export default function ImageCarousel() {

    const images = [
        Image1,
        Image2
    ];

    return (
        <Carousel useKeyboardArrows={true} autoPlay={true}>
            {images.map((URL, index) => (
                <Box sx={{ width: '100%',display:'flex',justifyContent:'center' }}>
                    <Box sx={{ width: '30%' }}>
                        <img alt="sample_file" src={URL} key={index} />
                    </Box>
                </Box>
            ))}
        </Carousel>
    );
}