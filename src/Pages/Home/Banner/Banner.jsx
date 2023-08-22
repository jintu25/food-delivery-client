import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import img1 from "../../../assets/banner/slider-1.webp";
import img2 from "../../../assets/banner/slider-2.webp";
import img3 from "../../../assets/banner/slider-3.webp";

const Banner = () => {
  return (
    <div className="text-center">
      <Carousel autoPlay={true} interval={3000} infiniteLoop={true}>
      <div>
        <img src={img1} alt="" />
      </div>
      <div>
        <img src={img2} alt="" />
      </div>
      <div>
        <img src={img3} alt="" />
      </div>
    </Carousel>
    </div>
  );
};

export default Banner;
