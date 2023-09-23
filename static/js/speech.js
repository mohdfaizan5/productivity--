function speak(text) {

  // Create a new speechSynthesisU
  let utterance = new SpeechSynthesisUtterance();

  // Changing voice to girl
  // utterance.voice = window.speechSynthesis.getVoices()[5]; //Eng Google UK Female.

  // speak what arg is passed to it.
  utterance.text = text

  // Finally speaking
  window.speechSynthesis.speak(utterance)
  
  utterance.onstart = (event) => {
    console.log('started speaking')
  }

}


// Speech recognition
// listening 
let recognition = new webkitSpeechRecognition();
let final_transcript = "";

// this will continously listen to the user
recognition.continuous = true;

// setting lang en-Global
recognition.lang = 'en-GB';

// This event does when object starts 
recognition.onstart = () => {
  console.log('Started Listening...')

  // Checking whether user is online
  if (!navigator.onLine) {
    console.log(`You're offline!!!!`)
  }
  // let textContent = `Your network status is ${navigator.onLine ? "Online" : "Offline"} `;
  // console.log(textContent);
}

// This event will trigger when listneing is stopped
recognition.onend = () => {
  final_transcript += '. '
}

// For continous listning:
recognition.continuous = true;

// This is the final text that is been displayed when everything is processed
recognition.onresult = (event) => {

  let interim_transcript = "";

  for (let i = event.resultIndex; i < event.results.length; ++i) {
    if (event.results[i].isFinal) {
      final_transcript += event.results[i][0].transcript;
    } else {
      interim_transcript += event.results[i][0].transcript;
    }
  }

  console.log(final_transcript)


  if (final_transcript.includes('clear input')) {
    final_transcript = ''
    console.log('clearing input')

  }
  else if (final_transcript.includes('hey stop')) {
    document.querySelector('.boxContainer').click()
    console.log('stoping')
    // final_transcript = ''
  }
  document.querySelector("#assistantInput").value = final_transcript;


}  
