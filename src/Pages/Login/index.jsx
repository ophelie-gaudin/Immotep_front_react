import React, { useState } from "react";
import Cookies from "js-cookie";
import { Link } from "react-router-dom";
import { userLogin } from "../../ReduxFolder/stateUser/userAction";
import { useDispatch } from "react-redux";
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
          Cookies.set("token", res.headers.get("Authorization"));
          changeConnectedStatus(userLogin());
          window.location.href = "/";
          return res.json();
        } else {
          throw new Error(res);
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
                type="text"
                name="email"
                onChange={(e) => setEmail(e.target.value)}
              />
            </label>
            <label>
              Mot de passe
              <input
                type="password"
                name="password"
                onChange={(e) => setPassword(e.target.value)}
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
