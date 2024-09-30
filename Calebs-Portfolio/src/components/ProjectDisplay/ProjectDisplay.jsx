import "./ProjectDisplay.css";
import { NavLink } from "react-router-dom";

export default function ProjectDisplay({ projects, setProjects }) {
  function searchProjects(id) {
    setCurrentProject(projects[id]);
  }

  return (
    <div>
      <p>Projects</p>
      <ul className="projectList">
        {projects.map((project) => {
          return (
            <li key={project.id}>
              <p>{project.project_name}</p>

              <NavLink to={`/project/${project.id}`}>
                <img
                  className="project__thumbnail"
                  src={project.image_urls[0]}
                  alt={project.project_name}
                ></img>
              </NavLink>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
