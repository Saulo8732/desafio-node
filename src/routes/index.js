module.exports = (app) => {
  
  app.get('/', (req, res) => {
    res.json({ mensagem: app.helpers.apiMessages.general.apiIndex });
  });

};
