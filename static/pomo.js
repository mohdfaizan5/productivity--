
let startBtn = document.querySelector('#startBtn')
let resetBtn = document.querySelector('#resetBtn')
let minDisplay = document.querySelector('#minDisplay')
let secDisplay = document.querySelector('#secDisplay')
let sec = 0;
let min = 50;
let timeInterval;
let totalPomoMins;

// getting total worked pomodoros from local storage.
if (!localStorage.getItem('totalPomoMins')) {
  totalPomoMins = 0;
  localStorage.setItem('totalPomoMins', JSON.stringify(totalPomoMins))
}
else {
  totalPomoMins = JSON.parse(localStorage.getItem('totalPomoMins'));
}
document.getElementById('totalPomoMinsDisplay').innerHTML = Math.floor(totalPomoMins / 60)


// displaying values from local storage.
minDisplay.innerHTML = `${min}:`

startBtn.addEventListener('click', () => {
  if (document.getElementById('startBtn').innerHTML === 'Start') {
    console.log('Pomodoro started')
    startTimer()
    document.getElementById('startBtn').innerHTML = 'Stop'
  }
  else if (document.getElementById('startBtn').innerHTML === 'Stop') {
    document.getElementById('startBtn').innerHTML = 'Start'
    console.log('pomodoro stopped')
    clearInterval(timeInterval)
  }

})

// resetting the value to and interval when reset button is pressed.
resetBtn.addEventListener('click', () => {
  if (document.getElementById('startBtn').innerHTML === 'Start') {
    sec = 0;
    min = 50;
    minDisplay.innerHTML = `${min}:`
    secDisplay.innerHTML = `${sec}`


  }
})


function startTimer() {

  timeInterval = setInterval(() => {
    if (min === 0 && sec === 0) {
      clearInterval(timeInterval);
    }
    else {
      console.log(sec)
      if (sec === 0) {
        min--
        minDisplay.innerHTML = `${min}:`
        sec = 60;
      }

      // Updating local storage and totalPomoMins
      if (sec === 1) {
        totalPomoMins++ // Updating local storage value everytime min is updated
        localStorage.setItem('totalPomoMins', JSON.stringify(totalPomoMins))
        document.getElementById('totalPomoMinsDisplay').innerHTML = Math.floor(totalPomoMins / 60, 3)
      }
      sec--
      secDisplay.innerHTML = `${sec}`

    }

  }, 100)

}