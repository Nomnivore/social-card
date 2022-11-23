import { React } from "react";
import PropTypes from "prop-types";

function AvatarComponent(props) {
  return (
    <div className="avatar placeholder justify-center">
      <div className="bg-secondary-focus text-secondary-content rounded-full w-24">
        <span className="text-3xl">{props.initials}</span>
      </div>
    </div>
  );
}
AvatarComponent.propTypes = {
  initials: PropTypes.string,
};

export default AvatarComponent;
