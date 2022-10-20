Feature: iFrames

    iFrames
    Background: visit iframes page
        Given visit the homepage
        When verify the homepage title is 'Welcome to the-internet'
        Then click on frames and verify Framespage is 'Frames'
        Then verify and click on iFrames
        And Achive iFramebody
    Scenario: should bold text
        Then makes the text bold
    Scenario: should convert text to italic
        Then converts the text into italic font
    Scenario: should alignment text
        Then aligns the text