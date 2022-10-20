Feature:Drag and Drop

    Dragging and Dropping boxes
    Scenario:Drag and drop
        Given visit home page
        Then verify the homepage title is 'Welcome to the-internet'
        When verify and click the drag and drop link
        Then verify the drag and drop page title is 'Drag and Drop'
        And Draggs the selected item
        Then Drops the Element