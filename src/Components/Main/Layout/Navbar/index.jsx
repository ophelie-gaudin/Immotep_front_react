import React from "react";
import { Link } from "react-router-dom";
import Logout from "../../../Logout";
import { useSelector } from "react-redux";

export default function Navbar() {
  const auth = useSelector((state) => state.connected);

  return (
    <nav className="bg-whiite h-12 flex items-center fixed w-full z-50">
      <div className=" flex w-[90%] justify-between mx-auto items-center">
        <Link className="font-bakbak text-2xl hover:text-oraange" to="/">
          Immotep
        </Link>
        {!auth.connected && (
          <div className="flex">
            <Link className="mx-4 hover:text-oraange" to="/login">
              Connexion
            </Link>
            <Link className="mx-4 hover:text-oraange" to="/register">
              Inscription
            </Link>
          </div>
        )}
        {auth.connected && (
          <div className="flex">
            <Link className="mx-4 hover:text-oraange" to="/dashboard">
              Mes Projets
            </Link>
            <Link className="mx-4 hover:text-oraange" to="/profile">
              Profil
            </Link>
            <div className="mx-4 hover:text-oraange">
              <Logout />
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
