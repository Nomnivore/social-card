import axios from "axios";

export default axios.create({
  baseURL: "/api",
  headers: { "Content-Type": "application/json" },
});

export const axiosToken = axios.create({
  baseURL: "/api",
  headers: { "Content-Type": "application/json" },
});
