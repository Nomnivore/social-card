import React from "react";
import PropTypes from "prop-types";

function LinkComponent(props) {
  return (
    <div className="flex justify-center">
      <div>
        <button className="btn btn-wide btn-secondary">{props.linkName}</button>
      </div>
    </div>
  );
}
LinkComponent.propTypes = {
  linkName: PropTypes.string,
};

export default LinkComponent;
