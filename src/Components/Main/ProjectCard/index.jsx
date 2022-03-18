import React from "react";
import "./ProjectCard.css";
import { FaKey } from "react-icons/fa";

const ProjectCard = (props) => {
  const {data} = props;

  return (
    <div className="project-card">
      <div className="project-card-text-scale">
        <div className="project-card-title">{data.title}</div>
        <div className="project-card-localization">{data.localization}</div>
        <div className="project-card-comment">{data.comment}</div>
      </div>
      <span>
        <FaKey className="project-card-icon rotate" />
      </span>
    </div>
  );
};

export default ProjectCard;
