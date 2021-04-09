import Link from "next/link";
import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { EffectCoverflow, Autoplay } from "swiper";
import { HiDeviceMobile, HiHome } from "react-icons/hi";
import { FaGlobe, FaPenNib } from "react-icons/fa";
import { useTheme } from "next-themes";
import { BsMoon } from "react-icons/bs";
import { IoMdSunny } from "react-icons/io";

const View = ({ children }) => {
  const { theme, setTheme } = useTheme();
  SwiperCore.use([EffectCoverflow, Autoplay]);
  return (
    <main className="h-screen flex">
      <section className=" w-2/6 h-full bg-gray-200 dark:bg-gray-900 relative">
        <aside className="flex justify-between items-center bg-blur absolute z-10 left-0 right-0 py-3 bg-white dark:bg-gray-700 bg-opacity-60">
          <div className=" ml-2 hover:bg-white hover:text-dark  duration-700 ease-in-out hover:text-gray-900 py-2 flex items-center px-3 rounded-full bg-opacity-60 font-bold cursor-pointer z-10">
            <HiHome size={18} />
          </div>
          <div className="flex">
            <div className=" hover:bg-white hover:text-dark mr-1 lg:mr-3 lg:text-xl duration-700 ease-in-out hover:text-gray-900 py-2 flex items-center px-3 rounded-full bg-opacity-60 font-bold cursor-pointer z-10">
              <HiDeviceMobile />
              <span className="hidden xl:block text-sm ml-1"> Apps</span>
            </div>
            <div className=" hover:bg-white hover:text-dark mr-1 lg:mr-3 lg:text-xl duration-700 ease-in-out hover:text-gray-900 py-2 flex items-center px-3 rounded-full bg-opacity-60 font-bold cursor-pointer z-10">
              <FaGlobe />
              <span className="hidden xl:block text-sm ml-1"> Websites</span>
            </div>
            <div className=" hover:bg-white hover:text-dark mr-1 lg:mr-3 lg:text-xl duration-700 ease-in-out hover:text-gray-900 py-2 flex items-center px-3 rounded-full bg-opacity-60 font-bold cursor-pointer z-10">
              <FaPenNib />
              <span className="hidden xl:block text-sm ml-1"> Graphics</span>
            </div>
          </div>
          <div className=" mr-2 hover:bg-white hover:text-dark duration-700 ease-in-out hover:text-gray-900 py-2 flex items-center px-3 rounded-full bg-opacity-60 font-bold cursor-pointer z-10">
            <div
              aria-label="Toggle Dark Mode"
              className=""
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            >
              {theme === "dark" ? (
                <IoMdSunny size={18} />
              ) : (
                <BsMoon size={18} />
              )}
            </div>
          </div>
        </aside>
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
        </Swiper>
      </section>

      <section className="w-4/6 flex flex-col bg-gray-100 dark:bg-gray-700 relative">
        <img
          src="/circle.svg"
          width="36px"
          className="absolute -left-9 top-14 z-20"
        />

        <main className="mt-2">{children}</main>
      </section>
    </main>
  );
};

export default View;
