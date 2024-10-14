import { NavLink } from "react-router-dom";
import { useContext, useState } from "react";
import { LoadingContext } from "../../contexts/LoadingContext";
import SearchForm from "../SearchForm/SearchForm";
import SearchPrompts from "../SearchPrompts/SearchPrompts";
import Preloader from "../Preloader/Preloader";
import NotFound from "../NotFound/NotFound";
import "./ProjectDisplay.css";

export default function ProjectDisplay({ projects }) {
  const [filteredProjects, setFilteredProjects] = useState(projects);
  const loadingContext = useContext(LoadingContext);

  function searchProjects(query) {
    loadingContext.setSearchLoading(true);

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
    loadingContext.setSearchLoading(false);
  }

  return (
    <div className="project-display">
      <h2>My Portfolio</h2>
      <p className="project-display__text">
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
      {loadingContext.searchLoading ? (
        <Preloader />
      ) : filteredProjects.length === 0 ? (
        <NotFound />
      ) : (
        <ul className="project-display__list">
          {filteredProjects.map((project) => {
            return (
              <li key={project.id}>
                <p>{project.project_name}</p>

                <NavLink to={`Calebs-Portfolio-Frontend/project/${project.id}`}>
                  <img
                    className="project-display__thumbnail"
                    src={project.images[0]}
                    alt={project.project_name}
                  ></img>
                </NavLink>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}
