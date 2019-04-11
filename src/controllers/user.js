import mongoose from 'mongoose';
import md5 from 'blueimp-md5';
module.exports  =(app) =>{
'use strict'

  async function create (req, res) {

    let user = req.body;
    let http = app.helpers.helper.http_status;
    let messages = app.helpers.apiMessages;
    let auth = app.controllers.auth;
    let UserModel =  app.models.user;
    
    req.checkBody("email", messages.users.invalidEmail).isEmail();
    req.checkBody("nome", messages.users.invalidEmail).notEmpty();
    req.checkBody("senha", messages.users.invalidEmail).notEmpty();
  
    let errors = req.validationErrors();
    if(errors){
      res.status(http.BAD_REQUEST);
      res.json({
        mensagem: messages.general.invalidRequiredFields
      });
        return 
    } 

    /**
      * verifica se o usuario existe
      * */

    let verifyUserExist = await this.findUser(user);


   console.log(verifyUserExist) 
    if(verifyUserExist){
      res.status(http.BAD_REQUEST);
      res.json({
        mensagem: messages.users.emailAlreadyExists
      });

      return 
    }
    

    /**
      * cadastra usuário
      * 
      * */
    user.id = app.helpers.helper.guid();
    user.senha = md5(user.senha);
    user.token = auth.createToken(user.id);

    let create = await this.save(user);
    let userCreated = 
      {
        id: create.id,
        data_criacao: create.data_criacao,
        data_atualizacao: create.data_atualizacao, 
        ultimo_login: create.ultimo_login,
        token: create.token 
      }
  
    res.status(http.CREATED);
    res.json(userCreated);

    return 
  }
  
  async function login (req,res) {
    let messages = app.helpers.apiMessages;
   let http = app.helpers.helper.http_status;
   let auth = app.controllers.auth;

    req.checkBody("email",messages.authetication.invalidCredentials).isEmail();
    req.checkBody("senha", messages.authetication.invalidCredentials).notEmpty();

    let errors = req.validationErrors();
    if(errors){
      res.status(http.UNAUTHORIZED);
      res.json({
        mensagem: messages.authetication.invalidCredentials
      });
        return 
    }
    

   let  user = await this.find(req.body.email,req.body.senha);
    if(user.length < 1 ){
       res.status(400);
       res.json({
        mensagem: messages.authetication.invalidCredentials
      });
        return 
    }

    user = user[0];
    
    let userToUpdate = {
      token: auth.createToken(user.id),
      ultimo_login: Date()
    }
    let userUpdate = await this.updateUserById(user._id,userToUpdate)

    let userUp = 
      {
        id: userUpdate.id,
        data_criacao: userUpdate.data_criacao,
        data_atualizacao: userUpdate.data_atualizacao, 
        ultimo_login: userUpdate.ultimo_login,
        token: userUpdate.token 
      }
    res.status(http.OK);
    res.json(userUp);


  }


  const find = (login,senha) =>{
  let UserModel =  app.models.user;
      return UserModel
          .find({
            'email':login,
            'senha':md5(senha)
          })
          .exec()
          .then((user)=>{
          let exist = false;
        
          //usuário existe?
          if(user && user.length > 0 ){
        
            exist = true;
      
          }
          return user;
    
    
     },(error)=>{
        console.log('Rolou um erro')
     });
  }

  
   
  async function search (req, res) {
    let messages = app.helpers.apiMessages;
    let http = app.helpers.helper.http_status;
   let auth = app.controllers.auth;
  let Helper = app.helpers.helper;
   let tk  =  Helper.getToken(req.headers['authorization'])
    
  let data = auth.verifyToken(tk);
    
    if(data === 'error1'){
    
      res.status(http.UNAUTHORIZED);
      res.json({mensagem:messages.authetication.invalidSession})
      
      return 
    }
    if(data === 'error2' ){
      res.status(http.UNAUTHORIZED);
      res.json({mensagem: messages.authetication.invalidSession})
     
   return 
    }
    let UserWantSearch = await searchUser(data);
    
    if(UserWantSearch && UserWantSearch[0].token !== tk ){
      res.status(http.ANAUTHORIZED);
      res.json({mensagem: messages.authetication.invalidSession})
      
      return 
    
    }


    let id = req.params.id;
   console.log(id) 
    let search = await searchUser(id)
    console.log(search)

     res.status(http.OK);

    if(search.length == 0){
      res.json({})
  
  }


    let user = search[0]
  
    res.json(user)

  
  }


 const searchUser = (id)=>{
  
  let UserModel =  app.models.user;
      return UserModel
        .find({id:id})
        .exec()
        .then((user)=> {
            
          return user;
        },(erro)=> {
        })

}
  
  const updateUserById = (id,user)=>{
  
  let UserModel =  app.models.user;
      return UserModel
        .findByIdAndUpdate(id,user)
        .exec()
        .then((user)=> {
            
          return user;
        },(erro)=> {
        })

}

  const findUser = (user)=>{
    let UserModel =  app.models.user;
    //console.log(UserModel);

      return UserModel
          .find({'email':user.email})
          .exec()
          .then((user)=>{
          let exist = false;

          //usuário existe?
          if(user && user.length > 0 ){
        
            exist = true;
      
          }
          return exist;
     }).catch((error) => {
      console.log('rolou um erro: ' + error);
      });
  }
  
  const save = (user) =>{
    let UserModel =  app.models.user;
      return   UserModel
        .create(user)
        .then((userSaved)=>{
          
          return userSaved;
        
      })
   }

  return {
    create,
    save,
    findUser,
    login,
    find,
    updateUserById,
    search,
    searchUser
  }
};