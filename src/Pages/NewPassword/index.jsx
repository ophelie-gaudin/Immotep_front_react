import React, { useState } from 'react'

export default function MailPassword() {
  const [password, setPassword] = useState("");
  const password_token = (window.location.href.slice(window.location.href.indexOf("="))).substring(2);
  
  const handleSubmit = (e) => {
    e.preventDefault();
    fetch(`https://immotep-api.herokuapp.com/users/password`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        user: {
          password: password,
          reset_password_token: password_token,
        },
      }),
    })
    .then((res) => {
      if (res.ok) {
        window.location.href = "/login";
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
      <form onSubmit={handleSubmit}>
        <label>
          Mot de passe
          <input type="password" onChange={(e) => setPassword(e.target.value)}></input>
        </label>
        <button>Envoyer</button>
      </form>
    </div>
  )
}
