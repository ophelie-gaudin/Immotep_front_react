import React, { useState, useEffect } from "react";
import FormsCard from "../../components/FormsCard";
import Cookies from "js-cookie";
import { useParams, useNavigate } from "react-router-dom";
import WarningArea from "../../components/Main/WarningArea";
import Notifications from "../../components/Notifications/Notifications";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import StepContent from "@mui/material/StepContent";
import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";

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
          Notifications.success(
            "Les informations ont bien ??t?? mises ?? jour ! ????"
          );
        } else {
          Notifications.error(
            "Il y a eu un probl??me, veuillez r??essayer... ????"
          );
          throw new Error(res);
        }
      })
      .catch((err) => console.error(err));
  };

  const handleSetState = (e, state) => {
    if (e.target.type === "checkbox") {
      setMyHousingsInfo({ ...myHousingsInfo, [state]: e.target.checked });
    } else if (e.target.type === "number") {
      setMyHousingsInfo({ ...myHousingsInfo, [state]: Number(e.target.value) });
    } else {
      setMyHousingsInfo({ ...myHousingsInfo, [state]: e.target.value });
    }
  };

  const [activeStep, setActiveStep] = React.useState(0);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  const steps = [
    {
      label: (
        <h2 className="text-lg font-bold my-4">R??f??rences de l'annonce: </h2>
      ),
      description: (
        <div>
          <label className="font-medium my-6">
            Lien vers l'annonce :
            <input
              type="text"
              className="mt-2  my-6"
              onChange={(e) => handleSetState(e, "ad_url")}
              value={myHousingsInfo.ad_url}
            />
          </label>
          <label className="font-medium my-6">
            Prix du logement :
            <input
              type="number"
              className="mt-2 my-6"
              onChange={(e) => handleSetState(e, "ad_price")}
              value={myHousingsInfo.ad_price}
              min="0"
            />
          </label>{" "}
          <label className=" font-medium w-full  mt-6 ">
            Type de bien :
            <br />
            <div className="w-full flex justify-center">
              <select
                className="w-[90%]  mb-6 mt-3"
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
            </div>
          </label>
          <label className="font-medium my-6 ">
            Localisation :
            <input
              type="text"
              className="  my-2"
              onChange={(e) => handleSetState(e, "localization")}
              value={myHousingsInfo.localization}
            />
          </label>
          <WarningArea>
            ??? Nous vous conseillons de v??rifier sur plusieurs annonces le prix
            des biens similaires afin de voir s'il n'y a pas d'incoh??rence avec
            le prix annonc??. N'h??sitez pas ?? questionner le propri??taire ou
            l'agence lors de la visite.
          </WarningArea>
        </div>
      ),
    },
    {
      label: (
        <h2 className="text-lg  font-bold my-4">Caract??ristiques du bien : </h2>
      ),
      description: (
        <div>
          <label className="font-medium block w-full text-left">
            Surface (en m??)
            <input
              type="number"
              className="mt-2 !ml-0"
              onChange={(e) => handleSetState(e, "area")}
              value={myHousingsInfo.area}
              min="0"
            />
          </label>
          <WarningArea>
            ??? Nous vous conseillons de v??rifier le prix au m??tre carr?? pour la
            localisation du bien.{" "}
          </WarningArea>
          <label className="font-medium block w-full text-left my-8">
            Montant des r??parations (en ???)
            <input
              type="number"
              className="mt-2 !ml-0"
              onChange={(e) => handleSetState(e, "repairs_price")}
              value={myHousingsInfo.repairs_price}
              min="0"
            />
          </label>
          <label className="font-medium  block w-full text-left">
            <input
              type="checkbox"
              className="ml-4 mt-2"
              name="controlled"
              checked={myHousingsInfo.new_property}
              onChange={(e) => handleSetState(e, "new_property")}
            ></input>{" "}
            Bien neuf
          </label>
          <WarningArea>
            ??? Lors de la visite, il faut imp??rativement poser des questions sur
            l'??tat du bien et plus particuli??rement trois ??l??ments qui peuvent
            tr??s rapidement faire grimper le co??t des travaux ?? pr??voir:
            <li className="list-disc">la toiture (environ 250???/m?? de toit),</li>
            <li className="list-disc">la fa??ade (environ 30???/m?? de mur),</li>
            <li className="list-disc">
              la chaudi??re (?? condensation gaz : entre 3000 - 6000 ??? /
              classique: entre 500 - 2500???).
            </li>
          </WarningArea>
        </div>
      ),
    },
    {
      label: <h2 className="text-lg font-bold my-4">Charges </h2>,
      description: (
        <div>
          <label className="font-medium  my-6  block w-full text-left">
            Charges de co-propri??t?? (en ???)
            <input
              type="number"
              className="mt-3 mb-6 !ml-0"
              onChange={(e) => handleSetState(e, "building_co_tax")}
              value={myHousingsInfo.building_co_tax}
              min="0"
            />
          </label>
          <label className="font-medium  my-6 block w-full text-left">
            Taxe fonci??re (en ???)
            <input
              type="number"
              className="mt-2 !ml-0"
              onChange={(e) => handleSetState(e, "property_tax")}
              value={myHousingsInfo.property_tax}
              min="0"
            />
          </label>
          <p className="ml-6 font-medium  mt-8 mb-4">
            Souhaiterez-vous souscrire ?? une ...? <br />
          </p>
          <label className="font-medium block w-full text-left">
            <input
              type="checkbox"
              className="mt-2 ml-4  mr-4"
              checked={myHousingsInfo.pno_insurance}
              onChange={(e) => handleSetState(e, "pno_insurance")}
            />
            Assurance P.N.O.
          </label>
          <WarningArea>
            ??? L'assurance Propri??taire Non Occupant garantit au propri??taire
            bailleur une couverture ??quivalente ?? la multirisque habitation.
            <br />
            Elle correspond g??n??ralement ?? environ 7% du loyer.{" "}
          </WarningArea>
          <label className="font-medium mt-8 block w-full text-left">
            <input
              type="checkbox"
              className="ml-4 mr-4 mt-3"
              name="controlled"
              onChange={(e) => handleSetState(e, "rental_unpayment_insurance")}
              value={myHousingsInfo.rental_unpayment_insurance}
            />{" "}
            Assurance des loyers impay??s
          </label>
          <WarningArea>
            ??? L'assurance pour loyers impay??s garantit le versement du loyer au
            propri??taire en cas de d??fault de paiement par le locataire.
            <br />
            Elle correspond g??n??ralement ?? environ 7% du loyer.
          </WarningArea>
        </div>
      ),
    },
    {
      label: <h2 className="text-lg font-bold my-4">Investissement : </h2>,
      description: (
        <div>
          <label className="font-medium block w-full text-left">
            Loyer annuel complet (en ???):
            <input
              type="number"
              className="mt-2"
              onChange={(e) => handleSetState(e, "annual_rent")}
              value={myHousingsInfo.annual_rent}
              min="0"
            />
          </label>

          <label className="font-medium block w-full text-left mt-8 ">
            <input
              type="checkbox"
              className="ml-4 mt-2"
              name="controlled"
              onChange={(e) => handleSetState(e, "rental_management")}
              value={myHousingsInfo.rental_management}
            />{" "}
            Gestion Locative
          </label>
          <WarningArea>
            ??? La gestion locative permet ?? un tiers (souvent une agence
            immobili??re) de g??rer la recherche d'un locataire, le suivi du
            paiement des loyers ainsi que les contr??les p??riodiques de l'??tat du
            logement.
            <br />
            Il faut compter environ 7% du loyer ainsi qu'un mois de loyer par
            changement de locataire.{" "}
          </WarningArea>

          <label className="font-medium  block w-full text-left my-8">
            Pourcentage de vacance locative (en %)
            <input
              type="number"
              className="mt-2 !ml-0"
              onChange={(e) => handleSetState(e, "rental_vacancy")}
              value={myHousingsInfo.rental_vacancy}
              min="0"
              max="100"
            />
          </label>
          <WarningArea>
            ??? Le pourcentage de vacance locative permet de prendre en compte
            dans nos calculs les p??riodes sans locataire (p??riodes entre le
            d??part d'un locataire et l'arriv??e d'un nouveau, etc.) Une semaine
            de vacance locative repr??sente 2% de vacance locative sur un an.
            <small>Pourcentage minimal conseill??: 6%</small>
          </WarningArea>

          <label className="font-medium  block w-full text-left my-8">
            Pourcentage de provision pour entretien sur le montant du loyer (en
            %)
            <input
              type="number"
              className="mt-2 !ml-0"
              onChange={(e) => handleSetState(e, "maintenance_percentage")}
              value={myHousingsInfo.maintenance_percentage}
              min="0"
              max="100"
            />
          </label>
          <WarningArea>
            ??? Le pourcentage de r??serve permet de mettre chaque mois une somme
            de c??t?? pour prendre en compte l'entretien ?? faire sur un logement.
            Cette somme ne rentre pas en compte dans les b??n??fices.
            <small>Pourcentage minimal conseill??: 2%</small>
          </WarningArea>
        </div>
      ),
    },
    {
      label: <h2 className="text-lg font-bold my-4">Offre : </h2>,
      description: (
        <div>
          <label className="font-medium mt-4 block w-full text-left">
            Vos remarques :<br />
            <textarea
              type="text"
              className="mt-2  w-[90%]"
              onChange={(e) => handleSetState(e, "comment")}
              value={myHousingsInfo.comment}
            />
          </label>
          <WarningArea>
            ??? N'h??sitez pas ?? visiter le logement ?? diff??rents moments de la
            journ??e et de la semaine pour v??rifier les ??ventuelles nuisances
            (bar, travaux, circulation...) pr??sentes dans le quartier.{" "}
          </WarningArea>
          <label className="font-medium mt-8 block w-full text-left">
            Prix de l'offre (en ???) :
            <input
              type="number"
              className="mt-2 !ml-0"
              onChange={(e) => handleSetState(e, "offer_price")}
              value={myHousingsInfo.offer_price}
              min="0"
            />
          </label>
          <WarningArea>
            ??? Demandez les raisons de la vente du bien : si la vente est
            urgente, vous pourrez plus facilement n??gocier le prix.
            <br />
            Renseignez-vous sur la dur??e durant laquelle le propri??taire a v??cu
            dans le bien : si le propri??taire habite ici depuis longtemps, il a
            eu davantage le temps de rembourser son cr??dit et sera surement
            davantage ouvert ?? une offre.{" "}
          </WarningArea>
          <label className="font-medium  mt-8  block w-full text-left">
            Frais de notaire (en ???) :
            <input
              type="number"
              className="mt-2 !ml-0"
              onChange={(e) => handleSetState(e, "notary_fees")}
              value={myHousingsInfo.notary_fees}
              min="0"
            />
          </label>
          <label className="font-medium my-8 block w-full text-left">
            Frais d'agence (en ???):
            <input
              type="number"
              className="mt-2 !ml-0"
              onChange={(e) => handleSetState(e, "agency_fees")}
              value={myHousingsInfo.agency_fees}
              min="0"
            />
          </label>
        </div>
      ),
    },
  ];

  return (
    <div className="mt-12 mb-8">
      <div>
        <FormsCard
          title="Modifier mon logement"
          returnText="Mon Logement"
          returnUrl={`/dashboard/${project_id}/housing/${housing_id}`}
        >
          <form
            onSubmit={handleSubmit}
            className="text-greey w-full flex justify-center"
          >
            <Box sx={{ maxWidth: 700 }}>
              <Stepper activeStep={activeStep} orientation="vertical">
                {steps.map((step, index) => (
                  <Step key={step.label}>
                    <StepLabel
                      optional={
                        index === 4 ? (
                          <Typography variant="caption">
                            Derni??re ??tape
                          </Typography>
                        ) : null
                      }
                    >
                      {step.label}
                    </StepLabel>
                    <StepContent>
                      <Typography>{step.description}</Typography>
                      <Box sx={{ mb: 2 }}>
                        <div>
                          <Button
                            disabled={index === 0}
                            onClick={handleBack}
                            sx={{ mt: 1, mr: 1 }}
                          >
                            Pr??c??dent
                          </Button>

                          {index === steps.length - 1 ? (
                            <Button
                              variant="contained"
                              onClick={handleNext}
                              sx={{ mt: 1, mr: 1 }}
                              type="submit"
                            >
                              J'enregistre
                            </Button>
                          ) : (
                            <Button
                              variant="contained"
                              onClick={handleNext}
                              sx={{ mt: 1, mr: 1 }}
                            >
                              Suivant
                            </Button>
                          )}
                        </div>
                      </Box>
                    </StepContent>
                  </Step>
                ))}
              </Stepper>
              {activeStep === steps.length && (
                <Paper square elevation={0} sx={{ p: 3 }}>
                  <Typography>
                    Vous avez bien renseign?? tous les champs ! ????{" "}
                  </Typography>
                  <Button onClick={handleReset} sx={{ mt: 1, mr: 1 }}>
                    R??initialiser
                  </Button>
                </Paper>
              )}
            </Box>

            {/* <hr />
            <hr />
            <button className="orange-button forms-buttons" type="submit">
              J'enregistre
            </button> */}
          </form>
        </FormsCard>
      </div>
    </div>
  );
}
