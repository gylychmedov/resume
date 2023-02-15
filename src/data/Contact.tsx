import { IContact } from "@/interfaces/IContact";
import { FaPhoneAlt, FaTelegramPlane } from "react-icons/fa";
import { MdEmail, MdLocationPin } from "react-icons/md";
import { SiGithub } from "react-icons/si";

export const contact: IContact[] = [
  {
    name: "Phone:",
    icon: <FaPhoneAlt size={18} />,
    value: "+99361711765",
    link: "callto:+99361711765",
  },
  {
    name: "Email:",
    icon: <MdEmail size={18} />,
    value: "gylycmedof@gmail.com",
    link: "mailto:gylycmedof@gmail.com",
  },
  {
    name: "Github:",
    icon: <SiGithub size={18} />,
    value: "github.com/gylychmedov",
    link: "https://github.com/gylychmedov",
    blank: true,
  },
  {
    name: "Location:",
    icon: <MdLocationPin size={18} />,
    value: "Ashgabat, Turkmenistan",
    link: "#",
    blank: false,
  },
  {
    name: "Telegram:",
    icon: <FaTelegramPlane size={18} />,
    value: " t.me/gylychmedov",
    link: "tg://resolve?domain=gylychmedov/",
    blank: false,
  },
];
