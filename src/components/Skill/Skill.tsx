import React from "react";
import { ISkill } from "../../interfaces/ISkill";

const Skill = ({
  skill: { title, category, year },
}: {
  skill: ISkill;
}): JSX.Element => {
  return (
    <aside className="bg-white shadow-xl shadow-gray-100 col-span-12 sm:col-span-6 lg:col-span-4 2xl:col-span-4 space-x-4 2xl:space-x-4  flex items-center p-4 hover:bg-indigo-50 hover:scale-95 cursor-none select-none duration-500 rounded-lg">
      <img
        src={`/images/Logos/${title}.png`}
        width="48px"
        height="48px"
        alt={title}
      />

      <div className="flex flex-col">
        <p className="font-montserrat-bold">{title}</p>
        <small className="text-green text-sm text-gray-400">{year} year</small>
      </div>
    </aside>
  );
};

export default Skill;
