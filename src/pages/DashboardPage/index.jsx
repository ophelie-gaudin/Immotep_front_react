import React, { useState, useEffect } from "react";
import { FaArrowLeft } from "react-icons/fa";
import WarningArea from "../../Components/Main/WarningArea";
import ProjectCard from "../../Components/Main/ProjectCard";
import OrangeButton from "../../Components/Main/OrangeButton";

import Cookies from "js-cookie";

export default function DashboardPage() {
  const [myProjects, setMyProjects] = useState([]);
  const projectArgument = "projects";

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
          setMyProjects(response);
        })
        .catch((err) => console.error(err));
    };
    fetchList(`https://immotep-api.herokuapp.com/`, projectArgument);
  }, []);

  return (
    <div className="mt-12 mb-8">
      <div className="flex flex-col  rounded-[0.25rem] mx-auto w-[90vw] border-2 border-primary text-whiite ">
        <div className="px-8 py-8 bg-primary">
          <a className="flex !text-md items-center" href="/">
            <FaArrowLeft className="dashboard-arrow-icon" /> Accueil
          </a>
          <h2 className="text-3xl font-pacifico text-center mt-8">
            Bienvenue sur <span>vos projets</span>{" "}
          </h2>
          <WarningArea>
            Ici, vous pouvez retrouver tous vos projets locatifs en cours, en
            créer de nouveaux et accéder au comparateur de logements.{" "}
          </WarningArea>
        </div>
        <div className="">
          <div className="flex flex-wrap mb-12 justify-center">
            {myProjects.map((data) => {
              return <ProjectCard key={data.id} data={data} />;
            })}
          </div>
          <div className="mb-10 mr-8 flex justify-end">
            <OrangeButton url="/dashboard/new">
              J'ai un nouveau projet !
            </OrangeButton>
          </div>
        </div>
      </div>
    </div>
  );
}
