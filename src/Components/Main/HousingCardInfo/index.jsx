import React from "react";
import { Link } from "react-router-dom";

const HousingCardInfo = (props) => {
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
        
        <Link to={`/dashboard/${id_project}/housing/${data.id}/edit`}>Modifier le logement</Link>
      </div>
    </div>
  );
};

export default HousingCardInfo;