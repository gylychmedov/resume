import { IExperience } from "../../interfaces/IExperience";
import { FcCalendar } from "react-icons/fc";
import { CgBorderStyleDotted } from "react-icons/cg";

const ExperienceItem = ({ experience }: { experience: IExperience }) => {
  return (
    <main className="bg-white rounded-xl px-3 py-2 shadow-xl shadow-gray-200 col-span-1 last:xl:col-span-2 center-x space-x-3">
      <div className="h-full center rounded-xl aspect-square">
        <img
          src={`/images/Company/${experience.logo}.png`}
          className="w-32 p-2"
          alt=""
        />
      </div>
      <aside className="flex flex-col space-y-2">
        <h1 className="text-xl font-roboto-bold text-gray-700">
          {experience.company}
        </h1>

        <div className="center-x mt-1 text-gray-500">{experience.level}</div>
        <div className="center-x space-x-3">
          <div className="text-gray-500 center-x">
            <FcCalendar />
            <span>{experience.start_date}</span>
          </div>
          <CgBorderStyleDotted size={24} className="text-gray-400" />
          <div className="text-gray-500 center-x">
            <FcCalendar />
            <span>{experience.end_date}</span>
          </div>
        </div>
      </aside>
    </main>
  );
};

export default ExperienceItem;
