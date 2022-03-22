import React, { useState, useEffect } from "react";
import Cookies from "js-cookie";
import OrangeButton from "../../components/Main/OrangeButton";
import ProjectDelete from "../../components/ProjectDelete";
import { useParams, Link } from "react-router-dom";
import FormsCard from "../../components/FormsCard";

import { FaEllipsisH } from "react-icons/fa";
import { GoInfo } from "react-icons/go";

export default function ProjectRead() {
  const [myHousings, setMyHousings] = useState([]);
  const [myProject, setMyProject] = useState([]);

  const { project_id } = useParams();

  // Get project
  const projectArgument = `projects/${project_id}`;

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
          setMyProject(response);
        })
        .catch((err) => console.error(err));
    };
    fetchList(`https://immotep-api.herokuapp.com/`, projectArgument);
  }, [projectArgument]);

  // Get housings

  const housingArgument = `projects/${project_id}/housings`;

  useEffect(() => {
    // TODO : request with objects sorted by offer_profitability
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
          setMyHousings(response);
        })
        .catch((err) => console.error(err));
    };
    fetchList(`https://immotep-api.herokuapp.com/`, housingArgument);
  }, [housingArgument]);

  return (
    <FormsCard
      title="Mon projet et mes biens repérés"
      returnText="Mes projets"
      returnUrl={`/dashboard`}
    >
      <div className="w-full text-greey">
        <b>Titre : </b>
        {myProject.title}
        <br />
        <br />
        <b>Localisation :</b> {myProject.localization}
        <br />
        <br />
        <b>Commentaires :</b> {myProject.comment}
        <br />
        <br />
      </div>
      <div className="flex w-full justify-end mb-4">
        <Link
          to={`/dashboard/${project_id}/edit`}
          className="text-primary hover:underline mr-4"
        >
          Modifier ce projet
        </Link>
        <ProjectDelete data={project_id} />
      </div>

      <div className="bg-white dark:bg-gray-800  shadow px-4 md:px-10 pt-4 md:pt-7 pb-5 overflow-y-auto">
        <table className="w-full whitespace-nowrap">
          <thead>
            <tr
              tabIndex="0"
              className="focus:outline-none h-16 w-full text-sm leading-none text-gray-800 dark:text-white "
            >
              <th className="font-normal text-center">Type de bien</th>
              <th
                className="font-normal text-center "
                title="De base, nous affichons le prix de l'annonce. Dès que vous rentrez un prix d'offre, nous prenons ce dernier en compte."
              >
                <div className="flex justify-center">
                  Prix <GoInfo className="ml-2" />
                </div>
              </th>
              <th className="font-normal text-center">Localisation</th>
              <th
                className="font-normal text-center"
                title="De base, notre calcul de rentabilité s'effectue avec le prix de l'annonce. Dès que vous rentrez un prix d'offre, nous prenons ce dernier en compte."
              >
                <div className="flex  justify-center">
                  Rentabilité <GoInfo className="ml-2" />
                </div>
              </th>
              <th className="font-normal text-center">
                Actions <br /> <small className="text-greey/70">[date]</small>
              </th>
              {/* <th className="font-normal text-left pl-16">Members</th> */}
            </tr>
          </thead>
          <tbody className="w-full">
            {myHousings.map((data) => {
              return (
                <tr
                  key={data.id}
                  tabIndex="0"
                  className="focus:outline-none h-20 text-sm leading-none text-gray-800 dark:text-white  bg-white dark:bg-gray-800  hover:bg-primary-light/20 dark:hover:bg-gray-900  border-b border-t border-gray-100 dark:border-gray-700 "
                >
                  <td className="pl-12">{data.property_category}</td>
                  <td className="pl-12">{data.offer_price}</td>
                  <td className="pl-12">{data.localization}</td>
                  <td className="pl-12">
                    {data.offer_profitability || "Non calculée"}
                  </td>

                  <td className="h-full">
                    <Link
                      to={`/dashboard/${project_id}/housing/${data.id}`}
                      className="flex flex-col justify-center items-center"
                    >
                      <span className="text-xl text-greey mb-2">
                        <FaEllipsisH />
                      </span>

                      <small className="text-greey/70">
                        {new Date(data.updated_at).toLocaleDateString("en-US")}
                      </small>
                    </Link>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      <br />
      <div className="flex w-full justify-end">
        <OrangeButton url={`/dashboard/${project_id}/housings/new`}>
          J'ajoute un logement
        </OrangeButton>
      </div>
    </FormsCard>
  );
}

//     <FormsCard
//       title="Biens repérés"
//       returnText="Mes projets"
//       returnUrl="/dashboard"
//     >
//     </FormsCard>
