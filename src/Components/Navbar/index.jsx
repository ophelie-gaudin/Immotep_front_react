import React from "react";
import { Link } from "react-router-dom";
import Logout from "../Logout";
import { useSelector } from "react-redux";

export default function Navbar() {

  const auth = useSelector((state) => state.connected);

  return (
    <nav>
      <div>
        <Link to="/">Home</Link>
        {!auth.connected && (
          <div>
            <button>
              <Link to="/login">Connexion</Link>
            </button>
            <button>
              <Link to="/register">Inscription</Link>
            </button>
          </div>
        )}
        {auth.connected && (
          <div>           
            <button>
              <Link to="/profile">Mon compte</Link>
            </button>
            {/* <button>
              <Link to="/annonces">Mes Projets</Link>
            </button> */}
            <button>
              <Logout>Déconnexion</Logout>
            </button>
          </div>
        )}
      </div>
    </nav>
  );
}