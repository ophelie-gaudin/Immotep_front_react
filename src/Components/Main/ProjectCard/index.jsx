import React from "react";
import "./ProjectCard.css";
import { FaKey, FaMapPin } from "react-icons/fa";
import { FiArrowDownRight } from "react-icons/fi";

import { Link } from "react-router-dom";

const ProjectCard = (props) => {
  const { data } = props;

  return (
    <Link to={`/dashboard/${data.id}`} className="project-card group">
      <div className="project-card-text-scale">
        <div className="project-card-title">{data.title}</div>
        <div className="project-card-localization flex items-center">
          {" "}
          <span className="mr-4">
            <FaMapPin className="text-lg" />
          </span>
          {data.localization}
        </div>
        <div className="project-card-comment italic">{data.comment}</div>
        <div className="project-card-comment flex items-between w-full justify-end">
          <span>
            <FiArrowDownRight className="project-card-icon text-3xl font-bold group-hover:animate-bounce" />
          </span>
        </div>
      </div>
    </Link>
  );
};

export default ProjectCard;
