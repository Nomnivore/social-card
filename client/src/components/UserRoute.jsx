import { useAuth } from "../hooks/useAuth";
import PropTypes from "prop-types";
import { Navigate, Outlet } from "react-router-dom";

const UserRoute = ({ children }) => {
  const { auth } = useAuth();

  if (!auth?.token) return <Navigate to="/" replace />;

  return children ? children : <Outlet />;
};

UserRoute.propTypes = {
  children: PropTypes.node,
};

export default UserRoute;
