// for (let i = 1; i < 10; i++) {
// 	console.log(i);
// }

//while petlja
let i = 0;
// while (i < 5) {
// 	console.log(i);
// 	i++;
// }

// do {
// 	i++;
// 	console.log(i);
// } while (i < 5);

// const objekat = {
// 	ime: "Slobo",
// 	prezime: "Bogdanovic",
// 	godine: 17,
// };

// for (let kljuc in objekat) {
// 	console.log(kljuc + ":" + objekat[kljuc]);
// }

const niz = [1, 23, 4, 4, 4, 5, 6, 25, 10, 22, 134];

// for (let broj of niz) {
// 	console.log(broj);
// }

// for (let i = 0; i < niz.length; i++) {
// 	console.log(niz[i]);
// }

const parniBrojevi = niz.filter((broj) => {
	return broj === 4;
}); ///opomeni me sloboooo

const uvecaniBrojevi = niz.map((broj) => broj + 1231);

// niz.forEach((num) => console.log(num));

const specijalanBroj = niz.find((broj) => {
	return broj === 4;
});

console.log(specijalanBroj);

///filter metoda ce vratiti svaku vrednost koja je istinita za napisani izraz broj===4
///u slucaju da filter ne pronadje ni jednu vrednost koja se podudara sa izrazom vratice prazan niz []
///find metoda ce vratiti samo jednu vrednost koja je istinita za napisani izraz broj ===4
/// u slucaju da find metoda ne pronadje ni jednu vrednost koja se podudara sa izrazom vratice undefined

///napraviti niz 5 objekata. svaki objekat bi trebao da sadrzi ime,prezime,godine, pol i id.
///Sa metodom filter ces prvo izvuci sve clanove koji su zenski.
///Sa metodom find ces izvuci korisnika koji ima id 4
///Sa metodom forEach ces console.log(Sva imena iz objekata)
/// sa petljom  for (obicnom) ces proci za svaki objekat iz niza i napisati poruku "'Osoba ime' je 'pol' i id osobe je 'id'"
