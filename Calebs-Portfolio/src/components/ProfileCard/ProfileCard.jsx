import profilePic from "../../assets/profilePic(1).png";
import JokeDisplay from "../JokeDisplay/JokeDisplay";
import "./ProfileCard.css";

export default function ProfileCard() {
  return (
    <div className="profile-card">
      <h2>Caleb Hasch</h2>
      <img src={profilePic} alt="Caleb Hasch" className="profile-card__img" />
      <h3>Web Developer</h3>
      <JokeDisplay />
    </div>
  );
}
