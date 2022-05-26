require('dotenv').config();
const express = require('express');
const app = express();

const routes = require('./api/routes');

app.use(routes);
app.use(express.urlencoded({ extended: false }));

const port = process.env.PORT || 3000;

app.listen(port, () => console.log('Listening at port ', port));
