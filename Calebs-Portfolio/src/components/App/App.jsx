import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import ProjectDisplay from "../ProjectDisplay/ProjectDisplay";
import ProjectPage from "../ProjectPage/ProjectPage";
import "./App.css";
import { projectList } from "../../utils/constants";

function App() {
  const [projects, setProjects] = useState(projectList.projects);

  // useEffect(() => {
  //   setProjects(projectList);
  // }, []);

  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <ProjectDisplay projects={projects} setProjects={setProjects} />
          }
        />
        <Route
          path="/project/:id"
          element={<ProjectPage projects={projects} />}
        />
      </Routes>
    </>
  );
}

export default App;
