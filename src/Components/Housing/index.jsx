import React, { useState, useEffect } from 'react';
import Cookies from "js-cookie";
import HousingCardInfo from '../Main/HousingCardInfo';

export default function Housing() {
  const [myHousingsInfo, setMyHousingsInfo] = useState("");

  const id_project = window.location.href
    .slice(window.location.href.indexOf("dashboard"))
    .substring(10, 12);
  const id_housings = window.location.href
  .slice(window.location.href.indexOf("housing"))
  .substring(8, 10);
  
  const oneHousingArgument = `projects/${id_project}/housings/${id_housings}`;

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
        setMyHousingsInfo(response);
      })
      .catch((err) => console.error(err));
    };
    fetchList(`https://immotep-api.herokuapp.com/`, oneHousingArgument);
  }, [oneHousingArgument])

  return (
    <div>
      <h1>Information concernant le logement</h1>
        <div>
          <HousingCardInfo data={myHousingsInfo} />
        </div>
    </div>
  )
}