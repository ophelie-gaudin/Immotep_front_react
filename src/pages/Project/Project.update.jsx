import React, { useState, useEffect } from 'react';

import FormsCard from '../../components/FormsCard';
import Cookies from 'js-cookie';
import { useParams, useNavigate } from 'react-router-dom';
import { useNotifications } from '@mantine/notifications';

export default function ProjectUpdate() {
  const [myProject, setMyProject] = useState([]);

  const navigate = useNavigate();
  const { project_id } = useParams();
  console.log(useParams());
  const [title, setTitle] = useState();
  const [localization, setLocalization] = useState();
  const [comment, setComment] = useState();

  const data = {
    title,
    localization,
    comment,
  };

  const notifications = useNotifications();

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch(`https://immotep-api.herokuapp.com/projects/${project_id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        Authorization: Cookies.get('token'),
      },
      body: JSON.stringify(data),
    })
      .then((res) => {
        if (res.ok) {
          navigate(`/dashboard/${project_id}/`);
          notifications.showNotification({
            radius: 'teal',
            title: 'Parfait !',
            message: 'Les informations ont bien étés mises à jour ! 😃 ',
          });
        } else {
          throw new Error(res);
        }
      })
      .catch((err) => console.error(err));
  };

  // Get project
  const projectArgument = `projects/${project_id}`;

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
          setMyProject(response);
        })
        .catch((err) => console.error(err));
    };
    fetchList(`https://immotep-api.herokuapp.com/`, projectArgument);
  }, [projectArgument]);

  return (
    <div className='mt-12 mb-8'>
      <div>
        <FormsCard
          title='Modifier mon logement'
          returnText='Mon projet'
          returnUrl={`/dashboard/${project_id}/`}
        >
          <form onSubmit={handleSubmit}>
            <label>
              Titre du projet
              <input
                type='text'
                name='title'
                onChange={(e) => setTitle(e.target.value)}
                placeholder={myProject.title}
              />
            </label>
            <label>
              Localisation souhaitée du bien
              <input
                type='text'
                name='localization'
                onChange={(e) => setLocalization(e.target.value)}
                placeholder={myProject.localization}
              />
            </label>
            <label>
              Vos notes
              <input
                type='text'
                name='comment'
                onChange={(e) => setComment(e.target.value)}
                placeholder={myProject.comment}
              />
            </label>
            <div className='flex justify-end mb-8 mt-8 mr-6'>
              <button className='orange-button forms-buttons' type='submit'>
                Je modifie mon projet
              </button>
            </div>
          </form>
        </FormsCard>
      </div>
    </div>
  );
}
