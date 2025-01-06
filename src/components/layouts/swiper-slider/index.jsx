// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// import { Pagination } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import bg1 from "../../../assets/images/shi-bg-slider2.png";
import bg2 from "../../../assets/images/shi-slider-bg-fotor-20250104172957.png";
import SwiperCart from "./cart";
import { Pagination } from "swiper/modules";

const slides = [
   {
      id: "1",
      media: bg1,
      head: "Capturing Moments",
      altText: "Creating memories"
   },
   {
      id: "2",
      media: bg2,
      head: "Capturing",
      altText: "Creating memories"
   }
 ];

function SwiperContents({type}) {
  return (
    <Swiper
      modules={[Pagination]}
      spaceBetween={10}
      slidesPerView={1}
      resistanceRatio={0}
      pagination={{ clickable: true }}
    >
      {slides.map((slide, index) => (
        <SwiperSlide key={slide.id}>
         {type === "swiper-carts" ? <SwiperCart head={slide.head} altText={slide.altText} media={slide.media}/> : ""}
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

export default SwiperContents;
