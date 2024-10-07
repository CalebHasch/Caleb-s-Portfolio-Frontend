import { NavLink } from "react-router-dom";
import profilePic from "../../assets/profilePic(1).png";
import JokeDisplay from "../JokeDisplay/JokeDisplay";
import "./ProfileCard.css";

export default function ProfileCard() {
  return (
    <div className="profile-card">
      <h2 className="profile-card__title">Caleb Hasch</h2>
      <NavLink to={"/profile"}>
        <img src={profilePic} alt="Caleb Hasch" className="profile-card__img" />
      </NavLink>
      <h3 className="profile-card__sub-title">Web Developer</h3>
      <JokeDisplay />
    </div>
  );
}
