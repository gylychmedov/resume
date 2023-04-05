import experienceList from "utilities/data/experienceList";
import ExperienceItem from "./Experience-item";

const Experiences = () => {
  return (
    <section className="bg-gray-50 rounded-xl p-4 my-4  border border-gray-100">
      <h1 className="text-lg lg:text-2xl mb-2 lg:mb-5 uppercase font-montserrat-bold text-gray-700">
        Experience
      </h1>
      {experienceList.map((experience) => {
        return (
          <ExperienceItem
            key={experience.date}
            company={experience.company}
            level={experience.level}
            date={experience.date}
            skills={experience.skills}
          />
        );
      })}
    </section>
  );
};

export default Experiences;
