/************************* DECLARATIONS *****************************/

const player1 = document.querySelector('#player1')
const player2 = document.querySelector('#player2')
var input1 = document.querySelector('#player1name')
var input2 = document.querySelector('#player2name')

const speedLeft1x = document.querySelector('#speedLeft1x')
const speedLeft5x = document.querySelector('#speedLeft5x')
const speedLeft10x = document.querySelector('#speedLeft10x')

const speedRight1x = document.querySelector('#speedRight1x')
const speedRight5x = document.querySelector('#speedRight5x')
const speedRight10x = document.querySelector('#speedRight10x')

// const color1L = document.querySelector('#color1L')
// const color2L = document.querySelector('#color2L')
// const color3L = document.querySelector('#color3L')
// const color4L = document.querySelector('#color4L')

// const color1R = document.querySelector('#color1R')
// const color2R = document.querySelector('#color2R')
// const color3R = document.querySelector('#color3R')
// const color4R = document.querySelector('#color4R')

const dicePositionL1 = document.querySelector('#dicePositionL1')
const dicePositionL2 = document.querySelector('#dicePositionL2')
const dicePositionL3 = document.querySelector('#dicePositionL3')

const dicePositionR1 = document.querySelector('#dicePositionR1')
const dicePositionR2 = document.querySelector('#dicePositionR2')
const dicePositionR3 = document.querySelector('#dicePositionR3')

const d0 = 'assets/images/dice0.svg'
const d1 = 'assets/images/dice1.svg'
const d2 = 'assets/images/dice2.svg'
const d3 = 'assets/images/dice3.svg'
const d4 = 'assets/images/dice4.svg'
const d5 = 'assets/images/dice5.svg'
const d6 = 'assets/images/dice6.svg'

var LD1 = 3,
  LD2 = 3,
  LD3 = 3,
  RD1 = 3,
  RD2 = 3,
  RD3 = 3

const rightButton = document.querySelector('#rightButton')
const leftButton = document.querySelector('#leftButton')
const resetButton = document.querySelector('#resetButton')
const config = document.querySelector('.config')

var winner

const plus1 = document.querySelector('#plus1')
const score1 = document.querySelector('#score1')
const score2 = document.querySelector('#score2')

var valueScore1 = 0
var valueScore2 = 0

var A = 1,
  B = 1,
  C = 1,
  D = 1,
  EfectLeftFinish,
  EfectRightFinish

var resultlD1, resultlD2, resultlD3, resultrD1, resultrD2, resultrD3

var speedLeft
var speedRight

/********************** STANDARD CONFIG *************************/

numberOfDicesL3()
numberOfDicesR3()
speedL5x()
speedR5x()

/*************************  FUNCTIONS ***************************/

// *****  CHANGE SPEED  ****** //

function speedL1x() {
  speedLeft = 300

  speedLeft1x.style.opacity = 1
  speedLeft5x.style.opacity = 0.2
  speedLeft10x.style.opacity = 0.2
}

function speedL5x() {
  speedLeft = 100

  speedLeft1x.style.opacity = 0.2
  speedLeft5x.style.opacity = 1
  speedLeft10x.style.opacity = 0.2
}

function speedL10x() {
  speedLeft = 0

  speedLeft1x.style.opacity = 0.2
  speedLeft5x.style.opacity = 0.2
  speedLeft10x.style.opacity = 1
}

function speedR1x() {
  speedRight = 300

  speedRight1x.style.opacity = 1
  speedRight5x.style.opacity = 0.2
  speedRight10x.style.opacity = 0.2
}

function speedR5x() {
  speedRight = 100

  speedRight1x.style.opacity = 0.2
  speedRight5x.style.opacity = 1
  speedRight10x.style.opacity = 0.2
}

function speedR10x() {
  speedRight = 0

  speedRight1x.style.opacity = 0.2
  speedRight5x.style.opacity = 0.2
  speedRight10x.style.opacity = 1
}


