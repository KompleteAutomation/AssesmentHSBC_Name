class HomePage{

    visit(){
        cy.visit('https://www.hsbc.co.in/')
        // Logon Button should be visible
    }

    clickLogonButton(){
        cy.get('.selected-item').contains(" Log On ").click({force: true})
    }

   

}


export default HomePage;