import React, { useState } from "react";
import Cookies from "js-cookie";
import HousingCard from "../Main/HousingCard";
import OrangeButton from "../Main/OrangeButton";
import FormsCard from "../FormsCard";
import { data } from "autoprefixer";

export default function Project() {
  const [myHousings, setMyHousings] = useState([]);
  const id_project = window.location.href
    .slice(window.location.href.indexOf("dashboard"))
    .substring(10, 12);

  if (myHousings.length === 0) {
    fetch(`https://immotep-api.herokuapp.com/projects/${id_project}/housings`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: Cookies.get("token"),
      },
    })
      .then((response) => response.json())
      .then((response) => {
        setMyHousings(response);
      });

    return (
      <FormsCard
        title="Biens repérés"
        returnText="Mes projets"
        returnUrl="/dashboard"
      >
        <p className="text-primary-light italic text-center">
          Vous n'avez aucun logement dans ce projet (pour le moment 😉 !){" "}
        </p>
        <br />
        <div className="flex w-full justify-end">
          <OrangeButton url={`/dashboard/${id_project}/housings/new`}>
            J'ajoute un logement
          </OrangeButton>
        </div>
      </FormsCard>
    );
  } else {
    return (
      <FormsCard
        title="Biens repérés"
        returnText="Mes projets"
        returnUrl="/dashboard"
      >
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
                <th class="font-normal text-left pl-4">Type de bien</th>
                <th class="font-normal text-left pl-12">Prix</th>
                <th class="font-normal text-left pl-12">Localisation</th>
                <th class="font-normal text-left pl-20">Rentabilité</th>
                {/* <th class="font-normal text-left pl-20">Deadline</th>
                <th class="font-normal text-left pl-16">Members</th> */}
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
                    <td class="pl-4 cursor-pointer">
                      <div class="flex items-center">
                        {data.property_category}
                      </div>
                    </td>
                    <td class="pl-12">{data.offer_price}</td>
                    <td class="pl-12">{data.localization}</td>
                    <td class="pl-20">{data.offer_profitability}</td>

                    <td class="px-7 2xl:px-0 flex items-center">delete</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>

        <br />
        <div className="flex w-full justify-end">
          <OrangeButton url={`/dashboard/${id_project}/housings/new`}>
            J'ajoute un logement
          </OrangeButton>
        </div>
      </FormsCard>
    );
  }
}
