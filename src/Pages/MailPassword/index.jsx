import React, { useState } from "react";

export default function MailPassword() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch(`https://immotep-api.herokuapp.com/users/password`, {
      method: "post",
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
          window.location.href = "/";
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
          Email
          <input
            type="Email"
            onChange={(e) => setEmail(e.target.value)}
          ></input>
        </label>
        <button>Envoyer</button>
      </form>
    </div>
  );
}
