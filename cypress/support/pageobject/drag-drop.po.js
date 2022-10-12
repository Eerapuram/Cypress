import * as DragandDropElement from '../page_elements/drag-drop.el'

const dataTransfer = new DataTransfer();



class dragandDrop {
    //Checking the page titla equal to given title
    titleVerify() {
        cy.title().should('eq', 'The Internet')
    }
    //Validating header visiblility
    validatingPageHeader() {
        cy.get('h1').should("be.visible")
    }
    //Checks the element text availability
    validatingText() {
        cy.contains(DragandDropElement.clickDragandDrop).should('have.text', 'Drag and Drop')
    }
    //Clicks the DragandDrop element
    clickingDragandDrop() {
        cy.contains(DragandDropElement.clickDragandDrop).click()
        //cy.get(DragandDropElement.clickDragandDrop).click()
    }
    //Validating the DragandDrop Clicked
    ValidatingClicked() {
        cy.get('h3').should("be.visible")
    }
    //Draggs the selected item
    ClickingDragItem() {
        cy.get(DragandDropElement.dragitem).trigger('dragstart', { dataTransfer })
    }
    //Drops the Element
    clickDropItem() {
        cy.get(DragandDropElement.dropitem).trigger('drop', { dataTransfer })
    }
}

export default dragandDrop