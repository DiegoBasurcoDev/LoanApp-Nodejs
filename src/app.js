const express = require('express');
const bodyParser = require('body-parser');
const routes = require('./routes/index');
const projectDependencies = require('./config/projectDependencies');
const cors = require('cors');
const dotenv = require('dotenv');

dotenv.config();
const app = express();
const port = process.env.PORT || 3000;

projectDependencies.MongoDBDatabaseService.getConnection().then(() =>{
    app.use(bodyParser.urlencoded({ extended: true }));
    app.use(bodyParser.json());

    app.use('/api', routes(projectDependencies));

    app.listen(port, () => console.log('http://localhost:' + port));
}, (err) => {
    console.log('Db is not ready, err' + err);
});