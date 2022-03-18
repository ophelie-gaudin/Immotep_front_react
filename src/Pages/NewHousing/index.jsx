import React, { useState } from "react";
//import { useParams } from "react-router";
import FormsCard from "../../Components/FormsCard";
import Cookies from "js-cookie";
//import Input from "../../Components/Main/Input";

const NewAd = () => {
  const [propertyCategory, setPropertyCategory] = useState("");
  const [localization, setLocalization] = useState("");
  const [adPrice, setAdPrice] = useState("");

  const id_project = window.location.href.slice(window.location.href.indexOf("dashboard")).substring(10, 12);

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch(`https://immotep-api.herokuapp.com/projects/${id_project}/housings`, {
      method: "post",
      headers: {
        "Content-Type": "application/json",
        Authorization: `${Cookies.get("token")}`,
      },
      body: JSON.stringify({
        housing: {
          propertyCategory,
          localization,
          adPrice,
        },
      }),
    })
      .then((res) => {
        if (res.ok) {
          window.location.href = "/dashboard";
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
      <FormsCard title="Créer un nouveau logement ">
        <>
          <form onSubmit={handleSubmit}>
            <label>
              Type de bien
              <input
                type="text"
                name="property-category"
                onChange={(e) => setPropertyCategory(e.target.value)}
              />
            </label>

            {/* <select name="hypothesis" id="hypothesis">
              <option value="volvo">Studio</option>
              <option value="saab">T1 et T2</option>
              <option value="mercedes">grand appartement</option>
              <option value="audi">Audi</option>
              <option value="audi">Audi</option>
            </select> */}

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
                name="adPrice"
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

export default NewAd;
