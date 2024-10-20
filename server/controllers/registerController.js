const User = require('../models/User');

const register = async (req, res) => {
  const { name, email, password, age } = req.body;
  try {
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: 'Email уже зарегистрирован' });
    }

    const user = new User({ name, email, password, age });
    await user.save();
    console.log('Пользователь успешно зарегистрирован:', user);
    res.status(201).json({ message: 'Пользователь успешно зарегистрирован' });
  } catch (err) {
    console.error('Ошибка сервера:', err);
    res.status(500).json({ message: 'Ошибка сервера' });
  }
};

module.exports = register;
