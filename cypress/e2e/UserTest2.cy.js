describe("COPY!!Petstore.swager/User Test", function() {
    
    it("COPY TC0001 POST /v2/user/(User Create)", function () {
      var username = "FRKNYLDRM"
    const userinfo = {
        "id": 21212333,
        "username": "FRKNYLDRM",
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
         
        cy.request('GET', 'https://petstore.swagger.io/v2/user/'+username).then((response) => {
          expect(response.status).to.eq(200)
           })
          
         cy.request({
            method: 'DELETE',
            url: 'https://petstore.swagger.io/v2/user/FRKNYLDRM',
          }).then((response) => {
            expect(response.status).to.eq(200)
             });
         
});


});
