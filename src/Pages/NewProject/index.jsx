import React, { useState } from "react";
import FormsCard from "../../Components/FormsCard";
import Input from "../../Components/Main/Input";
import Cookies from "js-cookie";

const NewProject = () => {
  const [title, setTitle] = useState("");
  const [localization, setLocalization] = useState("");
  const [comment, setComment] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch(`https://immotep-api.herokuapp.com/projects`, {
      method: "post",
      headers: {
        "Content-Type": "application/json",
        Authorization: `${Cookies.get("token")}`,
      },
      body: JSON.stringify({
        project: {
          title,
          localization,
          comment,
        },
      }),
    })
      .then((res) => {
        if (res.ok) {
          window.location.href = "/dashboard";
          return res.json();
        } else {
          throw new Error(res);
        }
      })
      .then((json) => console.log(json.user.id))
      .catch((err) => console.error(err));
  };

  return (
    <div>
      <FormsCard title="Créer un nouveau projet ">
        <>
          <form onSubmit={handleSubmit}>
            <Input
              label="Titre du projet"
              type="text"
              name="title"
              onChange={(e) => setTitle(e.target.value)}
            />
            <Input
              label="Localisation"
              type="text"
              name="localization"
              onChange={(e) => setLocalization(e.target.value)}
            />
            <Input
              label="Vos notes"
              type="text"
              name="comment"
              onChange={(e) => setComment(e.target.value)}
            />
            <div className="flex justify-end mb-8 mt-8 mr-6">
              <button className="orange-button forms-buttons" type="submit">
                Créer
              </button>
            </div>
          </form>
        </>
      </FormsCard>
    </div>
  );
};

export default NewProject;
