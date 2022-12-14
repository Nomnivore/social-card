import Avatar from "./Avatar";
import { Link } from "react-router-dom";
import LinkItem from "./LinkItem";
import PropTypes from "prop-types";
import { useAuth } from "../hooks/useAuth";

function Card({ cardInitials, userName, myLinks }) {
  const { auth } = useAuth();
  return (
    <div className="card w-96 bg-secondary shadow-xl shadow-info-content border-secondary bg-opacity-90">
      <div className="card-body">
        <Avatar initials={cardInitials} />
        <p className="flex justify-center text-success-content text-lg font-semibold">
          @{userName}
        </p>
        <div className="grid gap-4">
          {myLinks.map((link, i) => (
            <LinkItem linkName={link.url} key={i} linkType={link.linkType} />
          ))}
        </div>

        <div className="card-actions flex justify-evenly pt-4 ">
          {auth?.token && auth.username == userName && (
            <Link to={`/@${userName}/edit`} className="btn btn-primary">
              Edit Card
            </Link>
          )}
        </div>
        <div className="flex flex-col items-center">
          <Link to="/directory">
            <button className="btn btn-primary justify-center">
              Directory
            </button>
          </Link>
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
