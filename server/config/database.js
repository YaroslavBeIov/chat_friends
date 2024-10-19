const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    await mongoose.connect('mongodb://127.0.0.1:27017/trener_chat');
    console.log('MongoDB подключен');
  } catch (err) {
    console.error('Ошибка подключения к MongoDB:', err.message);
    process.exit(1);
  }
};

module.exports = connectDB;
