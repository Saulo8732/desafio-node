
const UserController = app.controllers.user;

describe('Validando Controller: User',()=>{


  before(async () => {
    
      let UserModel = app.models.user;

      let remover = await UserModel.deleteMany({})


  });
  it('Verificando se cadastro function', async ()=> {

    let cadastroUser = {
      nome:'Saulo',
      email:'saulo8732n@gmail.com',
      senha:'123456',
      id:'123456',
      telefone:[
        {
          ddd:'81',
          numero:'985556938'
        },
        {
          ddd:'01',
          numero:'999999999'
        
        }
      ]
  
    }
    

    let salvo = await  UserController.save(cadastroUser);

    expect(salvo).not.be.undefined;
    expect(salvo).to.be.an('object');
    
    expect(salvo.nome).to.be.equal('Saulo')
    expect(salvo.email).to.be.equal('saulo8732n@gmail.com')
    expect(salvo.id).to.be.equal('123456')
    expect(salvo.senha).to.be.equal('123456')
     
  
  })

  it('Usuário existe',async ()=>{
    let user = {
      email: "saulo8732n@gmail.com" 
    }
    let resultado = await UserController.findUser(user);
  
    expect(resultado).to.be.true;
  })
  
  it('Usuário não existe',async ()=>{
    let user = {
      email: "usuarioNovo@gmail.com" 
    }
    let resultado = await UserController.findUser(user);
  
    expect(resultado).to.be.false;
  })

})