
import React from "react";
import ProjectItem from "./ProjectItem";

function ProjectList({ projects }) {
  console.log(projects);
  const pr=projects
  return (
    <div id="projects">
      <h2>My Projects</h2>
      <div id="project-list"> {pr.map((pro)=> <ProjectItem key={pro.id} name={pro.name} about={pro.about} technologies={pro.technologies} /> )}</div>
    </div>
  );
}

export default ProjectList;