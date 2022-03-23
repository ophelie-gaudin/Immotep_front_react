import React, { useState, useEffect } from 'react';
import { FaArrowLeft, FaMapPin } from 'react-icons/fa';
import WarningArea from '../../components/Main/WarningArea';
import OrangeButton from '../../components/Main/OrangeButton';
import { FiArrowDownRight } from 'react-icons/fi';
import { Link } from 'react-router-dom';

import Cookies from 'js-cookie';

export default function Dashboard() {
  const [myProjects, setMyProjects] = useState([]);
  const projectArgument = 'projects';

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
          setMyProjects(response);
        })
        .catch((err) => console.error(err));
    };
    fetchList(`https://immotep-api.herokuapp.com/`, projectArgument);
  }, []);

  return (
    <div className='mt-12 mb-8'>
      <div className='flex flex-col  rounded-[0.25rem] mx-auto w-[90vw] border-2 border-primary text-whiite '>
        <div className='px-8 py-8 bg-primary'>
          <a className='flex !text-md items-center' href='/'>
            <FaArrowLeft className='dashboard-arrow-icon' /> Accueil
          </a>
          <h2 className='text-3xl font-pacifico text-center mt-8'>
            Bienvenue sur <span>vos projets</span>{' '}
          </h2>
          <WarningArea>
            Ici, vous pouvez retrouver tous vos projets locatifs en cours, en
            créer de nouveaux et accéder au comparateur de logements.{' '}
          </WarningArea>
        </div>
        <div className=''>
          <div className='flex flex-wrap mb-12 justify-center'>
            {myProjects.map((data) => {
              return (
                <Link
                  to={`/dashboard/${data.id}`}
                  className='project-card group'
                >
                  <div className='project-card-text-scale'>
                    <div className='hover:underline hover:underline-offset-4'>
                      {data.title}
                    </div>
                    <div className='project-card-localization flex items-center'>
                      {' '}
                      <span className='mr-4'>
                        <FaMapPin className='text-lg' />
                      </span>
                      {data.localization}
                    </div>
                    <div className='project-card-comment italic'>
                      {data.comment}
                    </div>
                    <div className='project-card-comment flex items-between w-full justify-end'>
                      <span>
                        <FiArrowDownRight className='project-card-icon text-3xl font-bold group-hover:animate-bounce' />
                      </span>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
          <div className='mb-10 mr-8 flex justify-end'>
            <OrangeButton url='/dashboard/new'>
              J'ai un nouveau projet !
            </OrangeButton>
          </div>
        </div>
      </div>
    </div>
  );
}
