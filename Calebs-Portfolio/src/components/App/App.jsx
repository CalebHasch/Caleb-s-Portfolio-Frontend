import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import ProjectDisplay from "../ProjectDisplay/ProjectDisplay";
import ProjectPage from "../ProjectPage/ProjectPage";
import Navbar from "../Navbar/Navbar";
import About from "../About/About";
import ProfileCard from "../ProfileCard/ProfileCard";
import { fetchJoke } from "../../utils/jokeApi";
import { projectList } from "../../utils/constants";
import { JokeContext } from "../../contexts/JokeContext";
import "./App.css";

function App() {
  const [projects, setProjects] = useState(projectList.projects);
  const [joke, setJoke] = useState({ setup: "", punchline: "" });

  function getNewJoke() {
    fetchJoke()
      .then((res) => {
        setJoke(res[0]);
      })
      .catch(console.error);
  }

  useEffect(() => {
    getNewJoke();
  }, []);

  return (
    <>
      <JokeContext.Provider value={{ joke, getNewJoke }}>
        <ProfileCard />
        <div className="main-content">
          <Navbar />
          <Routes>
            {/* <Route
              path="/"
              element={
                <ProjectDisplay projects={projects} setProjects={setProjects} />
              }
            /> */}
            <Route
              path="Calebs-Portfolio-Frontend/project/:id"
              element={<ProjectPage projects={projects} />}
            />
            <Route
              path="Calebs-Portfolio-Frontend/profile"
              element={<About />}
            />
            <Route
              path="*"
              element={
                <ProjectDisplay projects={projects} setProjects={setProjects} />
              }
            />
          </Routes>
        </div>
      </JokeContext.Provider>
    </>
  );
}

export default App;
