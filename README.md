# desafio-node

Teste de NodeJS para a Concrete!

Desafio: 
Crie um aplicativo backend que exporá uma API RESTful de criação de sing up/sign in.
Todos os endpoints devem somente aceitar e somente enviar JSONs. O servidor deverá retornar JSON para os casos de endpoint não encontrado também.


## Como instalar o projeto 

```
npm install

```


## Execução do projeto 

```
npm start

```

## Sobre desenvolvimento

* Banco de dados utilizado: MongoDB

* Task Runner utilizado: NPM SCRIPTS

* A aplicação funciona com Deploy automatico no [HEROKU ](https://desafio-saulo.herokuapp.com/) sempre em que há um commit na branch master.

* Crei também uma documentação  [Documentação da API](https://saulo8732.github.io/desafio-node/) está no Github pages

* O projeto também possui testes unitários e testes de integração


## Rotas

Cadastro de usuários (Signin)
```
POST https://desafio-saulo.herokuapp.com/signup
```
Login  no sistema (Signup)
```
POST https://desafio-saulo.herokuapp.com/signin
```
Buscar usuario
```
HEADER Authorization Berear {token}

GET https://desafio-saulo.herokuapp.com/user/:id