// *****  CHANGE COLORS  ****** //

// function color1Left() {
//   color1L.style.opacity = 1
//   color2L.style.opacity = 0.2
//   color3L.style.opacity = 0.2
//   color4L.style.opacity = 0.2

//   document.getElementById('leftButton').style.backgroundColor = 'red'
//   document.getElementById('leftButton').style.color = 'white'
// }

// function color2Left() {
//   color1L.style.opacity = 0.2
//   color2L.style.opacity = 1
//   color3L.style.opacity = 0.2
//   color4L.style.opacity = 0.2

//   document.getElementById('leftButton').style.backgroundColor = 'white'
//   document.getElementById('lD2').style.backgroundColor = 'white'
//   document.getElementById('lD3').style.backgroundColor = 'white'

//   document.getElementById('lD1').style.color = 'black'
//   document.getElementById('lD2').style.color = 'black'
//   document.getElementById('lD3').style.color = 'black'
// }

// function color3Left() {
//   color1L.style.opacity = 0.2
//   color2L.style.opacity = 0.2
//   color3L.style.opacity = 1
//   color4L.style.opacity = 0.2

//   document.getElementById('lD1').style.backgroundColor = 'blue'
//   document.getElementById('lD2').style.backgroundColor = 'blue'
//   document.getElementById('lD3').style.backgroundColor = 'blue'

//   document.getElementById('lD1').style.color = 'white'
//   document.getElementById('lD2').style.color = 'white'
//   document.getElementById('lD3').style.color = 'white'
// }

// function color4Left() {
//   color1L.style.opacity = 0.2
//   color2L.style.opacity = 0.2
//   color3L.style.opacity = 0.2
//   color4L.style.opacity = 1

//   document.getElementById('lD1').style.backgroundColor = 'green'
//   document.getElementById('lD2').style.backgroundColor = 'green'
//   document.getElementById('lD3').style.backgroundColor = 'green'

//   document.getElementById('lD1').style.color = 'white'
//   document.getElementById('lD2').style.color = 'white'
//   document.getElementById('lD3').style.color = 'white'
// }

// function color1Right() {
//   color1R.style.opacity = 1
//   color2R.style.opacity = 0.2
//   color3R.style.opacity = 0.2
//   color4R.style.opacity = 0.2

//   document.getElementById('rD1').style.backgroundColor = 'red'
//   document.getElementById('rD2').style.backgroundColor = 'red'
//   document.getElementById('rD3').style.backgroundColor = 'red'

//   document.getElementById('rD1').style.color = 'white'
//   document.getElementById('rD2').style.color = 'white'
//   document.getElementById('rD3').style.color = 'white'
// }

// function color2Right() {
//   color1R.style.opacity = 0.2
//   color2R.style.opacity = 1
//   color3R.style.opacity = 0.2
//   color4R.style.opacity = 0.2

//   document.getElementById('rD1').style.backgroundColor = 'yellow'
//   document.getElementById('rD2').style.backgroundColor = 'yellow'
//   document.getElementById('rD3').style.backgroundColor = 'yellow'

//   document.getElementById('rD1').style.color = 'black'
//   document.getElementById('rD2').style.color = 'black'
//   document.getElementById('rD3').style.color = 'black'
// }

// function color3Right() {
//   color1R.style.opacity = 0.2
//   color2R.style.opacity = 0.2
//   color3R.style.opacity = 1
//   color4R.style.opacity = 0.2

//   document.getElementById('rD1').style.backgroundColor = 'blue'
//   document.getElementById('rD2').style.backgroundColor = 'blue'
//   document.getElementById('rD3').style.backgroundColor = 'blue'

//   document.getElementById('rD1').style.color = 'white'
//   document.getElementById('rD2').style.color = 'white'
//   document.getElementById('rD3').style.color = 'white'
// }

// function color4Right() {
//   color1R.style.opacity = 0.2
//   color2R.style.opacity = 0.2
//   color3R.style.opacity = 0.2
//   color4R.style.opacity = 1

