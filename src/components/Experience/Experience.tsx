import { IExperience } from "../../interfaces/IExperience";
import { HiOutlineOfficeBuilding } from "react-icons/hi";

const Experience: React.FC<IExperience> = ({ company, level, date }) => {
  return (
    <div className="bg-white rounded-xl px-5 py-5 mb-4 last:mb-0 shadow-xl shadow-gray-100">
      <small className="bg-gray-900 text-white px-2 py-1 rounded">{date}</small>
      <h3 className="font-montserrat-bold text-md lg:text-xl text-gray-700 mt-2">
        {level}
      </h3>
      <h4 className="text-sm lg:text-md flex items-center mt-1 text-gray-500">
        <HiOutlineOfficeBuilding /> <span>{company}</span>
      </h4>
    </div>
  );
};

export default Experience;
