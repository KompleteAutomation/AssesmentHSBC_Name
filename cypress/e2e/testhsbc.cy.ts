
import HomePage from "./HomePage";
import LogonPage from "./LogonPage";
describe('Login',()=>{

  let userdata: { [x:string]: any; };

  before(function(){
      cy.fixture('example').then(function(data){
        userdata = data;
        return userdata;
      });
  })

  it('Visits the homePagepage', () => {
    const homePage = new HomePage();
    const logonPage = new LogonPage();
    homePage.visit();
    homePage.clickLogonButton();
    logonPage.checkContinueButtonStatus();
    logonPage.checkRemCBIsUnchecked();
    logonPage.checkUserNameIsBlank();
    
    logonPage.enterUserName(userdata.email)
    // logonPage.clearUserName();
    



  })

})
