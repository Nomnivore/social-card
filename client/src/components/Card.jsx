import Avatar from "./Avatar";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { useAuth } from "../hooks/useAuth";

function Card({ cardInitials, userName, myLinks }) {
  const { auth } = useAuth();
  return (
    <div className="card w-96 bg-success shadow-xl  ">
      <div className="card-body">
        <Avatar initials={cardInitials} />
        <p className="flex justify-center text-success-content">{userName}</p>
        <div className="grid gap-4">
          {myLinks.map((object, i) => (
            <Link linkName={object} key={i} />
          ))}
        </div>

        <div className="card-actions flex justify-evenly pt-4 ">
          {auth?.token ? (
            <Link to={"/editor"} className="btn btn-primary">
              Edit Card
            </Link>
          ) : (
            <Link to={"/login"} className="btn">
              Log in to edit Card
            </Link>
          )}
          <button className="btn btn-secondary">Save</button>
        </div>
      </div>
    </div>
  );
}
Card.propTypes = {
  cardInitials: PropTypes.string,
  userName: PropTypes.string,
  myLinks: PropTypes.array,
};
export default Card;
