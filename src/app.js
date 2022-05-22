const express = require('express');
const bodyParser = require('body-parser');
const routes = require('./frameworks/routes/index');
const projectDependencies = require('./config/projectDependencies');
const cors = require('cors');
const dotenv = require('dotenv');
const ErrorHandler = require('./frameworks/common/ErrorHandler');

dotenv.config();
const app = express();
const port = process.env.PORT || 3000;

projectDependencies.DatabaseService.initDatabase().then(() =>{
    app.use(cors());
    app.use(bodyParser.urlencoded({ extended: true }));
    app.use(bodyParser.json());

    app.use('/api', routes(projectDependencies));

    app.use(ErrorHandler);

    app.listen(port, () => console.log('http://localhost:' + port));
}, (err) => {
    console.log('Db is not ready, err' + err);
});