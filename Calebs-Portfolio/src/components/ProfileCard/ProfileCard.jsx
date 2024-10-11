import { NavLink } from "react-router-dom";
import profilePic from "../../assets/profilePic(1).png";
import JokeDisplay from "../JokeDisplay/JokeDisplay";
import "./ProfileCard.css";

export default function ProfileCard({ isMainProfileHidden, toggleMobileMenu }) {
  return (
    <div className="profile-card">
      {isMainProfileHidden && (
        <button
          className="profile-card__close"
          type="button"
          aria-label="close"
          onClick={toggleMobileMenu}
        />
      )}
      <h2 className="profile-card__title">Caleb Hasch</h2>
      <NavLink to={"/Calebs-Portfolio-Frontend/profile"}>
        <img src={profilePic} alt="Caleb Hasch" className="profile-card__img" />
      </NavLink>
      <h3 className="profile-card__sub-title">Web Developer</h3>
      <JokeDisplay />
    </div>
  );
}
