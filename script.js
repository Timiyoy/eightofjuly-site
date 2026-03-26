document.querySelectorAll(".card").forEach(card => {
card.addEventListener("click", () => {
card.classList.toggle("flipped");
});
});

const music = document.getElementById("bg-music");
const btn = document.getElementById("music-btn");
const slider = document.getElementById("music-slider");

let scrollInterval = null;

/* ========================= */
/* PLAYLIST (TAMBAHAN) */
/* ========================= */

const playlist = [
"music/Prettiest Thing Ive Ever Seen.mp3",
"music/LANY - No (Official Lyric Video).mp3",
"music/LANY - Stuck (Official Lyric Video) (1).mp3",
"music/LANY_-_Soft_(mp3.pm).mp3",
"music/LANY - Destiny (Official Lyric Video).mp3"
];

let currentSong = 0;

function loadSong(index){
music.src = playlist[index];
}

/* LOAD LAGU PERTAMA */
loadSong(currentSong);


/* ========================= */
/* PLAY / PAUSE */
/* ========================= */

btn.addEventListener("click", () => {

if(music.paused){

music.play();
btn.innerHTML = "❚❚";

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

/* kalau sudah lagu terakhir → balik ke awal */
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

slider.max = music.duration;
slider.value = music.currentTime;

});


/* ========================= */
/* DRAG SLIDER */
/* ========================= */

slider.addEventListener("input", () => {

music.currentTime = slider.value;

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