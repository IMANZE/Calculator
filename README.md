# Calculator
 This is basically a calculator app project.
 input type="button" with a predefined value associated with them, a value that I can get when they get clicked
I labelled them either numericButton or functionButton class to be able to retrieve them separately with DOM Manipulation eg. document.querySelectorAll(".functionButton")
That will give as a collection of HTML elements, an Array-like structure that we can cycle to perform operations on all of them simultaneously
I then move on to cycle them to attach an Event Listener ("click") on each one of them automatically
Now every time a button gets clicked will trigger one functionality or the other based on them being a function button or a numeric one.
A numeric button will trigger the function numericButtonPressed, that has the role of saving the concatenation of numbers pressed, into a variable so that it can be used later as the first operand of the calculation.
A function button will trigger the function functionButtonPressed which is responsible of checking what kind of operation the user wanted by looking at the symbol associated with the button that got pressed last: *, -, +, /, C. 
Then a switch case is used to take care of the execution of the corresponding block of code. Eg. if it was “*” our custom mul() function is called with the necessary parameters for performing a multiplication, and the result is assigned as the new value for the result input (aka our fake display above the buttons)                                                                                         
  result.value = mul(previousResult, currentValue)
