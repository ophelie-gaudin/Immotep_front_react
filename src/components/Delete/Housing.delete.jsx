import React from 'react';
import Cookies from 'js-cookie';
import { useParams, useNavigate } from 'react-router-dom';

export default function HousingDelete() {
  // const { data } = props;

  const { housing_id, project_id } = useParams();

  const navigate = useNavigate();

  const deletehousing = () => {
    fetch(
      `https://immotep-api.herokuapp.com/projects/${project_id}/housings/${housing_id}`,
      {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
          Authorization: Cookies.get('token'),
        },
      }
    )
      .then((response) => response.json())
      .catch((err) => console.error(err));
  };

  return (
    <div>
      <button
        className='block py-2 pr-4 pl-3 text-white rounded border-b border-light md:p-0 dark:text-white bg-primary  hover:border hover:border-primary hover:bg-white hover:text-bold hover:text-[#E24E58] md:px-2 md:py:1  hover:font-bold'
        onClick={() => {
          navigate(`/dashboard/${project_id}`);
          deletehousing();
        }}
      >
        Supprimer le logement
      </button>
    </div>
  );
}
