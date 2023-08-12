const prev1 = document.querySelector(".prev1");
const next1 = document.querySelector(".next1");
const container1 = document.querySelector(".container1");

const prev2 = document.querySelector(".prev2");
const next2 = document.querySelector(".next2");
const container2 = document.querySelector(".container2");

const prev3 = document.querySelector(".prev3");
const next3 = document.querySelector(".next3");
const container3 = document.querySelector(".container3");

screen.width = 10;

next1.addEventListener("click",() => {
	container1.scrollLeft += 380
});


prev1.addEventListener("click",() => {
	container1.scrollLeft -= 380
});



next2.addEventListener("click",() => {
	container2.scrollLeft += 380
});


prev2.addEventListener("click",() => {
	container2.scrollLeft -= 380
});


next3.addEventListener("click",() => {
	container3.scrollLeft += 380
});


prev3.addEventListener("click",() => {
	container3.scrollLeft -= 380
});

console.log(screen.width);

if(screen.width === 400){
	next1.addEventListener("click",() => {
		container1.scrollLeft += 350
	});
	
	
	prev1.addEventListener("click",() => {
		container1.scrollLeft -= 350
	});
	
	
	
	next2.addEventListener("click",() => {
		container2.scrollLeft += 350
	});
	
	
	prev2.addEventListener("click",() => {
		container2.scrollLeft -= 350
	});
	
	
	next3.addEventListener("click",() => {
		container3.scrollLeft += 350
	});
	
	
	prev3.addEventListener("click",() => {
		container3.scrollLeft -= 350
	});
   };









/*

var carrusel = document.querySelectorAll(".carrusel");
var cont1 = -1;
var cont2 = 0;

next.addEventListener("click",() => {
	cont1++;
	container.append(carrusel[cont1]);
	console.log(cont1);

	if (cont1 === 8) {
		cont1 =-1;
	}

});

prev.addEventListener("click",() => {
	cont2++;
	container.prepend(carrusel[carrusel.length - cont2]);
	console.log(cont2);
});

*/







