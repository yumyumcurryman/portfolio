import React from "react";
import ProjectGridItem from "../components/projectGridItem";
import "../styles/projects.css";
import projectData from "../static/projects.json";

const Projects = () => {
  return (
    <div>
      <h2>Projects</h2>
      <div className="projects-grid">
        {projectData.projects.map((data) => (
          <ProjectGridItem key={data.id} data={data} />
        ))}
      </div>
      <hr />
      <h2>Other Works</h2>
      <div className="other-grid">
        {projectData.other.map((data) => (
          <ProjectGridItem key={data.id} data={data} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
