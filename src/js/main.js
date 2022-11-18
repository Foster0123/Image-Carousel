const container = document.getElementById('container');
const prev      = document.getElementById('prev');
const next      = document.getElementById('next');
var img       = document.getElementById('image');
let count       = 1;

let e = document.getElementsByClassName("img");

for(let i=0; i < e.length; i++) {
	let h = e[i].clientHeight;
	let w = e[i].clientWidth;
	console.log(h, w);
}