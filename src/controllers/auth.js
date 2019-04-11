import jwt  from 'jsonwebtoken';
import config from  '../config/config.development';
module.exports  =(app) =>{

  const createToken = (user_id) =>{
    let token = false;

    if(typeof user_id !== 'undefined' && typeof user_id === 'string' ){

      token = jwt.sign({
          data: user_id
      }, config.jwt.secret, config.jwt.config  );
    }
    
    return token;
  }
  
  const verifyToken = (token)=>{
    let result = '';  
  try{
   let verify =  jwt.verify(token, config.jwt.secret)
  result = verify.data; 
  }catch(error){
    result = (error.name !==  'JsonWebTokenError')? 'error1' : 'error2'; 
    }
    
   return result;    
  }

  return {
    createToken,
    verifyToken
  }
};