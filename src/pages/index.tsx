import Experience from "@/components/Experience/Experience";
import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import Skill from "@/components/Skill/Skill";
import { IData } from "@/interfaces/IData";
import { getData } from "@/services/getData";
import { useState, useEffect } from "react";

const App = () => {
  const [data, setData] = useState<IData>();

  useEffect(() => {
    getData().then((res) => setData(res.data));
  }, []);
  return (
    <>
      <section className=" flex flex-col items-center px-2 xl:px-10 font-montserrat-medium">
        <main className="container grid grid-cols-12 gap-5 mx-auto">
          <Header />

          <aside className="col-span-12 lg:col-span-7 2xl:col-span-8 xl:px-5 font-montserrat-medium">
            <section className="bg-gray-50 rounded-xl p-4 my-4  border border-gray-100">
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
                <aside className="grid grid-cols-2">
                  <div className="bg-white shadow-xl shadow-gray-100 flex flex-col items-center justify-center text-center px-4 py-5 rounded-lg mr-3 mt-3">
                    <img src={`/images/Languages/tm.png`} className="h-12" />
                    <p className="font-montserrat-medium mt-2">Turkmen</p>
                  </div>
                  <div className="bg-white shadow-xl shadow-gray-100 flex flex-col items-center justify-center text-center px-4 py-5 rounded-lg mr-3 mt-3">
                    <img src={`/images/Languages/ru.png`} className="h-12" />
                    <p className="font-montserrat-medium mt-2">Russian</p>
                  </div>
                  <div className="bg-white shadow-xl shadow-gray-100 flex flex-col items-center justify-center text-center px-4 py-5 rounded-lg mr-3 mt-3">
                    <img src={`/images/Languages/en.png`} className="h-12" />
                    <p className="font-montserrat-medium mt-2">English</p>
                  </div>
                  <div className="bg-white shadow-xl shadow-gray-100 flex flex-col items-center justify-center text-center px-4 py-5 rounded-lg mr-3 mt-3">
                    <img src={`/images/Languages/tr.png`} className="h-12" />
                    <p className="font-montserrat-medium mt-2">Turkish</p>
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

            <section className="bg-gray-50 rounded-xl p-4 mt-2  border border-gray-100">
              <h1 className="text-lg lg:text-2xl mb-2 lg:mb-5 uppercase font-montserrat-bold text-gray-700 mt-5">
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
          </aside>
        </main>

        <Footer />
      </section>
    </>
  );
};

export default App;
