const { CartMethods } = require("./pages/cart/cart.methods")
const { HomeMethods } = require("./pages/home/home.methods")
const { LoginMethods } = require("./pages/login/login.methods")
const { Logger } = require("./pages/util/logger")

describe('template spec', () => {
  it('passes', () => {
    const usuario='random01'; 
    const contrasena='random01'; 

    Logger.stepNumber(1)
    Logger.step('Navigate to Demoblaze page')
    cy.visit('https://demoblaze.com/index.html')

    Logger.stepNumber(2)
    Logger.step('Click on "Login" link')
    cy.get('a[data-target="#logInModal"]').click()

    Logger.stepNumber(3)
    Logger.step(`Login with this credentials: "${usuario}/${contrasena}`)
    LoginMethods.login(usuario,contrasena)
    Logger.verification(`The Home should "Welcome ${usuario}" text`)
     cy.get('a#nameofuser').should('contain.text', usuario)

    //HomeMethods.clickOnProductLink('Iphone 6 32gb')
      cy.wait(5000)
    //CartMethods.clickOnDeleteLink('Nokia lumia 1520')
   // cy.wait(30000)

  })
})