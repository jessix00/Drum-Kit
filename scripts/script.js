window.addEventListener('keydown', function(event) {
    const audio = document.querySelector(`audio[data-key="${event.keyCode}"]`);
    const key = document.querySelector(`.key[data-key="${event.keyCode}"]`).classList.add('playing');
    if (!audio) return; //stop the function from running if there is no 
    audio.currentTime = 0; //Rewind to start of sound.This helps the sound play as soon as the key is pushed without delays
    audio.play(); //plays audio
});

//Listens for key to be released and removes the 'playing' class
window.addEventListener('keyup', function() {
    const key = document.querySelector(`.key[data-key="${event.keyCode}"]`).classList.remove('playing');
})