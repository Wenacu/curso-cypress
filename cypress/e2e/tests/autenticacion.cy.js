import { CommonPageData } from "../pages/common-page/common-page.data";
import { CommonPageMethods } from "../pages/common-page/common-page.methods";
import { LoginData } from "../pages/login/login.data";
import { LoginMethods } from "../pages/login/login.methods";
import { Logger } from "../pages/util/logger";

describe(CommonPageData.testSuites.autenticacion, ()=>{
    it('Inicio de sesión válido', ()=>{

        Logger.stepNumber(1)
        Logger.step('Navegar a la página de inicio')
        CommonPageMethods.navigateToDemoBlaze();     
        
        
        Logger.stepNumber(2)
        Logger.step('Hacer clic en "Log in" en la barra de navegación')
        CommonPageMethods.clickOnLoginOption(); 

        
        Logger.stepNumber(3)
        Logger.step('Ingresar un nombre de usuario y ocntraseña válidos')
        LoginMethods.insertUsername(LoginData.validCredentials.username)
        LoginMethods.insertPassword(LoginData.validCredentials.password)

        
        Logger.stepNumber(4)
        Logger.step('Hacer clic en "Log in" para iniciar sesión')
        LoginMethods.clickOnLoginButton(); 
        Logger.verification('Verificar que se redirige al usuario a la página de inicio')
        CommonPageMethods.verifySignedUser(LoginData.validCredentials.username);

    });


     it('Inicio de sesión inválido', ()=>{

        Logger.stepNumber(1)
        Logger.step('Navegar a la página de inicio')
        CommonPageMethods.navigateToDemoBlaze();     
        
        
        Logger.stepNumber(2)
        Logger.step('Hacer clic en "Log in" en la barra de navegación')
        CommonPageMethods.clickOnLoginOption(); 

        
        Logger.stepNumber(3)
        Logger.step('Ingresar un nombre de usuario y contraseña inválidos')
        LoginMethods.insertUsername(LoginData.validCredentials.username)
        LoginMethods.insertPassword('contrasenainvalida'); 

        
        Logger.stepNumber(4)
        Logger.step('Hacer clic en "Log in" para iniciar sesión')
        LoginMethods.clickOnLoginButton(); 
        Logger.verification('Verificar que se muestre un mensaje de error indicando que el inicio de sesión ha fallado')
        LoginMethods.verifyWrongPasswordMessage(); 
    });
});