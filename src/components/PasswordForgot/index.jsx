import React from 'react';
// import { useNavigate } from "react-router-dom";

export default function PasswordForgot() {
  // const navigate = useNavigate();

  const passwordmail = (e) => {
    e.preventDefault();
    fetch(`https://immotep-api.herokuapp.com/users/password`, {
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({}),
    })
      .then((res) => {
        if (res.ok) {
          // navigate("/login");
          return res.json();
        } else {
          throw new Error(res);
        }
      })
      .catch((err) => console.error(err));
  };

  return (
    <div>
      <button onClick={() => passwordmail()}>
        J'ai oublié mon mot de passe
      </button>
    </div>
  );
}
