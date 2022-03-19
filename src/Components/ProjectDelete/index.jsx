import React from 'react'
import Cookies from "js-cookie";

export default function ProjectDelete(props) {
  const { data } = props

  const deleteproject = () => {
    console.log(data)
    fetch(`https://immotep-api.herokuapp.com/projects/${data}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: Cookies.get("token"),
      },
    })
    .then((response) => response.json())
    .then((response) => {
    })
    .catch((err) => console.error(err));
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