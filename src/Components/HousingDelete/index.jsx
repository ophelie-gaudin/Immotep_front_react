import React from 'react'
import Cookies from "js-cookie";

export default function HousingDelete(props) {
  const { data } = props;

  const deletehousing = () => {
    fetch(`https://immotep-api.herokuapp.com/projects/${data.project_id}/housings/${data.id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: Cookies.get("token"),
      },
    })
    .then((response) => response.json())
    .catch((err) => console.error(err));
  }

  return (
    <div>
      <button
        className="block py-2 pr-4 pl-3 text-white rounded border-b border-light md:p-0 dark:text-white hover:bg-primary md:border-none  md:px-2 md:py:1  hover:font-bold"
        onClick={() => {
          // window.location.href = `/dashboard/${data.project_id}`
          window.location.href = `/dashboard`
          deletehousing()
        }}
      >
        Supprimer le logement
      </button>
    </div>
  )
}
