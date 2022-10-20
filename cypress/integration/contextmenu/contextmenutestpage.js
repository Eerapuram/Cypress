import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps"
import ContextMenu from '../../support/pageobject/contextmenu.po'

const contextmenupageobject = new ContextMenu()
Given('visit the homepage', function () {
    cy.visit(Cypress.env('url'))
})
Then("I should see the page title is {string}", () => {
    contextmenupageobject.pagetitleverify()
})
When('click on the ContextMenu', () => {
    contextmenupageobject.clickingContextMenu()
})
And("I should see the page tite is {string}", () => {
    contextmenupageobject.pageverify()
})
Then('Click in the rectangle area and handle alert messages', () => {
    contextmenupageobject.Clickingcontext_menu()
})