import React from 'react';
import { Link } from 'react-router-dom';
import HousingDelete from '../../HousingDelete';

const HousingCardInfo = (props) => {
  const { data } = props;

  return (
    <div className='housing-card'>
      <div className='housing-card-text-scale'>
        <div className='housing-card-localization'>{data.localization}</div>
        <div className='housing-card-title'>{data.ad_price}</div>
        <div className='housing-card-category'>{data.property_category}</div>
        <div className='housing-card-area'>{data.area} m2</div>
        <div className='housing-card-url'>{data.ad_url}</div>
        <div className='housing-card-comment'>{data.comment}</div>
        <div className='housing-card-offer'>{data.offer_price}</div>
        <div className='housing-card-repairs'>{data.repairs_price}</div>
        <div className='housing-card-annual-rent'>{data.annual_rent}</div>
        <div className='housing-card-agency-fees'>{data.agency_fees}</div>
        <div className='housing-card-pno-insurance'>{data.pno_insurance}</div>
        <div className='housing-card-property-tax'>{data.property_tax}</div>
        <div className='housing-card-rental-management'>
          {data.rental_management}
        </div>
        <div className='housing-card-unpayment-insurance'>
          {data.rental_unpayment_insurance}
        </div>
        <div className='housing-card-building-co-tax'>
          {data.building_co_tax}
        </div>
        <div className='housing-card-maintenant-percentage'>
          {data.maintenance_percentage}
        </div>
        <div className='housing-card-ad-profitability'>
          {data.ad_profitability}
        </div>
        <div className='housing-card-offer-profitability'>
          {data.offer_profitability}
        </div>
        <div className='housing-card-new-property'>{data.new_property}</div>
        <div className='housing-card-rental-vacancy'>{data.rental_vacancy}</div>

        <div className='flex justify-around'>
          <button className='block py-2 pr-4 pl-3 text-white rounded border-b border-light md:p-0 dark:text-white bg-primary md:border-none  md:px-2 md:py:1  hover:font-bold'>
            <Link
              to={`/dashboard/${data.project_id}/housing/${data.id}/edit`}
            >
              Modifier le logement
            </Link>
          </button>
          <br />
          <HousingDelete data={data} />
        </div>
      </div>
    </div>
  );
};

export default HousingCardInfo;
