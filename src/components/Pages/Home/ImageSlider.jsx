import Slider from "react-slick";
import Image1 from "../../../imgs/1.jpg";
import Image2 from "../../../imgs/2.jpg";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Box } from '@mui/material';

const images = [
    Image1,
    Image2
];
export default function ImageSlider() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };

    return (
        <Slider  {...settings} >
            {images.map((image, index) => (
                <Box key={index} sx={{ display: 'flex', justifyContent: 'center' }}>
                    <img src={image} alt={`Image ${index + 1}`} width={300} />
                </Box>
            ))}
        </Slider>
    );
}