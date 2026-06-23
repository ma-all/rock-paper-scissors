/*-------------------------------- Constants --------------------------------*/

/*-------------------------------- Variables --------------------------------*/
let userChoice = ''

/*------------------------ Cached Element References ------------------------*/
const choices = document.querySelector('#choices')
console.log(choices)

/*----------------------------- Event Listeners -----------------------------*/

//event exists in call back functions in event listeners
choices.addEventListener('click', function(event){
    //when clicked on "rock" the event will be rock and vice versa
    //store users choice
    userChoice = event.target.id
    console.log('userChoice: ', userChoice)
})

/*-------------------------------- Functions --------------------------------*/