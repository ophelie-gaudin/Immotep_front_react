import React from "react";
import "./Dashboard.css";
import { FaArrowLeft } from "react-icons/fa";
import WarningArea from "../Main/WarningArea";
import ProjectCard from "../Main/ProjectCard";
import OrangeButton from "../Main/OrangeButton";
import { useState } from "react";
import Cookies from "js-cookie";

const Dashboard = () => {
  const [myProjects, setMyProjects] = useState({});

  if (myProjects.length === 0) {
    fetch(`https://immotep-api.herokuapp.com/projects`, {
      method: "get",
      headers: {
        "Content-Type": "application/json",
        Authorization: Cookies.get("token"),
      },
    }).then((res) => {
      if (res.ok) {
        console.log(res);
        setMyProjects(res);
        window.location.href = "/dashboard";
        return res.json();
      } else {
        throw new Error(res);
      }
    });
  }

  return (
    <div className="flex flex-col  rounded-[0.25rem] mx-auto w-[90vw] border border-2 border-primary text-black ">
      <div className="px-8 py-8 bg-primary">
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
      </div>
      <div className="">
        {/* <div className="flex flex-wrap mb-12">
          {myProjects.map((project) => {
            <div key={project.id}>
              <ProjectCard
                title={project.title}
                localization={project.localization}
                comment={project.comment}
              />
              ;
            </div>;
          })}
        </div> */}
        <div className="mb-10 mr-8 flex justify-end">
          <OrangeButton url="/dashboard/new">
            Créer un nouveau Projet
          </OrangeButton>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
