import PropTypes from "prop-types";

function LinkItem(props) {
  const myLink = props.linkName;

  return (
    <button className="btn btn-accent">
      <a href={myLink} target="_blank" rel="noopener noreferrer">
        {myLink}
      </a>
    </button>
  );
}
LinkItem.propTypes = {
  linkName: PropTypes.string,
};

export default LinkItem;
