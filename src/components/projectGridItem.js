import React from "react";
import "../styles/projectGridItem.css";

const ProjectGridItem = (props) => {
  const data = props.data;
  return (
    <div className="project-card">
      <img
        src={require(`../img/previews/${data.previewImage}`).default}
        alt=""
      />
      <h3>{data.title}</h3>
      <p>{data.description}</p>
    </div>
  );
};

export default ProjectGridItem;
