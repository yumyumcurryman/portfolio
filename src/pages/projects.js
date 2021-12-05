import React from "react";
import ProjectGridItem from "../components/projectGridItem";
import "../styles/projects.css";
import projectData from "../static/projects.json";
import { NavLink } from "react-router-dom";
// import ReactPlayer from "react-player";
// import tennisVid from "../img/tennisVid.webm";

const Projects = () => {
  return (
    <div id="projects-page">
      <h2>Projects</h2>
      <div className="projects-grid">
        {projectData.projects.map((data) => (
          <NavLink to={`/projects/${data.id}`}>
            <ProjectGridItem key={data.id} data={data} />
          </NavLink>
        ))}
      </div>
      <hr />
      <h2>Other Works</h2>
      <div className="other-grid">
        {projectData.other.map((data) => (
          <NavLink to={`/projects/${data.id}`}>
            <ProjectGridItem key={data.id} data={data} />
          </NavLink>
        ))}
      </div>
      {/* <ReactPlayer controls="true" playing="true" url={tennisVid} /> */}
    </div>
  );
};

export default Projects;
