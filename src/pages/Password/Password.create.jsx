import React, { useState } from 'react';
import FormsCard from '../../components/FormsCard';
import { useNavigate } from 'react-router-dom';

export default function PasswordCreate() {
  const [email, setEmail] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch(`https://immotep-api.herokuapp.com/users/password`, {
      method: 'post',
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
          navigate('/login');
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
        title='Oubli de mot de passe'
        returnText='Me connecter'
        returnUrl='/login'
      >
        <form onSubmit={handleSubmit}>
          <label>
            Email
            <input
              type='Email'
              onChange={(e) => setEmail(e.target.value)}
            ></input>
          </label>
          <button className='orange-button forms-buttons'>
            Je récupère mon mot de passe
          </button>
        </form>
      </FormsCard>
    </div>
  );
}
