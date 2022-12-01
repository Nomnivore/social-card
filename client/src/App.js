import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Details from "./pages/details";
import Directory from "./pages/directory";
import Home from "./pages/home";
import Login from "./pages/login";
import Register from "./pages/register";

const App = () => {
  return (
    <>
      {/* layout elements like a navbar can go here */}
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/directory" element={<Directory />} />
        <Route path="/@:username" element={<Details />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </>
  );
};
export default App;
