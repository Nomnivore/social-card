import { useContext } from "react";
import AuthContext from "../context/AuthProvider";

export const useAuth = () => {
  const { auth, setAuth } = useContext(AuthContext);

  function login({ username, token }) {
    setAuth({ username, token });
  }

  function logout() {
    setAuth({});
  }

  return { auth, login, logout };
};
