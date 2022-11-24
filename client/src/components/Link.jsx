import PropTypes from "prop-types";

function Link(props) {
  return (
    <button className="btn btn-wide btn-secondary">{props.linkName}</button>
  );
}
Link.propTypes = {
  linkName: PropTypes.string,
};

export default Link;
