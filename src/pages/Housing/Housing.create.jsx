import React, { useState } from "react";
//import { useParams } from "react-router";
import FormsCard from "../../components/FormsCard";
import Cookies from "js-cookie";
//import Input from "../../Components/Main/Input";
import { useParams, useNavigate } from "react-router-dom";

const HousingCreate = () => {
  const [propertyCategory, setPropertyCategory] = useState("");
  const [localization, setLocalization] = useState("");
  const [ad_price, setAdPrice] = useState("");

  const navigate = useNavigate();
  const { project_id } = useParams();

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch(`https://immotep-api.herokuapp.com/projects/${project_id}/housings`, {
      method: "post",
      headers: {
        "Content-Type": "application/json",
        Authorization: `${Cookies.get("token")}`,
      },
      body: JSON.stringify({
        housing: {
          property_category: propertyCategory,
          localization,
          ad_price,
          // offer_price: ad_price,
        },
      }),
    })
      .then((res) => {
        if (res.ok) {
          navigate(`/dashboard/${project_id}`);
          return res.json();
        } else {
          throw new Error(res);
        }
      })
      .then((json) => console.log(json.user.id))
      .catch((err) => console.error(err));
  };

  return (
    <div>
      <FormsCard
        title="Créer un nouveau logement"
        returnText="Mon projet"
        returnUrl={`/dashboard/${project_id}`}
      >
        <>
          <form onSubmit={handleSubmit}>
            <label className="flex flex-col w-[90%] items-start">
              Type de bien
              {/* <input
                type="text"
                name="property-category"
                onChange={(e) => setPropertyCategory(e.target.value)}
              /> */}
              <select
                className="w-full"
                name="property-category"
                id="hypothesis"
                onChange={(e) => setPropertyCategory(e.target.value)}
              >
                <option value="Studio">Studio</option>
                <option value="T1 et T2">T1 et T2</option>
                <option value="Grand appartement">Grand appartement</option>
                <option value="Maison">Maison</option>
                <option value="Immeuble">Immeuble</option>
              </select>
            </label>

            <label>
              Localisation
              <input
                type="text"
                name="localization"
                onChange={(e) => setLocalization(e.target.value)}
              />
            </label>
            <label>
              Prix de l'annonce
              <input
                type="text"
                name="ad_price"
                onChange={(e) => setAdPrice(e.target.value)}
              />
            </label>
            <div className="flex justify-end mb-8 mt-8 mr-6">
              <button className="orange-button forms-buttons" type="submit">
                Créer
              </button>
            </div>
          </form>
        </>
      </FormsCard>
    </div>
  );
};

export default HousingCreate;
