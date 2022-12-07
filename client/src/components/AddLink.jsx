import linkTypes from "../util/linkTypes";
import PropTypes from "prop-types";
import { VscTrash } from "react-icons/vsc";

function AddLink({
  idx,
  linkType,
  url,
  handleDeleteLink,
  handleUrlChanged,
  handleTypeChanged,
}) {
  return (
    <div className="flex gap-3">
      {/* LINK TYPE */}
      <div className="form-control ">
        <select
          value={linkType}
          className="input select select-bordered"
          onChange={(e) => handleTypeChanged(idx, e.target.value)}
        >
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
          defaultValue={url}
          onChange={(e) => handleUrlChanged(idx, e.target.value)}
        />
      </div>
      <button className="btn btn-error" onClick={() => handleDeleteLink(idx)}>
        <VscTrash />
      </button>
    </div>
  );
}

AddLink.propTypes = {
  idx: PropTypes.number,
  linkType: PropTypes.number,
  url: PropTypes.string,
  handleDeleteLink: PropTypes.func,
  handleUrlChanged: PropTypes.func,
  handleTypeChanged: PropTypes.func,
};

export default AddLink;
