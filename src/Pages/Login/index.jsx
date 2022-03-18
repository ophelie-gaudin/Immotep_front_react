import React, { useState } from "react";
import Cookies from "js-cookie";
import { Link } from "react-router-dom";
import { userLogin } from "../../ReduxFolder/stateUser/userAction";
import { useDispatch } from "react-redux";
import Input from "../../Components/Main/Input";
import FormsCard from "../../Components/FormsCard";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const changeConnectedStatus = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch(`https://immotep-api.herokuapp.com/users/sign_in`, {
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
          console.log(res);
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
      {" "}
      <FormsCard title="Connexion">
        <>
          {" "}
          <form onSubmit={handleSubmit}>
            <Input
              label="Email"
              type="text"
              name="email"
              onChange={(e) => setEmail(e.target.value)}
            />
            <Input
              label="Password"
              type="password"
              name="password"
              onChange={(e) => setPassword(e.target.value)}
            />
            <button className="orange-button forms-buttons" type="submit">
              Sign In
            </button>
            <button className="orange-button forms-buttons">
              <Link to="/forgotpassword">Mot de passe Oublié</Link>
            </button>
          </form>
        </>
      </FormsCard>
    </div>
  );
};

export default Login;
