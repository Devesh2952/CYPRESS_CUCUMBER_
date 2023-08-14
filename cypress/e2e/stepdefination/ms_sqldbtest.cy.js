describe('test ms sql database',()=>{

    it('employee database testing',()=>{

        cy.sqlServer('SELECT * FROM Employees').then((result) => {
            
                expect(result).to.have.lengthOf(5);
            console.log(result);
          });
    
        })
    })