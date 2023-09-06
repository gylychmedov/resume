import skillList from "utilities/data/skillList";
import SkillItem from "./Skill-item";

const Skills = () => {
  return (
    <>
      <div className="w-full h-2 bg-white blur"></div>

      <section className="bg-gradient w-full min-h-screen py-20 flex items-center">
        <div className="container">
          <h1 className="title-xl mb-10 pb-3">Skills</h1>
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 gap-5 group">
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
        </div>
      </section>
    </>
  );
};

export default Skills;
