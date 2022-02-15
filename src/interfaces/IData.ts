import { IExperience } from "./IExperience";
import { ISkill } from "./ISkill";

export interface IData {
  skills: ISkill[];
  experiences: IExperience[];
  error?: boolean;
}
