import Experience from "@/components/Experience/Experience";
import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import Skill from "@/components/Skill/Skill";
import { IData } from "@/interfaces/IData";
import { getData } from "@/services/getData";
import { NextSeo } from "next-seo";
import { useState, useEffect } from "react";

const App = () => {
  const [data, setData] = useState<IData>();

  useEffect(() => {
    getData().then((res) => setData(res.data));
  }, []);
  return (
    <>
      <NextSeo
        title="Dagdan Gylychmedov - Resume"
        description="My name is Dagdan. I am Frontend developer"
        openGraph={{
          url: "https://dagdan.vercel.app",
          title: "Dagdan Gylychmedov - Resume",
          description: "My name is Dagdan. I am Frontend developer",
          images: [
            {
              url: "https://dagdan.vercel.app/images/Dagdan.jpg",
              width: 800,
              height: 600,
              alt: "Photo",
              type: "image/jpeg",
            },
          ],
          site_name: "Dagdan Gylychmedov - Resume",
        }}
      />
      <section className=" flex flex-col items-center px-2 xl:px-10 font-montserrat-medium">
        <main className="container grid grid-cols-12 gap-5 mx-auto">
          <Header />

          <aside className="col-span-12 lg:col-span-7 2xl:col-span-8 xl:px-5 font-montserrat-medium">
            <section className="bg-gray-50 rounded-xl p-4 border border-gray-100 mt-5">
              <h1 className="text-lg lg:text-2xl uppercase font-montserrat-bold text-gray-700">
                About
              </h1>
              <p className="text-sm lg:text-md text-gray-600">
                Designer and Frontend developer
              </p>
            </section>
            <main className="grid grid-cols-1 2xl:grid-cols-2 gap-4">
              <section className="bg-gray-50 rounded-xl p-4 my-4  border border-gray-100">
                <h1 className="text-lg lg:text-2xl mb-2 lg:mb-5 uppercase font-montserrat-bold text-gray-700">
                  Languages
                </h1>
                <aside className="grid grid-cols-2 gap-2 xl:gap-4">
                  <div className="bg-white shadow-xl shadow-gray-100 flex flex-col items-center justify-center text-center px-4 py-5 rounded-lg">
                    <img
                      src={`/images/Languages/ru.png`}
                      alt="Russian"
                      width="48px"
                      height="48px"
                    />
                    <p className="font-montserrat-medium mt-2">Russian</p>
                    <small className="text-gray-500">B1</small>
                  </div>
                  <div className="bg-white shadow-xl shadow-gray-100 flex flex-col items-center justify-center text-center px-4 py-5 rounded-lg">
                    <img
                      src={`/images/Languages/en.png`}
                      alt="English"
                      width="48px"
                      height="48px"
                    />
                    <p className="font-montserrat-medium mt-2">English</p>
                    <small className="text-gray-500">A1</small>
                  </div>
                  <div className="bg-white shadow-xl shadow-gray-100 flex flex-col items-center justify-center text-center px-4 py-5 rounded-lg">
                    <img
                      src={`/images/Languages/tm.png`}
                      alt="Turkmen"
                      width="48px"
                      height="48px"
                    />
                    <p className="font-montserrat-medium mt-2">Turkmen</p>
                    <small className="text-gray-500">C1</small>
                  </div>
                  <div className="bg-white shadow-xl shadow-gray-100 flex flex-col items-center justify-center text-center px-4 py-5 rounded-lg">
                    <img
                      src={`/images/Languages/tr.png`}
                      alt="Turkish"
                      width="48px"
                      height="48px"
                    />
                    <p className="font-montserrat-medium mt-2">Turkish</p>
                    <small className="text-gray-500">B2</small>
                  </div>
                </aside>
              </section>
              <section className="bg-gray-50 rounded-xl p-4 my-4  border border-gray-100">
                <h1 className="text-lg lg:text-2xl mb-2 lg:mb-5 uppercase font-montserrat-bold text-gray-700">
                  Experience
                </h1>
                {data?.experiences.map((experience, key) => {
                  return (
                    <Experience
                      key={key}
                      company={experience.company}
                      level={experience.level}
                      date={experience.date}
                    />
                  );
                })}
              </section>
            </main>

            <section className="bg-gray-50 rounded-xl p-4 border border-gray-100">
              <h1 className="text-lg lg:text-2xl mb-2 lg:mb-5 uppercase font-montserrat-bold text-gray-700">
                Skills
              </h1>
              <div className="grid grid-cols-12 gap-3 xl:gap-5">
                {data?.skills.map((skill, key) => {
                  return (
                    <Skill key={key} title={skill.title} year={skill.year} />
                  );
                })}
              </div>
            </section>
            <Footer />
          </aside>
        </main>
      </section>
    </>
  );
};

export default App;