//   document.getElementById('rD1').style.backgroundColor = 'green'
//   document.getElementById('rD2').style.backgroundColor = 'green'
//   document.getElementById('rD3').style.backgroundColor = 'green'

//   document.getElementById('rD1').style.color = 'white'
//   document.getElementById('rD2').style.color = 'white'
//   document.getElementById('rD3').style.color = 'white'
// }

// ********  NUMBER OF DICES  ****** //

function numberOfDicesL1() {
  document.getElementById('LN1').style.opacity = 1
  document.getElementById('LN2').style.opacity = 0.2
  document.getElementById('LN3').style.opacity = 0.2

  document.getElementById('dicePositionL1').style.display = 'flex'
  document.getElementById('dicePositionL2').style.display = 'none'
  document.getElementById('dicePositionL3').style.display = 'none'

  LD1 = 1
  LD2 = 0
  LD3 = 0
}

function numberOfDicesL2() {
  document.getElementById('LN1').style.opacity = 0.2
  document.getElementById('LN2').style.opacity = 1
  document.getElementById('LN3').style.opacity = 0.2

  document.getElementById('dicePositionL1').style.display = 'flex'
  document.getElementById('dicePositionL2').style.display = 'flex'
  document.getElementById('dicePositionL3').style.display = 'none'

  LD1 = 1
  LD2 = 1
  LD3 = 0
}

function numberOfDicesL3() {
  document.getElementById('LN1').style.opacity = 0.2
  document.getElementById('LN2').style.opacity = 0.2
  document.getElementById('LN3').style.opacity = 1

  document.getElementById('dicePositionL1').style.display = 'flex'
  document.getElementById('dicePositionL2').style.display = 'flex'
  document.getElementById('dicePositionL3').style.display = 'flex'

  LD1 = 1
  LD2 = 1
  LD3 = 1
}

function numberOfDicesR1() {
  document.getElementById('RN1').style.opacity = 1
  document.getElementById('RN2').style.opacity = 0.2
  document.getElementById('RN3').style.opacity = 0.2

  document.getElementById('dicePositionR1').style.display = 'flex'
  document.getElementById('dicePositionR2').style.display = 'none'
  document.getElementById('dicePositionR3').style.display = 'none'

  RD1 = 1
  RD2 = 0
  RD3 = 0
}

function numberOfDicesR2() {
  document.getElementById('RN1').style.opacity = 0.2
  document.getElementById('RN2').style.opacity = 1
  document.getElementById('RN3').style.opacity = 0.2

  document.getElementById('dicePositionR1').style.display = 'flex'
  document.getElementById('dicePositionR2').style.display = 'flex'
  document.getElementById('dicePositionR3').style.display = 'none'

  RD1 = 1
  RD2 = 1
  RD3 = 0
}

function numberOfDicesR3() {
  document.getElementById('RN1').style.opacity = 0.2
  document.getElementById('RN2').style.opacity = 0.2
  document.getElementById('RN3').style.opacity = 1

  document.getElementById('dicePositionR1').style.display = 'flex'
  document.getElementById('dicePositionR2').style.display = 'flex'
  document.getElementById('dicePositionR3').style.display = 'flex'

  RD1 = 1
  RD2 = 1
  RD3 = 1
}

// ***** WIN  **** //

function win() {
  if (
    resultlD1 * LD1 + resultlD2 * LD2 + resultlD3 * LD3 >
    resultrD1 * RD1 + resultrD2 * RD2 + resultrD3 * RD3
  ) {
    winner = 1
  }
  if (
    resultlD1 * LD1 + resultlD2 * LD2 + resultlD3 * LD3 <
    resultrD1 * RD1 + resultrD2 * RD2 + resultrD3 * RD3
  ) {
    winner = 2
  }
  if (
    resultlD1 * LD1 + resultlD2 * LD2 + resultlD3 * LD3 ==
    resultrD1 * RD1 + resultrD2 * RD2 + resultrD3 * RD3
  ) {
    winner = 0
  }
}

