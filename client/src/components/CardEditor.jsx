import Avatar from "./Avatar";
import Link from "./Link";
import PropTypes from "prop-types";
import { useAuth } from "../hooks/useAuth";

function Card({ cardInitials, userName, myLinks }) {
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

