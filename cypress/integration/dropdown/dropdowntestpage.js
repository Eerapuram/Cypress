import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps"
import Dropdown from '../../support/pageobject/dropdown.po'

const Dropdownobject = new Dropdown()
Given('visit home page', () => {
    cy.visit(Cypress.env('url'))
})
Then('verify the homepage title is {string}', ()=> {
    Dropdownobject.pagetitleverify()
})
When('verify and click the dropdown link', () => {
    Dropdownobject.clickingDropdown()
})
And('verify the dropdown page title is {string}', ()=> {
    Dropdownobject.pageverify()
})
Then('Selects the drop down option from the list', () => {
    Dropdownobject.ClickingDropDownOption()
})
Then('Validates the selected option', () => {
    Dropdownobject.validatingOption()
})