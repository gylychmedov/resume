import { IoLogoCss3, IoLogoHtml5, IoLogoReact } from "react-icons/io5";
import {
  SiAdobeillustrator,
  SiAdobephotoshop,
  SiAdobexd,
  SiJavascript,
  SiNextdotjs,
  SiRedux,
  SiTypescript,
} from "react-icons/si";
import { AiFillApi } from "react-icons/ai";
import { MdOutlineDoNotDisturb } from "react-icons/md";
import { DiAndroid } from "react-icons/di";

export function getIcon(name: string): JSX.Element {
  switch (name) {
    case "React": {
      return (
        <div className="bg-cyan-50 text-cyan-500 bg-opacity-50 p-2 lg:p-3 rounded-xl">
          <IoLogoReact size={36} />
        </div>
      );
    }
    case "Redux": {
      return (
        <div className="bg-indigo-50 text-indigo-800 p-2 lg:p-3 rounded-xl">
          <SiRedux size={36} />
        </div>
      );
    }
    case "Next.js": {
      return (
        <div className="bg-gray-100 text-gray-700 p-2 lg:p-3 rounded-xl">
          <SiNextdotjs size={36} />
        </div>
      );
    }
    case "JavaScript": {
      return (
        <div className="bg-cyan-50 text-cyan-500 p-2 lg:p-3 rounded-xl">
          <SiJavascript size={36} />
        </div>
      );
    }
    case "TypeScript": {
      return (
        <div className="bg-cyan-50 text-cyan-500 p-2 lg:p-3 rounded-xl">
          <SiTypescript size={36} />
        </div>
      );
    }
    case "REST API": {
      return (
        <div className="bg-cyan-50 text-cyan-500 p-2 lg:p-3 rounded-xl">
          <AiFillApi size={36} />
        </div>
      );
    }
    case "HTML5": {
      return (
        <div className="bg-cyan-50 text-cyan-500 p-2 lg:p-3 rounded-xl">
          <IoLogoHtml5 size={36} />
        </div>
      );
    }
    case "CSS3": {
      return (
        <div className="bg-cyan-50 text-cyan-500 p-2 lg:p-3 rounded-xl">
          <IoLogoCss3 size={36} />
        </div>
      );
    }
    case "React native": {
      return (
        <div className="bg-cyan-50 text-cyan-500 p-2 lg:p-3 rounded-xl">
          <DiAndroid size={36} />
        </div>
      );
    }
    case "Photoshop": {
      return (
        <div className="bg-cyan-50 text-cyan-500 p-2 lg:p-3 rounded-xl">
          <SiAdobephotoshop size={36} />
        </div>
      );
    }
    case "Illustrator": {
      return (
        <div className="bg-cyan-50 text-cyan-500 p-2 lg:p-3 rounded-xl">
          <SiAdobeillustrator size={36} />
        </div>
      );
    }
    case "Adobe XD": {
      return (
        <div className="bg-cyan-50 text-cyan-500 p-2 lg:p-3 rounded-xl">
          <SiAdobexd size={36} />
        </div>
      );
    }

    default:
      return (
        <div className="bg-gray-100 p-2 lg:p-3 rounded-xl">
          <MdOutlineDoNotDisturb size={36} />
        </div>
      );
  }
}
