import React, { useState, useEffect } from "react";
import Cookies from "js-cookie";
import OrangeButton from "../../components/Main/OrangeButton";
import ProjectDelete from "../../components/Delete/Project.delete";
import { useParams, Link } from "react-router-dom";
import FormsCard from "../../components/FormsCard";

import { FaRegEye } from "react-icons/fa";
import { GoInfo } from "react-icons/go";

export default function ProjectRead() {
  const [myHousings, setMyHousings] = useState([]);
  const [myProject, setMyProject] = useState([]);

  const { project_id } = useParams();

  const projectArgument = `projects/${project_id}`;

  const [dialog, setDialog] = useState({
    message: "",
    isLoading: false,
  });

  function handleModal() {
    setDialog({
      title: "Êtes-vous sûr de vouloir supprimer ce projet ?",
      message:
        "⚠ Attention : cette action supprimera tous les logements associés à ce projet",

      isLoading: true,
    });
  }

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

  const housingArgument = `projects/${project_id}/housings`;

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
        <b className="font-extrabold">Titre : </b>
        {myProject.title}
        <br />
        <br />
        <b className="font-extrabold">Localisation :</b>{" "}
        {myProject.localization}
        <br />
        <br />
        <b className="font-extrabold">Commentaires :</b> {myProject.comment}
        <br />
        <br />
      </div>
      <div className="flex w-full justify-end mb-4">
        {dialog.isLoading && (
          <ProjectDelete title={dialog.title} message={dialog.message} />
        )}
        <Link
          to={`/dashboard/${project_id}/edit`}
          className="text-primary text-sm border border-primary p-2 mr-4 rounded-[0.25rem] font-bold hover:border-primary;"
        >
          Modifier ce projet
        </Link>
        <button
          className="block py-2 pr-4 pl-3 text-white rounded border-b border-light md:p-0 dark:text-white bg-primary   hover:border hover:border-primary hover:bg-white hover:text-bold hover:text-[#E24E58] md:px-2 md:py:1  hover:font-bold hover:border hover:border-primary hover:bg-white hover:text-bold hover:text-[#E24E58] md:px-2 md:py:1  hover:font-bold text-bolder "
          onClick={() => handleModal()}
        >
          Supprimer le projet
        </button>
      </div>

      <div className="bg-white dark:bg-gray-800  shadow px-4 md:px-10 pt-4 md:pt-7 pb-5 overflow-y-auto">
        <table className="w-full whitespace-nowrap">
          <thead>
            <tr
              tabIndex="0"
              className="focus:outline-none h-16 w-full text-sm leading-none text-gray-800 dark:text-white "
            >
              <th className="font-extrabold text-center">Type de bien</th>
              <th
                className="font-normal text-center "
                title="De base, nous affichons le prix de l'annonce. Dès que vous rentrez un prix d'offre, nous prenons ce dernier en compte."
              >
                <div className="flex font-extrabold justify-center">
                  Prix <GoInfo className="ml-2" />
                </div>
              </th>
              <th className="font-extrabold text-center">Localisation</th>
              <th
                className="font-normal text-center"
                title="De base, notre calcul de rentabilité s'effectue avec le prix de l'annonce. Dès que vous rentrez un prix d'offre, nous prenons ce dernier en compte."
              >
                <div className="flex font-extrabold justify-center">
                  Rentabilité <GoInfo className="ml-2" />
                </div>
              </th>
              <th className="font-extrabold text-center">
                Voir + d'infos <br />{" "}
                <small className="text-greey/70">[dernière modif]</small>
              </th>
            </tr>
          </thead>

          {myHousings.map((data) => {
            return (
              <tbody className="w-full" key={data.id}>
                <tr
                  tabIndex="0"
                  className="focus:outline-none h-20 text-sm leading-none text-gray-800 dark:text-white  bg-white dark:bg-gray-800  hover:bg-primary-light/20 dark:hover:bg-gray-900  border-b border-t border-gray-100 dark:border-gray-700 "
                >
                  <td className="pl-12">{data.property_category}</td>
                  <td className="pl-12">{data.offer_price}</td>
                  <td className="pl-12">{data.localization}</td>
                  <td className="pl-12">
                    {Number(data.offer_profitability) >= 10 ? (
                      <div className="bg-primary-light rounded w-fit px-2 py-1">
                        {Number(data.offer_profitability).toFixed(1) + " %"}
                      </div>
                    ) : null}
                    {Number(data.offer_profitability) <= 10 &&
                    Number(data.offer_profitability) >= 5 ? (
                      <div className="bg-orange-300 rounded w-fit px-2 py-1">
                        {Number(data.offer_profitability).toFixed(1) + " %"}
                      </div>
                    ) : (
                      ""
                    )}
                    {Number(data.offer_profitability) < 5 &&
                    Number(data.offer_profitability) !== 0 ? (
                      <div className="bg-red-300 rounded w-fit px-2 py-1">
                        {Number(data.offer_profitability).toFixed(1) + " %"}
                      </div>
                    ) : (
                      ""
                    )}
                    {Number(data.offer_profitability) === 0
                      ? "Non calculée"
                      : ""}
                  </td>

                  <td className="h-full">
                    <Link
                      to={`/dashboard/${project_id}/housing/${data.id}`}
                      className="flex flex-col justify-center items-center"
                    >
                      <span className="text-xl text-greey mb-2">
                        <FaRegEye />
                      </span>
                      <small className="text-greey/70">
                        {new Date(data.updated_at).toLocaleDateString("en-US")}
                      </small>
                    </Link>
                  </td>
                </tr>
              </tbody>
            );
          })}
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
