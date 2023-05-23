import BaseLib from "./Base/BaseLib";

describe("Petstore.swager/User Test", function() {
 
  const baseLib = new BaseLib
  var username = baseLib.randomUserName();
  var usernameUpdate = baseLib.randomUserName();

    it("TC0001 POST /v2/user/(User Create)", function () {
       
    const userinfo = {
        "id": 21212333,
        "username": username,
        "firstName": "furkan",
        "lastName": "yıldırım",
        "email": "fy@test.com",
        "password": "123123",
        "phone": "0505",
        "userStatus": 1
    }
    cy.request({
        method: 'POST',
        url: 'https://petstore.swagger.io/v2/user',
        body: userinfo

    }).then((response) => {
        expect(response.status).to.eq(200)
         });
        
});

it("TC0002 PUT /v2/user/(User Update)", function () {
  
  const userinfo = {
      "id": 21212333,
      "username": usernameUpdate,
      "firstName": "furkan",
      "lastName": "yıldırım",
      "email": "fy@test.com",
      "password": "123123",
      "phone": "0505",
      "userStatus": 1
  }
  cy.request({
      method: 'PUT',
      url: 'https://petstore.swagger.io/v2/user/'+username,
      body: userinfo

  }).then((response) => {
      expect(response.status).to.eq(200)
       });
      
});

     it("TC0003 GET /v2/user/{userName}", function () {
   
     cy.request('GET', 'https://petstore.swagger.io/v2/user/'+usernameUpdate).then((response) => {
       expect(response.status).to.eq(200)
        })

});
      it("TC0004 LOGİN /v2/user/{userName}", function () {
        const userinfo = {
          
          "username": "FRKNYLDRM",
          "password": "123123"
        
      }
      cy.request({
          method: 'GET',
          url: 'https://petstore.swagger.io/v2/user/login',
          query: userinfo
  
      }).then((response) => {
          expect(response.status).to.eq(200)
           });

});

     it("TC0005 DELETE /v2/user/(user delete)", function () {
       
      //const userinfo = {username: "FRKNYLDRM"}

        cy.request({
        method: 'DELETE',
        url: 'https://petstore.swagger.io/v2/user/'+usernameUpdate,
       /* qs:{
            
            query: userinfo
              }
         */
       // query: userinfo
       // qs: userinfo
       }).then((response) => {
        expect(response.status).to.eq(200)
         });
        
});
      it("TC0006 GET /v2/user/(userNameControl)", function () {
   
          cy.request('GET', 'https://petstore.swagger.io/v2/user/'+usernameUpdate).then((response) => {
         expect(response.status).to.eq(404)
      })
 
      });
        it("TC0007 GET/v2/user/logout", function () {
           cy.request('GET', 'https://petstore.swagger.io/v2/user/logout').then((response) => {
              expect(response.status).to.eq(200)
            })
      
      });
    

});
