import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { EffectCoverflow, Autoplay } from "swiper";

export default function Slider() {
  <Swiper
    effect="coverflow"
    grabCursor={true}
    loop={true}
    direction="vertical"
    autoplay={{ delay: 3000 }}
    centeredSlides={true}
    slidesPerView="auto"
    className="h-screen px-12"
  >
    <SwiperSlide className="flex justify-center items-center w-auto h-auto m-1">
      <img src="/1.png" alt="slide" className="w-12/12" />
    </SwiperSlide>
    <SwiperSlide className="flex justify-center items-center w-auto h-auto m-1">
      <img src="/2.png" alt="slide" className="w-12/12" />
    </SwiperSlide>
    <SwiperSlide className="flex justify-center items-center w-auto h-auto m-1">
      <img src="/3.png" alt="slide" className="w-12/12" />
    </SwiperSlide>
    <SwiperSlide className="flex justify-center items-center w-auto h-auto m-1">
      <img src="/4.png" alt="slide" className="w-12/12" />
    </SwiperSlide>
    <SwiperSlide className="flex justify-center items-center w-auto h-auto m-1">
      <img src="/5.png" alt="slide" className="w-12/12" />
    </SwiperSlide>
  </Swiper>;
}
