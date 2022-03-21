import React from "react";
import { Link } from "react-router-dom";
import HousingDelete from "../../HousingDelete";

const HousingCardInfo = (props) => {
  const { data } = props;

  return (
    <div className="project-card">
      <div className="project-card-text-scale">
        <div className="project-card-localization">{data.localization}</div>
        <div className="project-card-title">{data.ad_price}</div>
        <div className="project-card-comment">{data.property_category}</div>
        <div className="project-card-comment">{data.area} m2</div>
        <div className="project-card-comment">{data.ad_url}</div>
        <div className="project-card-comment">{data.comment}</div>
        <div className="project-card-comment">{data.offer_price}</div>
        <div className="project-card-comment">{data.repairs_price}</div>
        <div className="project-card-comment">{data.annual_rent}</div>
        <div className="project-card-comment">{data.agency_fees}</div>
        <div className="project-card-comment">{data.pno_insurance}</div>
        <div className="project-card-comment">{data.property_tax}</div>
        <div className="project-card-comment">{data.rental_management}</div>
        <div className="project-card-comment">{data.rental_unpayment_insurance}</div>
        <div className="project-card-comment">{data.building_co_tax}</div>
        <div className="project-card-comment">{data.maintenance_percentage}</div>
        <div className="project-card-comment">{data.ad_profitability}</div>
        <div className="project-card-comment">{data.offer_profitability}</div>
        <div className="project-card-comment">{data.new_property}</div>
        <div className="project-card-comment">{data.rental_vacancy}</div>
        
        <Link to={`/dashboard/${data.project_id}/housing/${data.id}/edit`}
          state={{data}}>
            Modifier le logement</Link>
        <br />
        <HousingDelete data={data}/>
        
      </div>
    </div>
  );
};

export default HousingCardInfo;