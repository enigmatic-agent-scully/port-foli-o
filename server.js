require('dotenv').config;
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const app = express();
const routes = require('./routes');
const PORT = process.env.PORT || 3001;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(routes);

const MONGODB_URI =
  process.env.MONGODB_URI || 'mongodb://localhost/portfoliodb';

mongoose.connect(MONGODB_URI, { useNewUrlParser: true });

app.listen(PORT, () =>
  console.log(`API server now listening on http://localhost:${PORT}`)
);
