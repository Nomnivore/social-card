import Avatar from "./Avatar";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

function CardPreview({ cardInitials, username }) {
  return (
    <div className="card lg:card-side bg-secondary shadow-xl shadow-info-content bg-opacity-90">
      <div className="card-body">
        <div className="grid place-items-center">
          <Link to={`/@${username}`}>
            <Avatar initials={cardInitials} />
          </Link>
        </div>
        <p className="flex justify-center text-success-content font-semibold text-lg">
          @{username}
        </p>
      </div>
    </div>
  );
}
CardPreview.propTypes = {
  cardInitials: PropTypes.string,
  username: PropTypes.string,
};

export default CardPreview;
