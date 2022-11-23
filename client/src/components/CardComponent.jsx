import { React, Component } from "react";
import AvatarComponent from "../components/AvatarComponent";
import LinkComponent from "./LinkComponent";
import PropTypes from "prop-types";

function CardComponent(props) {
  return (
    <div className="card w-96 bg-primary text-primary-content ">
      <div className="card-body">
        <AvatarComponent initials={props.cardInitials} />

        <p className="flex justify-center">{props.userName}</p>
        <LinkComponent linkName={props.myLink1} />
        <LinkComponent linkName={props.myLink2} />
        <LinkComponent linkName={props.myLink3} />
        <LinkComponent linkName={props.myLink4} />
        <div className="card-actions flex justify-evenly pt-4 ">
          <button className="btn btn-secondary">Add</button>
          <button className="btn btn-accent">Save</button>
        </div>
      </div>
    </div>
  );
}
CardComponent.propTypes = {
  cardInitials: PropTypes.string,
  userName: PropTypes.string,
  myLink1: PropTypes.string,
  myLink2: PropTypes.string,
  myLink3: PropTypes.string,
  myLink4: PropTypes.string,
};
export default CardComponent;
