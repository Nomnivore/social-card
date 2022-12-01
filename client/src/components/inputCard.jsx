import PropTypes from "prop-types";
import Input from "./Input";
import { Link } from "react-router-dom";

function InputCard({ inputTitle, inputArray, buttonName, pageName, linkName }) {
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
            />
          ))}
        </div>
        <div className="card-actions flex justify-end">
          <button className="btn btn-primary">{buttonName}</button>
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
InputCard.propTypes = {
  inputTitle: PropTypes.string,
  inputArray: PropTypes.array,
  buttonName: PropTypes.string,
  pageName: PropTypes.string,
  linkName: PropTypes.string,
};
export default InputCard;
