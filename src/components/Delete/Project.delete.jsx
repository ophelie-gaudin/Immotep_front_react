import React from 'react';
import Cookies from 'js-cookie';
import { useParams, useNavigate } from 'react-router-dom';

export default function ProjectDelete(props) {
  const { project_id } = useParams();
  const navigate = useNavigate();

  const deleteproject = () => {
    fetch(`https://immotep-api.herokuapp.com/projects/${project_id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        Authorization: Cookies.get('token'),
      },
    })
      .then((response) => response.json())
      .catch((err) => console.error(err));
  };

  return (
    <div>
      <button
        className='text-reed text-sm border border-primary p-2 mr-4 rounded-[0.25rem] font-bold hover:border-primary;'
        onClick={() => {
          navigate(`/dashboard`);
          deleteproject();
        }}
      >
        Supprimer ce projet
      </button>
    </div>
  );
}
