import React from "react";
import "./ProjectCard.css";
import { FaKey } from "react-icons/fa";

const ProjectCard = ({ title, localization, comment }) => {
  return (
    <div className="project-card">
      <div className="project-card-text-scale">
        <div className="project-card-title">{title}</div>
        <div className="project-card-localization">{localization}</div>
        <div className="project-card-comment">{comment}</div>
      </div>
      <span>
        <FaKey className="project-card-icon rotate" />
      </span>
    </div>
  );
};

export default ProjectCard;
