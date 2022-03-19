import React from "react";

const HousingCardInfo = (props) => {
  const { data } = props;

  return (
    <div className="project-card">
      <div className="project-card-text-scale">
        <div className="project-card-title">{data.ad_price}</div>
        <div className="project-card-localization">{data.localization}</div>
        <div className="project-card-comment">{data.notary_fees}</div>
      </div>
    </div>
  );
};

export default HousingCardInfo;