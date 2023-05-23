describe("Petstore.swager/User Test", function() {
    
    it("TC0001 POST /v2/user/(User Create)", function () {
       
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
        
});

     it("TC0002 GET /v2/user/{userName}", function () {
    var username = "FRKNYLDRM"

     cy.request('GET', 'https://petstore.swagger.io/v2/user/'+username).then((response) => {
       expect(response.status).to.eq(200)
        })

});

     it("TC0003 DELETE /v2/user/(user delete)", function () {
       
      //const userinfo = {username: "FRKNYLDRM"}

        cy.request({
        method: 'DELETE',
        url: 'https://petstore.swagger.io/v2/user/FRKNYLDRM',
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

    

});
