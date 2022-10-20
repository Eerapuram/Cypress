import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps"
import iFrames from '../../support/pageobject/iframe.po'

const iframesobject = new iFrames()
Given('visit the homepage', () => {
    cy.visit(Cypress.env('url'))
})
When('verify the homepage title is {string}', ()=> {
    iframesobject.titleVerify()
})
Then('click on frames and verify Framespage is {string}', ()=> {
    iframesobject.ClickingFrame()
})
Then('verify and click on iFrames', () => {
    iframesobject.ClickingIframe()
})
And('Achive iFramebody', () => {
    iframesobject.ClickingFrameBody()
})
Then('makes the text bold', () => {
    iframesobject.ClickingBold()
})
Then('converts the text into italic font', () => {
    iframesobject.ClickingItalic()
})
Then('aligns the text', () => {
    iframesobject.ClickingAllingment()
})