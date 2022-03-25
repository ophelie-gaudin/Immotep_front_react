import React, { useState, useEffect } from 'react';
import FormsCard from '../../components/FormsCard';
import { useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';

export default function ProfileUpdate() {
  const [email, setEmail] = useState();

  const navigate = useNavigate();

  const [myProfile, setMyProfile] = useState('');

  const myProfileArgument = `member-data`;

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
          setMyProfile(response.user);
        })
        .catch((err) => console.error(err));
    };
    fetchList(`https://immotep-api.herokuapp.com/`, myProfileArgument);
  }, [myProfileArgument]);

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch(`https://immotep-api.herokuapp.com/users/password`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        user: {
          email: email,
        },
      }),
    })
      .then((res) => {
        if (res.ok) {
          navigate('/profile');
          return res.json();
        } else {
          throw new Error(res);
        }
      })
      .catch((err) => console.error(err));
  };

  return (
    <div>
      <FormsCard
        title='Modifier mes informations personnelles'
        returnText='Mon profil'
        returnUrl='/profile'
      >
        <form onSubmit={handleSubmit}>
          <label className='font-medium'>
            Ma nouvelle adresse email
            <input
              type='email'
              className='mt-2'
              onChange={(e) => setEmail(e.target.value)}
              placeholder={myProfile.email}
            ></input>
          </label>
          <button className='orange-button forms-buttons'>J'enregistre</button>
        </form>
      </FormsCard>
    </div>
  );
}
