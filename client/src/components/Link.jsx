import PropTypes from "prop-types";

function Link(props) {
    const myLink = props.linkName;
    
    return <button className="btn btn-accent">
        
    <a
        href={myLink}
        target="_blank"
        rel="noopener noreferrer"
    >
            {myLink}
        </a>
    </button>;
}
Link.propTypes = {
  linkName: PropTypes.string,
};

export default Link;
