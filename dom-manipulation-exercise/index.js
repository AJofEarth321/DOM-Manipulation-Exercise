//for use with DOM Manipulation exercise

//Requirement 1
//Given a user has entered a color into the textbox and clicks the nearest “change color” button,
//the background color of the paragraph element directly underneath should change.
//This should not change the background color of any other elements.

//Assign all paragraphs to a variable
const allThePs = document.querySelectorAll('p');

//Assign all buttons to a variable
const allTheButtons = document.querySelectorAll('button');

//Assign all inputs to a variable
const allTheInputs = document.querySelectorAll('input');

//Instantiate a function for event listener to work from
const changeBackgroundColor = (event) => {
    event.target.parentNode.querySelector('p')

const selectedParagraph = event.target.parentNode.querySelector('p');
const selectedInputValue = event.target.parentNode.querySelector('input').value;

selectedParagraph.className = selectedInputValue;
};

//Create a for loop that calls the function and allows event listener to work
for (const button of allTheButtons){
    button.addEventListener ('click', changeBackgroundColor);

}
