import PropTypes from "prop-types";

function Input({ inputLabel, placeholder, change }) {
  return (
    <div className="form-control">
      <label className="input-group input-group-vertical">
        <span>{inputLabel}</span>
        <input
          type="text"
          placeholder={placeholder}
          className="input input-bordered"
          onChange={change}
        />
      </label>
    </div>
  );
}
Input.propTypes = {
  inputLabel: PropTypes.string,
  placeholder: PropTypes.string,
  change: PropTypes.func,
};
export default Input;
