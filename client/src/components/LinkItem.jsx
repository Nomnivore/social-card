import PropTypes from "prop-types";
import linkTypes from "../util/linkTypes";
import { FaQuestion } from "react-icons/fa";
import { useState } from "react";

function LinkItem(props) {
  const myLink = props.linkName;
  const linkType = props.linkType;
  const [isHovering, setIsHovering] = useState(false);

  const iconProps = {
    size: "48",
    className: "",
  };

  const handleMouseOver = () => {
    setIsHovering(true);
  };

  const handleMouseOut = () => {
    setIsHovering(false);
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
    <div
      className="flex gap-2"
      onMouseOver={handleMouseOver}
      onMouseOut={handleMouseOut}
    >
      {renderIcon()}
      <button className="btn btn-accent flex-grow">
        <a href={myLink} target="_blank" rel="noopener noreferrer">
          {myLink.substring(0, 25)}
        </a>
      </button>
      {isHovering && (
        <div
          className="tooltip tooltip-open absolute left-1/2"
          data-tip={myLink}
        />
      )}
    </div>
  );
}
LinkItem.propTypes = {
  linkName: PropTypes.string,
  linkType: PropTypes.number,
};

export default LinkItem;
