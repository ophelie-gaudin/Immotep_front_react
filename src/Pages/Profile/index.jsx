import React from "react";
import FormsCard from "../../Components/FormsCard";
import OrangeButton from "../../Components/Main/OrangeButton";
import "./Profile.css";

const Profile = (props) => {
  return (
    <FormsCard
      title="Mon profil"
      returnText="Accueil"
      retrunUrl="/"
      warning="Ici vous trouverez toutes vos informations personnelles."
    >
      <p className="pt-8 pl-24 mb-24 text-greey">
        Mon adresse e-mail :{props.currentuser}
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
