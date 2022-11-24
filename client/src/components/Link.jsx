import PropTypes from "prop-types";

function Link({ linkName }) {
  return <button className="btn btn-wide btn-secondary">{linkName}</button>;
}

Link.propTypes = {
  linkName: PropTypes.string,
};

export default Link;
