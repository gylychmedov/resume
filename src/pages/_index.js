import View from "../layouts/View";
import Tool from "../components/tool";
import { Swiper, SwiperSlide } from "swiper/react";

export default function Home(props) {
  const test = "salam";
  return (
    <View data={test}>
      <main className=" min-h-screen p-5">
        <h2 className="text-4xl px-5 font-bold w-full">Our tools</h2>
        <section className="grid gap-5 grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mt-2">
          <Swiper
            className="p-8"
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

        <section className="mt-10">
          <h2 className=" px-5 text-4xl font-bold w-full">About us</h2>
          <aside className="mt-3 dark:bg-gray-700">
            <div className="grid grid-cols-1 p-5  rounded-xl w-6/12">
              Совет. По этому запросу вы можете найти сайты на русском языке.
              Указать предпочтительные языки для результатов поиска можно в
              разделе Настройки. Совет.
            </div>
          </aside>
        </section>

        <section className="mt-10">
          <h2 className=" px-5 text-4xl font-bold w-full">Contact</h2>
          <aside className="mt-3 dark:bg-gray-700">
            <div className="grid grid-cols-1 p-5  rounded-xl w-6/12">
              Совет. По этому запросу вы можете найти сайты на русском языке.
              Указать предпочтительные языки для результатов поиска можно в
              разделе Настройки. Совет.
            </div>
          </aside>
        </section>
      </main>
    </View>
  );
}
