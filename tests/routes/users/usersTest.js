import supertest from 'supertest'

describe('GET /', ()=>{

  it('should be a status api online',done=>{
     request
      .get("/")
        .expect('Content-Type', /json/)
        .expect(200) // THis is HTTP response
        .end(function(err,res){
          console.log(err);
          if(err){ 
              throw err;
          }
          done();
         }); 

  })


  it('should be a signup ',done=>{
     request
      .post("/signup/")
        .expect("Content-Type",/json/)
        .expect(200) // THis is HTTP response
        .end(function(err,res){
           if(err) throw err;

          done();
         }); 

  })


  it('should be a signin',done=>{
     request
      .post("/signin/")
        .expect("Content-Type",/json/)
        .expect(200) // THis is HTTP response
        .end(function(err,res){
            if(err) throw err;

           done();
         }); 

  })


})