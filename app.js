require('dotenv').config();
require('express-async-errors');
const express = require('express');
const { sendEmail } = require('./controllers/email.controller');
const app = express();

const errorHandlerMiddleware = require('./middlewares/error-handler');
const notFoundMiddleware = require('./middlewares/not-found');

app.use(express.json());
app.get('/', (req, res) => {
    res.send('<h1>Send email</h1> <a href="/send">here</a>');
});
app.get('/send', sendEmail);
app.use(errorHandlerMiddleware);
app.use(notFoundMiddleware);

module.exports = app;