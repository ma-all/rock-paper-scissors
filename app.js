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

const resultdisplay = document.querySelector('#result-display')

/*----------------------------- Event Listeners -----------------------------*/

//event exists in call back functions in event listeners
choices.addEventListener('click', function(event){
    
    //when clicked on "rock" the event will be rock and vice versa
    //store users choice
    userChoice = event.target.id

    //we want to hide buttons that are userChoice
    if(userChoice === 'rock'){
        //add hidden class to paper and scissors buttons
        paper.disabled = true
        scissors.disabled = true
    } else if  (userChoice === 'paper') {
        rock.disabled = true
        scissors.disabled = true
    } else {
        paper.disabled = true
        rock.disabled = true
    }

    //this is to allow the computer to choose randomly
    let randomIndex = Math.floor(Math.random() * 3)
    //computer makes a choice
    computerChoice = choicesArr[randomIndex]
    //display what the computer chose
    resultdisplay.textContent = `Computer chose: ${computerChoice}`

    console.log('userChoice: ', userChoice)
    console.log('computerChoice: ', computerChoice)
})

reset.addEventListener('click', function(){
    paper.disabled = false
    scissors.disabled = false
    rock.disabled = false
})

/*-------------------------------- Functions --------------------------------*/