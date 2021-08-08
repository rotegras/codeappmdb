import React, { useState } from 'react';
import axios from 'axios';
import * as G from '../../../Theme/Grid';
import { useHistory } from 'react-router-dom';


export default function Login(props) {
  let history = useHistory();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    name === 'email' && setEmail(value);
    name === 'password' && setPassword(value);
    name === 'username' && setUsername(value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    axios(
      {
        url: '/authentication/login',
        method: 'POST',
        responseType: 'json',
        data: {
          email,
          password,
          username,
        }
      }
    )
      .then((response) => {
        localStorage.setItem('isAuthenticated', true);
        history.push('/search/_');
        console.log('Data: ', response)
      }).catch((error) => {
        setErrorMessage(error);
        console.log('Error', error);
    })
  }

  if (errorMessage.length > 0) return (
    <G.Content>
      <G.Container>
        <G.Row>
          <G.Col>
            {errorMessage}
          </G.Col>
        </G.Row>
      </G.Container>
    </G.Content>
  );

  return (
    <G.Content>
      <G.Container>
        <G.Row>
          <G.Col cols={12}>
            <h2>Login</h2>
            <form onSubmit={handleSubmit} style={{display: 'flex', flexDirection: 'column'}}>
              <input type="text" placeholder="username" name="username" onChange={handleChange}></input>
              <input type="text" placeholder="email" name="email" onChange={handleChange}></input>
              <input type="password" placeholder="password" name="password" onChange={handleChange}></input>
              <button>Login</button>
            </form>
          </G.Col>
        </G.Row>
      </G.Container>
    </G.Content>
  );
}

