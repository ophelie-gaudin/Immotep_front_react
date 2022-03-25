import React, { useState } from 'react';
import Cookies from 'js-cookie';
import { Link, useNavigate } from 'react-router-dom';
import { userLogin } from '../reduxFolder/stateUser/userAction';
import { useDispatch } from 'react-redux';
import FormsCard from '../components/FormsCard';
import { useNotifications } from '@mantine/notifications';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const changeConnectedStatus = useDispatch();

  const navigate = useNavigate();
  const notifications = useNotifications();

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch(`https://immotep-api.herokuapp.com/users/sign_in`, {
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
        if (res.headers.get('Authorization')) {
          Cookies.set('token', res.headers.get('Authorization'));
          changeConnectedStatus(userLogin());
          navigate('/dashboard');
          notifications.showNotification({
            radius: 'md',
            title: 'Yes !',
            message: 'Ravi de vous revoir parmi nous ! 😃 ',
          });
          return res.json();
        } else {
          throw new Error('Non enregistré'); // TODO refaire l'erreur
        }
      })
      .then((json) => console.log(json.user))
      .catch((err) => console.error(err));
  };

  return (
    <div>
      {' '}
      <FormsCard title='Connexion' returnText='Accueil'>
        <>
          {' '}
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
              Mot de passe
              <input
                type={showPassword ? 'text' : 'password'}
                name='password'
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </label>

            <label className='text-[12px] font-medium block w-full'>
              <p className='w-fit'>
                <input
                  type='checkbox'
                  className='ml-4 mr-4'
                  onClick={() => setShowPassword(!showPassword)}
                />{' '}
                Voir le mot de passe
              </p>
            </label>

            <button className='orange-button forms-buttons' type='submit'>
              Je me connecte
            </button>
            <div className='w-full flex justify-center text-primary mb-8'>
              {' '}
              <Link
                to='/forgotpassword'
                className='hover:underline underline-offset-2'
              >
                J'ai oublié mon mot de passe
              </Link>
            </div>
          </form>
        </>
      </FormsCard>
    </div>
  );
};

export default Login;
