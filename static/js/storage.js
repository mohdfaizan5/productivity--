let totalPomoMins;

// getting total worked pomodoros from local storage.
if (!localStorage.getItem('totalPomoMins')) {
  totalPomoMins = 0;
  localStorage.setItem('totalPomoMins', JSON.stringify(totalPomoMins))
}
else {
  totalPomoMins = JSON.parse(localStorage.getItem('totalPomoMins'));
}

let totalPomoHrs = Math.floor(totalPomoMins / 60);