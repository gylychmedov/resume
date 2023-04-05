import Experiences from "@/components/Experience/Experiences";
import Footer from "@/components/Footer/Footer";
import GithubRepositories from "@/components/Github/Github-repositories";
import Header from "@/components/Header/Header";
import Language from "@/components/Language/Language";
import Skills from "@/components/Skill/Skills";
import { NextSeo } from "next-seo";

const App = () => {
  return (
    <>
      <NextSeo
        title="Dagdan Gylychmedov"
        description="My name is Dagdan. I am Frontend developer"
        openGraph={{
          url: "https://dagdan.vercel.app",
          title: "Dagdan Gylychmedov",
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
          site_name: "Dagdan Gylychmedov",
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
              <p className="text-sm lg:text-md text-gray-600 mt-4">
                I am Frontend Developer with 4 years experience. Development is
                both my hobby and job , so even during my non-working hours, I
                engage in coding and improving my skills.
              </p>
            </section>
            <main className="grid grid-cols-1 2xl:grid-cols-2 gap-4">
              <Language />
              <Experiences />
            </main>

            <Skills />
            <GithubRepositories />
            <Footer />
          </aside>
        </main>
      </section>
    </>
  );
};

export default App;
