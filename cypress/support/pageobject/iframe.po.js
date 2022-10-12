import * as IframeElement from '../page_elements/iframe.el'

class IFrame {
    //Checking the page titla equal to given title
    titleVerify() {
        cy.title().should('eq', 'The Internet')
    }
    //Checking the header element visible or not
    ValidatePageHeader() {
        cy.get('h1').should("be.visible")
    }
    //Checking the element length
    Checklength() {
        cy.contains(IframeElement.ClickFrame).should('have.length', 1)
    }
    //Validating Frame Button
    VisibleFrameBtn() {
        cy.contains(IframeElement.ClickFrame).should("be.visible")
    }
    //Clicking the frame element
    ClickingFrame() {
        cy.contains(IframeElement.ClickFrame).click()
        //cy.get(IframeElement.ClickFrame).click()
    }
    //Validating the frame button
    ValidateFrameBtnClicked() {
        cy.get('h3').should("be.visible")
    }
    //Clicking the Iframe Element
    ClickingIframe() {
        cy.contains(IframeElement.ClickIframe).click()
        // cy.get(IframeElement.ClickIframe).click()
    }
    //Validating the Iframe Button
    ValidateIframeClicked() {
        cy.get('h3').should("be.visible")
    }
    //Writes the text in the frame body
    ClickingFrameBody() {
        cy.get(IframeElement.Clickframebody).then(function ($iframe) {
            const iframecontent = $iframe.contents().find('body')
            cy.wrap(iframecontent).click().clear().type('Ashish Kumar').type('{selectAll}')
        })
    }
    //Validating bold button
    ValidatingBoldBtn() {
        cy.get(IframeElement.ClickBold).should('be.visible')
    }
    //Clicks the bold element to make text bold
    ClickingBold() {
        cy.get(IframeElement.ClickBold).click()
    }
    //Validates the bold text
    validatingBold() {
        cy.get('svg').should("be.visible")
    }
    //Validating italic button
    ValidatingItalicBtn() {
        cy.get(IframeElement.ClickItalic).should('be.visible')
    }
    //Converts text in Italic Format
    ClickingItalic() {
        cy.get(IframeElement.ClickItalic).click()
    }
    //Validates the italic font
    validatingItalic() {
        cy.get('svg').should("be.visible")
    }
    //Changes the Allignment
    ClickingAllingment() {
        cy.get(IframeElement.Clickcenteralignment).click()
    }
    //Validates the allignment
    validatingAllignment() {
        cy.get('svg').should("be.visible")
    }
    
}
export default IFrame