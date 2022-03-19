import React from 'react'
import Cookies from "js-cookie";

export default function HousingDelete() {
  const id_project = window.location.href
    .slice(window.location.href.indexOf("dashboard"))
    .substring(10, 12);
  const id_housings = window.location.href
  .slice(window.location.href.indexOf("housing"))
  .substring(8, 10);

  const deletehousing = () => {
    fetch(`https://immotep-api.herokuapp.com/projects/${id_project}/housings/${id_housings}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: Cookies.get("token"),
      },
    })
    .then((response) => response.json())
    .then((response) => {
      
      window.location.href = `/dashboard/${id_project}`;
    });
  }

  return (
    <div>
      <button
        className="block py-2 pr-4 pl-3 text-white rounded border-b border-light md:p-0 dark:text-white hover:bg-primary md:border-none  md:px-2 md:py:1  hover:font-bold"
        onClick={() => {
          window.location.href = `/dashboard/${id_project}`
          deletehousing()
        }}
      >
        Supprimer le logement
      </button>
    </div>
  )
}
