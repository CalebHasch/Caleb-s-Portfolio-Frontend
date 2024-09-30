import { useParams } from "react-router-dom";

export default function ProjectPage({ projects }) {
  const project = projects[useParams().id];

  return (
    <div>
      <h3>{project.project_name}</h3>
      <p>{project.description}</p>
      <h4>Technologies</h4>
      <ul>
        {project.technologies.map((item, i) => {
          return <li key={i}>{item}</li>;
        })}
      </ul>
      <a href={project.live_link} target="_blank">
        Click for live demo
      </a>
      <a href={project.github_link} target="_blank">
        Click for github repository
      </a>
      <ul>
        {project.image_urls.map((item, i) => {
          return (
            <li key={i}>
              <img src={item} alt={project.project_name} />
            </li>
          );
        })}
      </ul>
    </div>
  );
}
