import React from "react";
import "./HousingCard.css";
import { FaKey } from "react-icons/fa";
import { Link } from "react-router-dom";

const HousingCard = (props) => {
  const { data } = props;
  const id_project = window.location.href
    .slice(window.location.href.indexOf("dashboard"))
    .substring(10, 12);

  return (
    <div className="project-card">
      <div className="project-card-text-scale">
        <div className="project-card-title">{data.ad_price}</div>
        <div className="project-card-localization">{data.localization}</div>
        <div className="project-card-comment">{data.notary_fees}</div>
      </div>
      <span>
        <FaKey className="project-card-icon rotate" />
      </span>
      <div className="project-card-comment">
        <Link to={`/dashboard/${id_project}/housing/${data.id}/edit`}>Modifier le logement</Link>
      </div>
    </div>
  );
};

export default HousingCard;