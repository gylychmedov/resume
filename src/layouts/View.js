import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { EffectCoverflow, Autoplay } from "swiper";

const View = ({ children }) => {
  SwiperCore.use([EffectCoverflow, Autoplay]);
  return (
    <main className="h-screen flex">
      <section className=" w-2/6 h-full b-blue">
        <Swiper
          effect="coverflow"
          grabCursor={true}
          loop={true}
          direction="vertical"
          autoplay={{ delay: 3000 }}
          centeredSlides={true}
          slidesPerView="auto"
          // coverflowEffect={{
          //   rotate: 50,
          //   stretch: 0,
          //   depth: 100,
          //   modifier: 1,
          //   slideShadows: true,
          // }}
          pagination={{
            el: ".swiper-pagination",
          }}
          className="h-screen px-12"
        >
          {/* //   // direction="vertical"
        //   slidesPerView="2"
        //   effect="coverflow"
        //   loop={true}
        //   centeredSlides={true}
        //   breakpoints={{
        //     640: {
        //       width: 640,
        //       slidesPerView: 1,
        //     },
        //     768: {
        //       width: 768,
        //       slidesPerView: 2,
        //     },
        //   }}
        // > */}
          <SwiperSlide className="flex justify-center items-center w-auto h-auto m-1">
            <img src="/1.png" alt="slide" className="w-12/12" />
          </SwiperSlide>
          <SwiperSlide className="flex justify-center items-center w-auto h-auto m-1">
            <img src="/2.png" alt="slide" className="w-12/12" />
          </SwiperSlide>{" "}
          <SwiperSlide className="flex justify-center items-center w-auto h-auto m-1">
            <img src="/3.png" alt="slide" className="w-12/12" />
          </SwiperSlide>
          <SwiperSlide className="flex justify-center items-center w-auto h-auto m-1">
            <img src="/4.png" alt="slide" className="w-12/12" />
          </SwiperSlide>{" "}
          <SwiperSlide className="flex justify-center items-center w-auto h-auto m-1">
            <img src="/5.png" alt="slide" className="w-12/12" />
          </SwiperSlide>
        </Swiper>
      </section>

      <section className="w-4/6 flex flex-col bg-white">
        <nav className="bg-white flex justify-center items-center px-5 w-full">
          <div className="flex">
            <Link href="/">
              <a className="py-4 mx-5">Home</a>
            </Link>
            <Link href="/">
              <a className="py-4 mx-5">Our tools</a>
            </Link>
            <Link href="/">
              <a className="py-4 mx-5">About Us</a>
            </Link>
            <Link href="/">
              <a className="py-4 mx-5">Contact</a>
            </Link>
          </div>
        </nav>
        <main className="mt-2">{children}</main>
      </section>
    </main>
  );
};

export default View;
