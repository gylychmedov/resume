import View from "../layouts/View";
import Tool from "../components/tool";
import { Swiper, SwiperSlide } from "swiper/react";

export default function Home() {
  return (
    <View>
      <main className=" min-h-screen p-5">
        <h2 className="text-4xl font-bold w-full text-center uppercase text-stroke">
          Our tools
        </h2>
        <section className="grid gap-5 grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mt-5">
          <Swiper
            className="p-8"
            // slidesPerView={4}
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
    </View>
  );
}
