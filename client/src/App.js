import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";

const App = () => {
  return (
    <>
      {/* layout elements like a navbar can go here */}
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </>
  );
};
export default App;