// **** DICE EFECT **** //

function diceEfectLeft() {
  leftButton.setAttribute('disabled', true)
  document.getElementById('leftButton').style.visibility = 'hidden'
  document.getElementById('dicePositionL1').style.opacity = 1
  if (B == 1 && A < 7) {
    console.log('check 0 left')
    if (A == 1) {
      dicePositionL1.src = d1
    } else if (A == 2) {
      dicePositionL1.src = d2
    } else if (A == 3) {
      dicePositionL1.src = d3
    } else if (A == 4) {
      dicePositionL1.src = d4
    } else if (A == 5) {
      dicePositionL1.src = d5
    } else if (A == 6) {
      dicePositionL1.src = d6
    }

    resultlD1 = A

    setTimeout(function () {
      console.log('check 1 left')
      A = Math.floor(Math.random() * 7) + 1
      diceEfectLeft()
    }, speedLeft)
  }

  if (B == 1 && A == 7) {
    console.log('check 2 left')
    B = 2
    A = 1
  }

  if (B == 2 && A < 7) {
    document.getElementById('dicePositionL2').style.opacity = 1
    if (A == 1) {
      console.log('check 4 left')
      dicePositionL2.src = d1
    } else if (A == 2) {
      dicePositionL2.src = d2
    } else if (A == 3) {
      dicePositionL2.src = d3
    } else if (A == 4) {
      dicePositionL2.src = d4
    } else if (A == 5) {
      dicePositionL2.src = d5
    } else if (A == 6) {
      dicePositionL2.src = d6
    }

    resultlD2 = A

    setTimeout(function () {
      console.log('check 5 left')
      A = Math.floor(Math.random() * 7) + 1
      diceEfectLeft()
    }, speedLeft)
  }

  if (B == 2 && A == 7) {
    console.log('check 6 left')
    B = 3
    A = 1
  }

  if (B == 3 && A < 7) {
    document.getElementById('dicePositionL3').style.opacity = 1
    console.log('check 8 left')
    if (A == 1) {
      dicePositionL3.src = d1
    } else if (A == 2) {
      dicePositionL3.src = d2
    } else if (A == 3) {
      dicePositionL3.src = d3
    } else if (A == 4) {
      dicePositionL3.src = d4
    } else if (A == 5) {
      dicePositionL3.src = d5
    } else if (A == 6) {
      dicePositionL3.src = d6
    }

    resultlD3 = A

    setTimeout(function () {
      console.log('check 9 left')
      A = Math.floor(Math.random() * 7) + 1
      diceEfectLeft()
    }, speedLeft)
  }

  if (B == 3 && A == 7) {
    console.log('check 10 left')
    EfectLeftFinish = true
    B = 0
    A = 0
    if (EfectLeftFinish == true && EfectRightFinish == true) {
      console.log('left call finishturn')
      finishTurn()
    }
  }
}

/************************************/

