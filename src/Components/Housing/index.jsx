import React, { useState, useEffect } from 'react';
import Cookies from "js-cookie";
import HousingCardInfo from '../Main/HousingCardInfo';
import { useLocation } from "react-router-dom";

export default function Housing() {
  const [myHousingsInfo, setMyHousingsInfo] = useState("");
  const location = useLocation();
  console.log(location.state)
  const id_project = location.state.project_id;
  const id_housings = location.state.id;
  
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