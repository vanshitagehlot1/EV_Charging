import { Link } from "react-router-dom";
import "../styles/navbar.css";

const Navbar = () => {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/stations">Stations</Link>
      <Link to="/dashboard">Dashboard</Link>
      <Link to="/login">Login</Link>
    </nav>
  );
};

export default Navbar;
