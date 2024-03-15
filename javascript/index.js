const chronometer = new Chronometer();

// get the buttons:
const btnLeftElement = document.getElementById('btnLeft');
const btnRightElement = document.getElementById('btnRight');

// get the DOM elements that will serve us to display the time:
const minDecElement = document.getElementById('minDec');
const minUniElement = document.getElementById('minUni');
const secDecElement = document.getElementById('secDec');
const secUniElement = document.getElementById('secUni');
const milDecElement = document.getElementById('milDec');
const milUniElement = document.getElementById('milUni');
const splitsElement = document.getElementById('splits');

function printTime() {
  printMinutes()
  printSeconds()
}

function printMinutes() {
  minDecElement.innerHTML = chronometer.computeTwoDigitNumber(chronometer.getMinutes()).charAt(0) 
  minUniElement.innerHTML = chronometer.computeTwoDigitNumber(chronometer.getMinutes()).charAt(1)
}

function printSeconds() {
  
  secDecElement.innerHTML = chronometer.computeTwoDigitNumber(chronometer.getSeconds()).charAt(0) 
  secUniElement.innerHTML = chronometer.computeTwoDigitNumber(chronometer.getSeconds()).charAt(1) 

}

// ==> BONUS
function printMilliseconds() {
  
}

function printSplit() {
  const newLi = document.createElement('li')
  newLi.className = 'list-item'
  newLi.innerHTML = chronometer.split()
  splitsElement.appendChild(newLi)
}

function clearSplits() {
  splitsElement.innerHTML = ''
}

function setStopBtn() {
  btnLeftElement.innerHTML = 'STOP'
  btnLeftElement.className = 'btn stop'

  
  console.log(btnLeftElement)
}

function setSplitBtn() {
  btnRightElement.innerHTML = 'SPLIT'
  btnRightElement.className = 'btn split'
  
}

function setStartBtn() {
  btnLeftElement.innerHTML = 'START'
  btnLeftElement.className = 'btn start'

  
  console.log(btnLeftElement)
}

function setResetBtn() {
  btnRightElement.innerHTML = 'RESET'
  btnRightElement.className = 'btn reset'
}

// Start/Stop Button
btnLeftElement.addEventListener('click', () => {
  
  if(btnLeftElement.classList.contains('start')) {
    setStopBtn()
    setSplitBtn()
    chronometer.start(printTime)
    

  } else {
    setStartBtn()
    setResetBtn()
    chronometer.stop()
    
  }

});

// Reset/Split Button
btnRightElement.addEventListener('click', () => {
  
  if(btnRightElement.classList.contains('split')) {

    printSplit()

  } else {

    clearSplits()
    chronometer.reset()
    printTime()
  }

});
