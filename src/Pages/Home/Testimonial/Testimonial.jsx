import { Swiper, SwiperSlide } from "swiper/react";
import { FaQuoteLeft } from 'react-icons/fa';

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { FreeMode, Pagination } from "swiper/modules";
import { useEffect, useState } from "react";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";

const Testimonial = () => {
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/review")
      .then((res) => res.json())
      .then((data) => {
        setReviews(data);
      });
  }, []);
  return (
    <div className="m-auto max-w-screen-xl my-20 py-16">
      <Swiper
        slidesPerView={1}
        spaceBetween={20}
        breakpoints={{
          // When window width is >= 640px
          640: {
            slidesPerView: 2,
            spaceBetween: 30,
          },
          // When window width is >= 768px
          640: {
            slidesPerView: 3,
            spaceBetween: 40,
          },
        }}
        pagination={{
          clickable: true,
        }}
        className="mySwiper">
        {reviews.map((review) => (
          <SwiperSlide key={review._id}>
            <div className="text-center">
                <p className="text-6xl text-center flex justify-center text-slate-500"><FaQuoteLeft></FaQuoteLeft></p>
              <h2 className="text-2xl font-semibold text-orange-700">{review.name}</h2>
              <div className="flex items-center justify-center my-3">
                <Rating
                  className="text-center flex justify-center"
                  style={{ maxWidth: 120 }}
                  value={review.rating}
                  readOnly
                />
              </div>
              <p>{review.details}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      
    </div>
  );
};

export default Testimonial;
