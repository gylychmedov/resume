import skillList from "utilities/data/skillList";
import SkillItem from "./Skill-item";

const Skills = () => {
  return (
    <section className="bg-gray-50 rounded-xl p-4 border border-gray-100 mb-4">
      <h1 className="text-lg lg:text-2xl mb-2 lg:mb-5 uppercase font-montserrat-bold text-gray-700">
        Skills
      </h1>
      <div className="grid grid-cols-12 gap-3 xl:gap-5">
        {skillList.map((skill) => {
          return (
            <SkillItem
              key={skill.title}
              title={skill.title}
              year={skill.year}
            />
          );
        })}
      </div>
    </section>
  );
};

export default Skills;
