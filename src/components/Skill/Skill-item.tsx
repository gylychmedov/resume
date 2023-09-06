import React from "react";
import { ISkill } from "../../interfaces/ISkill";

const SkillItem = ({ title, year }: ISkill) => {
  return (
    <aside className="hover:!scale-105 center text-center aspect-square border border-gray-100 flex-col bg-white shadow-xl shadow-gray-100 space-y-6 p-4 duration-500 rounded-3xl">
      <img
        src={`/images/Logos/${title}.png`}
        width="48px"
        height="48px"
        alt={title}
      />

      <div className="flex flex-col">
        <p className="font-roboto-bold">{title}</p>
        <small className="text-green text-sm text-gray-400">{year} year</small>
      </div>
    </aside>
  );
};

export default SkillItem;
