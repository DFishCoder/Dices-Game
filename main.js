// *****  CHANGE COLORS  ****** //

const color1L = document.querySelector('#color1L')
const color2L = document.querySelector('#color2L')
const color3L = document.querySelector('#color3L')
const color4L = document.querySelector('#color4L')

function color1Left() {
  color1L.style.opacity = 1
  color2L.style.opacity = 0.2
  color3L.style.opacity = 0.2
  color4L.style.opacity = 0.2

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

  document.getElementById('lD1').style.backgroundColor = 'green'
  document.getElementById('lD2').style.backgroundColor = 'green'
  document.getElementById('lD3').style.backgroundColor = 'green'

  document.getElementById('lD1').style.color = 'white'
  document.getElementById('lD2').style.color = 'white'
  document.getElementById('lD3').style.color = 'white'
}

const color1R = document.querySelector('#color1R')
const color2R = document.querySelector('#color2R')
const color3R = document.querySelector('#color3R')
const color4R = document.querySelector('#color4R')

function color1Right() {
  color1R.style.opacity = 1
  color2R.style.opacity = 0.2
  color3R.style.opacity = 0.2
  color4R.style.opacity = 0.2

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
}

function numberOfDicesL2() {
  document.getElementById('LN1').style.opacity = 0.2
  document.getElementById('LN2').style.opacity = 1
  document.getElementById('LN3').style.opacity = 0.2

  document.getElementById('lD1').style.display = 'flex'
  document.getElementById('lD2').style.display = 'flex'
  document.getElementById('lD3').style.display = 'none'
}

function numberOfDicesL3() {
  document.getElementById('LN1').style.opacity = 0.2
  document.getElementById('LN2').style.opacity = 0.2
  document.getElementById('LN3').style.opacity = 1

  document.getElementById('lD1').style.display = 'flex'
  document.getElementById('lD2').style.display = 'flex'
  document.getElementById('lD3').style.display = 'flex'
}

function numberOfDicesR1() {
  document.getElementById('RN1').style.opacity = 1
  document.getElementById('RN2').style.opacity = 0.2
  document.getElementById('RN3').style.opacity = 0.2

  document.getElementById('rD1').style.display = 'flex'
  document.getElementById('rD2').style.display = 'none'
  document.getElementById('rD3').style.display = 'none'
}

function numberOfDicesR2() {
  document.getElementById('RN1').style.opacity = 0.2
  document.getElementById('RN2').style.opacity = 1
  document.getElementById('RN3').style.opacity = 0.2

  document.getElementById('rD1').style.display = 'flex'
  document.getElementById('rD2').style.display = 'flex'
  document.getElementById('rD3').style.display = 'none'
}

function numberOfDicesR3() {
  document.getElementById('RN1').style.opacity = 0.2
  document.getElementById('RN2').style.opacity = 0.2
  document.getElementById('RN3').style.opacity = 1

  document.getElementById('rD1').style.display = 'flex'
  document.getElementById('rD2').style.display = 'flex'
  document.getElementById('rD3').style.display = 'flex'
}


// ******* THROW DICES  **** //


