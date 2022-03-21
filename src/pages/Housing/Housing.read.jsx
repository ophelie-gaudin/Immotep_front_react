import React, { useState, useEffect } from 'react';
import Cookies from 'js-cookie';
import HousingCardInfo from '../../components/Main/HousingCardInfo';
import { useParams } from 'react-router-dom';
import FormsCard from '../../components/FormsCard';

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
        returnUrl={`dashboard/${project_id}/housing/${housing_id}`}
      >
        <div className='mt-12 mb-8'>
          <div>
            <div>
              <HousingCardInfo data={myHousingsInfo} />
            </div>
          </div>
        </div>
      </FormsCard>
    </>
  );
}
