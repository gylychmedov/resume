import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { EffectCoverflow, Autoplay } from "swiper";
import { HiDeviceMobile, HiHome } from "react-icons/hi";
import { FaGlobe, FaPenNib } from "react-icons/fa";
import { useTheme } from "next-themes";
import { BsMoon } from "react-icons/bs";
import { IoMdSunny } from "react-icons/io";
import Project from "../components/project";
import { http } from "../components/api";

const Home = (props) => {
  const { theme, setTheme } = useTheme();
  const [projects, setProjects] = useState([]);
  const [slideIndex, setSlideIndex] = useState(0);
  const [count, setCount] = useState();

  useEffect(() => {
    http
      .get("projects")
      .then(
        (res) => (setProjects(res.data.data), setCount(res.data.data.length))
      );
  }, []);
  console.log(count);

  SwiperCore.use([EffectCoverflow, Autoplay]);
  return (
    <main className="h-screen flex ">
      <section className="hidden md:block w-2/6 h-full bg-gray-200 dark:bg-gray-900 relative">
        <Swiper
          effect="coverflow"
          grabCursor={true}
          // loop={true}
          // loopedSlides={projects.length}
          direction="vertical"
          autoplay={{ delay: 3000 }}
          centeredSlides={true}
          slidesPerView="auto"
          onSlideChange={(event) => setSlideIndex(event.realIndex)}
          className="h-screen px-12"
        >
          {projects &&
            projects.map((project) => {
              return (
                <SwiperSlide className="flex justify-center items-center w-auto h-auto m-1">
                  <img
                    src={project.image}
                    alt="slide"
                    className="w-full h-64 object-cover"
                  />
                </SwiperSlide>
              );
            })}
        </Swiper>
      </section>

      <section className="w-6/6 md:w-4/6 flex flex-col bg-gray-100 dark:bg-gray-700 relative">
        <main className="mt-2">
          <div
            aria-label="Toggle Dark Mode"
            className="fixed right-5 top-5 bg-gray-300 w-10 h-10 dark:bg-gray-900 dark:text-white text-gray-800 flex justify-center items-center rounded-full"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          >
            {theme === "dark" ? <IoMdSunny size={24} /> : <BsMoon size={24} />}
          </div>
          <Project project={projects[slideIndex]} id={slideIndex} />
        </main>
      </section>
    </main>
  );
};

export default Home;
