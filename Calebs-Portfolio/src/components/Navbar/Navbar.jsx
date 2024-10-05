import { NavLink } from "react-router-dom";
import "./Navbar.css";

export default function Navbar() {
  return (
    <div className="navbar">
      <NavLink to={"/"}>
        <p className="navbar__link">Home</p>
      </NavLink>
      <NavLink to={"/profile"}>
        <p className="navbar__link">About me</p>
      </NavLink>
    </div>
  );
}
