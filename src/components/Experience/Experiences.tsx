import experienceList from "utilities/data/experienceList";
import ExperienceItem from "./Experience-item";

const Experiences = () => {
  return (
    <section className="bg-gray-50 w-full py-20">
      <div className="container">
        <h1 className="title-xl mb-10 pb-3">Experience</h1>
        <aside className="grid grid-cols-1 xl:grid-cols-2 gap-5">
          {experienceList.map((experience) => {
            return (
              <ExperienceItem
                key={experience.company}
                experience={experience}
              />
            );
          })}
        </aside>
      </div>
    </section>
  );
};

export default Experiences;
