import React, { useState } from 'react';

import FormsCard from '../../components/FormsCard';
import Cookies from 'js-cookie';
import { useParams, useNavigate } from 'react-router-dom';

export default function HousingUpdate() {
  const navigate = useNavigate();
  const { housing_id, project_id } = useParams();

  const [localization, setLocalization] = useState();
  const [ad_price, setAdPrice] = useState();
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
  const [ad_profitability, setAdProfitability] = useState();
  const [offer_profitability, setOfferProfitability] = useState();
  const [new_property, setNewProperty] = useState();
  const [rental_vacancy, setRentalVacancy] = useState();

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
    ad_profitability,
    offer_profitability,
    new_property,
    rental_vacancy,
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch(
      `https://immotep-api.herokuapp.com/projects/${project_id}/housings/${housing_id}`,
      {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          Authorization: Cookies.get('token'),
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
    <div className='mt-12 mb-8'>
      <div>
        <FormsCard
          title='Modifier mon logement'
          returnText='Mon Logement'
          returnUrl={`/dashboard/${project_id}/housing/${housing_id}`}
          // returnState={location.state}
        >
          <form onSubmit={handleSubmit}>
            <label className='font-medium'>
              Localisation
              <input
                type='text'
                className='mt-2'
                onChange={(e) => setLocalization(e.target.value)}
              />
            </label>
            <label className='font-medium'>
              Prix du logement
              <input
                type='text'
                className='mt-2'
                onChange={(e) => setAdPrice(e.target.value)}
              />
            </label>
            <label className='font-medium'>
              Afaire
              <input
                type='text'
                className='mt-2'
                onChange={(e) => setPropertyCategory(e.target.value)}
              />
            </label>
            <label className='font-medium'>
              m2
              <input
                type='text'
                className='mt-2'
                onChange={(e) => setArea(e.target.value)}
              />
            </label>
            <label className='font-medium'>
              Afaire
              <input
                type='text'
                className='mt-2'
                onChange={(e) => setAdUrl(e.target.value)}
              />
            </label>
            <label className='font-medium'>
              Afaire
              <input
                type='text'
                className='mt-2'
                onChange={(e) => setComment(e.target.value)}
              />
            </label>
            <label className='font-medium'>
              Afaire
              <input
                type='text'
                className='mt-2'
                onChange={(e) => setOfferPrice(e.target.value)}
              />
            </label>
            <label className='font-medium'>
              Afaire
              <input
                type='text'
                className='mt-2'
                onChange={(e) => setRepairsPrice(e.target.value)}
              />
            </label>
            <label className='font-medium'>
              Afaire
              <input
                type='text'
                className='mt-2'
                onChange={(e) => setAnnualRent(e.target.value)}
              />
            </label>
            <label className='font-medium'>
              Afaire
              <input
                type='text'
                className='mt-2'
                onChange={(e) => setAgencyFees(e.target.value)}
              />
            </label>
            <label className='font-medium'>
              Afaire
              <input
                type='text'
                className='mt-2'
                onChange={(e) => setPnoInsurance(e.target.value)}
              />
            </label>
            <label className='font-medium'>
              Afaire
              <input
                type='text'
                className='mt-2'
                onChange={(e) => setPropertyTax(e.target.value)}
              />
            </label>
            <label className='font-medium'>
              Afaire
              <input
                type='text'
                className='mt-2'
                onChange={(e) => setRentalManagement(e.target.value)}
              />
            </label>
            <label className='font-medium'>
              Afaire
              <input
                type='text'
                className='mt-2'
                onChange={(e) => setRentalUnpaymentInsurance(e.target.value)}
              />
            </label>
            <label className='font-medium'>
              Taxe ??
              <input
                type='text'
                className='mt-2'
                onChange={(e) => setBuildingCoTax(e.target.value)}
              />
            </label>
            <label className='font-medium'>
              Afaire
              <input
                type='text'
                className='mt-2'
                onChange={(e) => setMaintenancePercentage(e.target.value)}
              />
            </label>
            <label className='font-medium'>
              Afaire
              <input
                type='text'
                className='mt-2'
                onChange={(e) => setAdProfitability(e.target.value)}
              />
            </label>
            <label className='font-medium'>
              Afaire
              <input
                type='text'
                className='mt-2'
                onChange={(e) => setOfferProfitability(e.target.value)}
              />
            </label>
            <label className='font-medium'>
              Afaire
              <input
                type='text'
                className='mt-2'
                onChange={(e) => setNewProperty(e.target.value)}
              />
            </label>
            <label className='font-medium'>
              Afaire
              <input
                type='text'
                className='mt-2'
                onChange={(e) => setRentalVacancy(e.target.value)}
              />
            </label>
            <button className='orange-button forms-buttons'>
              J'enregistre
            </button>
          </form>
        </FormsCard>
      </div>
    </div>
  );
}
