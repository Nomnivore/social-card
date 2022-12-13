import axios from "axios";

let baseURL = "/api";

// eslint-disable-next-line no-undef
if (process.env.NODE_ENV == "production")
  baseURL = `http://warne157-001-site1.atempurl.com${baseURL}`;

export default axios.create({
  baseURL: baseURL,
  headers: { "Content-Type": "application/json" },
});

export const axiosToken = axios.create({
  baseURL: baseURL,
  headers: { "Content-Type": "application/json" },
});
