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


// Greeting user
let p1 = JSON.parse(localStorage.getItem('profileDetails'))
document.querySelector('.userGreet').innerHTML = `Hi ${p1.name}!!`


// TEMP

let goal = 1080;


console.log(`6months-> ${goal}hrs \n3months-> ${goal/3}hrs \n1months-> ${goal/6}hrs \n1week-> ${goal/24}hrs`)