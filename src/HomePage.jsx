import React from "react";
import OrangeButton from "./Components/Main/OrangeButton";

export default function HomePage() {
  return (
    <div className="">
      <section className="min-h-[100vh] bg-greey flex items-center">
        <div className="flex flex-col py-10 mx-auto md:mx-16 max-w-[540px] container">
          <h1 className="font-bold text-5xl text-whiite ">
            Devenez rentier
            <div className="words-to-change font-semibold">
              <span>
                sans vous prendre <br /> la tête{" "}
              </span>
              {/* <br />
                  <span>
                    en faisant des <br /> choix éclairés
                  </span>
                  <br />
                  <span>
                    sans perdre <br /> votre temps
                  </span>
                  <br />
                  <span>en toute simplicité</span> */}
              {/* https://usefulangle.com/post/75/typing-effect-animation-javascript-css */}
            </div>
          </h1>

          <p className="text-whiite text-xl my-16">
            Vous aimeriez investir dans l'immobilier locatif mais trouver le
            meilleur bien vous semble trop complexe?
            <br />
            <br />
            Nous avons la solution pour vous :{" "}
          </p>
          <br />
          <OrangeButton>Commencez maintenant !</OrangeButton>
          {/* <% if isUser? %>
          <%= link_to 'Commencez maintenant', projects_path(current_user.id),  className:"btn btn-primary rounded" %>
        <%else%>
          <%= link_to 'Commencez maintenant', new_user_registration_path,  className:"btn btn-primary rounded" %>
        <%end%> */}
        </div>

        {/* VIDEO BACKGROUND */}
        {/* <div
          className="background background-overlay  aos-init aos-animate"
          data-aos-delay="200"
        >
          <div
            tabindex="0"
            className="plyr  plyr--video plyr--html5 plyr--fullscreen-enabled   plyr--playing"
          >
            <video data-video="" playsinline="" autoplay="" muted="" loop="" width="100%" height="100%">
        <source src='/assets/video-2-fd5897e39137e9d3cf82d673724fe8002d70d671b015914d4a8a58327f980dd4.mp4' >
      </video>
            <div className="plyr__poster"></div>
          </div>
        </div> */}
      </section>
      <section
        className="min-h-[100vh] bg-whiite  flex justify-center items-center p-12"
        data-aos="fade-up"
        data-aos-duration="2000"
      >
        <div className="container flex flex-col justify-center items-center">
          <p className="text-3xl font-semibold italic text-justify">
            &#10077; L’immobilier apparaît comme la valeur la plus sûre du
            marché pour la majorité des français. &#10078;
            <br />
            <span className="text-lg not-italic">
              (selon une étude de l'Ifop)
            </span>
          </p>

          <div class="flex py-14  flex-wrap">
            <div className="md:w-1/3 sm:w-1/2 p-4">
              <span className="text-4xl font-bold">61 % </span>
              <p className="d-block text-muted fs-lg mt-1">
                {" "}
                <span className=" font-semibold">
                  du patrimoine des français correspondent à des actifs
                  immobiliers.
                </span>{" "}
                <br />
                <span className="text-greey text-sm italic">
                  (sondages de l'INSEE, 2021)
                </span>
              </p>
            </div>

            <div className="md:w-1/3 sm:w-1/2 p-4">
              <span class="text-4xl  font-bold">68 % </span>
              <p class="d-block text-muted fs-lg mt-1">
                <span class=" font-semibold">
                  des français estiment que l'immobilier est le meilleur
                  investissement, loin devant les marchés financiers 7%
                </span>{" "}
                <br />
                <span className="text-greey text-sm italic">
                  (enquête réalisée par le Crédit Foncier, 2018)
                </span>
              </p>
            </div>

            <div class="md:w-1/3 sm:w-1/2 p-4">
              <span class="text-4xl  font-bold">1,29 %</span>
              <p class="d-block text-muted fs-lg mt-1">
                <span class=" font-semibold">
                  taux moyen des crédits immobiliers en juin 2019, contre 6%
                  dans les années 2000.{" "}
                </span>
                <br />
                <span className="text-greey text-sm italic">
                  (étude de l'Observatoire Crédit Logement/CSA)
                </span>
              </p>
            </div>
          </div>

          <OrangeButton>Commencez maintenant !</OrangeButton>

          {/* <% if isUser? %>
        <%= link_to 'Commencez maintenant', projects_path(current_user.id),  class:"btn btn-primary rounded mt-10", style:"max-width:260px" %>
      <%else%>
        <%= link_to 'Commencez maintenant', new_user_registration_path,  class:"btn btn-primary rounded mt-10", style:"max-width:260px" %>
      <%end%> */}
        </div>
      </section>
    </div>
  );
}
