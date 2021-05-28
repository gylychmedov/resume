import Tool from "../components/tool";
import { Swiper, SwiperSlide } from "swiper/react";
import Home from "./home";
import { gsap } from "gsap/dist/gsap";
import { useEffect } from "react";

export default function Project(props) {
  useEffect(() => {
    gsap.from(".title", { y: -50, opacity: 0, duration: 1 });
    // gsap.from(".text", { y: 50, scale: 0.5, opacity: 0, duration: 1 });
  }, [props]);
  return (
    <main>
      {props.project ? (
        <main className=" min-h-screen p-5 flex flex-col justify-between">
          <section className="mt-10">
            <h2 className="relative px-5 text-9xl font-bold w-full title overflow-hidden">
              <div className="absolute w-full h-full bg-white text-object"></div>
              {props.project.name}
            </h2>
            <aside className="mt-3 dark:bg-gray-700">
              <div className="w-full p-5 text-5xl rounded-7xl text-spacing break-words text">
                {props.project.description}
              </div>
            </aside>
          </section>
          <main>
            <h2 className="text-4xl px-5 font-bold w-full">Our tools</h2>
            <section className="mt-2 w-full">
              <Swiper
                className="p-8 w-full"
                breakpoints={{
                  400: {
                    slidesPerView: 2,
                  },
                  640: {
                    slidesPerView: 3,
                  },
                  768: {
                    slidesPerView: 4,
                  },
                }}
              >
                <SwiperSlide>
                  <Tool for="Frontend" name="React" img="/react.png" />
                </SwiperSlide>
                <SwiperSlide>
                  <Tool for="App" name="Dart" img="/dart.jpg" />
                </SwiperSlide>
                <SwiperSlide>
                  <Tool for="Frontend" name="Next JS" img="/nextjs.png" />
                </SwiperSlide>
                <SwiperSlide>
                  <Tool for="Backend" name="Laravel" img="/laravel.jpg" />
                </SwiperSlide>
                <SwiperSlide>
                  <Tool for="App" name="Flutter" img="/flutter.jpg" />
                </SwiperSlide>
              </Swiper>
            </section>
          </main>
        </main>
      ) : (
        <Home />
      )}
    </main>
  );
}
