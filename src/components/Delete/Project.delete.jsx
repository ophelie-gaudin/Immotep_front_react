import React from 'react';
import Cookies from 'js-cookie';
import { useParams, useNavigate } from 'react-router-dom';
import Notifications from '../../components/Notifications/Notifications';
import './delete.css';

export default function ProjectDelete({ message, title }) {
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
    <div id='modal' className='dialog'>
      <div className='dialog-box'>
        <h3 className='dialog-box-title'>{title}</h3>
        <h3 className='dialog-box-message'>{message}</h3>
        <div className='dialog-buttons'>
          <button
            onClick={() => {
              navigate(`/dashboard`);
              deleteproject();
              Notifications.info(
                'Ce projet ainsi que les logements associés ont bien été supprimés...'
              );
            }}
            className='orange-button forms-buttons dialog-buttons'
          >
            Oui
          </button>
          <button
            className='orange-button forms-buttons dialog-buttons'
            onClick={(e) => {
              navigate(`/dashboard`);
              Notifications.info(
                'Très bien, nous conservons donc ce projet ! 😄'
              );
            }}
          >
            Non
          </button>
        </div>
      </div>
    </div>
  );
}
