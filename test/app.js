const express = require('express');
const routes = require('../src/frameworks/routes/index')
const projectDependencies = require('../src/config/projectDependencies');
const dotenv = require('dotenv');

dotenv.config();
const app = express();

// Config Express
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api', routes(projectDependencies));

module.exports = app;