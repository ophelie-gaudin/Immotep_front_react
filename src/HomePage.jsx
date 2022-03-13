import React from "react";
import OrangeButton from "./Components/Main/OrangeButton";

export default function HomePage() {
  return (
    <div className="">
      <section className="h-[100vh] bg-greey flex items-center">
        <div className="flex flex-col py-10 mx-auto md:mx-16 max-w-[540px] container px-12">
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
      <section className="h-[100vh] bg-whiite"></section>
    </div>
  );
}
