import React, { useState } from 'react';
import './Modal.css';
import Cookies from 'js-cookie';
import { useParams, useNavigate } from 'react-router-dom';

// function closeModal() {
//   document.getElementById('modal').style.display = 'none';
// }

const Modal = ({ message }) => {
  const [dialog, setDialog] = useState({
    message: '',
    isLoading: false,
  });

  const { housing_id, project_id } = useParams();

  const navigate = useNavigate();

  function closeModal() {
    setDialog({
      message: '',
      isLoading: false,
    });
  }

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
    <div id='modal' className='dialog'>
      <div className='dialog-box'>
        <h3 className='dialog-box-title'>{message}</h3>
        <div className='dialog-buttons'>
          <button
            onClick={() => {
              navigate(`/dashboard/${project_id}`);
              deletehousing();
            }}
            className='orange-button forms-buttons dialog-buttons'
          >
            Oui
          </button>
          <button
            className='orange-button forms-buttons dialog-buttons'
            onClick={(e) => navigate(`/dashboard/${project_id}`)}
          >
            Non
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
