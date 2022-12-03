import { useAuth } from "../hooks/useAuth";
import PropTypes from "prop-types";
import { Navigate, Outlet } from "react-router-dom";

const GuestRoute = ({ children }) => {
  const { auth } = useAuth();

  if (auth?.token) return <Navigate to="/" replace />;

  return children ? children : <Outlet />;
};

GuestRoute.propTypes = {
  children: PropTypes.node,
};

export default GuestRoute;
