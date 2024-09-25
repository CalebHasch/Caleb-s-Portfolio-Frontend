export default function ProjectDisplay({ projects }) {
  console.log(projects);
  return (
    <div>
      <p>Projects</p>
      <ul>
        {projects.map((project) => {
          return (
            <li key={project.id}>
              <p>{project.projectname}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
