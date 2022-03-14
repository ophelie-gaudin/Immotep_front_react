import React from "react";
import OrangeButton from "./Components/Main/OrangeButton";

export default function Home() {
  return (
    <div className="">
      <section className="min-h-[100vh] bg-greey flex items-center">
        <div className="flex flex-col py-10 mx-auto md:mx-12 max-w-[540px] container">
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
              <span className="text-4xl  font-bold">68 % </span>
              <p className="d-block text-muted fs-lg mt-1">
                <span className=" font-semibold">
                  des français estiment que l'immobilier est le meilleur
                  investissement, loin devant les marchés financiers 7%
                </span>{" "}
                <br />
                <span className="text-greey text-sm italic">
                  (enquête réalisée par le Crédit Foncier, 2018)
                </span>
              </p>
            </div>

            <div className="md:w-1/3 sm:w-1/2 p-4">
              <span className="text-4xl  font-bold">1,29 %</span>
              <p className="d-block text-muted fs-lg mt-1">
                <span className=" font-semibold">
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

      <section className="min-h-[100vh] bg-oraange  flex justify-center items-center p-12">
        <div className="container flex items-center justify-between flex-wrap md:flex-nowrap">
          <div className="mb-8 md:mb-0 md:w-1/2 mx-8">
            <div className="frame">
              <div data-aos="zoom-out-right">
                {/* <%= image_tag 'decohome.jpg', :style=>'width:100%' %> */}
              </div>
              <div className="bg-whiite w-[40vw] h-[300px]"></div>
            </div>
          </div>

          <div className=" md:w-1/2 mx-8">
            <h2 className="font-semibold text-4xl text-greey">
              Trouver un bien immobilier rentable semble compliqué...
            </h2>
            <p className="text-white text-justify mt-6">
              Les annonces sont nombreuses et via divers canaux (internet,
              agences, bouche à oreille...), ce qui demande beaucoup
              d'organisation pour ne pas perdre les annonces intéressantes.
              <br />
              <br />
              Lors des visites, vous pouvez facilement oublier des informations
              cruciales pour évaluer la rentabilité d'un bien ou vous laisser
              porter par un coup de coeur (ce qui n'est pas l'objectif d'un
              investissement immobilier!).
            </p>
          </div>
        </div>
      </section>

      <section className="min-h-[100vh] bg-whiite  flex justify-center items-center p-12">
        <div className="container flex items-center justify-between flex-wrap md:flex-nowrap">
          <div className=" md:w-1/2 mx-8">
            <h2 className="font-semibold text-4xl text-greey">
              ... sauf si vous avez les bons outils !
            </h2>
            <p className="text-greey text-justify mt-6">
              Notre outil vous permet de stocker les informations de l'ensemble
              des biens qui vous intéressent au même endroit.
              <br /> <br />
              N'oubliez plus de poser les questions importantes au vendeur afin
              d'estimer le potentiel d'un bien immobilier et recentrez-vous sur
              votre objectif d'investissement !
              <br /> <br />
              Vous pourrez facilement comparer l'ensemble des biens que vous
              avez visité les uns avec les autres grâce à un comparateur de
              rentabilité.
            </p>
          </div>

          <div className="mt-8 md:mt-0 md:w-1/2 mx-8">
            <div className="frame">
              <div data-aos="zoom-out-right">
                {/* <%= image_tag 'decohome.jpg', :style=>'width:100%' %> */}
              </div>
              <div className="bg-oraange w-[40vw] h-[300px]"></div>
            </div>
          </div>
        </div>
      </section>

      <section className=" min-h-[100vh] bg-oraange  flex justify-center items-center p-12 ">
        <div className="container flex flex-col">
          <h2 className="text-whiite font-semibold text-4xl">
            Comment utiliser notre outil :
          </h2>
          <ul className="flex flex-col relative items-center w-100 my-8">
            <li className="my-4 max-w-[500px]">
              <div className="py-2 px-4 rounded-full border-whiite border-2 text-whiite text-xl hover:bg-whiite hover:text-oraange absolute after:border after:border-whiite">
                1
              </div>
              <h6 className="text-xl text-whiite" data-aos="fade-right">
                Créez un ou plusieurs{" "}
                <strong>projets immobiliers locatifs</strong>
              </h6>
              <div className="bg-whiite/20 p-2 my-2">
                <p className="text-whiite p-2" data-aos="fade-left">
                  Définissez les critères importants dans votre recherche de
                  bien immobilier.
                </p>
              </div>
            </li>

            <li className="my-4 max-w-[500px]">
              <div className="py-2 px-4 rounded-full border-whiite border-2 text-whiite text-xl hover:bg-whiite hover:text-oraange absolute after:border after:border-whiite">
                2
              </div>
              <h6 className="text-xl text-whiite" data-aos="fade-right">
                Stockez les informations des annonces{" "}
                <strong>au même endroit</strong>{" "}
              </h6>
              <div className="bg-whiite/20 p-2 my-2">
                <p className="text-whiite p-2" data-aos="fade-left">
                  Lorsque vous trouvez des biens qui vous intéressent, stockez
                  toutes leurs informations ainsi que le lien vers leur annonce.
                </p>
              </div>
            </li>

            <li className="my-4 max-w-[500px]">
              <div className="py-2 px-4 rounded-full border-whiite border-2 text-whiite text-xl hover:bg-whiite hover:text-oraange absolute after:border after:border-whiite">
                3
              </div>
              <h6 className="text-xl text-whiite" data-aos="fade-right">
                Visitez et posez les <strong>bonnes questions</strong>
              </h6>
              <div className="bg-whiite/20 p-2 my-2">
                <p className="text-whiite p-2" data-aos="fade-left">
                  Lors de la visite d'un bien ou d'un entretien téléphonique,
                  posez les <strong>questions pertinentes</strong> dans le cas
                  d'un investissement locatif.
                </p>
              </div>
            </li>

            <li className="my-4 max-w-[500px]">
              <div className="py-2 px-4 rounded-full border-whiite border-2 text-whiite text-xl hover:bg-whiite hover:text-oraange absolute after:border after:border-whiite">
                4
              </div>
              <h6 className="text-xl text-whiite" data-aos="fade-right">
                Utilisez le calculateur de <strong>rentabilité</strong>
              </h6>
              <div className="bg-whiite/20 p-2 my-2">
                <p className="text-whiite p-2" data-aos="fade-left">
                  Notre outil calcule pour vous la <strong>rentabilité</strong>{" "}
                  des biens que vous avez stockés.
                </p>
              </div>
            </li>

            <li className="my-4 max-w-[500px]">
              <div className="py-2 px-4 rounded-full border-whiite border-2 text-whiite text-xl hover:bg-whiite hover:text-oraange absolute after:border after:border-whiite">
                5
              </div>
              <h6 className="text-xl text-whiite" data-aos="fade-right">
                Trouvez le <strong>meilleur investissement</strong>
              </h6>
              <div className="bg-whiite/20 p-2 my-2">
                <p className="text-whiite p-2" data-aos="fade-left">
                  <strong>Comparez</strong> les biens et{" "}
                  <strong>choisissez</strong> celui qui correspond à vos
                  attentes.
                </p>
              </div>
            </li>

            {/* <% if isUser? %>
      <%= link_to 'Commencez maintenant', projects_path(current_user.id),  class:"btn btn-light rounded mt-2" %>
    <%else%>
      <%= link_to 'Commencez maintenant', new_user_registration_path,  class:"btn btn-light rounded mt-2" %>
    <%end%> */}
          </ul>

          <OrangeButton>Commencez maintenant !</OrangeButton>
        </div>
      </section>
    </div>
  );
}