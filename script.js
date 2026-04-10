const matchDate = new Date("April 30, 2026 21:30:00").getTime();

setInterval(() => {
const now = new Date().getTime();
const diff = matchDate - now;

const d = Math.floor(diff/(1000*60*60*24));
const h = Math.floor((diff/(1000*60*60))%24);
const m = Math.floor((diff/(1000*60))%60);

document.getElementById("countdown").innerHTML =
d+"d "+h+"h "+m+"m";
},1000);