const { CartMethods } = require("./pages/cart/cart.methods")
const { HomeMethods } = require("./pages/home/home.methods")
const { LoginMethods } = require("./pages/login/login.methods")

describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://demoblaze.com/')
    //cy.get('a[data-target="#logInModal"]').click()
    //LoginMethods.login('username','password')
    //HomeMethods.clickOnProductLink('Iphone 6 32gb')
      cy.wait(30000)
    CartMethods.clickOnDeleteLink('Nokia lumia 1520')
    cy.wait(30000)

  })
})