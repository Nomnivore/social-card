import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="hero min-h-screen" style={{ backgroundImage: `url("client/src/images/socialcardlogo.png")` }}>
    <div className="hero-overlay bg-opacity-60"></div>
    <div className="hero-content text-center text-neutral-content">
    <div className="max-w-md">
      <h1 className="mb-5 text-6xl font-bold">Welcome to <br/> Social Card</h1>
      <p className="mb-5 text-lg font-medium">Select Directory to explore our directory of created social cards. Select Log In to create your own social card.</p>
      <div> 
        <Link to="/directory">
          <button className="btn btn-primary">Directory</button>
        </Link>
        <Link to="/login">
          <button className="btn btn-secondary">Log In</button>
        </Link>
      </div>
      <p className="mb-5 text-md font-bold">Reminder: You're here for life.</p>
      
    </div>
  </div>
  </div>
  );
};
export default Home;
