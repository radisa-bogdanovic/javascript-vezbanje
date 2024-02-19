"use strict";

const select = document.querySelector("#select");
const dugme = document.querySelector("button");

const image = document.querySelector("img");
image.style.display = "none";
const dugmence = document.querySelector("#dugmence");
console.log(dugmence);

const listaKorisnika = [
	"Slobo",
	"Radisa",
	"Dragana",
	"Bojana",
	"Ivana",
	"Natasa",
	"Stefan",
	"Zarija",
	"Iva",
];

const listaSlika = [
	"https://teletabisi755979240.files.wordpress.com/2018/10/teletabisi.jpg",
	"https://bhrt.ba/uploads/2023/3/Pokemoni.jpg",
	"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5URQZbRu3xMngkpDh1KcUyp8Lam3IKEYnrQ&usqp=CAU",
	"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSB6txEBb3Z04FYreuc7qEIT5dFinz2p1-4Ft5jO__wmg&s",
	"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgMBE4vyAAN5czOuQ1K86724w0-7nF4z-Liw&usqp=CAU",
];

listaKorisnika.forEach((korisnik, id) => {
	const element = document.createElement("option");
	element.textContent = id + 1 + " " + korisnik;
	select.appendChild(element);
});

function obrisiClana() {
	select.remove(select.selectedIndex);
}

dugmence.addEventListener("click", () => {
	image.style.display = "block";
	const slucajanBroj = Math.floor(Math.random() * listaSlika.length);

	image.setAttribute("src", listaSlika[slucajanBroj]);
	image.setAttribute("alt", "slika iz crtaca");
});
