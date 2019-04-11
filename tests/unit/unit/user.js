
const Helper = app.helpers.helper;

describe('Validando Funções do Helpers: Helpers', () => {
  it('GetToken: Deverer Pegar o token ', () => {
    const token = 'Bearer token';
    const tokenResult = 'token';
    const auth = Helper.getToken(token);

    expect(auth).not.be.undefined;
    expect(auth).to.be.equal(tokenResult);
  });


  it('GetToken: Deverer Pegar o token inválido sem Bearer', () => {
    const token = 'token invalido';
    const tokenResult = '';
    const auth = Helper.getToken(token);

    expect(auth).not.be.undefined;
    expect(auth).to.be.equal(tokenResult);
  });

  it('GetToken: Deverer Pegar o token inválido nulo', () => {
    const token = null;
    const tokenResult = '';
    const auth = Helper.getToken(token);

    expect(auth).not.be.undefined;
    expect(auth).to.be.equal(tokenResult);
  });

  it('GUID: Deverar retornar o GUID', () => {
    const guid = Helper.guid();
    expect(guid).not.be.undefined;
    expect(guid).to.be.a('string');
  });
});
