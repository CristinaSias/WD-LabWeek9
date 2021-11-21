const rock = document.getElementById('rock')
const paper = document.getElementById('paper')
const scissors = document.getElementById('scissors')
const lizard = document.getElementById('lizard')
const spock = document.getElementById('spock')
const your_choice = document.getElementById('your-choice')
const computer_choice = document.getElementById('computer-choice')
const result = document.getElementById('result')
const chances = document.getElementById('chances')
const gameOver = document.getElementById('game-over')
const gameWrapper = document.getElementById('game-wrapper')
const newGame = document.getElementById('new-game')
let chancesLeft = 3
chances.innerHTML = chancesLeft

// Run 3 times

function discountChances() {
  chancesLeft = chancesLeft - 1
  console.log(chancesLeft)
  chances.innerHTML = chancesLeft
  toggle()
}

function toggle() {
  if (chancesLeft === 0) {
    gameOver.style.display = 'block'
    gameWrapper.style.display = 'none'
  }
}
// get user choices

rock.addEventListener('click', function (e) {
  var computer = randomChoice()
  your_choice.innerHTML = 'Rock'
  if (computer == 'Rock') {
    result.innerHTML = 'It is a draw'
  } else if (computer == 'Paper' || computer == 'Spock') {
    result.innerHTML = 'OOps you lose'
  } else if (computer == 'Scissors' || computer == 'Lizard') {
    result.innerHTML = 'Yeeeh you won'
  }
  computer_choice.innerHTML = computer
  discountChances()
})

paper.addEventListener('click', function (e) {
  var computer = randomChoice()
  your_choice.innerHTML = 'Paper'
  if (computer == 'Paper') {
    result.innerHTML = 'It is a draw'
  } else if (computer == 'Scissors' || computer == 'Lizard') {
    result.innerHTML = 'OOps you lose'
  } else if (computer === 'Rock' || computer == 'Spock') {
    result.innerHTML = 'Yeeeh you won'
  }
  computer_choice.innerHTML = computer
  discountChances()
})

scissors.addEventListener('click', function (e) {
  var computer = randomChoice()
  your_choice.innerHTML = 'Scissors'
  if (computer === 'Scissors') {
    result.innerHTML = 'It is a draw'
  } else if (computer === 'Rock' || computer == 'Spock') {
    result.innerHTML = 'OOps you lose'
  } else if (computer === 'Paper' || computer == 'Lizard') {
    result.innerHTML = 'Yeeeh you won'
  }
  computer_choice.innerHTML = computer
  discountChances()
})
lizard.addEventListener('click', function (e) {
  var computer = randomChoice()
  your_choice.innerHTML = 'Lizard'
  if (computer === 'Lizard') {
    as
    result.innerHTML = 'It is a draw'
  } else if (computer === 'Rock' || computer == 'Scissors') {
    result.innerHTML = 'OOps you lose'
  } else if (computer === 'Paper' || computer == 'Spock') {
    result.innerHTML = 'Yeeeh you won'
  }
  computer_choice.innerHTML = computer
  discountChances()
})
spock.addEventListener('click', function (e) {
  var computer = randomChoice()
  your_choice.innerHTML = 'Spock'
  if (computer === 'Spock') {
    as
    result.innerHTML = 'It is a draw'
  } else if (computer === 'Paper' || computer == 'Lizzard') {
    result.innerHTML = 'OOps you lose'
  } else if (computer === 'Rock' || computer == 'Rock') {
    result.innerHTML = 'Yeeeh you won'
  }
  computer_choice.innerHTML = computer
  discountChances()
})

newGame.addEventListener('click', function () {
  gameOver.style.display = 'none'
  gameWrapper.style.display = 'block'
  chancesLeft = 3
  chances.innerHTML = 3
})

//get computer choice
function randomChoice() {
  const randomcomputer = Math.floor(Math.random() * 5)
  if (randomcomputer === 0) {
    return 'Rock'
  } else if (randomcomputer === 1) {
    return 'Paper'
  } else if (randomcomputer === 2) {
    return 'Scissors'
  } else if (randomcomputer === 3) {
    return 'Lizard'
  } else if (randomcomputer === 4) {
    return 'Spock'
  }
}
