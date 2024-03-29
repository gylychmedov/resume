import { HiOutlineDownload } from "react-icons/hi";
import { socialLinks } from "utilities/data/socialLinks";

const About = () => {
  return (
    <main className="w-full min-h-screen flex items-center">
      <main className="container py-20 grid grid-cols-12 gap-x-8">
        <section className="col-span-12 md:col-span-7 flex flex-col justify-center">
          {/* Texts */}
          <div>Hello</div>
          <div className="mt-2 title-xl text-gray-800 leading-snug">
            I&lsquo;m{" "}
            <span className="text-green-500">Dagdan Gylychmedov </span>
            Frontend developer
          </div>
          <article className="mt-5 text-gray-600 leading-relaxed text-lg">
            I&lsquo;m Frontend Developer with 4 years experience. Development is
            both my hobby and job, so even during my non-working hours, I engage
            in coding and improving my skills.
          </article>

          {/* Buttons */}
          <aside className="center-x space-x-7 mt-10">
            <div className="w-max text-white pl-7 pr-2 py-2 rounded-full bg-green-500 center-x space-x-5">
              <span>Download CV</span>
              <div className="w-10 h-10 bg-white center rounded-full text-green-500">
                <HiOutlineDownload size={20} />
              </div>
            </div>
            <div className="text-lg border-b cursor-pointer">See projects</div>
          </aside>

          {/* Follow me */}
          <aside className="center-x space-x-3 mt-10">
            <div className="mr-5">Follow me:</div>
            {socialLinks.map((social) => (
              <a
                key={social.link}
                href={social.link}
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 rounded-full bg-white text-gray-600 center duration-500 hover:bg-green-500 hover:text-white cursor-pointer"
              >
                {social.icon}
              </a>
            ))}
          </aside>
        </section>
        <section className="col-span-12 md:col-span-5 h-full border-4 border-double border-gray-300 bg-gray-100/40 backdrop-blur rounded-t-full">
          <div className="pt-14 pl-14 translate-y-9 pr-10">
            <img
              src="/images/Dagdan.png"
              alt="Dagdan"
              className="brightness-110"
            />
          </div>
        </section>
      </main>
    </main>
  );
};

export default About;
