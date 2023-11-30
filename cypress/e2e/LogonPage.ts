class LogonPage{

    


    checkContinueButtonStatus(){
        cy.get('button[name="continue"]').should('be.disabled');

    }


    getUserName(){
        return cy.get('input[name="name"]');
    }

    checkUserNameIsBlank(){
        const un = this.getUserName();
        un.should('have.value','');

    }

    clearUserName(){
        const un = this.getUserName();
        un.clear();

    }

    enterUserName(username:any){
        const un = this.getUserName();
        un.type(username);

    }

   
    checkRemCBIsUnchecked(){
        cy.get('[type="checkbox"]').should('not.be.checked');

    }

}

export default LogonPage;