import React from 'react'
import Cookies from "js-cookie";

export default function ProjectDelete() {
  const id_project = window.location.href
    .slice(window.location.href.indexOf("dashboard"))
    .substring(10, 12);

  const deleteproject = () => {
    fetch(`https://immotep-api.herokuapp.com/projects/${id_project}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: Cookies.get("token"),
      },
    })
    .then((response) => response.json())
    .then((response) => {
    });
  }

  return (
    <div>
      <button
        className="block py-2 pr-4 pl-3 text-white rounded border-b border-light md:p-0 dark:text-white hover:bg-primary md:border-none  md:px-2 md:py:1  hover:font-bold"
        onClick={() => {
          //window.location.href = `/dashboard`
          deleteproject()
        }}
      >
        Supprimer le projet
      </button>
    </div>
  )
}