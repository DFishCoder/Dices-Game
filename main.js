
/************************* VARIABLES *****************************/

const color1L = document.querySelector('#color1L')
const color2L = document.querySelector('#color2L')
const color3L = document.querySelector('#color3L')
const color4L = document.querySelector('#color4L')

const color1R = document.querySelector('#color1R')
const color2R = document.querySelector('#color2R')
const color3R = document.querySelector('#color3R')
const color4R = document.querySelector('#color4R')

var leftColorChosen = false
var rightColorChosen = false

var LD1 = 0, LD2 = 0, LD3 = 0, RD1 = 0, RD2 = 0, RD3 = 0

const rightButton = document.querySelector('#rightButton')
const leftButton = document.querySelector('#leftButton')

var winner

var A=1, B=1, C=1, D=1, EfectLeftFinish, EfectRightFinish

var resultlD1, resultlD2, resultlD3, resultrD1, resultrD2, resultrD3

var speed = 250



/*************************  FUNCTIONS ***************************/

// *****  CHANGE COLORS  ****** //

function color1Left() {
  color1L.style.opacity = 1
  color2L.style.opacity = 0.2
  color3L.style.opacity = 0.2
  color4L.style.opacity = 0.2

  leftColorChosen = true

  document.getElementById('lD1').style.backgroundColor = 'red'
  document.getElementById('lD2').style.backgroundColor = 'red'
  document.getElementById('lD3').style.backgroundColor = 'red'

  document.getElementById('lD1').style.color = 'white'
  document.getElementById('lD2').style.color = 'white'
  document.getElementById('lD3').style.color = 'white'
}

function color2Left() {
  color1L.style.opacity = 0.2
  color2L.style.opacity = 1
  color3L.style.opacity = 0.2
  color4L.style.opacity = 0.2

  leftColorChosen = true

  document.getElementById('lD1').style.backgroundColor = 'yellow'
  document.getElementById('lD2').style.backgroundColor = 'yellow'
  document.getElementById('lD3').style.backgroundColor = 'yellow'

  document.getElementById('lD1').style.color = 'black'
  document.getElementById('lD2').style.color = 'black'
  document.getElementById('lD3').style.color = 'black'
}

function color3Left() {
  color1L.style.opacity = 0.2
  color2L.style.opacity = 0.2
  color3L.style.opacity = 1
  color4L.style.opacity = 0.2

  leftColorChosen = true

  document.getElementById('lD1').style.backgroundColor = 'blue'
  document.getElementById('lD2').style.backgroundColor = 'blue'
  document.getElementById('lD3').style.backgroundColor = 'blue'

  document.getElementById('lD1').style.color = 'white'
  document.getElementById('lD2').style.color = 'white'
  document.getElementById('lD3').style.color = 'white'
}

function color4Left() {
  color1L.style.opacity = 0.2
  color2L.style.opacity = 0.2
  color3L.style.opacity = 0.2
  color4L.style.opacity = 1

  leftColorChosen = true

  document.getElementById('lD1').style.backgroundColor = 'green'
  document.getElementById('lD2').style.backgroundColor = 'green'
  document.getElementById('lD3').style.backgroundColor = 'green'

  document.getElementById('lD1').style.color = 'white'
  document.getElementById('lD2').style.color = 'white'
  document.getElementById('lD3').style.color = 'white'
}


function color1Right() {
  color1R.style.opacity = 1
  color2R.style.opacity = 0.2
  color3R.style.opacity = 0.2
  color4R.style.opacity = 0.2

  rightColorChosen = true

  document.getElementById('rD1').style.backgroundColor = 'red'
  document.getElementById('rD2').style.backgroundColor = 'red'
  document.getElementById('rD3').style.backgroundColor = 'red'

  document.getElementById('rD1').style.color = 'white'
  document.getElementById('rD2').style.color = 'white'
  document.getElementById('rD3').style.color = 'white'
}

function color2Right() {
  color1R.style.opacity = 0.2
  color2R.style.opacity = 1
  color3R.style.opacity = 0.2
  color4R.style.opacity = 0.2

  rightColorChosen = true

  document.getElementById('rD1').style.backgroundColor = 'yellow'
  document.getElementById('rD2').style.backgroundColor = 'yellow'
  document.getElementById('rD3').style.backgroundColor = 'yellow'

  document.getElementById('rD1').style.color = 'black'
  document.getElementById('rD2').style.color = 'black'
  document.getElementById('rD3').style.color = 'black'
}

