import { git } from "./API";

export async function getRepositories() {
  return await git.get("users/gylychmedov/repos");
}
