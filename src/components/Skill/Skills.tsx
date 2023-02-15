import { SkillCategory, skills } from "data/Skills";
import { Fragment } from "react";
import Skill from "./Skill";

const Skills = () => {
  return (
    <section className="bg-gray-50 rounded-xl p-4 border border-gray-100 mt-4">
      <h1 className="text-lg lg:text-2xl mb-2 lg:mb-5 uppercase font-montserrat-bold text-gray-700">
        Skills
      </h1>
      <div className="grid grid-cols-12 gap-3 xl:gap-5">
        {SkillCategory.map((category, key) => {
          return (
            <Fragment key={key}>
              <div className="col-span-12">{category}</div>
              {skills
                .filter((skill) => skill.category == category)
                .map((skill, key) => {
                  return <Skill key={key} skill={skill} />;
                })}
            </Fragment>
          );
        })}
      </div>
    </section>
  );
};

export default Skills;
