import Avatar from "./Avatar";
import Link from "./Link";
import PropTypes from "prop-types";

function Card({ cardInitials, userName, myLinks }) {
    
  return (
    <div className="card lg:card-side bg-accent shadow-xl  ">
      <div className="card-body">
        <Avatar initials={cardInitials} />
        <p className="flex justify-center text-primary-content">{userName}</p>
              <div className="grid gap-4 content-start">
                  
          {myLinks.map((object, i) => (
            <Link linkName={object} key={i} />
          ))}
                  
        </div>
        <div className="card-actions flex justify-evenly pt-4 ">
          <button className="btn btn-primary">Add</button>
          <button className="btn btn-secondary">Save</button>
        </div>
      </div>
    </div>
  );
}
Card.propTypes = {
  cardInitials: PropTypes.string,
  userName: PropTypes.string,
  myLinks: PropTypes.array,
};
export default Card;
