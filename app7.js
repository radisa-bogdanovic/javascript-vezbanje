"use strickt";

const kontejner = document.getElementById("kontejner");
console.log(kontejner);

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

// for (let i = 0; i < listaKorisnika.length; i++) {
// 	console.log(listaKorisnika[i]); //konzole log trenutnog korisnika koji se nalazi u petlji
// 	const korisnik = document.createElement("h3"); // kreiramo elemnt p za svakog korisnika
// 	korisnik.textContent = listaKorisnika[i]; // tom elementu dodajemo tekst cao...
// 	kontejner.appendChild(korisnik); //ubaci u div elemnt taj novi element p
// }

listaKorisnika.map((imeOsobe) => {
	console.log(imeOsobe); //konzole log trenutnog korisnika koji se nalazi u petlji
	const korisnik = document.createElement("h3"); // kreiramo elemnt p za svakog korisnika
	korisnik.textContent = imeOsobe; // tom elementu dodajemo tekst cao...
	kontejner.appendChild(korisnik); //ubaci u div elemnt taj novi element p
});
