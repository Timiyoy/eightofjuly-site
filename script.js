/* FLIP CARD */

document.querySelectorAll(".card").forEach(card => {
card.addEventListener("click", () => {
card.classList.toggle("flipped");
});
});


/* MUSIC PLAYER */

const music = document.getElementById("bg-music");
const btn = document.getElementById("music-btn");

let scrollInterval = null;

/* PLAY / PAUSE */

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


/* STOP SCROLL SAAT LAGU SELESAI */

music.addEventListener("ended", () => {

clearInterval(scrollInterval);
scrollInterval = null;

btn.innerHTML = "▶";

});


/* HEADER SCROLL EFFECT */

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