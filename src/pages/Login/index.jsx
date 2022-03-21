import React, { useState } from "react";
import Cookies from "js-cookie";
import { Link, useNavigate } from "react-router-dom";
import { userLogin } from "../../reduxFolder/stateUser/userAction";
import { useDispatch } from "react-redux";
import FormsCard from "../../components/FormsCard";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const changeConnectedStatus = useDispatch();

  const navigate = useNavigate();

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
        if (res.headers.get("Authorization")) {
          Cookies.set("token", res.headers.get("Authorization"));
          changeConnectedStatus(userLogin());
          navigate("/dashboard");
          return res.json();
        } else {
          throw new Error("Non enregistré"); // TODO refaire l'erreur
        }
      })
      .then((json) => console.log(json.user))
      .catch((err) => console.error(err));
  };

  return (
    <div>
      {" "}
      <FormsCard title="Connexion" returnText="Accueil">
        <>
          {" "}
          <form onSubmit={handleSubmit}>
            <label>
              Email
              <input
                type="email"
                name="email"
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </label>
            <label>
              Mot de passe
              <input
                type="password"
                name="password"
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </label>
            <button className="orange-button forms-buttons" type="submit">
              Je me connecte
            </button>
            {/* <button className="orange-button forms-buttons"> */}
            <div className="w-full flex justify-center text-primary mb-8">
              {" "}
              <Link
                to="/forgotpassword"
                className="hover:underline underline-offset-2"
              >
                J'ai oublié mon mot de passe
              </Link>
            </div>

            {/* </button> */}
          </form>
        </>
      </FormsCard>
    </div>
  );
};

export default Login;
