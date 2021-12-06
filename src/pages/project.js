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
      <div className="project-content">
        <div id="project-image-spanner">
          <img
            src={require(`../img/previews/${project.previewImage}`).default}
            alt=""
          />
        </div>
        <h3 className="section-content-header">Description</h3>
        <div dangerouslySetInnerHTML={{ __html: project.article }}></div>
        <h3 className="section-content-header">Project Info</h3>
        <div id="project-info">
          <BadgeItem description="Date" item={project.date} />
          <BadgeItem description="Website" item={project.website} />
          <BadgeItem description="Tech Stack" item={project.stack} />
        </div>
      </div>
    </div>
  );
};

const BadgeItem = (props) => {
  if (props.item == null) {
    return null;
  }
  if (props.description === "Website") {
    return (
      <div className="badge-item">
        <div className="badge">{props.description}</div>
        <a href={props.item} target="_blank" rel="noreferrer">
          {props.item}
        </a>
      </div>
    );
  }
  return (
    <div className="badge-item">
      <div className="badge">{props.description}</div>
      {props.description === "Tech Stack" ? (
        <TechStackRow stack={props.item} />
      ) : (
        props.item
      )}
    </div>
  );
};

const TechStackRow = (props) => {
  return (
    <div className="tech-stack-row">
      {props.stack.map((item) => (
        <TechStackItem item={item} />
      ))}
    </div>
  );
};

const TechStackItem = (props) => {
  return <div className="tech-stack-item">{props.item}</div>;
};

export default Project;
