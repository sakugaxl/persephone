import React, { useState } from 'react';
import axios from 'axios';

const Login = () => {
  const [credentials, setCredentials] = useState({
    email: '',
    password: ''
  });

  const handleChange = (event) => {
    setCredentials({
      ...credentials,
      [event.target.name]: event.target.value
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    axios.post('http://localhost:5000/api/login', credentials)
      .then(res => {
        localStorage.setItem('token', res.data.token);
        window.location = '/';
      })
      .catch(err => console.error(err));
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="email" name="email" placeholder="Email" onChange={handleChange} value={credentials.email} required />
      <input type="password" name="password" placeholder="Password" onChange={handleChange} value={credentials.password} required />
      <button type="submit">Login</button>
    </form>
  );
};

export default Login;
