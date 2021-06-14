//
//
// const xx = document.querySelector('#xx');
//
// function xxx() {
//   console.log(xx.value);
// }
//
// xx.addEventListener('change', xxx);
// // xx.addEventListener('mousedown', xxx);


const msg = new SpeechSynthesisUtterance();
let voice = [];
const voiceDropdown = document.querySelector('[name="voice"]');
const options = document.querySelectorAll('[type="range"], [name="text"]');
const speakButton = document.querySelector('#speak');
const stopButton = document.querySelector('#stop');

msg.text = document.querySelector('[name="text"]').value;

function populateVoices() {
  voices = this.getVoices();
  const voiceOptions = voices.map(voice => `<option value="${voice.name}">${voice.name}(${voice.lang})</option>`).join('');
  voiceDropdown.innerHTML = voiceOptions;
}

// speechSynthesis.speak(new SpeechSynthesisUtterance("Hello, this is your browser speaking."));
speechSynthesis.addEventListener('voiceschanged', populateVoices);
// console.log(this.getVoices());
