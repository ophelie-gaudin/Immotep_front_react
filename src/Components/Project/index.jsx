import React, { useState } from "react";
import Cookies from "js-cookie";
import HousingCard from "../Main/HousingCard";
import OrangeButton from "../Main/OrangeButton";

export default function Project() {
  const [myHousings, setMyHousings] = useState([]);
  const id_project = window.location.href
    .slice(window.location.href.indexOf("dashboard"))
    .substring(10, 12);

  if (myHousings.length === 0) {
    fetch(`https://immotep-api.herokuapp.com/projects/${id_project}/housings`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: Cookies.get("token"),
      },
    })
      .then((response) => response.json())
      .then((response) => {
        setMyHousings(response);
      });

    return (
      <div>
        <h1> Aucun Housings </h1>
        <br />
        <OrangeButton url={`/dashboard/${id_project}/housings/new`}>
          Ajouter un Housing
        </OrangeButton>
      </div>
    );
  } else {
    return (
      <div>
        <h1>Liste des housings de votre projet</h1>
        {myHousings.map((data) => {
          return (
            <div key={data.id}>
              <HousingCard key={data.id} data={data} />
            </div>
          );
        })}
        <br />
        <OrangeButton url={`/dashboard/${id_project}/housings/new`}>
          Ajouter un Housing
        </OrangeButton>
      </div>
    );
  }
}
