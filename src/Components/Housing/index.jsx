import React, { useState } from 'react';
import Cookies from "js-cookie";
import HousingCardInfo from '../Main/HousingCardInfo';
//import OrangeButton from '../Main/OrangeButton';

export default function Housing() {
  const [myHousingsInfo, setMyHousingsInfo] = useState("");
  const id_project = window.location.href
    .slice(window.location.href.indexOf("dashboard"))
    .substring(10, 12);
  const id_housings = window.location.href
  .slice(window.location.href.indexOf("housing"))
  .substring(8, 10);

  if (myHousingsInfo.length === 0) {
    fetch(`https://immotep-api.herokuapp.com/projects/${id_project}/housings/${id_housings}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: Cookies.get("token"),
      },
    })
      .then((response) => response.json())
      .then((response) => {
        //console.log(response)
        setMyHousingsInfo(response);
      });

    return (
      <div>
        <h1> Chargement en cours </h1>
      </div>
    );
  } else {
    return (
      <div>
        <h1>Information concernant le logement</h1>
          <div>
            <HousingCardInfo data={myHousingsInfo} />
          </div>
      </div>
    );
  }
}