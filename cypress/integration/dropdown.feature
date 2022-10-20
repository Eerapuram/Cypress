Feature:Dropdown

    Selecting an option from drop down menu
    Scenario:Dropdown
        Given visit home page
        Then verify the homepage title is 'Welcome to the-internet'
        When verify and click the dropdown link
        And verify the dropdown page title is 'Dropdown List'
        Then Selects the drop down option from the list
        Then Validates the selected option