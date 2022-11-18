const img = document.getElementById("image");
const prev 	= document.getElementById('prev');
const next  = document.getElementById('next');
let count   = 1;

next.addEventListener("click", (e) => {
	count++;
	img.src = `./img/bg-${count}.jpg`;
	if(count == 4){
		count = 0;
	}
	
	console.log(count);

})
prev.addEventListener("click", (e) => {
	img.src = `./img/bg-${count}.jpg`;
	if(count == 0){
		count = 5;
	}
	count--;
	console.log(count);
})
console.log(count);