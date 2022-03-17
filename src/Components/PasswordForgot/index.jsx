import React from "react";

export default function PasswordForgot() {

  const passwordmail = (e) => {
    e.preventDefault();
    fetch(`https://immotep-api.herokuapp.com/users/password`, {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({})
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
      <button onClick={() => passwordmail()}>Mot de Passe Oublié</button>
    </div>
  );
}
