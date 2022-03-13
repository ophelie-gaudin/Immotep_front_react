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
      <button onClick={() => logout()}>
        Logout
      </button>
    </div>
  );
}