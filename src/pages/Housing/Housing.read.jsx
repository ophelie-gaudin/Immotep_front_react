import React, { useState, useEffect } from 'react';
import Cookies from 'js-cookie';
import { useParams, Link } from 'react-router-dom';
import FormsCard from '../../components/FormsCard';
import HousingDelete from '../../components/HousingDelete';

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
      <FormsCard
        title='Informations concernant le logement'
        returnText="Retour sur mon projet"
        returnUrl={`/dashboard/${project_id}`}
      >
        <div className='housing-card'>
          <div className='housing-card-text-scale'>
            <div className='housing-card-localization'>{myHousingsInfo.localization}</div>
            <div className='housing-card-title'>{myHousingsInfo.ad_price}</div>
            <div className='housing-card-category'>{myHousingsInfo.property_category}</div>
            <div className='housing-card-area'>{myHousingsInfo.area} m2</div>
            <div className='housing-card-url'>{myHousingsInfo.ad_url}</div>
            <div className='housing-card-comment'>{myHousingsInfo.comment}</div>
            <div className='housing-card-offer'>{myHousingsInfo.offer_price}</div>
            <div className='housing-card-repairs'>{myHousingsInfo.repairs_price}</div>
            <div className='housing-card-annual-rent'>{myHousingsInfo.annual_rent}</div>
            <div className='housing-card-agency-fees'>{myHousingsInfo.agency_fees}</div>
            <div className='housing-card-pno-insurance'>{myHousingsInfo.pno_insurance}</div>
            <div className='housing-card-property-tax'>{myHousingsInfo.property_tax}</div>
            <div className='housing-card-rental-management'>
              {myHousingsInfo.rental_management}
            </div>
            <div className='housing-card-unpayment-insurance'>
              {myHousingsInfo.rental_unpayment_insurance}
            </div>
            <div className='housing-card-building-co-tax'>
              {myHousingsInfo.building_co_tax}
            </div>
            <div className='housing-card-maintenant-percentage'>
              {myHousingsInfo.maintenance_percentage}
            </div>
            <div className='housing-card-ad-profitability'>
              {myHousingsInfo.ad_profitability}
            </div>
            <div className='housing-card-offer-profitability'>
              {myHousingsInfo.offer_profitability}
            </div>
            <div className='housing-card-new-property'>{myHousingsInfo.new_property}</div>
            <div className='housing-card-rental-vacancy'>{myHousingsInfo.rental_vacancy}</div>

            <div className='flex justify-around'>
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
          </div>
        </div>
      </FormsCard>
    </>
  );
}
