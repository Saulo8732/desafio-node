import supertest from 'supertest';

describe('GET /', () => {
  before(async ()=>{
    let UserModel = app.models.user;
    await UserModel.deleteMany({});
  })

  it('should be a status api online', (done) => {

    request
      .get('/')
        .expect('Content-Type', /json/)
        .expect(200) // THis is HTTP response
        .end((err, res) => {
          if (err) {
            throw err;
          }
          expect(res.body.mensagem).to.be.equal("API desenvolvida para teste da vaga de node na Concrete! :D");
          done();        
      });
})

  it('Deverá se cadastrar com sucesso ', (done) => {
    
    let userRegister = {
      
      nome: 'usuario',
      email: 'usuario@gmail.com',
      senha: '123456',
      telefones: [{
        ddd:'92',
        numero: '992472199'
      }]
    }
    
    request
      .post('/signup/')
      .send(userRegister)
      .expect('Content-Type', /json/)
      .expect(201) // THis is HTTP response
      .end((err, res) => {
          if (err) throw err;
          
          expect(res.body.id).to.be.a('string');
          expect(res.body.data_criacao).to.be.a('string');
          expect(res.body.data_atualizacao).to.be.a('string');
          expect(res.body.ultimo_login).to.be.a('string');
          expect(res.body.token).to.be.a('string');
          done();
        });
  });
it('Deverá se cadastrar outro usuário ', (done) => {
  
    
    let userRegister = {
      
      nome: 'usuario',
      email: 'usuario@hotmail.com',
      senha: '123456',
      telefones: [{
        ddd:'92',
        numero: '992472199'
      }]
    }
    
    request
      .post('/signup/')
      .send(userRegister)
      .expect('Content-Type', /json/)
      .expect(201) // THis is HTTP response
      .end((err, res) => {
          if (err) throw err;
          expect(res.body.id).to.be.a('string');
          expect(res.body.data_criacao).to.be.a('string');
          expect(res.body.data_atualizacao).to.be.a('string');
          expect(res.body.ultimo_login).to.be.a('string');
          expect(res.body.token).to.be.a('string');
          done();
        });
  });

 it('Deverá Informar que email já foi cadastrado ', (done) => {
    
    let userRegister = {
      nome: 'usuario',
      email: 'usuario@gmail.com',
      senha: '123456',
      telefones: [{
        ddd:'92',
        numero: '992472199'
      }]
    }
    
    request
      .post('/signup/')
      .send(userRegister)
      .expect('Content-Type', /json/)
      .expect(400) // THis is HTTP response
      .end((err, res) => {
          if (err) throw err;
          
          expect(res.body.mensagem).to.be.equal('E-mail já existente');


          done();
        });
  });


  it('should be a signin', (done) => {
    let userCredentials = {
      email: 'usuario@gmail.com',
      senha: '123456'
    }

    request
      .post('/signin/')
      .send(userCredentials)
        .expect('Content-Type', /json/)
        .expect(200) // THis is HTTP response
        .end((err, res) => {
          if (err) throw err;

          done();
        });
  });

});