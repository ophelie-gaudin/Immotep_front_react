import React, { useState } from "react";
import Cookies from "js-cookie";
import HousingCard from "../Main/HousingCard";
import OrangeButton from "../Main/OrangeButton";
import FormsCard from "../FormsCard";

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
      <FormsCard
        title="Biens repérés"
        returnText="Mes projets"
        returnUrl="/dashboard"
      >
        <p className="text-primary-light italic text-center">
          Vous n'avez aucun logement dans ce projet (pour le moment 😉 !){" "}
        </p>
        <br />
        <div className="flex w-full justify-end">
          <OrangeButton url={`/dashboard/${id_project}/housings/new`}>
            Ajouter un Housing
          </OrangeButton>
        </div>
      </FormsCard>
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
