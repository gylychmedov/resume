import { IExperience } from "../../interfaces/IExperience";
import { HiOutlineOfficeBuilding } from "react-icons/hi";

const ExperienceItem: React.FC<IExperience> = ({
  company,
  level,
  date,
  skills,
}) => {
  return (
    <aside className="bg-white rounded-xl px-5 py-5 mb-4 last:mb-0 shadow-xl shadow-gray-100">
      <small className="bg-gray-900 text-white px-2 py-1 rounded">{date}</small>
      <div className="font-montserrat-bold text-md lg:text-xl text-gray-700 mt-2">
        {level}
      </div>
      <div className="text-sm lg:text-md flex items-center mt-1 text-gray-500 space-x-1">
        <HiOutlineOfficeBuilding /> <span>{company}</span>
      </div>
    </aside>
  );
};

export default ExperienceItem;
