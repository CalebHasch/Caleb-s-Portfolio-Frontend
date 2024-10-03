import "./ProjectDisplay.css";
import { NavLink } from "react-router-dom";
import SearchForm from "../SearchForm/SearchForm";
import { useState } from "react";

export default function ProjectDisplay({ projects }) {
  const [filteredProjects, setFilteredProjects] = useState(projects);

  function searchProjects(query) {
    const searchQuery = query.toLowerCase();
    const searchResults = [];
    projects.forEach((item) => {
      if (item.project_name.toLowerCase().includes(searchQuery)) {
        searchResults.push(item);
      } else {
        item.technologies.map((tech) => {
          if (tech.toLowerCase().includes(searchQuery)) {
            searchResults.push(item);
          }
        });
      }
    });
    setFilteredProjects(searchResults);
  }

  return (
    <div>
      <p>Projects</p>
      <SearchForm onSearch={searchProjects} />
      <ul className="projectList">
        {filteredProjects.map((project) => {
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
