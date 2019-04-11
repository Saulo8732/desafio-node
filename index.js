import consign from 'consign';
import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import expressValidator from 'express-validator';
import apiMessages from './src/helpers/apiMessages';
import config from './src/config/config';

// ----------------------------------------
// Babel 
// ----------------------------------------
require('babel-core/register');
require('babel-polyfill');

// ----------------------------------------
// App Variables
// ----------------------------------------
const app = express();
const mongo_uri = process.env.MONGODB_URI || config.mongodb.uri;
const port =process.env.PORT || process.argv[2] || config.server.port;

//-----------------------------------------
//Mongoose Settings
//-----------------------------------------
mongoose.connect(mongo_uri, config.mongodb);

/*
app.use((req, res, next) => {
  if (mongoose.connection.readyState) {
    next();
  } else {
    require("./mongo")().then(() => next());
  }
}); */

// ----------------------------------------
// Express Validator & Cors
// ----------------------------------------

app.use(expressValidator());
app.use(cors());

// ----------------------------------------
// Body Parser
// ----------------------------------------
app.use(bodyParser.urlencoded(config.bodyParser));
app.use(bodyParser.json());

// Importing the source codde
consign(config.consign)
  .include('models')
  .then('controllers')
  .then('helpers')
  .then('routes')
  .into(app);

app.listen(config.server.port, () => {
  console.log(apiMessages.general.apiStarted + port);
});

export default app;
