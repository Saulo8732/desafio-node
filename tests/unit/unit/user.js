
const Helper  = app.helpers.helper;

describe('Validando Funções do Helpers: Helpers',()=>{


  it('GetToken: Deverer Pegar o token ', ()=> {
    let token = 'Bearer token';    
    let tokenResult = 'token';
    let auth = Helper.getToken(token);

    expect(auth).not.be.undefined;
    expect(auth).to.be.equal(tokenResult);
  })


  it('GetToken: Deverer Pegar o token inválido sem Bearer', ()=> {
    let token = 'token invalido';    
    let tokenResult = '';
    let auth = Helper.getToken(token);

    expect(auth).not.be.undefined;
    expect(auth).to.be.equal(tokenResult);
    
  
  })

it('GetToken: Deverer Pegar o token inválido nulo', ()=> {
    let token = null;    
    let tokenResult = '';
    let auth = Helper.getToken(token);

    expect(auth).not.be.undefined;
    expect(auth).to.be.equal(tokenResult);
    
  
  })

it('GUID: Deverar retornar o GUID',()=>{


  let guid = Helper.guid();
  expect(guid).not.be.undefined;
  expect(guid).to.be.a('string');

})


})