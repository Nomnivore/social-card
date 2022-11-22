import axios from "../util/api";

export const useAPI = () => {
  // probably doesn't need to be a hook
  // but this allows for future flexibility
  return axios;
};
