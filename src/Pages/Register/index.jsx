import React, { useState } from "react";
import Cookies from "js-cookie";
import { userLogin } from "../../redux/stateUser/userAction";
import { useDispatch } from "react-redux";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const changeConnectedStatus = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch(`https://immotep-api.herokuapp.com/users`, {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        user: {
          email: email,
          password: password,
        },
      }),
    })
      .then((res) => {
        if (res.ok) {
          Cookies.set("token", res.headers.get("Authorization"));
          changeConnectedStatus(userLogin());
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
      <form action="post" className="Form" onSubmit={handleSubmit}>
        <imput
          label="Email"
          variant="filled"
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <imput
          label="Password"
          variant="filled"
          type="password"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit" variant="contained" color="primary">
          Register
        </button>
      </form>
    </div>
  );
};

export default Register;