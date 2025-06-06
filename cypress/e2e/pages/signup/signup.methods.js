import { CommonPageMethods } from "../common-page/common-page.methods";
import { SignupElements } from "./signup.elements";

export class SignupMethods{
    static insertUsername(username){
        SignupElements.textboxes.username.invoke('val',username);
    }

    static insertPassword(password){
        SignupElements.textboxes.password.invoke('val',password);
    }

    static clickOnSignUpButton(){
        SignupElements.buttons.signup.click(); 
    }

    static signup(username,password){
        this.insertUsername(username);
        this.insertPassword(password);
        this.clickOnSignUpButton();
    }

    static verifySignupSuccesfulMessageIsDisplayed(){
        CommonPageMethods.verifyAlert('Sign up successful.'); 
    }

    static verifyThisUserAlreadyExistsMessageIsDisplayed(){
        CommonPageMethods.verifyAlert('This user already exist.')
    }
}