function color3Right() {
  color1R.style.opacity = 0.2
  color2R.style.opacity = 0.2
  color3R.style.opacity = 1
  color4R.style.opacity = 0.2

  rightColorChosen = true

  document.getElementById('rD1').style.backgroundColor = 'blue'
  document.getElementById('rD2').style.backgroundColor = 'blue'
  document.getElementById('rD3').style.backgroundColor = 'blue'

  document.getElementById('rD1').style.color = 'white'
  document.getElementById('rD2').style.color = 'white'
  document.getElementById('rD3').style.color = 'white'
}

function color4Right() {
  color1R.style.opacity = 0.2
  color2R.style.opacity = 0.2
  color3R.style.opacity = 0.2
  color4R.style.opacity = 1

  rightColorChosen = true

  document.getElementById('rD1').style.backgroundColor = 'green'
  document.getElementById('rD2').style.backgroundColor = 'green'
  document.getElementById('rD3').style.backgroundColor = 'green'

  document.getElementById('rD1').style.color = 'white'
  document.getElementById('rD2').style.color = 'white'
  document.getElementById('rD3').style.color = 'white'
}

// ********  NUMBER OF DICES  ****** //


function numberOfDicesL1() {
  document.getElementById('LN1').style.opacity = 1
  document.getElementById('LN2').style.opacity = 0.2
  document.getElementById('LN3').style.opacity = 0.2

  document.getElementById('lD1').style.display = 'flex'
  document.getElementById('lD2').style.display = 'none'
  document.getElementById('lD3').style.display = 'none'

  LD1 = 1
  LD2 = 0
  LD3 = 0
}

function numberOfDicesL2() {
  document.getElementById('LN1').style.opacity = 0.2
  document.getElementById('LN2').style.opacity = 1
  document.getElementById('LN3').style.opacity = 0.2

  document.getElementById('lD1').style.display = 'flex'
  document.getElementById('lD2').style.display = 'flex'
  document.getElementById('lD3').style.display = 'none'

  LD1 = 1
  LD2 = 1
  LD3 = 0
}

function numberOfDicesL3() {
  document.getElementById('LN1').style.opacity = 0.2
  document.getElementById('LN2').style.opacity = 0.2
  document.getElementById('LN3').style.opacity = 1

  document.getElementById('lD1').style.display = 'flex'
  document.getElementById('lD2').style.display = 'flex'
  document.getElementById('lD3').style.display = 'flex'

  LD1 = 1
  LD2 = 1
  LD3 = 1
}

function numberOfDicesR1() {
  document.getElementById('RN1').style.opacity = 1
  document.getElementById('RN2').style.opacity = 0.2
  document.getElementById('RN3').style.opacity = 0.2

  document.getElementById('rD1').style.display = 'flex'
  document.getElementById('rD2').style.display = 'none'
  document.getElementById('rD3').style.display = 'none'

  RD1 = 1
  RD2 = 0
  RD3 = 0
}

function numberOfDicesR2() {
  document.getElementById('RN1').style.opacity = 0.2
  document.getElementById('RN2').style.opacity = 1
  document.getElementById('RN3').style.opacity = 0.2

  document.getElementById('rD1').style.display = 'flex'
  document.getElementById('rD2').style.display = 'flex'
  document.getElementById('rD3').style.display = 'none'

  RD1 = 1
  RD2 = 1
  RD3 = 0
}

function numberOfDicesR3() {
  document.getElementById('RN1').style.opacity = 0.2
  document.getElementById('RN2').style.opacity = 0.2
  document.getElementById('RN3').style.opacity = 1

  document.getElementById('rD1').style.display = 'flex'
  document.getElementById('rD2').style.display = 'flex'
  document.getElementById('rD3').style.display = 'flex'

  RD1 = 1
  RD2 = 1
  RD3 = 1
}

// ******* THROW DICES  **** //

function throwLefttDices() {
  if (LD1 + LD2 + LD3 == 0) {
    alert('Please, chose the number of dices you need')
  } else {
    if (leftColorChosen == false) {
      alert('Please, chose the color you want')
    } else {
      leftButton.setAttribute('disabled', true)
      diceEfectLeft()
    }
  }
}

