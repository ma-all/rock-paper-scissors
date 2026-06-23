/*-------------------------------- Constants --------------------------------*/
const choicesArr = ['rock', 'paper', 'scissors']

/*-------------------------------- Variables --------------------------------*/
let userChoice = ''
let computerChoice = ''

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
        paper.setAttribute('disabled', 'disabled')
        scissors.setAttribute('disabled', 'disabled')
    } else if  (userChoice === 'paper') {
        rock.setAttribute('disabled', 'disabled')
        scissors.setAttribute('disabled', 'disabled')
    } else {
        paper.setAttribute('disabled', 'disabled')
        rock.setAttribute('disabled', 'disabled')
    }

    //this is to allow the computer to choose randomly
    let randomIndex = Math.floor(Math.random() * 3)
    //computer makes a choice
    computerChoice = choicesArr[randomIndex]

    console.log('userChoice: ', userChoice)
    console.log('computerChoice: ', computerChoice)
})

reset.addEventListener('click', function(){
    paper.removeAttribute('disabled')
    scissors.removeAttribute('disabled')
    rock.removeAttribute('disabled')
})

/*-------------------------------- Functions --------------------------------*/