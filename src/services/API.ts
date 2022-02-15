import axios from "axios";

export const API = axios.create({
  baseURL: `/api/`,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});
