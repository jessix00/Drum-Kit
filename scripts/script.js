const allKeys = document.querySelector(".keys");

//template used to generate buttons on the document
function init() {
    //this variable holds the data for our keys
    var dataKeys = [
        { keyNumber: "65", keyName: "clap", key: "A" },
        { keyNumber: "83", keyName: "hihat", key: "S" },
        { keyNumber: "68", keyName: "kick", key: "D" },
        { keyNumber: "70", keyName: "openhat", key: "F" },
        { keyNumber: "71", keyName: "boom", key: "G" },
        { keyNumber: "72", keyName: "ride", key: "H" },
        { keyNumber: "74", keyName: "snare", key: "J" },
        { keyNumber: "75", keyName: "tom", key: "K" },
        { keyNumber: "76", keyName: "tink", key: "L" }
    ];
    //TODO: Update this loop to ES6
    //this variable holds our divs once they're looped
    let text = "";
    for (var i = 0; i < dataKeys.length; i++) {
        text += '<div data-key=' + '"' + dataKeys[i].keyNumber + '"' + 'class= "key"> <audio data-key= ' + '"' + dataKeys[i].keyNumber + '"' + 'src= sounds/' + dataKeys[i].keyName + '.wav></audio> <kbd>' + dataKeys[i].key + '</kbd> <span class= sound>' + dataKeys[i].keyName + ' </span></div>'
    }
    return allKeys.innerHTML = text;
}
init();




//This will play our sound when a key is clicked.
function playing(event) {
    const audio = document.querySelector(`audio[data-key="${event.keyCode}"]`);
    const key = document.querySelector(`.key[data-key="${event.keyCode}"]`);
    if (!key) return;
    key.classList.add('playing');
    if (!audio) return; //stop the function from running if key doesnt match our audio selector 
    audio.currentTime = 0; //Rewind to start of sound.This helps the sound play as soon as the key is pushed without delays
    audio.play(); //plays audio
    console.log(audio);

}

//Listens for key to be released and removes the 'playing' class
function removeClass() {
    const target = document.querySelector(`.key[data-key="${event.keyCode}"]`);
    if (!target) return;
    target.classList.remove('playing'); //removes class of playing
}

// //event listeners
window.addEventListener('keydown', playing);
window.addEventListener('keyup', removeClass);



//WORKING ON
// //when Key is clicked
// function clickKey() {
//     const clickedAudio = Array.prototype.slice.apply(document.getElementsByTagName('audio'));
//     clickedAudio.forEach((click) => {
//         console.log(click);
//     });

// const clickedAudio = Array.prototype.slice.apply(document.getElementsByTagName('audio'));
// clickedAudio.forEach((click) => {
//         console.log(click)
//window.addEventListener('click', clickKey);