function diceEfectRight() {
  rightButton.setAttribute('disabled', true)
  document.getElementById('rightButton').style.visibility = 'hidden'
  document.getElementById('dicePositionR1').style.opacity = 1
  if (D == 1 && C < 7) {
    if (C == 1) {
      dicePositionR1.src = d1
    } else if (C == 2) {
      dicePositionR1.src = d2
    } else if (C == 3) {
      dicePositionR1.src = d3
    } else if (C == 4) {
      dicePositionR1.src = d4
    } else if (C == 5) {
      dicePositionR1.src = d5
    } else if (C == 6) {
      dicePositionR1.src = d6
    }

    resultrD1 = C

    setTimeout(function () {
      C = Math.floor(Math.random() * 7) + 1
      diceEfectRight()
    }, speedRight)
  }

  if (D == 1 && C == 7) {
    D = 2
    C = 1
  }

  if (D == 2 && C < 7) {
    document.getElementById('dicePositionR2').style.opacity = 1
    if (C == 1) {
      dicePositionR2.src = d1
    } else if (C == 2) {
      dicePositionR2.src = d2
    } else if (C == 3) {
      dicePositionR2.src = d3
    } else if (C == 4) {
      dicePositionR2.src = d4
    } else if (C == 5) {
      dicePositionR2.src = d5
    } else if (C == 6) {
      dicePositionR2.src = d6
    }

    resultrD2 = C

    setTimeout(function () {
      C = Math.floor(Math.random() * 7) + 1
      diceEfectRight()
    }, speedRight)
  }

  if (D == 2 && C == 7) {
    D = 3
    C = 1
  }

  if (D == 3 && C < 7) {
    document.getElementById('dicePositionR3').style.opacity = 1
    if (C == 1) {
      dicePositionR3.src = d1
    } else if (C == 2) {
      dicePositionR3.src = d2
    } else if (C == 3) {
      dicePositionR3.src = d3
    } else if (C == 4) {
      dicePositionR3.src = d4
    } else if (C == 5) {
      dicePositionR3.src = d5
    } else if (C == 6) {
      dicePositionR3.src = d6
    }

    resultrD3 = C

    setTimeout(function () {
      C = Math.floor(Math.random() * 7) + 1
      diceEfectRight()
    }, speedRight)
  }

  if (D == 3 && C == 7) {
    EfectRightFinish = true
    C = 0
    D = 0
    console.log('check 11 right')
    if (EfectLeftFinish == true && EfectRightFinish == true) {
      console.log('right call finishturn')
      finishTurn()
    }
  }
}

/***** FINISH TURN *******/

function finishTurn() {

  win()
  plus1.classList.add('plus1Show')

  if(winner == 1) {
    setTimeout(function () {
    plus1.classList.add('winner1')
  }, 1000)
  }

  if(winner == 2) {
    setTimeout(function () {
    plus1.classList.add('winner2')
  }, 1000)
  }

  setTimeout(function () {
    plus1.classList.remove('plus1Show')
  }, 1000)

  setTimeout(function () {
    plus1.classList.remove('winner1')
    plus1.classList.remove('winner2')
    if(winner==1){valueScore1=valueScore1+1}
    if(winner==2){valueScore2=valueScore2+1}
    score1.innerHTML = valueScore1
    score2.innerHTML = valueScore2
    document.getElementById('resetButton').style.display = 'flex'
  }, 1700)

}

/***** HIDE/SHOW MENU *******/

function saveConfig() {
  config.classList.remove('show')
  if (input1.value == '') {player1.innerHTML = 'Player 1'} else {player1.innerHTML = input1.value}
  if (input2.value == '') {player2.innerHTML = 'Player 2'} else {player2.innerHTML = input2.value}
}

function openConfig() {
  config.classList.add('show')
}


/***** PLAY AGAIN *******/

document.getElementById('resetButton').style.display = 'none'

function reset() {

  document.getElementById('resetButton').style.display = 'none'

  dicePositionL1.src = d0
  dicePositionL2.src = d0
  dicePositionL3.src = d0
  dicePositionR1.src = d0
  dicePositionR2.src = d0
  dicePositionR3.src = d0

  document.getElementById('dicePositionL1').style.opacity = 0.3
  document.getElementById('dicePositionL2').style.opacity = 0.3
  document.getElementById('dicePositionL3').style.opacity = 0.3
  document.getElementById('dicePositionR1').style.opacity = 0.3
  document.getElementById('dicePositionR2').style.opacity = 0.3
  document.getElementById('dicePositionR3').style.opacity = 0.3

  leftButton.removeAttribute('disabled')
  document.getElementById('leftButton').style.visibility = 'visible'
  rightButton.removeAttribute('disabled')
  document.getElementById('rightButton').style.visibility = 'visible'
  EfectLeftFinish = false
  EfectRightFinish = false

  A = 1
  B = 1
  C = 1
  D = 1
}
