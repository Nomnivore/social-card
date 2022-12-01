import PropTypes from "prop-types";
import Input from "./Input";
import { Link } from "react-router-dom";

function InputCard({
  inputTitle,
  inputArray,
  buttonName,
  pageName,
  linkName,
  buttonClick,
}) {
  return (
    <div className="card w-96 bg-base-200 shadow-xl">
      <div className="card-body">
        <h2 className="card-title flex justify-center">{inputTitle}</h2>
        <div className="grid gap-4">
          {inputArray.map((object, i) => (
            <Input
              inputLabel={object.inputLabel}
              placeholder={object.placeholder}
              key={i}
              change={object.change}
            />
          ))}
        </div>
        <div className="card-actions flex justify-end">
          <button className="btn btn-primary" onClick={buttonClick}>
            {buttonName}
          </button>
        </div>
        <div className="card-actions justify-center">
          <Link to={pageName} className="link link-primary">
            {linkName}
          </Link>
        </div>
      </div>
    </div>
  );
}

const inputPropTypes = PropTypes.shape({
  inputLabel: PropTypes.string,
  placeholder: PropTypes.string,
  change: PropTypes.func,
});

InputCard.propTypes = {
  inputTitle: PropTypes.string,
  inputArray: PropTypes.arrayOf(inputPropTypes),
  buttonName: PropTypes.string,
  pageName: PropTypes.string,
  linkName: PropTypes.string,
  buttonClick: PropTypes.func,
};
export default InputCard;
