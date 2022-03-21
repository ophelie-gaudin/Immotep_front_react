import React, { useState, useEffect } from "react";
import Cookies from "js-cookie";
import HousingCard from "../../components/Main/HousingCard";
import OrangeButton from "../../components/Main/OrangeButton";
import ProjectDelete from "../../components/ProjectDelete";
import { useParams, Link } from "react-router-dom";
// import FormsCard from "../FormsCard";
// import { data } from "autoprefixer";
import { FaRegEdit, FaRegTrashAlt } from "react-icons/fa";
import { GoInfo } from "react-icons/go";

export default function ProjectRead() {
  const [myHousings, setMyHousings] = useState([]);
  const { project_id } = useParams();

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
    <div className="mt-12 mb-8">
      <div>
        <ProjectDelete data={project_id} />
        <h1>Liste des housings de votre projet</h1>
        {myHousings.map((data) => {
          return (
            <div key={data.id}>
              <HousingCard key={data.id} data={data} />
            </div>
          );
        })}

        <div class="bg-white dark:bg-gray-800  shadow px-4 md:px-10 pt-4 md:pt-7 pb-5 overflow-y-auto">
          <table class="w-full whitespace-nowrap">
            <thead>
              <tr
                tabindex="0"
                class="focus:outline-none h-16 w-full text-sm leading-none text-gray-800 dark:text-white "
              >
                <th class="font-normal text-center">Type de bien</th>
                <th
                  class="font-normal text-center pl-12"
                  title="De base, nous affichons le prix de l'annonce. Dès que vous rentrez un prix d'offre, nous prenons ce dernier en compte."
                >
                  Prix <GoInfo />
                </th>
                <th class="font-normal text-center pl-12">Localisation</th>
                <th
                  class="font-normal text-center pl-12"
                  title="De base, notre calcul de rentabilité s'effectue avec le prix de l'annonce. Dès que vous rentrez un prix d'offre, nous prenons ce dernier en compte."
                >
                  Rentabilité <GoInfo />
                </th>
                <th class="font-normal text-center">
                  Actions <br /> <small className="text-greey/70">[date]</small>
                </th>
                {/* <th class="font-normal text-left pl-16">Members</th> */}
              </tr>
            </thead>
            <tbody class="w-full">
              {myHousings.map((data) => {
                return (
                  <tr
                    key={data.id}
                    tabindex="0"
                    class="focus:outline-none h-20 text-sm leading-none text-gray-800 dark:text-white  bg-white dark:bg-gray-800  hover:bg-gray-100 dark:hover:bg-gray-900  border-b border-t border-gray-100 dark:border-gray-700 "
                  >
                    <td class="pl-4 flex items-center">
                      {data.property_category}
                    </td>
                    <td class="pl-12">{data.offer_price}</td>
                    <td class="pl-12">{data.localization}</td>
                    <td class="pl-20">{data.offer_profitability}</td>

                    <td class=" flex flex-col justify-center">
                      <div className="flex text-xl">
                        <button href="">
                          <FaRegTrashAlt />
                        </button>
                        <button>
                          <FaRegEdit />
                        </button>
                      </div>

                      <small className="text-greey/70">
                        {Date(data.updated_at)}
                      </small>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>

        <br />
        <div className="flex w-full justify-end">
          <Link
            to={`/dashboard/${project_id}/edit`}
            className="text-primary hover:underline mr-6"
          >
            Modifier ce projet
          </Link>
          <OrangeButton url={`/dashboard/${project_id}/housings/new`}>
            J'ajoute un logement
          </OrangeButton>
        </div>
      </div>
    </div>
  );
}

//     <FormsCard
//       title="Biens repérés"
//       returnText="Mes projets"
//       returnUrl="/dashboard"
//     >
//     </FormsCard>
