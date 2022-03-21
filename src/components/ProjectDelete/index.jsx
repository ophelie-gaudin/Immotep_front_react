import React from "react";
import Cookies from "js-cookie";
import { useParams, useNavigate } from "react-router-dom";

export default function ProjectDelete(props) {
  const { project_id } = useParams();
  const navigate = useNavigate();

  const deleteproject = () => {
    fetch(`https://immotep-api.herokuapp.com/projects/${project_id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: Cookies.get("token"),
      },
    })
      .then((response) => response.json())
      .catch((err) => console.error(err));
  };

  return (
    <div>
      <button
        className="block py-2 pr-4 pl-3 text-white rounded border-b border-light md:p-0 dark:text-white hover:bg-primary md:border-none  md:px-2 md:py:1  hover:font-bold"
        onClick={() => {
          navigate(`/dashboard`);
          deleteproject();
        }}
      >
        Supprimer le projet
      </button>
    </div>
  );
}
