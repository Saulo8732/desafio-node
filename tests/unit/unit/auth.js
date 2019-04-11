const Auth = app.controllers.auth;

describe('Validando Controllers de autenticação', () => {
  it('CreateToken: Criando Token ', () => {
    const user = 'Saulo';
    const auth = Auth.createToken(user);
    tokenUser = auth;
    expect(auth).not.be.undefined;
    expect(auth).to.be.a('string');
  });


  it('CreateToken: Sem usuário', () => {
    const user = null;
    const auth = Auth.createToken(user);
    expect(auth).be.false;
  });

  it('VerifyToken: Verificar id do usuário', () => {
    const auth = Auth.verifyToken(tokenUser);
    expect(auth).not.be.undefined;
    expect(auth).to.be.equal('Saulo');
  });


  it('VerifyToken: Verificar Token inválido', () => {
    const auth = Auth.verifyToken('TokenInválido');
    expect(auth).not.be.undefined;
    expect(auth).to.be.equal('error2');
  });
});
