import axios from "axios";

export const http = axios.create({
  baseURL: "https://oguzly.com/api/",
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});
