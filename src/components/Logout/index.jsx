import React from "react";
import Cookies from "js-cookie";
import { useDispatch } from "react-redux";
import { userLogout } from "../../reduxFolder/stateUser/userAction";
import { useNavigate } from "react-router-dom";

export default function LogOut() {
  const navigate = useNavigate();

  const dispatch = useDispatch();

  const logout = () => {
    Cookies.remove("token");
    dispatch(userLogout());
    navigate("/");
  };

  return (
    <div>
      <button
        className="py-2 pr-4 pl-3 text-white rounded border-b border-light md:p-0 dark:text-white hover:bg-primary md:border-none  md:px-2 md:py:1  hover:font-bold w-full text-left"
        onClick={() => logout()}
      >
        Déconnexion
      </button>
    </div>
  );
}
