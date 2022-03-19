import React, { useState } from 'react'
import FormsCard from '../FormsCard';
import Cookies from "js-cookie";

export default function HousingEdit() {
  const [localization, setLocalization] = useState();
  const [ad_price, setAdPrice] = useState();
  const [property_category, setProperty_Category] = useState();
  const [area, setArea] = useState();
  const [ad_url, setAdUrl] = useState();
  const [comment, setComment] = useState();
  const [offer_price, setOfferPrice] = useState();
  const [repairs_price, setRepairsPrice] = useState();
  const [annual_rent, setAnnualRent] = useState();
  const [agency_fees, setAgencyFees] = useState();
  const [pno_insurance, setPnoInsurance] = useState();
  const [property_tax, setPropertyTax] = useState();
  const [rental_management, setRentalManagement] = useState();
  const [rental_unpayment_insurance, setRentalUnpaymentInsurance] = useState();
  const [building_co_tax, setBuilding_Co_Tax] = useState();
  const [maintenance_percentage, setMaintenancePercentage] = useState();
  const [ad_profitability, setAdProfitability] = useState();
  const [offer_profitability, setOfferProfitability] = useState();
  const [new_property, setNewProperty] = useState();
  const [rental_vacancy, setRentalVacancy] = useState();

  const id_project = window.location.href
    .slice(window.location.href.indexOf("dashboard"))
    .substring(10, 12);
  const id_housing = window.location.href
    .slice(window.location.href.indexOf("housing"))
    .substring(8, 10);
  
  const data = {
    localization,
    ad_price,
    property_category,
    area,
    ad_url,
    comment,
    offer_price,
    repairs_price,
    annual_rent,
    agency_fees,
    pno_insurance,
    property_tax,
    rental_management,
    rental_unpayment_insurance,
    building_co_tax,
    maintenance_percentage,
    ad_profitability,
    offer_profitability,
    new_property,
    rental_vacancy
  }
  
  const handleSubmit = (e) => {
    e.preventDefault();
    fetch(`https://immotep-api.herokuapp.com/projects/${id_project}/housings/${id_housing}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: Cookies.get("token"),
      },
      body: JSON.stringify(data),
    })
      .then((res) => {
        if (res.ok) {
          window.location.href = `/dashboard/${id_project}/housing/${id_housing}`;
          return res.json();
        } else {
          throw new Error(res);
        }
      })
      .then((json) => console.log(json))
      .catch((err) => console.error(err));
  };

  return (
    <div>
      <FormsCard
        title="Modifier mon logement"
        returnText="Mon Logement"
        returnUrl={`/dashboard/${id_project}/housing/${id_housing}`}
      >
        <form onSubmit={handleSubmit}>
          <label className="font-medium">
            Localisation
            <input
              type="text"
              className="mt-2"
              onChange={(e) => setLocalization(e.target.value)}
            />
          </label>
          <label className="font-medium">
            Prix du logement
            <input
              type="text"
              className="mt-2"
              onChange={(e) => setAdPrice(e.target.value)}
            />
          </label>
          <label className="font-medium">
            m2
            <input
              type="text"
              className="mt-2"
              onChange={(e) => setArea(e.target.value)}
            />
          </label>
          <label className="font-medium">
            Taxe ??
            <input
              type="text"
              className="mt-2"
              onChange={(e) => setBuilding_Co_Tax(e.target.value)}
            />
          </label>
          <button className="orange-button forms-buttons">J'enregistre</button>
        </form>
      </FormsCard>
    </div>
  );
}
