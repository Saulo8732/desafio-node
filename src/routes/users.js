import expressJoi from 'express-joi';

const Joi = expressJoi.Joi;

module.exports = (app) => {
  const UserController = app.controllers.user;
  const Helpers = app.helpers.helper;

  app.post('/signin/', (req, res) => {
    UserController.login(req, res);
  });

  app.post('/signup/', (req, res) => {
    UserController.create(req, res);
  });

  app.get('/user/:id', (req, res) => {
    UserController.search(req, res);
  });
};
