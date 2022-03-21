import React from "react";
import { FaArrowLeft } from "react-icons/fa";

export default function ServorErrorPage() {
  return (
    <div className="flex items-center justify-center w-screen h-screen">
      <div className="px-4 lg:py-12">
        <div className="lg:gap-4 lg:flex">
          <div className="flex flex-col items-center justify-center md:py-24 lg:py-32">
            <p className="mb-2 text-3xl font-pacifico text-center text-gray-800 md:text-3xl">
              <span className="text-primary">Oups!</span> Nous ne comprenons pas
              votre requête...
            </p>

            <a
              className="flex items-center mt-4 text-primary hover:underline "
              href="/"
            >
              <FaArrowLeft className="h-4 w-4 mr-6" /> Retour à l'accueil
            </a>
          </div>
          <div className="mt-4">
            <img
              src="https://media.giphy.com/media/iJCo9daAP0xugHhhfb/giphy.gif"
              alt="img"
              className="object-cover w-full h-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
