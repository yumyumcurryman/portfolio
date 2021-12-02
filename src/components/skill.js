import React from "react";
import "../styles/skill.css";

const Skill = (props) => {
  return (
    <div className="skill-container">
      <img src={props.img} alt={props.skill} />
      <h3>{props.skill}</h3>
    </div>
  );
};

export default Skill;
