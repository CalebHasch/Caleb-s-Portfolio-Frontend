import "./ProjectDisplay.css";
import { NavLink } from "react-router-dom";
import SearchForm from "../SearchForm/SearchForm";
import { useState } from "react";
import SearchPrompts from "../SearchPrompts/SearchPrompts";

export default function ProjectDisplay({ projects }) {
  const [filteredProjects, setFilteredProjects] = useState(projects);

  function searchProjects(query) {
    const searchQuery = query.toLowerCase();
    const searchResults = [];
    projects.forEach((item) => {
      if (
        item.project_name.toLowerCase().includes(searchQuery) ||
        item.tags.includes(searchQuery)
      ) {
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
      <h2>My Portfolio</h2>
      <p>
        Search through my {projects.length} projects by name, technologies used,
        or special tags.
      </p>
      <SearchForm onSearch={searchProjects} />
      <SearchPrompts
        buttonText={"Dev's Favorites"}
        search={searchProjects}
        prompt={"Favorites"}
      />
      <SearchPrompts
        buttonText={"Games"}
        search={searchProjects}
        prompt={"games"}
      />
      <SearchPrompts
        buttonText={"Vanilla"}
        search={searchProjects}
        prompt={"vanilla"}
      />
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
