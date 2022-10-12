import contextmenu from '../support/pageobject/contextmenu.po'

const contextmenutest = new contextmenu()

describe('ContextMenu Test Case', function () {

    //visits the home page url

    beforeEach(() => {
        cy.visit(Cypress.env('url'))
      })
    it('should open the contextmenu', function () {
        contextmenutest.pagetitleverify()
        contextmenutest.visiblecheck()
        contextmenutest.validatingText()
        contextmenutest.clickingContextMenu()
        contextmenutest.pageverify()
        contextmenutest.Clickingcontext_menu()
    })
})
