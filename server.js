const express = require('express');

const cors = require("cors");

const app = express();

app.use(
    cors({
        origin: "http://161.35.155.10:4567/check/email"
    })
);


// Обработка запросов
app.get('/', (req, res) => {
  // Ваш код обработки запроса
  res.send('Привет от сервера React!');
});

// Запуск сервера
app.listen(4567, () => {
  console.log('Сервер запущен на порту 4567');
});