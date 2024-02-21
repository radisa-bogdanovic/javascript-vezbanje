"use strict";

const select = document.querySelector("#select");
const dugme = document.querySelector("button");
const image = document.querySelector("img");
const dugmence = document.querySelector("#dugmence");
const levoDugme = document.querySelector(".levoDeda");
const desnoDugme = document.querySelector(".desnoBaba");
let trenutniIndex = 0;

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

function promeniSliku(index) {
	image.setAttribute("src", listaSlika[index]); /// listaSlika[3]
	image.setAttribute("alt", "slika iz crtaca");
}

dugmence.addEventListener("click", () => {
	const slucajanBroj = Math.floor(Math.random() * listaSlika.length); // sa ovom metodom dobijamo slucajan broj od 0 do 4 posto nam je listaSlika.lenght = 5
	promeniSliku(slucajanBroj);
});

levoDugme.addEventListener("click", () => {
	if (trenutniIndex === 0) {
		trenutniIndex = listaSlika.length - 1;
	} else {
		trenutniIndex--; /// trenutniIndex= trenutniIndex-1 ==>smanjujemo broj za jedan
	}
	promeniSliku(trenutniIndex);
});

desnoDugme.addEventListener("click", () => {
	if (trenutniIndex === listaSlika.length - 1) {
		trenutniIndex = 0;
	} else {
		trenutniIndex++; ///trenutniIndex= trenutniINdex+1 ==> povecavamo broj za jedan
	}
	promeniSliku(trenutniIndex);
});

//ako znamo da ce za trenutniIndex-- ici ispod nule mi vracamo taj index na kraj da ne bismo dobili negativan index
//ako znamo da ce za trenutniIndex++ ici preko zadnjeg indexa iz niza (4) onda vracamo taj index da bude na nuli
