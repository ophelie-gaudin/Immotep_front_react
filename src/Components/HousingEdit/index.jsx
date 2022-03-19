import React, { useState } from 'react'
import FormsCard from '../FormsCard';
import Cookies from "js-cookie";

export default function HousingEdit() {
  const [ad_price, setAd_price] = useState("");
  const id_project = window.location.href
    .slice(window.location.href.indexOf("dashboard"))
    .substring(10, 12);
  const id_housing = window.location.href
  .slice(window.location.href.indexOf("housing"))
  .substring(8, 10);
  
  const data = {
    ad_price,

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
          //window.location.href = "/profile";
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
        title="Modifier mes informations personnelles"
        returnText="Mon profil"
        returnUrl="/profile"
      >
        <form onSubmit={handleSubmit}>
          <label className="font-medium">
            Prix du logement
            <input
              type="text"
              className="mt-2"
              onChange={(e) => setAd_price(e.target.value)}
            />
          </label>
          <button className="orange-button forms-buttons">J'enregistre</button>
        </form>
      </FormsCard>
    </div>
  );
}
