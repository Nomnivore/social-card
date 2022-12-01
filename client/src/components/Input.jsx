import PropTypes from "prop-types";

function Input({ inputLabel, placeholder }) {
  return (
    <div className="form-control">
      <label className="input-group input-group-vertical">
        <span>{inputLabel}</span>
        <input
          type="text"
          placeholder={placeholder}
          className="input input-bordered"
        />
      </label>
    </div>
  );
}
Input.propTypes = {
  inputLabel: PropTypes.string,
  placeholder: PropTypes.string,
};
export default Input;
