// expose.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  const images = document.querySelectorAll("img");
  const arrayImages = Array.from(images);

  const jsConfetti = new JSConfetti();

  const hornSelector = document.getElementById("horn-select");
  const soundSelector = Array.from(document.getElementsByClassName("hidden"))[0];
  hornSelector.addEventListener('change', function() {
    const value = hornSelector.value;
    switch(value) {
      case 'air-horn':
        arrayImages[0].src = "./assets/images/air-horn.svg";
        soundSelector.src = "./assets/audio/air-horn.mp3"
        return;
      case 'car-horn':
        arrayImages[0].src = "./assets/images/car-horn.svg";
        soundSelector.src = "./assets/audio/car-horn.mp3"
        return;
      case 'party-horn':
        arrayImages[0].src = "./assets/images/party-horn.svg";
        soundSelector.src = "./assets/audio/party-horn.mp3"
        return;
      default:
        return;
    }
  });

  const playSoundButton = document.querySelector("button");
  playSoundButton.addEventListener("click", function() {
    soundSelector.play();
    if(hornSelector.value == 'party-horn') {
      jsConfetti.addConfetti();
    }
  });

  const volumeSlider = document.getElementById('volume');
  const volumeIcon = arrayImages[1];
  volumeSlider.addEventListener('input', function() {
    soundSelector.volume = volumeSlider.value / 100;
    if(volumeSlider.value == 0) {
      volumeIcon.src = "./assets/icons/volume-level-0.svg";
    }
    if(volumeSlider.value > 0 && volumeSlider.value < 33) {
      volumeIcon.src = "./assets/icons/volume-level-1.svg"
    }
    if(volumeSlider.value > 33 && volumeSlider.value < 67) {
      volumeIcon.src = "./assets/icons/volume-level-2.svg"
    }
    if(volumeSlider.value > 67) {
      volumeIcon.src = "./assets/icons/volume-level-3.svg"
    }
  })
}