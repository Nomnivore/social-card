import { Link } from "react-router-dom";
import { useEffect } from "react";
import { useAuth } from "../hooks/useAuth";

const Logout = () => {
  const { logout } = useAuth();

  useEffect(() => {
    logout();
  }, []);

  return (
    <div>
      <p>You have been successfully logged out.</p>

      <Link to="/" className="btn btn-primary">
        Return Home
      </Link>
    </div>
  );
};
export default Logout;
