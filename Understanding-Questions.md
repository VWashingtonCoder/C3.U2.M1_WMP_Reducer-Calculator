# Understanding Questions:
1. What are the steps of execution from the pressing of the 1 button to the rendering of our updated value? List what part of the code excutes for each step.
* The user presses the 1 button.
* The previous state is passed through the onClick handler @ CalcButtons.
* the data is then passed to the onClickAddOne handler @ App.
* the data is then passed through the addOne acion creator.
* The addOne action creator runs through the reducer via dispatch to find new state to return 
* the reducer matches the case instance of action type ADD_ONE and returns the previous state with total updated by 1
* TotalDisplay shows the total plus 1.
