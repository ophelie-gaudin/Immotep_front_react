import React from "react";
import { Link } from "react-router-dom";
import Logout from "../../../Logout";
import { useSelector } from "react-redux";
import { FaUserCircle } from "react-icons/fa";
import logo from "../../../../assets/immotep_logo.png";

export default function Navbar() {
  const auth = useSelector((state) => state.connected);

  return (
    // <nav className="bg-whiite h-12 flex items-center fixed w-full z-50">
    // //   <div className=" flex w-[90%] justify-between mx-auto items-center">
    // //     <Link className="font-bakbak text-2xl hover:text-oraange" to="/">
    // //       Immotep
    // //     </Link>
    // //     {!auth.connected && (
    //       <div className="flex">
    //         <Link className="mx-4 hover:text-oraange" to="/login">
    //           Connexion
    //         </Link>
    //         <Link className="mx-4 hover:text-oraange" to="/register">
    //           Inscription
    //         </Link>
    //       </div>
    //     )}
    //     {auth.connected && (
    //       <div className="flex">
    //         <Link className="mx-4 hover:text-oraange" to="/dashboard">
    //           Mes Projets
    //         </Link>
    //         <Link className="mx-4 hover:text-oraange" to="/profile">
    //           Profil
    //         </Link>
    //         <div className="mx-4 hover:text-oraange">
    //           <Logout />
    //         </div>
    //       </div>
    //     )}
    //   </div>
    // </nav>

    <nav class="bg-[#AAEABC] border-gray-200 px-2 sm:px-4 py-2.5 rounded fixed w-full z-50 text-light">
      <div class="container flex flex-wrap justify-between items-center mx-auto">
        <a href="/" class="flex items-center">
          <img src={logo} class="mr-3 h-14 sm:h-10" alt="Immotep Logo" />
          <span class="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
            Immotep
          </span>
        </a>
        <div class="flex items-center md:order-2">
          <button
            data-collapse-toggle="mobile-menu-2"
            type="button"
            class="inline-flex items-center p-2 ml-1 text-sm text-light rounded-lg hover:bg-greeen focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="mobile-menu-2"
            aria-expanded="false"
          >
            <span class="sr-only">Open main menu</span>
            <svg
              class="w-6 h-6"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clip-rule="evenodd"
              ></path>
            </svg>
            <svg
              class="hidden w-6 h-6"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </button>
        </div>
        <div
          class="hidden justify-between items-center w-full md:flex md:w-auto md:order-1"
          id="mobile-menu-2"
        >
          <ul class="flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium">
            <li>
              <a
                href="/dashboard"
                class="block py-2 pr-4 pl-3 text-white rounded border-b border-light md:p-0 md:px-2 md:py:1 dark:text-white hover:bg-greeen  md:border-none"
                aria-current="page"
              >
                Mes projets
              </a>
            </li>
            <li>
              <a
                href="/profil"
                class="block py-2 pr-4 pl-3 text-white rounded border-b border-light md:p-0 dark:text-white hover:bg-greeen md:border-none  md:px-2 md:py:1 "
              >
                Mon profil
              </a>
            </li>
            <li>
              <a
                href="/logout"
                class="block py-2 pr-4 pl-3 text-white rounded  md:p-0 dark:text-white hover:bg-greeen "
              >
                Me déconnecter
              </a>
            </li>

            <li>
              <a
                href="/sign-up"
                class="block py-2 pr-4 pl-3 text-white rounded border-b border-light md:border-none md:p-0 dark:text-white hover:bg-greeen  md:px-2 md:py:1 "
              >
                S'inscrire
              </a>
            </li>
            <li>
              <a
                href="/sign-in"
                class="block py-2 pr-4 pl-3 text-white rounded md:p-0 dark:text-white hover:bg-greeen  md:px-2 md:py:1 "
              >
                Se connecter
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
