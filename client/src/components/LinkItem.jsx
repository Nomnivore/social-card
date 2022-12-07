import PropTypes from "prop-types";
import linkTypes from "../util/linkTypes";
import { FaQuestion } from "react-icons/fa";

function LinkItem(props) {
  const myLink = props.linkName;
  const linkType = props.linkType;

  const iconProps = {
    size: "48",
    className: "",
  };

  function renderIcon() {
    const icon = linkTypes[linkType].icon;
    return icon ? (
      icon(iconProps, iconProps.className)
    ) : (
      <FaQuestion {...iconProps} />
    );
  }

  return (
    <div className="flex gap-2">
      {renderIcon()}
      <button className="btn btn-accent flex-grow">
        <a href={myLink} target="_blank" rel="noopener noreferrer">
          {myLink}
        </a>
      </button>
    </div>
  );
}
LinkItem.propTypes = {
  linkName: PropTypes.string,
  linkType: PropTypes.number,
};

export default LinkItem;
