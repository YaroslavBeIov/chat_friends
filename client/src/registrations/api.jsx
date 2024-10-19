import axios from 'axios';

// Создаём базовый экземпляр axios
const API = axios.create({ baseURL: 'http://localhost:5000/api/auth' });

// Функция для регистрации пользователя
export const registerUser = (userData) => API.post('/register', userData);
