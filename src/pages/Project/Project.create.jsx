import React, { useState } from 'react';
import FormsCard from '../../components/FormsCard';
//import Input from "../../Components/Main/Input";
import Cookies from 'js-cookie';
import { useNavigate } from 'react-router-dom';
import Notifications from '../../components/Notifications/Notifications';

const ProjectCreate = () => {
  const [title, setTitle] = useState('');
  const [localization, setLocalization] = useState('');
  const [comment, setComment] = useState('');

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch(`https://immotep-api.herokuapp.com/projects`, {
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `${Cookies.get('token')}`,
      },
      body: JSON.stringify({
        project: {
          title,
          localization,
          comment,
        },
      }),
    })
      .then((res) => {
        if (res.ok) {
          navigate('/dashboard');
          Notifications.success('Le projet à bien été crée ! 😀');
          return res.json();
        } else {
          Notifications.error(
            'Il y a eu un problème, veuillez réessayer... 🙄'
          );
          throw new Error(res);
        }
      })
      .catch((err) => console.error(err));
  };

  return (
    <div>
      <FormsCard
        title='Créer un nouveau projet '
        returnText='Mes projets'
        returnUrl='/dashboard'
      >
        <>
          <form onSubmit={handleSubmit}>
            <label>
              Titre du projet
              <input
                type='text'
                name='title'
                onChange={(e) => setTitle(e.target.value)}
                required
              />
            </label>
            <label>
              Localisation souhaitée du bien
              <input
                type='text'
                name='localization'
                onChange={(e) => setLocalization(e.target.value)}
              />
            </label>
            <label>
              Vos notes
              <input
                type='text'
                name='comment'
                onChange={(e) => setComment(e.target.value)}
              />
            </label>
            <div className='flex justify-end mb-8 mt-8 mr-6'>
              <button className='orange-button forms-buttons' type='submit'>
                Je crée un nouveau projet
              </button>
            </div>
          </form>
        </>
      </FormsCard>
    </div>
  );
};

export default ProjectCreate;
