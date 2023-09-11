import About from "@/components/About/About";
import Experiences from "@/components/Experience/Experiences";
import Footer from "@/components/Footer/Footer";
import GithubRepositories from "@/components/Github/Github-repositories";
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
      <section className="flex flex-col items-center  font-montserrat-medium">
        <About />
        <Skills />
        <Language />
        <Experiences />
        <GithubRepositories />
        <Footer />
      </section>
    </>
  );
};

export default App;
