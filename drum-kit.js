// listen for keypress event
window.addEventListener("keydown", playAudio);
function playAudio(e) {
  const audio = document.querySelector(`audio[data-key="${e.key}"]`);
  const key = document.querySelector(`.key[data-key="${e.key}"]`);

  if (!audio) return 0;

  // So that we don't have to wait for audio to finish playing before we can play it again
  audio.currentTime = 0;
  audio.play();
  key.classList.add("playing");
}

const keys = document.querySelectorAll(".key");

keys.forEach((key) => {
  key.addEventListener("transitionend", removePlaying);

  function removePlaying(e) {
    if (e.propertyName !== "transform") return 0;
    this.classList.remove("playing");
  }
});
