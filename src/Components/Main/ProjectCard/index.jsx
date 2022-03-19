import React from "react";
import "./ProjectCard.css";
import { FaKey } from "react-icons/fa";
import { Link } from 'react-router-dom';
import ProjectDelete from "../../ProjectDelete";

const ProjectCard = (props) => {
  const { data } = props;

  return (
    <div className="project-card">
      <div className="project-card-text-scale">
        <div className="project-card-title">{data.title}</div>
        <div className="project-card-localization">{data.localization}</div>
        <div className="project-card-comment">{data.comment}</div>
        <div className="project-card-comment">
          <Link to={`/dashboard/${data.id}`}
            state={{data}}>
              Voir plus d'informations</Link>
        </div>
      </div>
      <span>
        <FaKey className="project-card-icon rotate" />
      </span>
      <br />
        <ProjectDelete data={data.id}/>
    </div>
  );
};

export default ProjectCard;
