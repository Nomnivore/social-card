import { axiosToken } from "../util/api";

export const useTokenAPI = () => {
  // add interceptor to apply token header if authenticated
  return axiosToken;
};
