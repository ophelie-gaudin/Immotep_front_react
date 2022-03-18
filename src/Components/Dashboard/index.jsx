import React from "react";
import "./Dashboard.css";
import { FaArrowLeft } from "react-icons/fa";
import WarningArea from "../Main/WarningArea";
import ProjectCard from "../Main/ProjectCard";
import OrangeButton from "../Main/OrangeButton";
import { useState } from "react";
import Cookies from "js-cookie";

const Dashboard = () => {
  const [myProjects, setMyProjects] = useState([]);

  if (myProjects.length === 0) {
    fetch(`https://immotep-api.herokuapp.com/projects`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: Cookies.get("token"),
      },
    })
      .then((response) => response.json())
      .then((response) => {
        setMyProjects(response);
      });

    return (
      <div className="flex flex-col  rounded-[0.25rem] mx-auto w-[90vw] border-2 border-primary text-whiite ">
        <div className="px-8 py-8 bg-primary">
          <a className="flex !text-md items-center" href="/">
            <FaArrowLeft className="h-4 w-4 mr-8" /> Accueil
          </a>
          <h2 className="text-3xl font-pacifico text-center mt-8">
            Bienvenue sur vos projets{" "}
          </h2>
          <WarningArea>
            Ici, vous pouvez retrouver tous vos projets locatifs en cours, en
            créer de nouveaux et accéder au comparateur de logements.{" "}
          </WarningArea>
        </div>
        <div className="">
          <div className="flex flex-wrap mb-12"></div>
          <div className="mb-10 mr-8 flex justify-end">
            <OrangeButton url="/dashboard/new">
              J'ai un nouveau projet !
            </OrangeButton>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="flex flex-col  rounded-[0.25rem] mx-auto w-[90vw] border-2 border-primary text-black ">
        <div className="px-8 py-8 bg-primary">
          <a className="flex text-2xl" href="/">
            <FaArrowLeft className="dashboard-arrow-icon" /> Accueil
          </a>
          <h2 className="text-3xl font-semibold">
            Bienvenue sur <span>vos projets</span>{" "}
          </h2>
          <WarningArea>
            Ici, vous pouvez retrouver tous vos projets locatifs en cours, en
            créer de nouveaux et accéder au comparateur de logements.{" "}
          </WarningArea>
        </div>
        <div className="">
          <div className="flex flex-wrap mb-12">
            {myProjects.map((data) => {
              return (
                <div key={data.id}>
                  <ProjectCard key={data.id} data={data} />
                </div>
              );
            })}
          </div>
          <div className="mb-10 mr-8 flex justify-end">
            <OrangeButton url="/dashboard/new">
              <div className="flex items-center">J'ai un nouveau projet !</div>
            </OrangeButton>
          </div>
        </div>
      </div>
    );
  }
};

export default Dashboard;
