import React, { useState, useEffect } from "react";
import Cookies from "js-cookie";
import { useParams, Link } from "react-router-dom";
import HousingDelete from "../../components/Delete/Housing.delete";
import "../../components/FormsCard/FormsCard.css";
import FormsCard from "../../components/FormsCard";

export default function HousingRead() {
  const [myHousingsInfo, setMyHousingsInfo] = useState("");

  const { housing_id, project_id } = useParams();

  const oneHousingArgument = `projects/${project_id}/housings/${housing_id}`;

  const [dialog, setDialog] = useState({
    message: "",
    isLoading: false,
  });

  function handleModal() {
    setDialog({
      message: "Êtes-vous sûr de vouloir supprimer ?",
      isLoading: true,
    });
  }

  useEffect(() => {
    const fetchList = (url, argument) => {
      const finalURL = argument ? `${url}${argument}` : url;
      fetch(`${finalURL}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: Cookies.get("token"),
        },
      })
        .then((response) => response.json())
        .then((response) => {
          setMyHousingsInfo(response);
        })
        .catch((err) => console.error(err));
    };
    fetchList(`https://immotep-api.herokuapp.com/`, oneHousingArgument);
  }, [oneHousingArgument]);

  return (
    <>
      <FormsCard
        title="Informations concernant le logement"
        returnText="Mon projet"
        returnUrl={`/dashboard/${myHousingsInfo.project_id}`}
        warning="⚠ Attention : notre outil permet de conseiller nos utilisateurs en facilitant la comparaison de biens immobiliers selon certains critères déterminés par les utilisateurs eux-mêmes. Nous ne pourrons donc être tenus pour responsables des conséquences des achats effectués."
      >
        <div className="text-greey w-full">
          <div className="flex w-full">
            <div className=" mb-8 w-1/2">
              Mes remarques sur ce logement : <br />
              <span className=" text-greey/70 italic">
                {myHousingsInfo.comment}
              </span>
            </div>
            <div className="flex flex-col w-1/2">
              <p>
                Rentabilité (prix de l'annonce) :{" "}
                {Number(myHousingsInfo.ad_profitability).toFixed(1) + " %"}
              </p>
              <p>
                Rentabilité (prix de l'offre) :{" "}
                {Number(myHousingsInfo.offer_profitability).toFixed(1) + " %"}
              </p>
            </div>
          </div>

          <div className="w-full flex flex-wrap justify-center">
            <div className=" md:w-1/2 w-full">
              <div className="m-2 border border-primary-light p-5 ">
                <h5 className="text-lg mb-2 font-bold w-full text-center  ">
                  Références de l'annonce{" "}
                </h5>{" "}
                <br />
                <p>
                  Prix de l'annonce :{" "}
                  <span className=" text-greey/70 italic">
                    {myHousingsInfo.ad_price} €
                  </span>{" "}
                </p>
                <br />
                <p>
                  Type de bien :{" "}
                  <span className=" text-greey/70 italic">
                    {myHousingsInfo.property_category}
                  </span>{" "}
                </p>
                <br />
                <p>
                  Localisation :{" "}
                  <span className=" text-greey/70 italic">
                    {myHousingsInfo.localization}
                  </span>{" "}
                </p>
                <br />
                <p>
                  Lien vers l'annonce :{" "}
                  <a
                    href={`${myHousingsInfo.ad_url}`}
                    className="text-primary hover:underline"
                  >
                    {myHousingsInfo.ad_url}
                  </a>{" "}
                </p>
              </div>
            </div>

            <div className=" md:w-1/2 w-full">
              <div className="m-2 border border-primary-light p-5 ">
                <h5 className="text-lg mb-2 font-bold w-full text-center">
                  Caractéristiques du bien{" "}
                </h5>{" "}
                <br />
                <p>
                  Surface en m² :{" "}
                  <span className=" text-greey/70 italic">
                    {myHousingsInfo.area} €
                  </span>{" "}
                </p>
                <br />
                <p>
                  Montant des réparations :{" "}
                  <span className=" text-greey/70 italic">
                    {myHousingsInfo.repairs_price} €
                  </span>{" "}
                </p>
                <br />
                <p>
                  Neuf ?{" "}
                  <span className=" text-greey/70 italic">
                    {myHousingsInfo.new_property === true ? "Oui" : "Non"}
                  </span>{" "}
                </p>
                <br />
                <br />
              </div>
            </div>

            <div className=" md:w-1/2 w-full">
              <div className="m-2 border border-primary-light p-5 ">
                <h5 className="text-lg mb-2 font-bold w-full text-center">
                  Charges{" "}
                </h5>{" "}
                <br />
                <p>
                  Charges de co-propriété:{" "}
                  <span className=" text-greey/70 italic">
                    {myHousingsInfo.building_co_tax} €
                  </span>{" "}
                </p>
                <br />
                <p>
                  Taxe foncière :{" "}
                  <span className=" text-greey/70 italic">
                    {myHousingsInfo.property_tax} €
                  </span>{" "}
                </p>
                <br />
                <p>
                  Assurance P.N.O ?{" "}
                  <span className=" text-greey/70 italic">
                    {myHousingsInfo.pno_insurance === true ? "Oui" : "Non"}
                  </span>{" "}
                </p>
                <br />
                <p>
                  Assurance Loyers impayés ?{" "}
                  <span className=" text-greey/70 italic">
                    {myHousingsInfo.rental_unpayment_insurance === true
                      ? "Oui"
                      : "Non"}
                  </span>{" "}
                </p>
              </div>
            </div>

            <div className=" md:w-1/2 w-full">
              <div className="m-2 border border-primary-light p-5 ">
                <h5 className="text-lg mb-2 font-bold w-full text-center">
                  Investissement{" "}
                </h5>{" "}
                <br />
                <p>
                  Loyer annuel :{" "}
                  <span className=" text-greey/70 italic">
                    {myHousingsInfo.annual_rent} €
                  </span>{" "}
                </p>
                <br />
                <p>
                  Gestion locative ?{" "}
                  <span className=" text-greey/70 italic">
                    {myHousingsInfo.rental_management === true ? "Oui" : "Non"}
                  </span>{" "}
                </p>
                <br />
                <p>
                  Pourcentage de vacance locative :{" "}
                  <span className=" text-greey/70 italic">
                    {myHousingsInfo.rental_vacancy} %
                  </span>{" "}
                </p>
                <br />
                <p>
                  Pourcentage de provision pour entretien :{" "}
                  <span className=" text-greey/70 italic">
                    {myHousingsInfo.maintenance_percentage} %
                  </span>{" "}
                </p>
              </div>
            </div>

            <div className=" md:w-1/2 w-full">
              <div className="m-2 border border-primary-light p-5 ">
                <h5 className="text-lg mb-2 font-bold w-full text-center">
                  Offre{" "}
                </h5>{" "}
                <br />
                <p>
                  Prix de l'offre:{" "}
                  <span className=" text-greey/70 italic">
                    {myHousingsInfo.offer_price} €
                  </span>{" "}
                </p>
                <br />
                <p>
                  Frais de notaire :{" "}
                  <span className=" text-greey/70 italic">
                    {myHousingsInfo.notary_fees} €
                  </span>{" "}
                </p>
                <br />
                <p>
                  Frais d'agence :{" "}
                  <span className=" text-greey/70 italic">
                    {myHousingsInfo.agency_fees} €
                  </span>{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
      </FormsCard>

      <div className="flex justify-around mb-24">
        {dialog.isLoading && <HousingDelete message={dialog.message} />}

        <button className="orange-button">
          <Link
            to={`/dashboard/${myHousingsInfo.project_id}/housing/${myHousingsInfo.id}/edit`}
          >
            Modifier le logement
          </Link>
        </button>
        <br />
        <button
          className="block py-2 pr-4 pl-3 text-white rounded border-b border-light md:p-0 dark:text-white bg-primary   hover:border hover:border-primary hover:bg-white hover:text-bold hover:text-[#E24E58] md:px-2 md:py:1  hover:font-bold hover:border hover:border-primary hover:bg-white hover:text-bold hover:text-[#E24E58] md:px-2 md:py:1  hover:font-bold text-bolder "
          onClick={() => handleModal()}
        >
          Supprimer le logement
        </button>
      </div>
    </>
  );
}
