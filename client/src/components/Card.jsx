import Avatar from "./Avatar";
import { Link } from "react-router-dom";
import LinkItem from "./LinkItem";
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
