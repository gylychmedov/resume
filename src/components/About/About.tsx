import { IoCloudDownload } from "react-icons/io5";

const About = (): JSX.Element => {
  return (
    <section className="flex items-center  justify-between bg-gray-100 w-full rounded-xl py-4 pl-6 border border-gray-100 mt-5">
      <aside className="flex items-center">
        <img
          width="80px"
          height="80px"
          className="rounded-lg mr-3"
          src="/images/Dagdan.jpg"
          alt="Ezkahan"
        />
        <div>
          <h1 className="text-lg lg:text-2xl uppercase font-montserrat-bold text-gray-700">
            Dagdan Gylychmedov
          </h1>
          <p className="text-sm lg:text-md text-gray-500">Frontend developer</p>
        </div>
      </aside>
      <a
        href="#"
        className="flex items-center bg-green-600 text-white px-3 py-2 rounded-l-lg space-x-3"
      >
        <IoCloudDownload
          size={19}
          className="translate-x-1 group-hover:translate-x-1"
        />
        <div>CV</div>
      </a>
    </section>
  );
};

export default About;
