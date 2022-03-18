import React from "react";
import Cookies from "js-cookie";
import { useDispatch } from "react-redux";
import { userLogout } from "../../ReduxFolder/stateUser/userAction";

export default function LogOut() {
  const dispatch = useDispatch();

  const logout = () => {
    Cookies.remove("token");
    dispatch(userLogout());
    window.location.href = "/";
  };

  return (
    <div>
      <button
        className="block py-2 pr-4 pl-3 text-white rounded border-b border-light md:p-0 dark:text-white hover:bg-primary md:border-none  md:px-2 md:py:1  hover:font-bold"
        onClick={() => logout()}
      >
        Déconnexion
      </button>
    </div>
  );
}
