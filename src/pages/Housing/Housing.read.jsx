import React, { useState, useEffect } from 'react';
import Cookies from 'js-cookie';
import { useParams, Link } from 'react-router-dom';
import HousingDelete from '../../components/HousingDelete';
import { FaArrowLeft } from 'react-icons/fa';
import WarningArea from '../../components/Main/WarningArea/index';
import '../../components/FormsCard/FormsCard.css';

export default function HousingRead() {
  const [myHousingsInfo, setMyHousingsInfo] = useState('');

  const { housing_id, project_id } = useParams();

  const oneHousingArgument = `projects/${project_id}/housings/${housing_id}`;

  useEffect(() => {
    const fetchList = (url, argument) => {
      const finalURL = argument ? `${url}${argument}` : url;
      fetch(`${finalURL}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          Authorization: Cookies.get('token'),
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
      <div>
        <div>
          <div className='flex flex-col rounded-[0.25rem] mt-24 mb-12 mx-auto w-[85vw] max-w-[1800px] border-2 border-primary text-whiite '>
            <div className='px-8 py-8 bg-primary mb-8'>
              <Link
                className='flex items-center'
                to={`/dashboard/${project_id}`}
              >
                <FaArrowLeft className='form-arrow-icon' /> Retour
              </Link>
              <h2 className='text-center text-3xl font-pacifico'>
                Informations concernant le logement
              </h2>
              <WarningArea>
                ⚠ Attention : notre outil permet de conseiller nos utilisateurs
                en facilitant la comparaison de biens immobiliers selon certains
                critères déterminés par les utilisateurs eux-mêmes. Nous ne
                pourrons donc être tenus pour responsables des conséquences des
                achats effectués.{' '}
              </WarningArea>
            </div>
            <div className='p-6'></div>
            <div
              id='Container-flex'
              className='text-xl leading-loose font-semibold flex mx-6 justify-evenly '
            >
              <div className='housing-card text-black font-3xl'>
                <div className='housing-card-title'>
                  <p className='font-2xl'>
                    Prix de l'annonce : {myHousingsInfo.ad_price}
                  </p>
                </div>
                <div className='housing-card-ad-profitability'>
                  Rentabilité nette en fonction du prix de l'annonce :
                  {myHousingsInfo.ad_profitability}
                </div>
                <div className='housing-card-offer'>
                  Prix de l'offre proposée : {myHousingsInfo.offer_price}
                </div>
                <div className='housing-card-offer-profitability'>
                  {myHousingsInfo.offer_profitability}
                </div>
                <div className='housing-card-area'>
                  Surface habitable : {myHousingsInfo.area} m²
                </div>
                <div className='housing-card-localization'>
                  Localisation : {myHousingsInfo.localization}
                </div>
                <div className='housing-card-repairs'>
                  Prix des travaux : {myHousingsInfo.repairs_price}
                </div>{' '}
                <div className='housing-card-agency-fees'>
                  {' '}
                  Frais d'agences / notaire : {myHousingsInfo.agency_fees}
                </div>{' '}
                <div className='housing-card-category'>
                  Type de bien : {myHousingsInfo.property_category}
                </div>
                <div className='housing-card-new-property'>
                  {myHousingsInfo.new_property}Bien neuf :{' '}
                  <b>{true ? 'Oui' : 'Non'}</b>
                </div>
              </div>

              <div className='housing-card text-black'>
                <div className='housing-card-annual-rent divide-primary divide-y-reverse divide-y-8'>
                  Loyer annuel complet : {myHousingsInfo.annual_rent}
                </div>
                <div className='housing-card-rental-vacancy'>
                  Pourcentage de vacance locative :{' '}
                  {myHousingsInfo.rental_vacancy}
                </div>
                <div className='housing-card text-black'>
                  <div className='housing-card-maintenant-percentage'>
                    Pourcentage de réserve pour entretien :{' '}
                    {myHousingsInfo.maintenance_percentage}
                  </div>
                  <div className='housing-card-rental-management'>
                    Gestion locative : {myHousingsInfo.rental_management}
                    <b>{true ? 'Oui' : 'Non'}</b>
                  </div>
                </div>
                <div className='housing-card-property-tax'>
                  Taxe d'habitation : {myHousingsInfo.property_tax}
                </div>
                <div className='housing-card-building-co-tax'>
                  Charges de copropriété : {myHousingsInfo.building_co_tax}
                </div>
                <div className='housing-card-pno-insurance'>
                  Assurance PNO : {myHousingsInfo.pno_insurance}
                </div>
                <div className='housing-card-unpayment-insurance'>
                  Assurance Loyers Impayés :{' '}
                  {myHousingsInfo.rental_unpayment_insurance}
                </div>
              </div>
            </div>
            <div className='mx-auto mt-8 bg-primary w-1/2 h-2'></div>
            <div className='ml-8 mt-12 mb-12 housing-card text-xl text-black leading-loose font-bold'>
              <div className='housing-card-comment'></div>
              Notes : {myHousingsInfo.comment}
              <div className='housing-card-url'>
                Lien de l'annonce : {myHousingsInfo.ad_url}
              </div>{' '}
            </div>
          </div>
        </div>
      </div>

      <div className='flex justify-around mb-24'>
        <button className='block py-2 pr-4 pl-3 text-white rounded border-b border-light md:p-0 dark:text-white bg-primary md:border-none  md:px-2 md:py:1  hover:font-bold'>
          <Link
            to={`/dashboard/${myHousingsInfo.project_id}/housing/${myHousingsInfo.id}/edit`}
          >
            Modifier le logement
          </Link>
        </button>
        <br />
        <HousingDelete data={myHousingsInfo} />
      </div>
    </>
  );
}
