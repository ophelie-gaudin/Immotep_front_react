import React, { useState, useEffect } from "react";
import FormsCard from "../../components/FormsCard";
import Cookies from "js-cookie";
import { useParams, useNavigate } from "react-router-dom";
import WarningArea from "../../components/Main/WarningArea";

export default function HousingUpdate() {
  const navigate = useNavigate();
  const { housing_id, project_id } = useParams();
  const [myHousingsInfo, setMyHousingsInfo] = useState({
    localization: "",
    ad_price: "",
    property_category: "",
    area: "",
    ad_url: "",
    comment: "",
    offer_price: "",
    repairs_price: "",
    annual_rent: "",
    agency_fees: "",
    pno_insurance: "",
    property_tax: "",
    rental_management: "",
    rental_unpayment_insurance: "",
    building_co_tax: "",
    maintenance_percentage: "",
    new_property: "",
    rental_vacancy: "",
    notary_fees: "",
  });

  const oneHousingArgument = `projects/${project_id}/housings/${housing_id}`;

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
          setMyHousingsInfo({
            localization: response.localization,
            ad_price: response.ad_price,
            property_category: response.property_category,
            area: response.area,
            ad_url: response.ad_url,
            comment: response.comment,
            offer_price: response.offer_price,
            repairs_price: response.repairs_price,
            annual_rent: response.annual_rent,
            agency_fees: response.agency_fees,
            pno_insurance: response.pno_insurance,
            property_tax: response.property_tax,
            rental_management: response.rental_management,
            rental_unpayment_insurance: response.rental_unpayment_insurance,
            building_co_tax: response.building_co_tax,
            maintenance_percentage: response.maintenance_percentage,
            new_property: response.new_property,
            rental_vacancy: response.rental_vacancy,
            notary_fees: response.notary_fees,
          });
        })
        .catch((err) => console.error(err));
    };
    fetchList(`https://immotep-api.herokuapp.com/`, oneHousingArgument);
  }, [oneHousingArgument]);

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch(
      `https://immotep-api.herokuapp.com/projects/${project_id}/housings/${housing_id}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: Cookies.get("token"),
        },
        body: JSON.stringify(myHousingsInfo),
      }
    )
      .then((res) => {
        if (res.ok) {
          navigate(`/dashboard/${project_id}/housing/${housing_id}`);
        } else {
          throw new Error(res);
        }
      })
      .catch((err) => console.error(err));
  };

  const handleSetState = (e, state) => {
    if (e.taget.type === "checkbox") {
      setMyHousingsInfo({ [state]: e.target.checked });
    } else if (e.taget.type === "checkbox") {
      setMyHousingsInfo({ [state]: Number(e.target.value) });
    } else {
      setMyHousingsInfo({ [state]: e.target.value });
    }
  };

  return (
    <div className="mt-12 mb-8">
      <div>
        <FormsCard
          title="Modifier mon logement"
          returnText="Mon Logement"
          returnUrl={`/dashboard/${project_id}/housing/${housing_id}`}
        >
          <form onSubmit={handleSubmit} className="text-greey">
            <h2 className="text-lg">Références de l'annonce: </h2>
            <label className="font-medium">
              Lien vers l'annonce :
              <input
                type="text"
                className="mt-2"
                onChange={(e) => handleSetState(e, "ad_url")}
                value={myHousingsInfo.ad_url}
              />
            </label>
            <label className="font-medium">
              Prix du logement :
              <input
                type="number"
                className="mt-2"
                onChange={(e) => handleSetState(e, "ad_price")}
                value={myHousingsInfo.ad_price}
                min="0"
              />
            </label>{" "}
            <label className="flex flex-col font-medium w-[95%] items-start">
              Type de bien :
              <select
                className="w-full"
                name="property-category"
                id="hypothesis"
                onChange={(e) => handleSetState(e, "property_category")}
                value={myHousingsInfo.property_category}
              >
                <option value="Studio">Studio</option>
                <option value="T1">T1</option>
                <option value="T1bis">T1bis</option>
                <option value="T2">T2</option>
                <option value="T2bis">T2bis</option>
                <option value="T3">T3</option>
                <option value="T4">T4</option>
                <option value="T5">T5</option>
                <option value="T6">T6</option>
                <option value="Grand appartement">Grand appartement</option>
                <option value="Maison">Maison</option>
                <option value="Immeuble">Immeuble</option>
                <option value="Autre">Autre</option>
              </select>
            </label>
            <label className="font-medium">
              Localisation :
              <input
                type="text"
                className="mt-2"
                onChange={(e) => handleSetState(e, "localization")}
                value={myHousingsInfo.localization}
              />
            </label>
            <WarningArea>
              ⓘ Nous vous conseillons de vérifier sur plusieurs annonces le prix
              des biens similaires afin de voir s'il n'y a pas d'incohérence
              avec le prix annoncé. N'hésitez pas à questionner le propriétaire
              ou l'agence lors de la visite.
            </WarningArea>
            <h2 className="text-lg">Caractéristiques du bien : </h2>
            <label className="font-medium">
              Surface en m² :
              <input
                type="number"
                className="mt-2"
                onChange={(e) => handleSetState(e, "area")}
                value={myHousingsInfo.area}
                min="0"
              />
            </label>
            <WarningArea>
              ⓘ Nous vous conseillons de vérifier le prix au mètre carré pour la
              localisation du bien.{" "}
            </WarningArea>
            <label className="font-medium">
              Montant des réparations
              <input
                type="number"
                className="mt-2"
                onChange={(e) => handleSetState(e, "ad_price")}
                value={myHousingsInfo.ad_price}
                min="0"
              />
            </label>
            <label className="font-medium">
              <input
                type="checkbox"
                className="ml-8 mt-2"
                name="controlled"
                checked={myHousingsInfo.new_property}
                onChange={(e) => handleSetState(e, "new_property")}
              ></input>{" "}
              Bien neuf
            </label>
            <WarningArea>
              ⓘ Lors de la visite, il faut impérativement poser des questions
              sur l'état du bien et plus particulièrement trois éléments qui
              peuvent très rapidement faire grimper le coût des travaux à
              prévoir:
              <li className="list-disc">
                la toiture (environ 250€/m² de toit),
              </li>
              <li className="list-disc">la façade (environ 30€/m² de mur),</li>
              <li className="list-disc">
                la chaudière (à condensation gaz : entre 3000 - 6000 € /
                classique: entre 500 - 2500€).
              </li>
            </WarningArea>
            <h2 className="text-lg">Charges : </h2>
            <label className="font-medium">
              Charges de co-propriété (en €) :
              <input
                type="number"
                className="mt-2"
                onChange={(e) => handleSetState(e, "building_co_tax")}
                value={myHousingsInfo.building_co_tax}
                min="0"
              />
            </label>
            <label className="font-medium">
              Taxe foncière (en €) :
              <input
                type="number"
                className="mt-2"
                onChange={(e) => handleSetState(e, "property_tax")}
                value={myHousingsInfo.property_tax}
                min="0"
              />
            </label>
            Souhaiterez-vous souscrire à une ...? <br />
            <label className="font-medium">
              <input
                type="checkbox"
                className="mt-2"
                checked={myHousingsInfo.pno_insurance}
                onChange={(e) => handleSetState(e, "pno_insurance")}
              />
              Assurance P.N.O.
            </label>
            <WarningArea>
              ⓘ L'assurance Propriétaire Non Occupant garantit au propriétaire
              bailleur une couverture équivalente à la multirisque habitation.
              <br />
              Elle correspond généralement à environ 7% du loyer.{" "}
            </WarningArea>
            <label className="font-medium">
              <input
                type="checkbox"
                className="ml-8 mt-2"
                name="controlled"
                onChange={(e) =>
                  handleSetState(e, "rental_unpayment_insurance")
                }
                value={myHousingsInfo.rental_unpayment_insurance}
              />{" "}
              Assurance des loyers impayés
            </label>
            <WarningArea>
              ⓘ L'assurance pour loyers impayés garantit le versement du loyer
              au propriétaire en cas de défault de paiement par le locataire.
              <br />
              Elle correspond généralement à environ 7% du loyer.
            </WarningArea>
            <h2 className="text-lg">Investissement : </h2>
            <label className="font-medium">
              Loyer annuel complet (en €):
              <input
                type="number"
                className="mt-2"
                onChange={(e) => handleSetState(e, "annual_rent")}
                value={myHousingsInfo.annual_rent}
                min="0"
              />
            </label>
            <label className="font-medium">
              <input
                type="checkbox"
                className="ml-8 mt-2"
                name="controlled"
                onChange={(e) => handleSetState(e, "rental_management")}
                value={myHousingsInfo.rental_management}
              />{" "}
              Gestion Locative
            </label>
            <WarningArea>
              ⓘ La gestion locative permet à un tiers (souvent une agence
              immobilière) de gérer la recherche d'un locataire, le suivi du
              paiement des loyers ainsi que les contrôles périodiques de l'état
              du logement.
              <br />
              Il faut compter environ 7% du loyer ainsi qu'un mois de loyer par
              changement de locataire.{" "}
            </WarningArea>
            <label className="font-medium">
              Pourcentage de vacance locative (en %)
              <input
                type="number"
                className="mt-2"
                onChange={(e) => handleSetState(e, "rental_vacancy")}
                value={myHousingsInfo.rental_vacancy}
                min="0"
                max="100"
              />
            </label>
            <WarningArea>
              ⓘ Le pourcentage de vacance locative permet de prendre en compte
              dans nos calculs les périodes sans locataire (périodes entre le
              départ d'un locataire et l'arrivée d'un nouveau, etc.) Une semaine
              de vacance locative représente 2% de vacance locative sur un an.
              <small>Pourcentage minimal conseillé: 6%</small>
            </WarningArea>
            <label className="font-medium">
              Pourcentage de provision pour entretien sur le montant du loyer
              (en %):
              <input
                type="number"
                className="mt-2"
                onChange={(e) => handleSetState(e, "maintenance_percentage")}
                value={myHousingsInfo.maintenance_percentage}
                min="0"
                max="100"
              />
            </label>
            <WarningArea>
              ⓘ Le pourcentage de réserve permet de mettre chaque mois une somme
              de côté pour prendre en compte l'entretien à faire sur un
              logement. Cette somme ne rentre pas en compte dans les bénéfices.
              <small>Pourcentage minimal conseillé: 2%</small>
            </WarningArea>
            <h2 className="text-lg">Offre : </h2>
            <label className="font-medium">
              Vos remarques :<br />
              <textarea
                type="text"
                className="mt-2 ml-7"
                onChange={(e) => handleSetState(e, "comment")}
                value={myHousingsInfo.comment}
              />
            </label>
            <br />
            <WarningArea>
              ⓘ N'hésitez pas à visiter le logement à différents moments de la
              journée et de la semaine pour vérifier les éventuelles nuisances
              (bar, travaux, circulation...) présentes dans le quartier.{" "}
            </WarningArea>
            <label className="font-medium">
              Prix de l'offre (en €) :
              <input
                type="number"
                className="mt-2"
                onChange={(e) => handleSetState(e, "offer_price")}
                value={myHousingsInfo.offer_price}
                min="0"
              />
            </label>
            <WarningArea>
              ⓘ Demandez les raisons de la vente du bien : si la vente est
              urgente, vous pourrez plus facilement négocier le prix.
              <br />
              Renseignez-vous sur la durée durant laquelle le propriétaire a
              vécu dans le bien : si le propriétaire habite ici depuis
              longtemps, il a eu davantage le temps de rembourser son crédit et
              sera surement davantage ouvert à une offre.{" "}
            </WarningArea>
            <label className="font-medium">
              Frais de notaire (en €) :
              <input
                type="number"
                className="mt-2"
                onChange={(e) => handleSetState(e, "notary_fees")}
                value={myHousingsInfo.notary_fees}
                min="0"
              />
            </label>
            <label className="font-medium">
              Frais d'agence (en €):
              <input
                type="number"
                className="mt-2"
                onChange={(e) => handleSetState(e, "agency_fees")}
                value={myHousingsInfo.agency_fees}
                min="0"
              />
            </label>
            <hr />
            <hr />
            <button className="orange-button forms-buttons" type="submit">
              J'enregistre
            </button>
          </form>
        </FormsCard>
      </div>
    </div>
  );
}
