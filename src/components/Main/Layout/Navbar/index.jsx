import React from "react";
import { useSelector } from "react-redux";
import logo from "../../../../assets/immotep_logo.png";
import LogOut from "../../../Logout";

export default function Navbar() {
  const auth = useSelector((state) => state.connected);

  return (
    <nav className="bg-primary-light px-2 sm:px-4 py-2.5 fixed w-full z-50 text-light">
      <div className="container flex flex-wrap justify-between items-center mx-auto">
        <a href="/" className="flex items-center">
          <img src={logo} className="mr-3 h-14 sm:h-10" alt="Immotep Logo" />
          <span className="self-center text-3xl whitespace-nowrap dark:text-white font-pacifico">
            Immotep
          </span>
        </a>
        <div className="flex items-center md:order-2">
          <button
            data-collapse-toggle="mobile-menu-2"
            type="button"
            className="inline-flex items-center 2xl:hidden xl:hidden lg:hidden md:hidden p-2 ml-1 text-sm text-light rounded-lg hover:bg-primary focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="mobile-menu-2"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="2xl:hidden xl:hidden lg:hidden md:hidden w-6 h-6"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clipRule="evenodd"
              ></path>
            </svg>
          </button>
        </div>
        <div
          className="justify-between items-center w-full md:flex md:w-auto md:order-1"
          id="mobile-menu-2"
        >
          {auth.connected && (
            <ul className="flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium">
              <li>
                <a
                  href="/dashboard"
                  className="block text-lg py-2 pr-4 pl-3 text-white rounded border-b border-light md:p-0 md:px-2 md:py:1 dark:text-white hover:bg-primary  md:border-none  hover:font-bold"
                  aria-current="page"
                >
                  Mes projets
                </a>
              </li>
              <li>
                <a
                  href="/profile"
                  className="block text-lg py-2 pr-4 pl-3 text-white rounded border-b border-light md:p-0 dark:text-white hover:bg-primary md:border-none  md:px-2 md:py:1  hover:font-bold"
                >
                  Mon profil
                </a>
              </li>
              <li>
                <div className="block text-lg  text-white rounded  md:p-0 dark:text-white hover:bg-primary  hover:font-bold">
                  <LogOut />
                </div>
              </li>
            </ul>
          )}

          {!auth.connected && (
            <ul className="flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium">
              <li>
                <a
                  href="/login"
                  className="block text-lg py-2 pr-4 pl-3 text-white rounded md:p-0 dark:text-white hover:bg-primary  md:px-2 md:py:1 hover:font-bold  border-b border-light md:border-none"
                >
                  Se connecter
                </a>
              </li>

              <li>
                <a
                  href="/register"
                  className="block text-lg py-2 pr-4 pl-3 text-light font-black hover:text-greey hover:font-bold rounded md:p-0 dark:text-white bg-primary  md:px-2 md:py:1 "
                >
                  S'inscrire
                </a>
              </li>
            </ul>
          )}
        </div>
      </div>
    </nav>
  );
}
