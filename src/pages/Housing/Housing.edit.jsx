import React, { useState, useEffect } from "react";
import FormsCard from "../../components/FormsCard";
import Cookies from "js-cookie";
import { useParams, useNavigate } from "react-router-dom";
import WarningArea from "../../components/Main/WarningArea";

export default function HousingUpdate() {
  const navigate = useNavigate();
  const { housing_id, project_id } = useParams();
  const [myHousingsInfo, setMyHousingsInfo] = useState("");

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
          setMyHousingsInfo(response);
        })
        .catch((err) => console.error(err));
    };
    fetchList(`https://immotep-api.herokuapp.com/`, oneHousingArgument);
  }, [oneHousingArgument]);

  const [localization, setLocalization] = useState();
  const [ad_price, setAdPrice] = useState(0);
  const [property_category, setPropertyCategory] = useState();
  const [area, setArea] = useState();
  const [ad_url, setAdUrl] = useState();
  const [comment, setComment] = useState();
  const [offer_price, setOfferPrice] = useState();
  const [repairs_price, setRepairsPrice] = useState();
  const [annual_rent, setAnnualRent] = useState();
  const [agency_fees, setAgencyFees] = useState();
  const [pno_insurance, setPnoInsurance] = useState();
  const [property_tax, setPropertyTax] = useState();
  const [rental_management, setRentalManagement] = useState();
  const [rental_unpayment_insurance, setRentalUnpaymentInsurance] = useState();
  const [building_co_tax, setBuildingCoTax] = useState();
  const [maintenance_percentage, setMaintenancePercentage] = useState();
  const [new_property, setNewProperty] = useState();
  const [rental_vacancy, setRentalVacancy] = useState();
  const [notary_fees, setNotaryFees] = useState();

  const data = {
    localization,
    ad_price,
    property_category,
    area,
    ad_url,
    comment,
    offer_price,
    repairs_price,
    annual_rent,
    agency_fees,
    pno_insurance,
    property_tax,
    rental_management,
    rental_unpayment_insurance,
    building_co_tax,
    maintenance_percentage,
    new_property,
    rental_vacancy,
    notary_fees,
  };

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
        body: JSON.stringify(data),
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
                placeholder={myHousingsInfo.ad_url}
                onChange={(e) => setAdUrl(e.target.value)}
              />
            </label>
            <label className="font-medium">
              Prix du logement :
              <input
                type="number"
                className="mt-2"
                placeholder={myHousingsInfo.ad_price}
                onChange={(e) => setAdPrice(Number(e.target.value))}
                min="0"
              />
            </label>{" "}
            <label className="flex flex-col font-medium w-[95%] items-start">
              Type de bien :
              <select
                className="w-full"
                name="property-category"
                id="hypothesis"
                placeholder={myHousingsInfo.property_category}
                onChange={(e) => setPropertyCategory(e.target.value)}
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
                placeholder={myHousingsInfo.localization}
                onChange={(e) => setLocalization(e.target.value)}
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
                type="text"
                className="mt-2"
                placeholder={myHousingsInfo.area}
                onChange={(e) => setArea(e.target.value)}
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
                placeholder={myHousingsInfo.repairs_price}
                onChange={(e) => setRepairsPrice(Number(e.target.value))}
                min="0"
              />
            </label>
            <label className="font-medium">
              <input
                type="checkbox"
                className="ml-8 mt-2"
                name="controlled"
                placeholder={myHousingsInfo.new_property}
                onChange={(e) => setNewProperty(e.target.value)}
              ></input>{" "}
              Bien neuf
            </label>
            <WarningArea>
              ⓘ Lors de la visite, il faut impérativement poser des questions
              sur l'état du bien et plus particulièrement trois éléments qui
              peuvent très rapidement faire grimper le coût des travaux à
              prévoir:
              <ul>
                <li>la toiture (environ 250€/m² de toit),</li>
                <li>la façade (environ 30€/m² de mur),</li>
                la chaudière (à condensation gaz : entre 3000 - 6000 €,
                classique: entre 500 - 2500€).
                <li></li>
              </ul>
            </WarningArea>
            <h2 className="text-lg">Charges : </h2>
            <label className="font-medium">
              Charges de co-propriété (en €) :
              <input
                type="number"
                className="mt-2"
                placeholder={myHousingsInfo.building_co_tax}
                onChange={(e) => setBuildingCoTax(Number(e.target.value))}
                min="0"
              />
            </label>
            <label className="font-medium">
              Taxe foncière (en €) :
              <input
                type="number"
                className="mt-2"
                placeholder={myHousingsInfo.property_tax}
                onChange={(e) => setPropertyTax(Number(e.target.value))}
                min="0"
              />
            </label>
            Souhaiterez-vous souscrire à une ...? <br />
            <label className="font-medium">
              <input
                type="checkbox"
                className="mt-2"
                placeholder={myHousingsInfo.pno_insurance}
                onChange={(e) => setPnoInsurance(e.target.value)}
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
                placeholder={myHousingsInfo.rental_unpayment_insurance}
                onChange={(e) => setRentalUnpaymentInsurance(e.target.value)}
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
                placeholder={myHousingsInfo.annual_rent}
                onChange={(e) => setAnnualRent(Number(e.target.value))}
                min="0"
              />
            </label>
            <label className="font-medium">
              <input
                type="checkbox"
                className="ml-8 mt-2"
                name="controlled"
                placeholder={myHousingsInfo.rental_management}
                onChange={(e) => setRentalManagement(e.target.value)}
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
                placeholder={myHousingsInfo.rental_vacancy}
                onChange={(e) => setRentalVacancy(Number(e.target.value))}
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
                placeholder={myHousingsInfo.maintenance_percentage}
                onChange={(e) =>
                  setMaintenancePercentage(Number(e.target.value))
                }
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
                placeholder={myHousingsInfo.comment}
                onChange={(e) => setComment(e.target.value)}
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
                placeholder={myHousingsInfo.offer_price}
                onChange={(e) => setOfferPrice(Number(e.target.value))}
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
                placeholder={myHousingsInfo.notary_fees}
                onChange={(e) => setNotaryFees(Number(e.target.value))}
                min="0"
              />
            </label>
            <label className="font-medium">
              Frais d'agence (en €):
              <input
                type="number"
                className="mt-2"
                placeholder={myHousingsInfo.agency_fees}
                onChange={(e) => setAgencyFees(Number(e.target.value))}
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
