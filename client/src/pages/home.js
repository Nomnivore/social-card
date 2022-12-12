import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div
      className="hero min-h-screen"
      style={{
        backgroundImage: `url("https://i.postimg.cc/rsd8FzcJ/hd-wallpaper-g3ef56cacf-1920.jpg")`,
      }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-md justify-center">
          <h1 className="mb-5 text-6xl font-bold">
            Welcome to <br /> Social Card
          </h1>
          <p className="mb-5 text-lg font-medium">
            Select Directory to explore our directory of created social cards.
            Select Log In to create your own social card.
          </p>
          <div className="flex space-x-2 justify-center">
            <Link to="/directory">
              <button className="btn btn-primary">Directory</button>
            </Link>
            <Link to="/login">
              <button className="btn btn-secondary">Log In</button>
            </Link>
          </div>
          <p className="mb-5 text-md font-bold">
            Reminder: You're here for life.
          </p>
        </div>
      </div>
    </div>
  );
};
export default Home;
