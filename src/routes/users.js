import expressJoi from 'express-joi';

const Joi = expressJoi.Joi;

module.exports = (app) => {
  const UserController = app.controllers.user;
  const Helpers = app.helpers.helper;


  /**
    * @api {post} /signin/  Endpoint para o usuário se logar
    *
    * @apiGroup user
    * @apiParam {String} Email Email do usuário
    * @apiParam {String} senha senha do usuário
    * @apiVersion 1.0.0
    * @apiSuccess (Login realizado com sucesso - 200) {String} id id do usuario
    * @apiSuccess (Login realizado com sucesso - 200) {String} data_criacao data de criacao do usuário
    * @apiSuccess (Login realizado com sucesso - 200) {String} data_atualizacao data da última atualização do usuário
    * @apiSuccess (Login realizado com sucesso - 200) {String} ultimo_login data do ultimo login do usuário
    * @apiSuccess (Login realizado com sucesso - 200) {String} token token de acesso da API
    * 
    * @apiSuccessExample {json} Success-Response:
    *       HTTP/1.1 200 ok
    *        {
    *           "id": "21321345",
    *           "data_criacao": "2019-04-11T16:06:06:3000Z",
    *           "data_atualizacao": "2019-04-11T16:06:06:3000Z",
    *           "ultimo_login": "2019-04-11T16:06:06:3000Z",
    *           "token":"123456"
    *
    *         }
    *
    * @apiError (4xx) camposInvalidos Usuário e/ou senha inválidos
    *
    * @apiErrorExample {json} Erros-response
    *
    *         HTTP/1.1 401
    *           {
    *             "mensagem":'Usuário e/ou senha inválidos',
    *           }
    *
    *
    * */
  app.post('/signin/', (req, res) => {
    UserController.login(req, res);
  });

   /**
    * @api {post} /signup/ Endpoint para o usuário se cadastrar 
    *
    * @apiGroup user    
    * @apiVersion 1.0.0
    * @apiParam {String} Nome Nome do usuário
    * @apiParam {String} Email Email do usuário
    * @apiParam {String} senha senha do usuário
    * @apiParam {Array} telefones 
    * @apiParam {String} telefones.ddd DDD da cidade do numero de telefone
    * @apiParam {String} telefones.numero  numero de telefone do usuário
    * 
    *
    * @apiSuccess (Cadastro realizado com sucesso - 201) {String} id id do usuario
    * @apiSuccess (Cadastro realizado com sucesso - 201) {String} data_criacao data de criacao do usuário
    * @apiSuccess (Cadastro realizado com sucesso - 201)  {String} data_atualizacao data da última atualização do usuário
    * @apiSuccess (Cadastro realizado com sucesso - 201)  {String} ultimo_login data do ultimo login do usuário
    * @apiSuccess (Cadastro realizado com sucesso - 201)  {String} token token de acesso da API
    * 
    * @apiSuccessExample {json} Success-Response:
    *       HTTP/1.1 201 saved
    *        {
    *           "id": "213123123",
    *           "data_criacao": "2019-04-11T16:06:06:3000Z",
    *           "data_atualizacao": "2019-04-11T16:06:06:3000Z",
    *           "ultimo_login": "2019-04-11T16:06:06:3000Z",
    *           "token":"123456"
    *
    *         }
    *
    * @apiError (400) camposInvalidos Por favor preencha os campos obrigatórios corretamente
    * @apiError (400) usuarioCadastro E-mail já existente
    *
    * @apiErrorExample {json} Erros-response
    *
    *         HTTP/1.1 400 Bad Request
    *           {
    *               mensagem:"Por favor preencha os campos obrigatórios corretamente"
    *           }
    *
    *         HTTP/1.1 400 Forbidden
    *           {
    *               mensagem:'E-mail já existente',
    *           }
    *
    *
    * */
  app.post('/signup/', (req, res) => {
    UserController.create(req, res);
  });


  /**
    * @api {get} /user/ Endpoint para Busca de usuário na API (Autenticação necessária)
    *
    * @apiGroup user
    * @apiVersion 1.0.0
    * @apiHeader {String} Bearer{token} Token de autorização de acesso
    *
    *
    * @apiSuccess (User - 200) {String} id id do usuario
    * @apiSuccess (User - 200) {String} nome Nome do usuario
    * @apiSuccess (User - 200) {String} email Email do usuario
      
    * @apiSuccess (User - 200) {Array} telefones Lista de Telefone
    * @apiSuccess  (User - 200) {String} telefones.ddd DDD do telefone
    * @apiSuccess (User - 200) {String} telefones.numero Numero Numero de telefone do usuário
    * @apiSuccess (User - 200) {String} data_criacao data de criacao do usuário
    * @apiSuccess (User - 200) {String} data_atualizacao data da última atualização do usuário
    * @apiSuccess (User - 200) {String} ultimo_login data do ultimo login do usuário
    * 
    * @apiSuccessExample {json} Success-Response:
    *       HTTP/1.1 200 ok
    *        {
    *           "id": "213123123",
    *           "nome": "Saulo",
    *           "email": "saulo8732n@gmail.com",
    *           "telefones":[
    *             {
    *               "ddd": "81",
    *               "numero": "985556938"
    *             }
    *           ]
    *           "data_criacao": "2019-04-11T16:06:06:3000Z",
    *           "data_atualizacao": "2019-04-11T16:06:06:3000Z",
    *           "ultimo_login": "2019-04-11T16:06:06:3000Z",
    *           "token": "123456"
    *
    *         }
    *
    * @apiError (400) InvalidToken Por favor preencha os campos obrigatórios corretamente
    * @apiError (400) SessionExpired E-mail já existente
    *
    * @apiErrorExample {json} Erros-response
    *
    *         HTTP/1.1 401 Authorization Required
    *           {
    *               mensagem:"Não autorizado"
    *           }
    *
    *         HTTP/1.1 400 Authorization Required
    *           {
    *               mensagem:'Sessão inválida'
    *           }
    *
    *
    * */
  app.get('/user/:id', (req, res) => {
    UserController.search(req, res);
  });
};
