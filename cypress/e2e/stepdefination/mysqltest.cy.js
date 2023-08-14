

describe("test suite",()=>{

  it("sqlconnect", ()=>{
    cy.task("queryDb",'SELECT * FROM customer_order')
        .then(count => {
            expect(count).to.have.lengthOf(7);
            cy.log('DB records count is => '+ count);
          });
  })
})