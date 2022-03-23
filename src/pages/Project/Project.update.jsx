import React, { useState } from "react";

import FormsCard from "../../components/FormsCard";
import Cookies from "js-cookie";
import { useParams, useNavigate } from "react-router-dom";

export default function ProjectUpdate() {
  const navigate = useNavigate();
  const { project_id } = useParams();
  console.log(useParams());
  const [title, setTitle] = useState();
  const [localization, setLocalization] = useState();
  const [comment, setComment] = useState();

  const data = {
    title,
    localization,
    comment,
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch(`https://immotep-api.herokuapp.com/projects/${project_id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: Cookies.get("token"),
      },
      body: JSON.stringify(data),
    })
      .then((res) => {
        if (res.ok) {
          navigate(`/dashboard/${project_id}/`);
        } else {
          throw new Error(res);
        }
      })
      .catch((err) => console.error(err));
  };

  return (
    <div className="mt-12 mb-8">
      <div>
        <FormsCard
          title="Modifier mon logement"
          returnText="Mon projet"
          returnUrl={`/dashboard/${project_id}/`}
        >
          <form onSubmit={handleSubmit}>
            <label>
              Titre du projet
              <input
                type="text"
                name="title"
                onChange={(e) => setTitle(e.target.value)}
              />
            </label>
            <label>
              Localisation souhaitée du bien
              <input
                type="text"
                name="localization"
                onChange={(e) => setLocalization(e.target.value)}
              />
            </label>
            <label>
              Vos notes
              <input
                type="text"
                name="comment"
                onChange={(e) => setComment(e.target.value)}
              />
            </label>
            <div className="flex justify-end mb-8 mt-8 mr-6">
              <button className="orange-button forms-buttons" type="submit">
                Je modifie mon projet
              </button>
            </div>
          </form>
        </FormsCard>
      </div>
    </div>
  );
}
