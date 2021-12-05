import React from "react";
import { useParams } from "react-router";
import projectData from "../static/projects.json";
import "../styles/project.css";
import { NavLink } from "react-router-dom";

function getProject(id) {
  for (let i = 0; i < projectData.projects.length; i++) {
    if (projectData.projects[i].id === id) {
      return projectData.projects[i];
    }
    if (projectData.other[i].id === id) {
      return projectData.other[i];
    }
  }
}

const Project = (props) => {
  let params = useParams();
  let project = getProject(params.projectId);
  return (
    <div>
      <div id="project-header">
        <NavLink to="/projects">Projects</NavLink>
        <i className="material-icons">navigate_next</i>
        <h2>{project.title}</h2>
      </div>
      <p>{project.description}</p>
    </div>
  );
};

export default Project;
