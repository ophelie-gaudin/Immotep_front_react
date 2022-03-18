import React from "react";
import { FaArrowLeft } from "react-icons/fa";
import OrangeButton from "../../Components/Main/OrangeButton";
import "./Profile.css";

const Profile = (props) => {
  return (
    <div>
      {" "}
      <div className="flex flex-col rounded-[0.25rem] my-24 mx-auto w-[80vw] border border-2 border-primary text-black ">
        <div className="px-8 py-8 bg-primary mb-8">
          <a className="flex text-xl" href="/">
            <FaArrowLeft className="profile-arrow-icon" /> Retour
          </a>
          <p className="text-center text-3xl font-semibold">{props.title}</p>
          <div className="text-center">
            <h2 className="  text-5xl">
              Mon <span className="font-bold"> profil</span>
            </h2>
            <p className="mt-3">
              Ici vous trouverez toutes vos informations personnelles.
            </p>
          </div>
        </div>
        <p className="pt-12 pl-24 mb-24">
          Votre adresse e-mail :{props.currentuser}
        </p>
        <div className="flex place-content-end mb-12 m-8">
          <a href="/users/edit">
            <OrangeButton>Modifier</OrangeButton>
          </a>
        </div>
        {props.children}
      </div>
    </div>
  );
};

export default Profile;
