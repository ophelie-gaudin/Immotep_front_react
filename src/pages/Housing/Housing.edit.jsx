import React, { useState, useEffect } from "react";
import EditForm from "./EditForm";
import FormsCard from "../../components/FormsCard";
import Cookies from "js-cookie";
import { useParams, useNavigate } from "react-router-dom";

export default function HousingUpdate() {
  const navigate = useNavigate();
  const { housing_id, project_id } = useParams();
  const [myHousingsInfo, setMyHousingsInfo] = useState("");

  const oneHousingArgument = `projects/${project_id}/housings/${housing_id}`;

  useEffect(() => {
    const fetchList = (url, argument) => {
      const finalURL = argument ? `${url}${argument}` : url;
      fetch(`${finalURL}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: Cookies.get("token"),
        },
      })
        .then((response) => response.json())
        .then((response) => {
          setMyHousingsInfo(response);
        })
        .catch((err) => console.error(err));
    };
    fetchList(`https://immotep-api.herokuapp.com/`, oneHousingArgument);
  }, [oneHousingArgument]);

  const [localization, setLocalization] = useState();
  const [ad_price, setAdPrice] = useState();
  const [property_category, setPropertyCategory] = useState();
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
  const [building_co_tax, setBuildingCoTax] = useState();
  const [maintenance_percentage, setMaintenancePercentage] = useState();
  const [ad_profitability, setAdProfitability] = useState();
  const [offer_profitability, setOfferProfitability] = useState();
  const [new_property, setNewProperty] = useState();
  const [rental_vacancy, setRentalVacancy] = useState();

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
    rental_vacancy,
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch(
      `https://immotep-api.herokuapp.com/projects/${project_id}/housings/${housing_id}`,
      {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          Authorization: Cookies.get("token"),
        },
        body: JSON.stringify(data),
      }
    )
      .then((res) => {
        if (res.ok) {
          navigate(`/dashboard/${project_id}/housing/${housing_id}`);
        } else {
          throw new Error(res);
        }
      })
      .catch((err) => console.error(err));
  };

  return (
    <div className="mt-12 mb-8">
      <div>
        <FormsCard
          title="Modifier mon logement"
          returnText="Mon Logement"
          returnUrl={`/dashboard/${project_id}/housing/${housing_id}`}
        >
          <form onSubmit={handleSubmit}>
            <label className="font-medium">
              Localisation :
              <input
                type="text"
                className="mt-2"
                value={myHousingsInfo.localization}
                onChange={(e) => setLocalization(e.target.value)}
              />
            </label>
            <label className="font-medium">
              Prix du logement :
              <input
                type="number"
                className="mt-2"
                value={myHousingsInfo.ad_price}
                onChange={(e) => setAdPrice(e.target.value)}
              />
            </label>

            <label className="flex flex-col font-medium w-[95%] items-start">
              Type de bien :
              <select
                className="w-full"
                name="property-category"
                id="hypothesis"
                value={myHousingsInfo.property_category}
                onChange={(e) => setPropertyCategory(e.target.value)}
              >
                <option value="Studio">Studio</option>
                <option value="T1 et T2">T1 et T2</option>
                <option value="Grand appartement">Grand appartement</option>
                <option value="Maison">Maison</option>
                <option value="Immeuble">Immeuble</option>
              </select>
            </label>
            <label className="font-medium">
              Surface en m² :
              <input
                type="text"
                className="mt-2"
                value={myHousingsInfo.area}
                onChange={(e) => setArea(e.target.value)}
              />
            </label>
            <label className="font-medium">
              Lien vers l'annonce :
              <input
                type="text"
                className="mt-2"
                value={myHousingsInfo.ad_url}
                onChange={(e) => setAdUrl(e.target.value)}
              />
            </label>
            <label className="font-medium">
              Commentaires :<br />
              <textarea
                type="text"
                className="mt-2 ml-7"
                value={myHousingsInfo.comment}
                onChange={(e) => setComment(e.target.value)}
              />
            </label>
            <br />
            <label className="font-medium">
              Prix de l'offre :
              <input
                type="number"
                className="mt-2"
                value={myHousingsInfo.offer_price}
                onChange={(e) => setOfferPrice(e.target.value)}
              />
            </label>
            <label className="font-medium">
              Montant des réparations
              <input
                type="number"
                className="mt-2"
                value={myHousingsInfo.repairs_price}
                onChange={(e) => setRepairsPrice(e.target.value)}
              />
            </label>
            <label className="font-medium">
              Loyer annuel :
              <input
                type="number"
                className="mt-2"
                value={myHousingsInfo.annual_rent}
                onChange={(e) => setAnnualRent(e.target.value)}
              />
            </label>
            <label className="font-medium">
              Frais d'agence :
              <input
                type="number"
                className="mt-2"
                value={myHousingsInfo.agency_fees}
                onChange={(e) => setAgencyFees(e.target.value)}
              />
            </label>
            <label className="font-medium">
              Montant de l'Assurance Propriétaire Non-Occupant (P.N.O.)
              <input
                type="number"
                className="mt-2"
                value={myHousingsInfo.pno_insurance}
                onChange={(e) => setPnoInsurance(e.target.value)}
              />
            </label>
            <label className="font-medium">
              Montant de la taxe foncière :
              <input
                type="number"
                className="mt-2"
                value={myHousingsInfo.property_tax}
                onChange={(e) => setPropertyTax(e.target.value)}
              />
            </label>
            <label className="font-medium">
              Montant des frais de co-propriété :
              <input
                type="number"
                className="mt-2"
                value={myHousingsInfo.building_co_tax}
                onChange={(e) => setBuildingCoTax(e.target.value)}
              />
            </label>
            <label className="font-medium">
              Pourcentage de provision pour entretien sur le montant du loyer :
              <input
                type="number"
                className="mt-2"
                value={myHousingsInfo.maintenance_percentage}
                onChange={(e) => setMaintenancePercentage(e.target.value)}
              />
            </label>

            <label className="font-medium">
              Pourcentage de vacance locative :
              <input
                type="number"
                className="mt-2"
                value={myHousingsInfo.rental_vacancy}
                onChange={(e) => setRentalVacancy(e.target.value)}
              />
            </label>
            <label className="font-medium">
              Bien neuf :
              <input
                type="checkbox"
                className="ml-8 mt-2"
                name="controlled"
                value={myHousingsInfo.new_property}
                onChange={(e) => setNewProperty(e.target.value)}
              ></input>{" "}
              Oui
            </label>
            <hr />
            <label className="font-medium">
              Assurance des loyers impayés :
              <input
                type="checkbox"
                className="ml-8 mt-2"
                name="controlled"
                value={myHousingsInfo.rental_unpayment_insurance}
                onChange={(e) => setRentalUnpaymentInsurance(e.target.value)}
              />{" "}
              Oui{" "}
            </label>
            <hr />
            <label className="font-medium">
              Gestion Locative :
              <input
                type="checkbox"
                className="ml-8 mt-2"
                name="controlled"
                value={myHousingsInfo.rental_management}
                onChange={(e) => setRentalManagement(e.target.value)}
              />{" "}
              Oui{" "}
            </label>

            <button className="orange-button forms-buttons">
              J'enregistre
            </button>
          </form>
        </FormsCard>
      </div>
    </div>
  );
}
