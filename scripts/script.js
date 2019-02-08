function playing() {
    const audio = document.querySelector(`audio[data-key="${event.keyCode}"]`);
    const key = document.querySelector(`.key[data-key="${event.keyCode}"]`);
    if (!key) return;
    key.classList.add('playing');
    if (!audio) return; //stop the function from running if key doesnt match our audio selector 
    audio.currentTime = 0; //Rewind to start of sound.This helps the sound play as soon as the key is pushed without delays
    audio.play(); //plays audio
}
//Listens for key to be released and removes the 'playing' class
function removeClass() {
    const target = document.querySelector(`.key[data-key="${event.keyCode}"]`);
    if (!target) return;
    target.classList.remove('playing'); //removes class of playing
}

//event listeners
window.addEventListener('keydown', playing);
window.addEventListener('keyup', removeClass);