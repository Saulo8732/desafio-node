import consign from 'consign';
import express from 'express';
import bodyParser from 'body-parser';
import config from './src/config/config';
import apiMessages from './src/helpers/apiMessages';

const app = express();

app.use(bodyParser.urlencoded(config.bodyParser));
app.use(bodyParser.json());

// Importing the source codde
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
