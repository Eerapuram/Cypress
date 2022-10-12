import DragandDropItem from '../support/pageobject/drag-drop.po'

const dragAnddrop = new DragandDropItem()

describe('DragandDropItem Test Case', function () {

  //visits the home page url

  beforeEach(() => {

    cy.visit(Cypress.env('url'))
    

  }) 

    it('drag and drop element', function () {
      dragAnddrop.titleVerify()
      dragAnddrop.validatingPageHeader()
      dragAnddrop.validatingText()
      dragAnddrop.clickingDragandDrop()
      dragAnddrop.ValidatingClicked()
      dragAnddrop.ClickingDragItem()
      dragAnddrop.clickDropItem()
    })
  })