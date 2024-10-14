import { useParams } from "react-router-dom";
import DoubleList from "../DoubleList/DoubleList";
import SlidingImages from "../SlidingImages/SlidingImages";
import "./ProjectPage.css";

export default function ProjectPage({ projects }) {
  const project = projects[useParams().id];
  const techList = project.technologies;
  const linkList = {
    link1: project.live_link,
    link1Text: "Click for live demo",
    link2: project.github_link,
    link2Text: "Click for github repository",
  };

  return (
    <div className="project-page">
      <h3>{project.project_name}</h3>
      <p className="project-page__description">{project.description}</p>
      <DoubleList list1={techList} list2={linkList} title1={"Technologies"} />
      <SlidingImages project={project} />
    </div>
  );
}
