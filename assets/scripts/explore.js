// explore.js

window.addEventListener('DOMContentLoaded', init);

function populateVoices() {
  console.log('triggered');
  const voiceSelect = document.getElementById('voice-select');
  let listVoices = speechSynthesis.getVoices();
  for(let i = 0;i < listVoices.length;i++) {
    const newOption = document.createElement('option');
    newOption.textContent = `${listVoices[i].name} (${listVoices[i].lang})`;

    if(listVoices[i].default) {
      newOption.textContent += " - DEFAULT";
    }

    newOption.setAttribute("data-lang", listVoices[i].lang);
    newOption.setAttribute("data-name", listVoices[i].name);
    voiceSelect.appendChild(newOption);
  }

  voiceSelect.style.display = 'none';
  voiceSelect.style.display = 'block';
}

function init() { 

  const synth = window.speechSynthesis;

  synth.addEventListener('voiceschanged', populateVoices);

  populateVoices();

  const talkButton = document.querySelector('button');
  talkButton.addEventListener("click", function() {
    const contents = document.getElementById('text-to-speak');
    const selectedOption = voiceSelect.options[voiceSelect.selectedIndex].getAttribute("data-name");
    const utterance = new SpeechSynthesisUtterance(contents.value);
    for(let i = 0; i < listVoices.length;i++) {
      if(listVoices[i].name === selectedOption) {
        utterance.voice = listVoices[i];
      }
    }
    synth.speak(utterance);

    const face = document.querySelector('img');
    face.src = './assets/images/smiling-open.png';

    utterance.addEventListener("end", function() {
      face.src = './assets/images/smiling.png';
    });

  })
}