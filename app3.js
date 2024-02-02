"use strict";

let broj = 0;
//funkcije
let zbir = 123132;
function NazivFunkcije(a, b, c) {
	console.log(arguments);
	let zbir = a + b + c;
	console.log(zbir);
	console.log(`Hej, zbir broja ${a} i ${b} i ${c} je ${zbir}`);
}

const drugaFunkcija = function (a, b, c) {
	let zbir = a + b + c;
	return zbir;
};

const trecaFunkcija = () => {
	broj++; //broj =broj+1
	console.log(`Broj je:${broj}`);
};

const vrednostPrva = NazivFunkcije(5, 23, 34);

const vrednostZbira = drugaFunkcija(44, 22, 33);

console.log(`Vrednost zbira je ${vrednostPrva}`);

trecaFunkcija();

///Za domaci : Napraviti objekat koji ima ime, prezime, godine listu srecnih brojeva
// Napraviti funkciju koja ce da console.log('cao ja sam ime prezivam se prezime i imam godine, godina')
// Napraviti funkciju koja ce da vrati zbir 3 broja i da bude poruka Zbir broj1,bro2 i broj3 je jednak zbir.
// funkcija koja ce da vrati i console.log listu srecnih brojeva
// objekat ces napraviti iznad svega
// i return ide na kraj
