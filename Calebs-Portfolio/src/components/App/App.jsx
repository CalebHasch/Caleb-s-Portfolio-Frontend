import { useState, useEffect } from "react";
import ProjectDisplay from "../ProjectDisplay/ProjectDisplay";
import "./App.css";
import projectList from "../../../db.json";
import { number } from "../../utils/constants";

function App() {
  const [projects, setProjects] = useState(projectList);
  console.log(projectList);
  console.log(number);

  // useEffect(() => {
  //   setProjects(projectList);
  // }, []);

  return (
    <>
      <ProjectDisplay projects={projects}></ProjectDisplay>
    </>
  );
}

export default App;
