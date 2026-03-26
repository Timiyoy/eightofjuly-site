/* ========================= */
/* FLIP CARD */
/* ========================= */

document.querySelectorAll(".card").forEach(card => {
card.addEventListener("click", () => {
card.classList.toggle("flipped");
});
});


/* ========================= */
/* MUSIC PLAYER */
/* ========================= */

const music = document.getElementById("bg-music");
const btn = document.getElementById("music-btn");
const slider = document.getElementById("music-slider");

/* PLAYLIST */
const playlist = [
"music/Prettiest Thing Ive Ever Seen.mp3",
"music/LANY - No (Official Lyric Video).mp3",
"music/LANY - Stuck (Official Lyric Video) (1).mp3",
"music/LANY - Destiny (Official Lyric Video).mp3",
"music/LANY_-_Soft_(mp3.pm).mp3"
];

let currentSong = 0;
let scrollInterval = null;

/* LOAD LAGU */
function loadSong(index){
music.src = playlist[index];
music.load(); // penting supaya lagu kebaca
}

/* LOAD LAGU PERTAMA */
loadSong(currentSong);


/* ========================= */
/* PLAY / PAUSE */
/* ========================= */

btn.addEventListener("click", () => {

if(music.paused){

music.play()
.then(() => {
btn.innerHTML = "❚❚";
})
.catch(err => {
console.log("Play error:", err);
});

/* mulai auto scroll */
scrollInterval = setInterval(() => {
window.scrollBy(0,1);
},40);

}else{

music.pause();
btn.innerHTML = "▶";

/* stop auto scroll */
clearInterval(scrollInterval);
scrollInterval = null;

}

});


/* ========================= */
/* AUTO NEXT LAGU */
/* ========================= */

music.addEventListener("ended", () => {

currentSong++;

/* balik ke awal kalau habis */
if(currentSong >= playlist.length){
currentSong = 0;
}

loadSong(currentSong);
music.play();

});


/* ========================= */
/* UPDATE SLIDER */
/* ========================= */

music.addEventListener("timeupdate", () => {

if(!isNaN(music.duration)){
slider.max = music.duration;
slider.value = music.currentTime;
}

});


/* ========================= */
/* DRAG SLIDER */
/* ========================= */

slider.addEventListener("input", () => {

music.currentTime = slider.value;

});


/* ========================= */
/* ERROR CHECK */
/* ========================= */

music.addEventListener("error", () => {
console.log("Audio error: cek nama file / path music");
});


/* ========================= */
/* HEADER SCROLL */
/* ========================= */

let lastScroll = 0;
const header = document.querySelector("header");

window.addEventListener("scroll", () => {

let currentScroll = window.pageYOffset;

if(currentScroll > lastScroll){

header.classList.add("hide");
header.classList.remove("show");

}else{

header.classList.add("show");
header.classList.remove("hide");

}

lastScroll = currentScroll;

});