// src/components/Login.jsx
import React, { useState } from 'react';
import API from './api';
import { useNavigate } from 'react-router-dom';
import styles from './styles.module.css'; // Импортируем стили

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log({ email, password }); // Проверяем данные перед отправкой
    try {
      const response = await API.post('/login', { email, password });
      localStorage.setItem('token', response.data.token);
      alert('Успешный вход!');
      navigate('/');
      window.location.reload();
    } catch (err) {
      console.error(err); // Логируем ошибку для анализа
      setError('Неправильный email или пароль');
    }
  };

  return (
    <div className={styles.container}>
      <h1>Вход</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Пароль"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">Войти</button>
        {error && <p>{error}</p>}
      </form>
    </div>
  );
};

export default Login;
