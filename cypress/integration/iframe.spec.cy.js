import IframeTest from '../support/pageobject/iframe.po'

const iFramestest = new IframeTest()

//visits the home page url

describe('Iframe Test Case', function () {
    beforeEach(() => {
        cy.visit(Cypress.env('url'));
    })

    it('Iframe test Case', function () {
        iFramestest.titleVerify()
        iFramestest.ValidatePageHeader()
        iFramestest.Checklength()
        iFramestest.VisibleFrameBtn()
        iFramestest.ClickingFrame()
        iFramestest.ValidateFrameBtnClicked()
        iFramestest.ClickingIframe()
        iFramestest.ValidateIframeClicked()
        iFramestest.ClickingFrameBody()
        iFramestest.ValidatingBoldBtn()
        iFramestest.ClickingBold()
        iFramestest.validatingBold()
        iFramestest.ValidatingItalicBtn()
        iFramestest.ClickingItalic()
        iFramestest.validatingItalic()
        iFramestest.ClickingAllingment()
        iFramestest.validatingAllignment()
    })
})