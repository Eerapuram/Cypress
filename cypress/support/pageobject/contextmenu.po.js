import * as context_menuElement from '../page_elements/contextmenu.el'

class ContextMenu {
    //Verifies the page title
    pagetitleverify(){
        cy.title().should('eq','The Internet')
    }
    //Verifies the visibility of context menu
    visiblecheck(){
        cy.get('h1').should("be.visible")
    }
    //Checks the element text availability
    validatingText() {
        cy.contains(context_menuElement.ClickcontextMenu).should('have.text', 'Context Menu')
    }
    //Clicks the context menu link
    clickingContextMenu() {
        cy.contains(context_menuElement.ClickcontextMenu).click()     
    }
    //Verifies the context menu page
    pageverify(){
        cy.get('h3').should("be.visible")
    }
    //Right clicks on the context menu
    Clickingcontext_menu() {
        cy.get(context_menuElement.context_menu).rightclick()
    }
}

export default ContextMenu