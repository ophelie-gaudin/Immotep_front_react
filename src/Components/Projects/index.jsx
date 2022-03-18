import React, { useState } from 'react';
import Cookies from "js-cookie";
import HousingCard from "../Main/ProjectCard";

export default function Projects(data) {
  const [myHousings, setMyHousings] = useState([])

  if (myHousings.length === 0) {
    fetch(`https://immotep-api.herokuapp.com/projects/${data.id}/housings`, {
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
      </div>
      
    )
  } else {
    return (
      <div>
        <h1>Liste des housings de votre projet</h1>
        {myHousings.map((data) => {
          return (
            <div key={data.id}>
              <HousingCard key={data.id} data={data} />
            </div>
          )
        })}
      </div>
    )
  }

}
