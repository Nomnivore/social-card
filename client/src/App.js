import { Routes, Route } from "react-router-dom";
import NavbarComponent from "./components/NavbarComponent";
import Home from "./pages/Home";
import Directory from "./pages/Directory";

const App = () => {
  return (
    <>
      {/* layout elements like a navbar can go here */}
      <NavbarComponent />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/directory" element={<Directory />} />
      </Routes>
    </>
  );
};
export default App;
