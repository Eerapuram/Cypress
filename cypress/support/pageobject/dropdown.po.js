import * as DropDownElement from '../page_elements/dropdown.el'

class Dropdown {
    //Verifies the page title
    pagetitleverify(){
        cy.title().should('eq','The Internet')
    }
    //Verifies the visibility of drop down
    visiblecheck(){
        cy.get('h1').should("be.visible")
    }
    //Checks the element text availability
    validatingText() {
        cy.contains(DropDownElement.ClickDropdown).should('have.text', 'Dropdown')
    }
    //Clicks the drop down link
    clickingDropdown() {
        cy.contains(DropDownElement.ClickDropdown).click()   
    }
    //Verifies the dropdown page
    pageverify(){
        cy.get('h3').should("be.visible")
    }
    //Selects the drop down option from the list
    ClickingDropDownOption() {
        cy.get(DropDownElement.DropDownOption).select(2).invoke("val").should("eq","2")
    }
    //Validates the selected option
    validatingOption() {
        cy.get('option').should("be.visible")
    }
}
export default Dropdown