import React, { useState, useEffect } from "react";
import Cookies from "js-cookie";
import HousingCard from "../Main/HousingCard";
import OrangeButton from "../Main/OrangeButton";
import ProjectDelete from "../ProjectDelete";

export default function Project() {
  const [myHousings, setMyHousings] = useState([]);

  const id_project = window.location.href
    .slice(window.location.href.indexOf("dashboard"))
    .substring(10, 12);
  const housingArgument = `projects/${id_project}/housings`;

  useEffect(()=> {
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
        setMyHousings(response);
      });
    };
    fetchList(`https://immotep-api.herokuapp.com/`, housingArgument);
  }, [housingArgument])

  return (
    <div>
      <ProjectDelete data={id_project}/>
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
  )
}