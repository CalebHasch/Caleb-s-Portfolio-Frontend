import { useParams } from "react-router-dom";
import DoubleList from "../DoubleList/DoubleList";
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
      <p>{project.description}</p>
      <DoubleList list1={techList} list2={linkList} title1={"Technologies"} />
      <ul className="project-page__list">
        {project.image_urls.map((item, i) => {
          return (
            <li key={i}>
              <img
                className="project-page__img"
                src={item}
                alt={project.project_name}
              />
            </li>
          );
        })}
      </ul>
    </div>
  );
}
