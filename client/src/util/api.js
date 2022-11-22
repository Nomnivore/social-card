import axios from "axios";

export default axios.create({
  headers: { "Content-Type": "application/json" },
});

export const axiosToken = axios.create({
  headers: { "Content-Type": "application/json" },
});
