let waveContainer = document.querySelector('.boxContainer')
let profileDetails = JSON.parse(localStorage.getItem('profileDetails'))



// Listening when mic button is clicked and showing waves
let isListening = false;
waveContainer.addEventListener('click', function(){

  if (isListening === false){
    recognition.start()
    isListening = true;
    wave()
    
  }
  else{
    isListening = false;
    wave()
    recognition.stop()
    brain()
    return;
  }


})

function brain(){
  let userText = final_transcript.toLowerCase()
  console.log('brain is thinking...')

  if(!userText){
    return;
  }

  else if(userText.includes('hi')){
    speak('hi there faizan')
  }

  else if(userText.includes('i woke up now----------') || userText.includes('good morning')){
    speak('good morning faizan!')
    // speak(`your life goal is ${profileDetails.goals}! you have a 6 months goal of completing ${profileDetails.target} hours! the vision of your life is ${profileDetails.visionStatement}`)

    // asking 
    speak('Are you going to college or working from home')
    final_transcript = ''
    document.querySelector("#assistantInput").value = final_transcript;
    
    
    // document.querySelector('.boxContainer').click()
    // setTimeout(1000)
    // console.log('clicking the button')
    // recognition.stop()
    // recognition.start()
    // if(document.querySelector("#assistantInput").value.includes('home')){
    //   speak(`Great then i see you are working from home`)
    // }
    // else if(document.querySelector("#assistantInput").value.includes('college')){
    //   speak(`college`)

    // }
  }
  else if(userText.includes('i am working from home')){
    speak(`Great then i see you are working from home`)
  }
  else if(userText.includes('i am going to college')){
    speak(`See you at college`)
  }

  else if(userText.includes('whats my progress')){
    let totalPomoMins = JSON.parse(localStorage.getItem('totalPomoMins'))
    speak('sure buddy!')
    speak(`you have sucessfully completed ${Math.floor(totalPomoMins/60)} hours so far, I am hoping you are on track`)
  }
  else if(userText.includes('i have come home after college')){
    speak(`welcome home Sir, I hope college was good!`)
    speak(``)
  }

  else if(userText.includes('i woke up now')){
    let time = new Date()
    console.log('iiiii')
    if(time.getHours() < 6){
      speak(`Sir you woke up at !!${time.getHours()}am and today is ${time.getDate()} `)
    }
  }
  }


function wave(){
  if(isListening){
    document.querySelector('.box1').style.animationName = 'quiet'
    document.querySelector('.box2').style.animationName = 'normal'
    document.querySelector('.box3').style.animationName = 'quiet'
    document.querySelector('.box4').style.animationName = 'loud'
    document.querySelector('.box5').style.animationName = 'quiet'
  }
  else{
    document.querySelector('.box1').style.animationName = ''
    document.querySelector('.box2').style.animationName = ''
    document.querySelector('.box3').style.animationName = ''
    document.querySelector('.box4').style.animationName = ''
    document.querySelector('.box5').style.animationName = ''
  }

}