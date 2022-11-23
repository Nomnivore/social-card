import { React } from "react";
import AvatarComponent from "../components/AvatarComponent";
import LinkComponent from "./LinkComponent";

function CardComponent() {
  return (
    <div className="card w-96 bg-primary text-primary-content ">
      <div className="card-body">
        <AvatarComponent />
              <p className="flex justify-center">@FredFlintstone</p>
              <LinkComponent/>
              <LinkComponent/>
              <LinkComponent/>
              <LinkComponent/>
              <div className="card-actions flex justify-evenly ">
                  <button className="btn btn-secondary">Add</button>
                  <button className="btn btn-accent">Save</button>
        </div>
      </div>
    </div>
  );
}

export default CardComponent;
