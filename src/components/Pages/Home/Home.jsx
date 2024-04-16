import ButtomInfo from "./ButtomInfo";
import ImageCarousel from "./ImageCarousel";
import ImageSlider from "./ImageSlider";
import ProductList from "./ProductList";
import Ranking from "./Ranking";
import ShowCase from "./ShowCase";

function Home(){
    return (
        <>
            <ImageCarousel/>
            <ShowCase/>
            <ProductList/>
            <Ranking/>
            <ButtomInfo/>
        </>
    );
}

export default Home; 