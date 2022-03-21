import React, { useState } from "react";
import FormsCard from "../../components/FormsCard";
import { useNavigate } from "react-router-dom";

export default function ProfileEditPage() {
  const [email, setEmail] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch(`https://immotep-api.herokuapp.com/users/password`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        user: {
          email: email,
        },
      }),
    })
      .then((res) => {
        if (res.ok) {
          navigate("/profile");
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
      <FormsCard
        title="Modifier mes informations personnelles"
        returnText="Mon profil"
        returnUrl="/profile"
      >
        <form onSubmit={handleSubmit}>
          <label className="font-medium">
            Ma nouvelle adresse email
            <input
              type="email"
              className="mt-2"
              onChange={(e) => setEmail(e.target.value)}
            ></input>
          </label>
          <button className="orange-button forms-buttons">J'enregistre</button>
        </form>
      </FormsCard>
    </div>
  );
}
