import PropTypes from "prop-types";

function Avatar({ initials }) {
  return (
    <div className="avatar placeholder justify-center">
      <div className="bg-info text-info-content rounded-full w-24 bg-opacity-90">
        <span className="text-3xl">{initials}</span>
      </div>
    </div>
  );
}
Avatar.propTypes = {
  initials: PropTypes.string,
};

export default Avatar;
