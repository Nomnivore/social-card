import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Details from "./pages/details";
import Directory from "./pages/directory";
import Home from "./pages/home";
import Login from "./pages/login";
import Logout from "./pages/logout";
import Register from "./pages/register";
import UserRoute from "./components/UserRoute";
import GuestRoute from "./components/GuestRoute";

const App = () => {
  return (
    <>
      {/* layout elements like a navbar can go here */}
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/directory" element={<Directory />} />
        <Route path="/@:username" element={<Details />} />

        <Route element={<GuestRoute />}>
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
        </Route>

        <Route element={<UserRoute />}>
          <Route path="/logout" element={<Logout />} />
        </Route>
      </Routes>
    </>
  );
};
export default App;
