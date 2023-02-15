import Contact from "@/components/About/Contact";
import About from "@/components/About/About";
import Experiences from "@/components/Experience/Expirences";
import Footer from "@/components/Footer/Footer";
import Github from "@/components/Github/Github";
import Languages from "@/components/Languages/Languages";
import SEO from "@/components/SEO/SEO";
import Skills from "@/components/Skill/Skills";

const App = () => {
  return (
    <>
      <SEO />
      <section className=" px-2 xl:px-10 font-montserrat-medium">
        <main className="flex flex-col">
          <About />
          <Skills />
          <Experiences />
          <aside className="flex flex-col w-full md:flex-row space-y-4 md:space-y-0 justify-between space-x-3 mt-4">
            <Languages />
            <Contact />
          </aside>
          <Github />

          <Footer />
        </main>
      </section>
    </>
  );
};

export default App;
