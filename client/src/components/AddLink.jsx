import linkTypes from "../util/linkTypes";
import { VscTrash } from "react-icons/vsc";

function AddLink() {
  return (
    <div className="flex gap-3">
      {/* LINK TYPE */}
      <div className="form-control ">
        <select  className="input select select-bordered">
          {linkTypes.map((type, idx) => (
            <option key={idx} value={idx}>
              {type.name}
            </option>
          ))}
        </select>
      </div>

      {/* TEXT BOX */}
      <div className="form-control">
        <input
          type="text"
          placeholder="Enter Link here"
          className="input input-bordered"
        />
      </div>
      <button className="btn btn-error">
        <VscTrash />
      </button>
    </div>
  );
}
export default AddLink;
