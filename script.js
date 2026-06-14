const startDate = new Date("2026-06-06T00:00:00");

function updateCounter() {
    const now = new Date();
    const diff = now - startDate;

    const days = Math.floor(diff / (1000*60*60*24));
    const hours = Math.floor((diff / (1000*60*60)) % 24);
    const minutes = Math.floor((diff / (1000*60)) % 60);
    const seconds = Math.floor((diff / 1000) % 60);

    document.getElementById("days").innerHTML = `${days} Hari ❤️`;
    document.getElementById("time").innerHTML = `${hours} Jam ${minutes} Menit ${seconds} Detik`;
}

setInterval(updateCounter,1000);
updateCounter();

const songs = [
    "music/music1.mp3",
    "music/music2.mp3",
    "music/music3.mp3",
    "music/music4.mp3",
    "music/music5.mp3"
];

let currentSong = 0;
const audio = new Audio(songs[currentSong]);

audio.addEventListener("ended", () => {
    currentSong++;
    if(currentSong >= songs.length){
        currentSong = 0;
    }
    audio.src = songs[currentSong];
    audio.play();
});

window.addEventListener("click", () => {
    audio.play();
}, {once:true});

function toggleMusic(){
    if(audio.paused){
        audio.play();
    } else {
        audio.pause();
    }
}
