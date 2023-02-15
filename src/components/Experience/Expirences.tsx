import { experinces } from "data/Experiences";
import Experience from "./Experience";

const Experiences = () => {
  return (
    <section className="bg-gray-50 rounded-xl p-4 border border-gray-100 mt-4">
      <h1 className="text-lg lg:text-2xl mb-2 lg:mb-5 uppercase font-montserrat-bold text-gray-700">
        Experience
      </h1>
      {experinces.map((experience, key) => {
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
  );
};

export default Experiences;
