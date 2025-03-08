import { Routes, Route } from "react-router-dom"; // ✅ Remove <Router> from here
import Navbar from "./components/Navbar.jsx";
import Home from "./pages/Home.jsx";
import Stations from "./pages/Stations.jsx";
import Login from "./pages/Login.jsx";
import "./styles/global.css";
import Register from "./pages/Register";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/stations" element={<Stations />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </>
  );
}

export default App;
