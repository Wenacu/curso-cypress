import { CommonPageData } from "./common-page.data";
import { CommonPageElements } from "./common-page.element";

export class CommonPageMethods{
static navigateToDemoBlaze(){
    cy.visit(CommonPageData.url); 
    CommonPageMethods.clickOnHomeOption(); 
}
static clickOnHomeOption(){
    CommonPageElements.topMenu.home.click();
}
static clickOnContactOption(){
    CommonPageElements.topMenu.contact.click();
}
static clickOnAboutUsOption(){
    CommonPageElements.topMenu.aboutUs.click();
}
static clickOnCartOption(){
    CommonPageElements.topMenu.cart.click();
}
static clickOnLoginOption(){
    CommonPageElements.topMenu.login.click();
}
static clickOnSignOption(){
    CommonPageElements.topMenu.signup.click();
}

static verifyAlert(expectedMessage){
    cy.on('window:alert',(str)=>{
        expect(str).to.equal(expectedMessage)
    });
}

static generateRandomString(length=10){
    let result=""; 
    const characters="abcdfghijklmnopqrstuvwxyz0123456789"; 
    const charactersLength=characters.length; 
    let counter=0; 
    while(counter<length){
        result+=characters.charAt(Math.floor(Math.random()* charactersLength)); 
        counter+=1; 
    }
    return result; 
}

 static verifySignedUser(username){
CommonPageElements.signedUser.should('have.text', `Welcome ${username}`)
}
}