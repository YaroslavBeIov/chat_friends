import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { registerUser } from './api';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import styles from './styles.module.css';

function Register() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    age: '',
  });
  
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await registerUser(formData);
      switch (response.status) {
        case 201:
          toast.success(response.data.message || 'Вы успешно зарегистрированы!', {
          });

          setFormData({ name: '', email: '', password: '', age: '' });
          setTimeout(() => navigate('/main'), 3000);
          break;
        case 400:
          toast.error(response.data.message || 'Ошибка при регистрации');
          break;
        default:
          toast.error('Произошла непредвиденная ошибка. Попробуйте позже.');
          break;
      }
    } catch (error) {
      console.error('Ошибка регистрации:', error.response?.data || error);
      if (toast) {
        toast.error(error.response?.data?.message || 'Ошибка при регистрации');
      } else {
        console.error('Toast не инициализирован');
      }
    }
  };

  return (
    <div className={styles.container}>
      <h1>Регистрация</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Имя"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Пароль"
          value={formData.password}
          onChange={handleChange}
          required
        />
        <input
          type="number"
          name="age"
          placeholder="Возраст"
          value={formData.age}
          onChange={handleChange}
          required
        />
        <button type="submit">Зарегистрироваться</button>
      </form>
      <ToastContainer />
    </div>
  );
}

export default Register;
