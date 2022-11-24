import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Directory from "./pages/Directory";

const App = () => {
  return (
    <>
      {/* layout elements like a navbar can go here */}
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/directory" element={<Directory />} />
      </Routes>
    </>
  );
};
export default App;
