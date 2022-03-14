import React from "react";
import "./Dashboard.css";
import { FaArrowLeft } from "react-icons/fa";
import WarningArea from "../Main/WarningArea";
import ProjectCard from "../Main/ProjectCard";
import OrangeButton from "../Main/OrangeButton";
import Input from "../Main/Input";

const Dashboard = () => {
  return (
    <div className="flex flex-col  rounded-[0.25rem] mx-auto w-[90vw] border border-2 border-oraange text-black ">
      <div className="px-8 py-8 bg-oraange">
        <a className="flex text-2xl" href="/">
          <FaArrowLeft className="dashboard-arrow-icon" /> Accueil
        </a>
        <h2 className="text-3xl font-semibold">
          Bienvenue sur <span>vos projets</span>{" "}
        </h2>
        <p className="">
          Ici, vous pouvez retrouver tous vos projets locatifs en cours, en
          créer de nouveaux et accéder au comparateur de logements.{" "}
        </p>
        <WarningArea>
          Ici, vous pouvez retrouver tous vos projets locatifs en cours, en
          créer de nouveaux et accéder au comparateur de logements.{" "}
        </WarningArea>

        <div>
          <div>
            <Input label="essai Label" type="text" name="text" />
          </div>
          <div>
            <Input label="essai Label" type="text" name="text" />
          </div>
          <div>
            <Input label="essai Label" type="text" name="text" />
          </div>
          <div>
            <Input type="text" name="text" />
          </div>
        </div>
      </div>
      <div className="bg-greey">
        <div className="flex flex-wrap">
          <ProjectCard
            title="hello"
            localization="Montpellier"
            comment=" tailwind c'est cool mais c'est pas facile tailwind c'est cool mais c'est pas facile tailwind c'est cool mais c'est pas facile"
          />
          <ProjectCard
            title="hello"
            localization="Montpellier"
            comment="tailwind c'est cool mais c'est pas facile"
          />
          <ProjectCard
            title="hello"
            localization="Montpellier"
            comment="tailwind c'est cool mais c'est pas facile"
          />
          <OrangeButton>Créer un nouveau Logement</OrangeButton>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
