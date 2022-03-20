import React from "react";
import FormsCard from "../../Components/FormsCard";
import OrangeButton from "../../Components/Main/OrangeButton";
import "./Profile.css";
import { useEffect, useState } from "react";
import Cookies from "js-cookie";

const Profile = () => {
  const [myProfile, setMyProfile] = useState("");

  const myProfileArgument = `member-data`;

  useEffect(() => {
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
          setMyProfile(response.user);
          console.log("Response:", response);
        })
        .catch((err) => console.error(err));
    };
    fetchList(`https://immotep-api.herokuapp.com/`, myProfileArgument);
  }, [myProfileArgument]);

  return (
    <FormsCard
      title="Mon profil"
      returnText="Accueil"
      retrunUrl="/"
      warning="Ici vous trouverez toutes vos informations personnelles."
    >
      <p className="pt-8 pl-24 mb-24 text-greey">
        Mon adresse e-mail : {myProfile.email}
      </p>
      <div className="flex place-content-end mb-12 m-8">
        <a href="/users/edit">
          <OrangeButton url="/profile/edit">
            Je modifie mes informations
          </OrangeButton>
        </a>
      </div>
    </FormsCard>
  );
};

export default Profile;
