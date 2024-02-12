"use strict";

const dugme = document.getElementById("dugme");
const elementH1 = document.getElementById("naslov");
const input = document.getElementById("tekstinput");
const paragraf = document.getElementById("paragraph");

function promeniBoju() {
	if (input.style.display === "block") {
		input.style.display = "none";
	} else {
		input.style.display = "block";
	}
}

dugme.addEventListener("click", promeniBoju);

elementH1.addEventListener("click", () => {
	elementH1.style.color = "green";
});

input.addEventListener("input", (event) => {
	paragraf.textContent = event.target.value;

	if (paragraf.textContent.length > 10) {
		elementH1.style.display = "none";
	} else {
		elementH1.style.display = "block";
	}
});

//napraviti input koji ce ispitivati validnos sifre. Poruka ce biti tipa :"Sifra je dobrog fromata" i bice zelene boje
//ako sifra nije validnog formata bice crvene boje i pisace "Sifra mora imati barem 8 karaktera i znak '@' u njoj"
//ako je sifra validna pojavice se dugme ispod svega toga koje ce na klik izbaciti alert sa porukom 'cestitamo, vasa sifra je: sifra'
