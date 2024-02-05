"use strict";

// console.log("Cao ja sam slobo");

// window.console.log("hehe");

var mojeIme = "Radisa";

const broj = 3123; //ne moze da se menja tokom vremena
let mojeIme3 = "Radisa"; //moze da se menja tokom vremena

const mojeIme4 = "hehe";

let mojeIme5;

let mojeIMe7 = null;

mojeIme5 = 434;

console.log(mojeIme5);

mojeIme5 = "op't dodeljenjo";

("string"); // string- sve sto se nalazi u znacima navodnika "" '' ``
("d"); // char karakter jedan string
32131.43; // brojevi
("3123321");
undefined; // to je kada varijabla nema vrednost
null; //
// boolean; // true ili false
// true === istina;
// false === laz;

const osobablabla = {
	ime: "Milojica",
};
//  [0][1][2][3][4]
const niz = [2, 3, 4, 6, 7];
const prviIzNiza = niz[0]; //2

const osoba1 = {
	ime: "slobo", // 'ime'
	prezime: "BOGDANOVIC", // 'prezime'
	posao: {
		kuvar: "2006-2015",
		striptizeta: "     2016-  ",
	},
	"srecni brojevi": [14, 5, 50, 7, 11, 22],
};

let brojJeVeciOdTri = 5 < 3;

const dodatnaVrednost = {
	godine: 23,
};
// let niz = [14, 5, 6, 7, 8, 9, 11, 123];
// let niz2 = ["cao", "zravo", "zbogom"];
// niz.push(25); //dodaje element na kraj niza
// niz.lenght(); //ovo vraca duzinu niza
// niz.pop(); //uklanja element sa kraja niza
// niz.fill(44) // prolazi kroz ceo niz i popunjava niz sa vrednostima
// niz.shift() // uklanja element sa pocetka niza
//niz.unshift(44) //dodaje element na pocetak niza
// niz.reverse(); // obrne niz 1,2,3=>3,2,1
//niz.toString(); //preformatira niz u string

// console.log(
// 	`Moje ime je ${osoba1[
// 		"ime"
// 	].toUpperCase()}, prezivam se ${osoba1.prezime.toLowerCase()} i radim kao striptizeta od ${osoba1.posao.striptizeta

// 		.replace("-", ".")
// 		.trim()} godine. Njegovi srecni brojevi su ${osoba1["srecni brojevi"]
// 		.sort()
// 		.join(" ")}`
// );
// console.log(osoba1["srecni brojevi"].slice(0, 4));
// console.log(osoba1["srecni brojevi"]);

//Object.keys(osoba1) // vraca NIZ kljuceva koji ovaj objekat sadrzi
//Object.values(osoba1)// vraca NIZ vrednosti od kljuceva koje osoba1 sadrzi
//Object.entries(osoba1)// vraca niz za svaki par od nekog objekta koji sadrzi na prvom clanu [0] kljuc a na drugom clanu [1] vrednost
//Object.assign(osoba1,dodatnoPolje)'
// osoba1.hasOwnProperty('ime') //ova metoda prolazi kroz osoba1 objekat i ispituje da li postoji kljuc 'ime' u njemu
// console.log(Object.assign(osoba1, dodatnaVrednost));
console.log(osoba1.posao.hasOwnProperty("striptizeta"));
