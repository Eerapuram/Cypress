import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps"
import DragandDrop from '../../support/pageobject/drag-drop.po'

const DragandDropobject = new DragandDrop()
Given('visit home page', () => {
    cy.visit(Cypress.env('url'))
})
Then('verify the homepage title is {string}', ()=> {
    DragandDropobject.titleVerify()
})
When('verify and click the drag and drop link', () => {
    DragandDropobject.clickingDragandDrop()
})
Then('verify the drag and drop page title is {string}', ()=> {
    DragandDropobject.ValidatingClicked()
})
And('Draggs the selected item', () => {
    DragandDropobject.ClickingDragItem()
})
Then('Drops the Element', () => {
    DragandDropobject.clickDropItem()
})