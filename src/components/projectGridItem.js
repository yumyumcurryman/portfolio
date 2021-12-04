import React from "react";
import "../styles/projectGridItem.css";
// import ReactImageAppear from "react-image-appear";
// import grey from "../img/grey.png";

const ProjectGridItem = (props) => {
  const data = props.data;
  // const bounceTime = Math.random() * 1.5 + 0.5 + "s";

  return (
    <div className="project-card">
      <img
        src={require(`../img/previews/${data.previewImage}`).default}
        alt=""
      />
      {/* <ReactImageAppear
        src={require(`../img/previews/${data.previewImage}`).default}
        animation="bounceIn"
        animationDuration={bounceTime}
        placeholder={grey}
      /> */}
      <h3>{data.title}</h3>
      <p>{data.description}</p>
    </div>
  );
};

export default ProjectGridItem;
