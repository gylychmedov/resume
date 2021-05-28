import Tool from "../components/tool";
import { Swiper, SwiperSlide } from "swiper/react";
import Home from "./home";
import { gsap } from "gsap/dist/gsap";
import { useEffect } from "react";

export default function Project(props) {
  useEffect(() => {
    gsap.from(".title", {
      y: "-100%",
      duration: 1,
      opacity: 0,
      skewX: 15,
    });
    gsap.to(".title", { y: 0, duration: 1, opacity: 1, skewX: 0 });

    gsap.from(".text", {
      y: "100%",
      duration: 1,
      opacity: 0,
      scale: 0.9,
    });
    gsap.to(".text", { y: 0, duration: 1, opacity: 1, scale: 1 });
  }, [props]);
  return (
    <main>
      {props.project ? (
        <main className="w-6/6 md:min-h-screen p-5 flex flex-col justify-between">
          <section className="mt-10">
            <h2 className="px-5 text-3xl xl:text-9xl font-bold overflow-hidden">
              <div className="title"> {props.project.name}</div>
            </h2>
            <aside className="mt-3 dark:bg-gray-700">
              <div className="p-5 text-xl xl:text-5xl rounded-7xl text">
                {props.project.description}
              </div>
            </aside>
          </section>
          {/* <main className="w-6/12">
            <h2 className="text-4xl px-5 font-bold w-full">Our tools</h2>
            <section className="mt-2">
              <Swiper
                className="xl:p-8"
             
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
          </main> */}
        </main>
      ) : (
        <Home />
      )}
    </main>
  );
}
