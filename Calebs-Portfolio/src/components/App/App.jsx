import { useState, useEffect, useRef } from "react";
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
  const [isMobileMenuOpened, setIsMobileMenuOpened] = useState(false);
  const [isMainProfileHidden, setIsMainProfileHidden] = useState(true);
  const mainContentRef = useRef(null);

  function getNewJoke() {
    fetchJoke()
      .then((res) => {
        setJoke(res[0]);
      })
      .catch(console.error);
  }

  function toggleMobileMenu() {
    setIsMobileMenuOpened(!isMobileMenuOpened);
  }

  function showMenuButton() {
    if (window.innerWidth <= 760) {
      setIsMainProfileHidden(true);
      mainContentRef.current.classList.add("main-content_mobile");
    } else {
      setIsMainProfileHidden(false);
      mainContentRef.current.classList.remove("main-content_mobile");
    }
  }

  useEffect(() => {
    getNewJoke();

    showMenuButton();
    window.addEventListener("resize", showMenuButton);

    return () => window.removeEventListener("resize", showMenuButton);
  }, []);

  return (
    <>
      <JokeContext.Provider value={{ joke, getNewJoke }}>
        {(!isMainProfileHidden || isMobileMenuOpened) && (
          <ProfileCard
            isMainProfileHidden={isMainProfileHidden}
            toggleMobileMenu={toggleMobileMenu}
          />
        )}
        <div className="main-content" ref={mainContentRef}>
          <Navbar
            isMobileMenuOpened={isMobileMenuOpened}
            isMainProfileHidden={isMainProfileHidden}
            toggleMobileMenu={toggleMobileMenu}
          />
          <Routes>
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
