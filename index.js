import consign from 'consign';
import express from 'express';
import bodyParser from 'body-parser';
import config from './src/config/config.js';
import apiMessages from './src/helpers/apiMessages.js';

const app = express();

app.use(bodyParser.urlencoded(config.bodyParser));
app.use(bodyParser.json());


consign(config.consign)
  .include('models')
  .then('routes')
  .then('controllers')
  .then('helpers')
  .into(app);

app.listen(config.server.port, () => {
  console.log(apiMessages.general.apiStarted + config.server.port);
});

export default app;