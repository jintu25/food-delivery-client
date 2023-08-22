// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import slide1 from "../../../assets/home/slide1.jpg";
import slide2 from "../../../assets/home/slide2.jpg";
import slide3 from "../../../assets/home/slide3.jpg";
import slide4 from "../../../assets/home/slide4.jpg";
import slide5 from "../../../assets/home/slide5.jpg";
import slide6 from "../../../assets/home/slide6.jpg";

// import required modules
import { Pagination } from "swiper/modules";
import SubTitle from "../../../Components/SubTitle/SubTitle";

const Category = () => {
  return (
    <div className=" m-auto max-w-screen-xl my-20">
        <SubTitle
            subHeading={'---From 11:00am to 10:00pm---'}
            heading={'ORDER ONLINE'}
         >

        </SubTitle>
      <Swiper
        slidesPerView={1}
        spaceBetween={20}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          "@0.00": {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          "@0.75": {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          "@1.00": {
            slidesPerView: 2,
            spaceBetween: 40,
          },
          "@1.50": {
            slidesPerView: 4,
            spaceBetween: 40,
          },
        }}
        modules={[Pagination]}
        className="mySwiper">
        <SwiperSlide>
          <img className="w-full" src={slide1} alt="" />
          <h2 className="uppercase text-xl lg:text-3xl  text-center relative top-[-50px] text-white shadow-2xl font-[cursive] font-semibold">Salad</h2>
        </SwiperSlide>
        <SwiperSlide>
          <img className="w-full" src={slide2} alt="" />
          <h2 className="uppercase text-xl lg:text-3xl  text-center relative top-[-50px] text-white shadow-2xl font-[cursive] font-semibold">Pizzas</h2>
        </SwiperSlide>
        <SwiperSlide>
          <img className="w-full" src={slide3} alt="" />
          <h2 className="uppercase text-xl lg:text-3xl  text-center relative top-[-50px] text-white shadow-2xl font-[cursive] font-semibold">Soups</h2>
        </SwiperSlide>
        <SwiperSlide>
          <img className="w-full" src={slide4} alt="" />
          <h2 className="uppercase text-xl lg:text-3xl  text-center relative top-[-50px] text-white shadow-2xl font-[cursive] font-semibold">Desserts</h2>
        </SwiperSlide>
        <SwiperSlide>
          <img className="w-full" src={slide5} alt="" />
          <h2 className="uppercase text-xl lg:text-3xl  text-center relative top-[-50px] text-white shadow-2xl font-[cursive] font-semibold">Burgers</h2>
        </SwiperSlide>
        <SwiperSlide>
          <img className="w-full" src={slide6} alt="" />
          <h2 className="uppercase text-xl lg:text-3xl  text-center relative top-[-50px] text-white shadow-2xl font-[cursive] font-semibold">Fried</h2>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Category;
