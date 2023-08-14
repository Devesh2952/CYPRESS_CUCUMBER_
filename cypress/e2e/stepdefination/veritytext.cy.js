describe('TestSuiteFirst', ()=>{

    it('Test Text Presence',()=>{
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
        cy.fixture('data1.json').then( (data)=>{
            cy.get("input[placeholder='Username']").type(data.username);
                 cy.get("input[placeholder='Password']").type(data.password);
                cy.get("button[type='submit']").click();
               cy.get("a[class='oxd-main-menu-item active'] span[class='oxd-text oxd-text--span oxd-main-menu-item--name']").click();
               cy.get(".oxd-text.oxd-text--h6.oxd-topbar-header-breadcrumb-module").should('have.text',data.expected);

        })
 
})
})