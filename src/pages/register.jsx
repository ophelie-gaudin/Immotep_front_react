import React, { useState } from 'react';
import Cookies from 'js-cookie';
import { userLogin } from '../reduxFolder/stateUser/userAction';
import { useDispatch } from 'react-redux';
//import Input from "../../Components/Main/Input";
import FormsCard from '../components/FormsCard';
import { useNavigate } from 'react-router-dom';
import Notifications from '../components/Notifications/Notifications';

const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const changeConnectedStatus = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch(`https://immotep-api.herokuapp.com/users`, {
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        user: {
          email: email,
          password: password,
        },
      }),
    })
      .then((res) => {
        if (res.ok) {
          Cookies.set('token', res.headers.get('Authorization'));
          changeConnectedStatus(userLogin());
          navigate('/dashboard');
          Notifications.info('Bienvenue parmi nous ! 😃');
          return res.json();
        } else {
          Notifications.error('Oups, veuillez réessayez svp... 😕');
          throw new Error(res);
        }
      })
      .then((json) => console.log(json.user.id))
      .catch((err) => console.error(err));
  };

  return (
    <div>
      <FormsCard title='Inscription' returnText='Accueil'>
        <form onSubmit={handleSubmit}>
          <label>
            Email
            <input
              type='email'
              name='email'
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </label>
          <label>
            Password
            <input
              type='password'
              name='password'
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </label>
          <button className='orange-button forms-buttons' type='submit'>
            Je m'enregistre
          </button>
        </form>
      </FormsCard>
    </div>
  );
};

export default Register;