function throwRightDices() {
  if (RD1 + RD2 + RD3 == 0) {
    alert('Please, chose the number of dices you need')
  } else {
    if (rightColorChosen == false) {
      alert('Please, chose the color you want')
    } else {
      rightButton.setAttribute('disabled', true)
      diceEfectRight()
    }
  }
}

// ***** WIN  **** //

function win() {
  if (
    resultlD1 * LD1 + resultlD2 * LD2 + resultlD3 * LD3 >
    resultrD1 * RD1 + resultrD2 * RD2 + resultrD3 * RD3
  ) {
    winner = 'Player 1 won !'
  }
  if (
    resultlD1 * LD1 + resultlD2 * LD2 + resultlD3 * LD3 <
    resultrD1 * RD1 + resultrD2 * RD2 + resultrD3 * RD3
  ) {
    winner = 'Player 2 won !'
  }
  if (
    resultlD1 * LD1 + resultlD2 * LD2 + resultlD3 * LD3 ==
    resultrD1 * RD1 + resultrD2 * RD2 + resultrD3 * RD3
  ) {
    winner = 'Thas is a drow !'
  }
}

// **** DICE EFECT **** //

function diceEfectLeft() {
  if (B == 1 && A < 7) {
    if (A < 7) {
      lD1.innerHTML = A
      resultlD1 = A
    }
    A = Math.floor(Math.random() * 7) + 1

    setTimeout(function () {
      diceEfectLeft()
    }, speed)
  }

  if (B == 1 && A == 7) {
    B = 2
    A = 1

    setTimeout(function () {
      diceEfectLeft()
    }, speed)
  }

  if (B == 2 && A < 7) {
    if (A < 7) {
      lD2.innerHTML = A
      resultlD2 = A
    }
    A = Math.floor(Math.random() * 7) + 1

    setTimeout(function () {
      diceEfectLeft()
    }, speed)
  }

  if (B == 2 && A == 7) {
    B = 3
    A = 1

    setTimeout(function () {
      diceEfectLeft()
    }, speed)
  }

  if (B == 3 && A < 7) {
    if (A < 7) {
      lD3.innerHTML = A
      resultlD3 = A
    }
    A = Math.floor(Math.random() * 7) + 1

    setTimeout(function () {
      diceEfectLeft()
    }, speed)
  }

  if (B == 3 && A == 7) {
    finishTurn()
    EfectLeftFinish = true
  }
}

function diceEfectRight() {
  if (D == 1 && C < 7) {
    if (C < 7) {
      rD1.innerHTML = C
      resultrD1 = C
    }
    C = Math.floor(Math.random() * 7) + 1

    setTimeout(function () {
      diceEfectRight()
    }, speed)
  }

  if (D == 1 && C == 7) {
    D = 2
    C = 1

    setTimeout(function () {
      diceEfectRight()
    }, speed)
  }

  if (D == 2 && C < 7) {
    if (C < 7) {
      rD2.innerHTML = C
      resultrD2 = C
    }
    C = Math.floor(Math.random() * 7) + 1

    setTimeout(function () {
      diceEfectRight()
    }, speed)
  }

  if (D == 2 && C == 7) {
    D = 3
    C = 1

    setTimeout(function () {
      diceEfectRight()
    }, speed)
  }

  if (D == 3 && C < 7) {
    if (C < 7) {
      rD3.innerHTML = C
      resultrD3 = C
    }
    C = Math.floor(Math.random() * 7) + 1

    setTimeout(function () {
      diceEfectRight()
    }, speed)
  }

  if (D == 3 && C == 7) {
    finishTurn()
    EfectRightFinish = true
  }
}

/***** FINISH TURN *******/

function finishTurn() {
  setTimeout(function () {
    if (EfectLeftFinish == 1 && EfectRightFinish == 1) {
      win()

      lD1.innerHTML = '#'
      lD2.innerHTML = '#'
      lD3.innerHTML = '#'
      rD1.innerHTML = '#'
      rD2.innerHTML = '#'
      rD3.innerHTML = '#'

      leftButton.removeAttribute('disabled')
      rightButton.removeAttribute('disabled')
      EfectLeftFinish = false
      EfectRightFinish = false

      A = 1
      B = 1
      C = 1
      D = 1

      alert(winner)
    }
  }, speed*5)
}
