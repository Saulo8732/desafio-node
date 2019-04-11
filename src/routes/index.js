module.exports = (app) => {
  
  /**
  @api {get} / Verificar status da API 
  @apiVersion 1.0.0
  @apiDescription Acesso inicial para verificar o funcionamento da API
  @apiPermission none
  @apiGroup index 
  @apiSuccess {String} app Informações do API
  @apiSuccessExample {json} Success-Response:
      HTTP/1.1 200 OK
        {
          mensagem:"API desenvolvida para teste da vaga de node na Concrete! :D"
        }
  
  @apiSampleRequest https://desafio-saulo.herokuapp.com/
 
    
    
*/
  app.get('/', (req, res) => {
    res.json({ mensagem: app.helpers.apiMessages.general.apiIndex });
  });
};
