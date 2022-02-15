import { IData } from "interfaces/IData";
import { IExperience } from "interfaces/IExperience";
import { ISkill } from "interfaces/ISkill";
import type { NextApiRequest, NextApiResponse } from "next";

const skills: ISkill[] = [
  {
    title: "React",
    year: 3,
  },
  {
    title: "Redux",
    year: 2,
  },
  {
    title: "Next.js",
    year: 2,
  },
  {
    title: "JavaScript",
    year: 3,
  },
  {
    title: "TypeScript",
    year: 1,
  },
  {
    title: "REST API",
    year: 3,
  },
  {
    title: "HTML5",
    year: 3,
  },
  {
    title: "CSS3",
    year: 3,
  },
  {
    title: "React native",
    year: 1,
  },
  {
    title: "Github",
    year: 2,
  },
  {
    title: "Photoshop",
    year: 2,
  },
  {
    title: "Illustrator",
    year: 2,
  },
  {
    title: "Adobe XD",
    year: 1,
  },
];

const experiences: IExperience[] = [
  {
    company: "Ucyap software",
    level: "Frontend developer",
    date: "2019 - 2021",
  },
  {
    company: "Takyk cesme",
    level: "Frontend developer",
    date: "September 2021",
  },
];

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<IData>
) {
  res.status(200).json({ skills, experiences });
}
