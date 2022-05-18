const express = require('express');
const routes = require('../src/routes/index')

const app = express();

// Config Express
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api', routes());

module.exports = app;