import { useState } from "react";
import { useTokenAPI } from "../hooks/useTokenAPI";
import { useParams } from "react-router-dom";
import AddLink from "../components/AddLink";

const Editor = () => {
  const api = useTokenAPI();
  const userName = useParams();
  const [deletedIds, setDeletedIds] = useState([]);
  const [myLinks, setMyLinks] = useState([]);

  return (
    <div className="flex justify-evenly pt-10">
      <div className="card w-146 bg-base-100 shadow-xl">
        {/* TODO: Implement user name here */}
        <h2 className="card-title flex justify-center">userName</h2>
        <div className="card-body">
          {/* TODO: IMPLEMENT COMPONENT FOR ADD LINK */}
          <AddLink />
          {/* TODO: IMPLEMENT BUTTONS HERE */}
          <div className="card-actions justify-center">
            <button className="btn btn-primary">Add Link</button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Editor;
