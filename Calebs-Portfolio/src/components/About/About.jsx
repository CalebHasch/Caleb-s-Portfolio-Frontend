import { skills, personalLinks } from "../../utils/constants";
import DoubleList from "../DoubleList/DoubleList";
import "./About.css";

export default function About() {
  return (
    <div className="about">
      <h3 className="about__title">About Me</h3>
      <p className="about__text">
        I am a full stack JavaScript developer. I have worked to gain Treehouse
        and Tripleten certifications as well as on the job experience through a
        startup called WeOwesk. I have worked on many personal projects from
        games, databases, all the way to this portfolio site. My great work
        ethic and eagerness to learn makes me an ideal developer for any team.
      </p>
      <DoubleList list1={skills} list2={personalLinks} title1={"Skills"} />
    </div>
  );
}
