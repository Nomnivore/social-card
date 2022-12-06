import { axiosToken } from "../util/api";
import { useEffect } from "react";
import { useAuth } from "./useAuth";

export const useTokenAPI = () => {
  // add interceptor to apply token header if authenticated
  const { auth } = useAuth();

  useEffect(() => {
    const reqInterceptor = axiosToken.interceptors.request.use((config) => {
      if (auth?.token) {
        config.withCredentials = true;
        config.headers["Authorization"] = `Bearer ${auth?.token}`;
      }
      return config;
    });

    return () => {
      axiosToken.interceptors.request.eject(reqInterceptor);
    };
  }, [auth]);

  return axiosToken;
};
