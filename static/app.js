let countBtn = document.querySelector('#countBtn');
let pomoHrsDisplay = document.getElementById('pomoHrsDisplay');
let pomoProgressBar = document.querySelector('#pomoProgressBar')
let totalPomoMins;

// getting total worked pomodoros from local storage.
if (!localStorage.getItem('totalPomoMins')) {
  totalPomoMins = 0;
  localStorage.setItem('totalPomoMins', JSON.stringify(totalPomoMins))
}
else {
  totalPomoMins = JSON.parse(localStorage.getItem('totalPomoMins'));
}
pomoProgressBar.value = totalPomoMins / 60
pomoHrsDisplay.innerHTML = `${Math.floor(totalPomoMins/60)} hrs`


countBtn.addEventListener('click', () => {
  // alert('hi');
  totalPomoMins += 60;
  localStorage.setItem('totalPomoMins', JSON.stringify(totalPomoMins))
  console.log(totalPomoMins)
  pomoHrsDisplay.innerHTML = `${Math.floor(totalPomoMins/60)} hrs`
  pomoProgressBar.value = Math.floor(totalPomoMins/60)
  pomoHrsDisplay.innerHTML = `${Math.floor(totalPomoMins/60)} hrs`

})