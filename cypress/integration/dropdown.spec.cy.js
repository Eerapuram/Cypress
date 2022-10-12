import dropdown from '../support/pageobject/dropdown.po'

const dropdowntest = new dropdown()

describe('Dropdown test case', function () {

    //visits the home page url

    beforeEach(() => {
        cy.visit(Cypress.env('url'))
      })
    it('should select an option from dropdown', function () {
        dropdowntest.pagetitleverify()
        dropdowntest.visiblecheck()
        dropdowntest.validatingText()
        dropdowntest.clickingDropdown()
        dropdowntest.pageverify()
        dropdowntest.ClickingDropDownOption()
        dropdowntest.validatingOption()
    })
})
