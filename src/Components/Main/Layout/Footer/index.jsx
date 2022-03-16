import React from "react";
import { FaGithubAlt, FaTrello } from "react-icons/fa";
import { Link } from "react-router-dom";
import logo from "../../../../assets/immotep_logo.png";

export default function Footer() {
  return (
    // <footer className="bg-greey text-whiite flex justify-around md:flex-col py-12">
    //   <div className="md:max-w-1/3 px-4 flex flex-col items-center">
    //     LOGO
    //     <p>Immotep</p>
    //   </div>
    //   <div className="md:max-w-1/3 px-4">
    //     <ul>
    //       <li className="">
    //         <a className="hover:text-oraange" href="/contact">
    //           Nous contacter
    //         </a>
    //       </li>
    //       <li>
    //         <a className="hover:text-oraange" href="/staff">
    //           Notre équipe
    //         </a>
    //       </li>
    //       <li>
    //         <a className="hover:text-oraange" href="/contact">
    //           Recrutement
    //         </a>
    //       </li>
    //       <li>
    //         <a className="hover:text-oraange" href="/">
    //           Mentions légales
    //         </a>
    //       </li>
    //     </ul>
    //   </div>
    //   <div className="md:max-w-1/3 px-4">
    //     <p className="text-whiiite text-sm text-justify">
    //       Cet outil représente plus de 600h de travail pour vous aider à
    //       investir. Si vous appréciez notre travail, n'hésitez pas à nous payer
    //       un café, nous vous en remercions d'avance !{" "}
    //     </p>
    //   </div>
    // </footer>

    <footer class="text-center lg:text-left bg-greeen text-light">
      <div class="flex justify-center items-center lg:justify-around p-6 border-b border-[#AAEABC] ">
        <div class="mr-12">
          <span>Suivez l'avancement des fonctionnalités de notre outil:</span>
        </div>
        <div class="flex justify-center">
          <a
            href="https://trello.com/b/GwGKjodS/immotep-v2"
            class="mr-6 text-light"
            alt="Trello"
          >
            <FaTrello />
          </a>
          <a
            href="https://github.com/ophelie-gaudin/Immotep_front_react"
            class="mr-6 text-gray-light"
            alt="GitHub Front"
          >
            <FaGithubAlt />
          </a>

          <a
            href="https://github.com/istarengwa/Immotep_API"
            class="text-light"
          >
            <svg
              aria-hidden="true"
              focusable="false"
              data-prefix="fab"
              data-icon="github"
              class="w-4"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 496 512"
            >
              <path
                fill="currentColor"
                d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"
              ></path>
            </svg>
          </a>
        </div>
      </div>
      <div class="mx-6 py-10 text-center md:text-left text-light ">
        <div class="grid grid-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div class="">
            <div className="w-full flex justify-center mb-4">
              <img src={logo} alt="logo" />
            </div>
            <h6
              class="
          uppercase
          font-semibold
          
          flex
          items-center
          justify-center
          "
            >
              Immotep
            </h6>
            <p className="text-center text-sm italic">
              Votre outil pour rendre <br /> plus simples vos investissements{" "}
              <br />
              immobiliers.
            </p>
          </div>
          <div class="">
            <h6 class="uppercase font-semibold mb-4 flex justify-center md:justify-start">
              Outil
            </h6>
            <p class="mb-4">
              <a href="#!" class="">
                Description
              </a>
            </p>
            <p class="mb-4">
              <a href="#!" class="">
                Mode d'emploi
              </a>
            </p>
            <p class="mb-4">
              <a href="#!" class="">
                Lancez-vous !
              </a>
            </p>
          </div>
          <div class="">
            <h6 class="uppercase font-semibold mb-4 flex justify-center md:justify-start">
              Qui sommes-nous ?
            </h6>
            <p class="mb-4">
              <a href="#!" class="">
                Notre équipe
              </a>
            </p>

            <p class="mb-4">
              <a href="#!" class="">
                Rejoignez-nous !
              </a>
            </p>
            <p>
              <a href="#!" class="">
                Mentions légales
              </a>
            </p>
          </div>
          <div class=" mb-4">
            <h6 class="uppercase font-semibold mb-4 flex justify-center md:justify-start">
              Contact
            </h6>
            <p class="flex items-center justify-center md:justify-start mb-4">
              <svg
                aria-hidden="true"
                focusable="false"
                data-prefix="fas"
                data-icon="home"
                class="w-4 mr-4"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 576 512"
              >
                <path
                  fill="currentColor"
                  d="M280.37 148.26L96 300.11V464a16 16 0 0 0 16 16l112.06-.29a16 16 0 0 0 15.92-16V368a16 16 0 0 1 16-16h64a16 16 0 0 1 16 16v95.64a16 16 0 0 0 16 16.05L464 480a16 16 0 0 0 16-16V300L295.67 148.26a12.19 12.19 0 0 0-15.3 0zM571.6 251.47L488 182.56V44.05a12 12 0 0 0-12-12h-56a12 12 0 0 0-12 12v72.61L318.47 43a48 48 0 0 0-61 0L4.34 251.47a12 12 0 0 0-1.6 16.9l25.5 31A12 12 0 0 0 45.15 301l235.22-193.74a12.19 12.19 0 0 1 15.3 0L530.9 301a12 12 0 0 0 16.9-1.6l25.5-31a12 12 0 0 0-1.7-16.93z"
                ></path>
              </svg>
              10, Quai des Explorateurs
              <br />
              Paris CEDEX 42,
              <br />
              FRANCE
            </p>
            <p class="flex items-center justify-center md:justify-start mb-4">
              <svg
                aria-hidden="true"
                focusable="false"
                data-prefix="fas"
                data-icon="envelope"
                class="w-4 mr-4"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
              >
                <path
                  fill="currentColor"
                  d="M502.3 190.8c3.9-3.1 9.7-.2 9.7 4.7V400c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V195.6c0-5 5.7-7.8 9.7-4.7 22.4 17.4 52.1 39.5 154.1 113.6 21.1 15.4 56.7 47.8 92.2 47.6 35.7.3 72-32.8 92.3-47.6 102-74.1 131.6-96.3 154-113.7zM256 320c23.2.4 56.6-29.2 73.4-41.4 132.7-96.3 142.8-104.7 173.4-128.7 5.8-4.5 9.2-11.5 9.2-18.9v-19c0-26.5-21.5-48-48-48H48C21.5 64 0 85.5 0 112v19c0 7.4 3.4 14.3 9.2 18.9 30.6 23.9 40.7 32.4 173.4 128.7 16.8 12.2 50.2 41.8 73.4 41.4z"
                ></path>
              </svg>
              immotep.thp@gmail.com
            </p>
            <p class="flex items-center justify-center md:justify-start mb-4">
              <svg
                aria-hidden="true"
                focusable="false"
                data-prefix="fas"
                data-icon="phone"
                class="w-4 mr-4"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
              >
                <path
                  fill="currentColor"
                  d="M493.4 24.6l-104-24c-11.3-2.6-22.9 3.3-27.5 13.9l-48 112c-4.2 9.8-1.4 21.3 6.9 28l60.6 49.6c-36 76.7-98.9 140.5-177.2 177.2l-49.6-60.6c-6.8-8.3-18.2-11.1-28-6.9l-112 48C3.9 366.5-2 378.1.6 389.4l24 104C27.1 504.2 36.7 512 48 512c256.1 0 464-207.5 464-464 0-11.2-7.7-20.9-18.6-23.4z"
                ></path>
              </svg>
              + 01 234 567 88
            </p>
            <p class="flex items-center justify-center md:justify-start">
              <svg
                aria-hidden="true"
                focusable="false"
                data-prefix="fas"
                data-icon="print"
                class="w-4 mr-4"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
              >
                <path
                  fill="currentColor"
                  d="M448 192V77.25c0-8.49-3.37-16.62-9.37-22.63L393.37 9.37c-6-6-14.14-9.37-22.63-9.37H96C78.33 0 64 14.33 64 32v160c-35.35 0-64 28.65-64 64v112c0 8.84 7.16 16 16 16h48v96c0 17.67 14.33 32 32 32h320c17.67 0 32-14.33 32-32v-96h48c8.84 0 16-7.16 16-16V256c0-35.35-28.65-64-64-64zm-64 256H128v-96h256v96zm0-224H128V64h192v48c0 8.84 7.16 16 16 16h48v96zm48 72c-13.25 0-24-10.75-24-24 0-13.26 10.75-24 24-24s24 10.74 24 24c0 13.25-10.75 24-24 24z"
                ></path>
              </svg>
              + 01 234 567 89
            </p>
          </div>
        </div>
        <div className="w-full flex justify-center">
          <p class="mb-4 max-w-[500px] italic text-center">
            <small>
              Cet outil a été créé avec amour 💝 par notre équipe de
              développeurs. Si vous appréciez notre travail, n'hésitez pas à
              nous{" "}
              <a
                className="font-bold"
                href="https://checkout.stripe.com/pay/cs_test_a1Bl7Qyw9kBbDBMP8uRG7RoIhdvtErjXN4oS9B1nvyxBKmWHlYFtXHJjo4#fidkdWxOYHwnPyd1blpxYHZxWjA0TjNnSV9AYFdDMTA1ZlZtPGZwYV0zalx1T3Y0MFVca2NuYk9DZHVdNWFBR3FLSkJrRnxrSnNucUhiZ0M9YDw0YVY1MExxT1MzZmFiN3JVNDFNM2dgf2JONTVKPTM3aGRjQicpJ2hsYXYnP34nYnBsYSc%2FJz01MDQ9ZDJnKDc2NDAoMWZgYCg9NWQyKDYxMjNjZzVmMzc2MDIzYWAwYycpJ2hwbGEnPyc0M2YyZmNkYSg8MDRgKDEzMTAoZDU0MShgNmM2NzFmMjEwMzRhMmQ1NDYnKSd2bGEnPycyNWBgZz0zZyg2ZjQ0KDFjZmMoPDdjMSg2NDNkY2AxMTZgM2MxYGE3MmMneCknZ2BxZHYnP15YKSdpZHxqcHFRfHVgJz8ndmxrYmlgWmxxYGgnKSd3YGNgd3dgd0p3bGJsayc%2FJ21xcXV2PyoqbGhoanFgdSttYHdqbnBkdXUrZmpoJ3gl"
              >
                payer un café pour nos encourager
              </a>
              , nous vous en remercions d'avance ! ☕
            </small>
          </p>
        </div>
      </div>
      <div class="text-center p-6 bg-[#AAEABC]">
        <p>
          © 2022 Copyright:{" "}
          <span class="text-light font-semibold">IMMOTEP</span>
        </p>
      </div>
    </footer>
  );
}