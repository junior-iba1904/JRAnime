const carrusel = document.querySelectorAll(".carrusel");
const next = document.querySelector(".next");
const prev = document.querySelector(".prev");

let index = 6;

const mount = () => carrusel[index].classList.add('active');

next.addEventListener("click",() =>{
	carrusel[index].classList.remove('active');
	if (index >= carrusel.length - 1) {
		index = 0;
	} else {
		index++;
	}
	mount();
})