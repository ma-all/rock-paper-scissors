/*-------------------------------- Constants --------------------------------*/

/*-------------------------------- Variables --------------------------------*/
let userChoice = ''

/*------------------------ Cached Element References ------------------------*/
const choices = document.querySelector('#choices') 

const rock = document.querySelector('#rock')
const paper = document.querySelector('#paper')
const scissors = document.querySelector('#scissors')

const reset = document.querySelector('#reset')

/*----------------------------- Event Listeners -----------------------------*/

//event exists in call back functions in event listeners
choices.addEventListener('click', function(event){
    //when clicked on "rock" the event will be rock and vice versa
    //store users choice
    userChoice = event.target.id

    //we want to hide buttons that are userChoice
    if(userChoice === 'rock'){
        //add hidden class to paper and scissors buttons
        paper.classList.add('hidden')
        scissors.classList.add('hidden')
    } else if  (userChoice === 'paper') {
        rock.classList.add('hidden')
        scissors.classList.add('hidden')
    } else {
        paper.classList.add('hidden')
        rock.classList.add('hidden')
    }

    console.log('userChoice: ', userChoice)
})

reset.addEventListener('click', function(){
    paper.classList.remove('hidden')
    scissors.classList.remove('hidden')
    rock.classList.remove('hidden')
})

/*-------------------------------- Functions --------------------------------*/