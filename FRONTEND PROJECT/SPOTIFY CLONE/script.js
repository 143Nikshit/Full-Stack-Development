console.log("welcome to Spotify");

// Initialize the Variables
let songIndex = 0;
let audioElement = new Audio('./Spotify Clone/songs/1.mp3');
let masterPlay = document.getElementById('masterplay');
let myProgressBar = document.getElementById('myProgressBar');
let songs = [
    {songName: "Salam-e-Ishq", filePath: "./Spotify Clone/songs/1.mp3", coverPath: './Spotify Clone/covers/1.jpg'},
    {songName: "Salam-e-Ishq", filePath: "./Spotify Clone/songs/1.mp3", coverPath: './Spotify Clone/covers/1.jpg'},
    {songName: "Salam-e-Ishq", filePath: "./Spotify Clone/songs/1.mp3", coverPath: './Spotify Clone/covers/1.jpg'},
    {songName: "Salam-e-Ishq", filePath: "./Spotify Clone/songs/1.mp3", coverPath: './Spotify Clone/covers/1.jpg'},
    {songName: "Salam-e-Ishq", filePath: "./Spotify Clone/songs/1.mp3", coverPath: './Spotify Clone/covers/1.jpg'},
    {songName: "Salam-e-Ishq", filePath: "./Spotify Clone/songs/1.mp3", coverPath: './Spotify Clone/covers/1.jpg'},
]

// audioElement.play();

// Handle play/pause click
masterPlay.addEventListener('click', ()=>{
    
})
// listen to Events
myProgressBar.addEventListener('timeupdate', ()=>{
    console.log('timeupdate');
})