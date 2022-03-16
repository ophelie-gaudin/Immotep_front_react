import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-greey text-whiite flex justify-around md:flex-col py-12">
      <div className="md:max-w-1/3 px-4 flex flex-col items-center">
        LOGO
        <p>Immotep</p>
      </div>
      <div className="md:max-w-1/3 px-4">
        <ul>
          <li className="">
            <a className="hover:text-oraange" href="/contact">
              Nous contacter
            </a>
          </li>
          <li>
            <a className="hover:text-oraange" href="/staff">
              Notre équipe
            </a>
          </li>
          <li>
            <a className="hover:text-oraange" href="/contact">
              Recrutement
            </a>
          </li>
          <li>
            <a className="hover:text-oraange" href="/">
              Mentions légales
            </a>
          </li>
        </ul>
      </div>
      <div className="md:max-w-1/3 px-4">
        <p className="text-whiiite text-sm text-justify">
          Cet outil représente plus de 600h de travail pour vous aider à
          investir. Si vous appréciez notre travail, n'hésitez pas à nous payer
          un café, nous vous en remercions d'avance !{" "}
        </p>
      </div>
    </footer>
  );
}
