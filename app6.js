"use strict";

const dugme = document.getElementById("dugme");
const elementH1 = document.getElementById("naslov");
const input = document.getElementById("tekstinput");
const paragraf = document.getElementById("paragraph");
dugme.style.display = "none";

function promeniBoju() {
	alert(`Vasa sifra je ${input.value}`); //input.vrednost
}

dugme.addEventListener("click", promeniBoju);

elementH1.addEventListener("click", () => {
	elementH1.style.color = "green";
});

input.addEventListener("input", (event) => {
	const trenutnaVrednostInputa = event.target.value;
	if (
		trenutnaVrednostInputa.length >= 8 && //ako je duzina veca ili jednaka broju 8
		trenutnaVrednostInputa.includes("@") //ako trenutna vrednost sadrzi znak @
	) {
		paragraf.textContent = "Sifra je dobrog formata";
		paragraf.style.color = "green";
		dugme.style.display = "block";
		dugme.classList.add("nazivKlase"); //dodaj klasu
		dugme.classList.remove("nazivKlase"); //ukloni klasu
	} else {
		dugme.style.display = "none";
		paragraf.style.color = "red";
		paragraf.textContent =
			"Sifra mora imati barem 8 karaktera i znak '@' u njoj.";
	}
});

//napraviti input koji ce ispitivati validnost sifre. Poruka ce biti tipa :"Sifra je dobrog formata" i bice zelene boje
//ako sifra nije validnog formata bice crvene boje i pisace "Sifra mora imati barem 8 karaktera i znak '@' u njoj"
//ako je sifra validna pojavice se dugme ispod svega toga koje ce na klik izbaciti alert sa porukom 'cestitamo, vasa sifra je: sifra'
