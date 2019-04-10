module.exports = (app) => {
  app.post('/signin/', (req, res) => {
    res.setHeader('Content-Type', 'application/json');
    res.json(
      {
        response: 'signin',
      }
    );
  });
  app.post('/signup/', (req, res) => {
    res.setHeader('Content-Type', 'application/json');
    res.json(
      {
        response: 'signup',
      },
    );
  });
  app.get('/user/:id', (req, res) => {
    res.setHeader('Content-Type', 'application/json');
    res.json({
      response: `The user with the ${req.params.id } ID will be displayed here.`,
    });
  });
};
