import { API } from "./API";

export async function getData() {
  return await API.get("data");
}
