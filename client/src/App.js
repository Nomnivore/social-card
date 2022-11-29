import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Details from "./pages/details";
import Directory from "./pages/directory";
import Home from "./pages/home";

const App = () => {
  return (
    <>
      {/* layout elements like a navbar can go here */}
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/directory" element={<Directory />} />
        <Route path="/@:username" element={<Details />} />
      </Routes>
    </>
  );
};
export default App;
