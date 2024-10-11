import { NavLink } from "react-router-dom";
import menu from "../../assets/headerMenu.png";
import "./Navbar.css";

export default function Navbar({
  isMobileMenuOpened,
  isMainProfileHidden,
  toggleMobileMenu,
}) {
  return (
    <div className="navbar">
      <NavLink className="navbar__link" to={"/Calebs-Portfolio-Frontend/"}>
        <p>Home</p>
      </NavLink>
      <NavLink
        className="navbar__link"
        to={"/Calebs-Portfolio-Frontend/profile"}
      >
        <p>About me</p>
      </NavLink>
      {!isMobileMenuOpened && isMainProfileHidden && (
        <img
          className="navbar__menu"
          src={menu}
          alt="profile card toggle"
          onClick={toggleMobileMenu}
        />
      )}
    </div>
  );
}
