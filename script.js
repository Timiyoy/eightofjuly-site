document.querySelectorAll(".card").forEach(card => {
card.addEventListener("click", () => {
card.classList.toggle("flipped");
});
});

const music = document.getElementById("bg-music");
const btn = document.getElementById("music-btn");
const slider = document.getElementById("music-slider");

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

/* UPDATE SLIDER */

music.addEventListener("timeupdate", () => {

slider.max = music.duration;
slider.value = music.currentTime;

});

/* DRAG SLIDER */

slider.addEventListener("input", () => {

music.currentTime = slider.value;

});

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