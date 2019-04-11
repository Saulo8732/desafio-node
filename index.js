import consign from 'consign';
import express from 'express';
import bodyParser from 'body-parser';
import config from './src/config/config';
import apiMessages from './src/helpers/apiMessages';
import mongoose from 'mongoose';
import cors from 'cors';
import expressValidator from 'express-validator';


require('babel-core/register');
require('babel-polyfill');


const app = express();
const mongo_uri = process.env.MONGODB_URI || config.mongodb.uri;
const port = process.env.PORT || config.server.port;

mongoose.connect(mongo_uri, config.mongodb);

app.use(expressValidator());
app.use(cors());
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
