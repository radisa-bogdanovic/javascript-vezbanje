"use strict";

const select = document.querySelector("#select");
const dugme = document.querySelector("button");
const image = document.querySelector("img");
const dugmence = document.querySelector("#dugmence"); //ako je id bice #, ako je klasa bice . ako je html element bice samo naziv elementa
const levoDugme = document.querySelector(".levoDeda");
const desnoDugme = document.querySelector(".desnoBaba"); ///qiertySelectorAll(button) = [element, element]
let trenutniIndex = localStorage.getItem("index")
	? +localStorage.getItem("index")
	: 0;

//  null, undefined, false, 0 === false
// if (true) {
// 	("uradi ovo");
// } else {
// 	("uradi ono");
// }

// true ? "uradi ovo" : "uradi ono";

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

promeniSliku(trenutniIndex);

listaKorisnika.forEach((korisnik, id) => {
	const element = document.createElement("option"); //sa ovom metodom pravimo element i na kraju ga smestamo u element varijablu
	element.textContent = id + 1 + " " + korisnik; // 1 + 1 + ' ' + 'Radisa'= 1 Radisa'
	select.appendChild(element); //appendChild metoda ubacuje neki element u drugi (kojiJeElement u pitanju)
});

function obrisiClana() {
	select.remove(select.selectedIndex); /// select.selectedIndex = index tog odabranog clana
}

/////////////////////////////////////////////////////////

function promeniSliku(index) {
	localStorage.setItem("index", index);
	image.setAttribute("src", listaSlika[index]); /// listaSlika[3]
	localStorage.setItem("index", index);
}
///dry - dont repeat yourself - ne ponavljaj se...
///reusable - stvar koja moze da se koristi vise puta na vise mesta

dugmence.addEventListener("click", () => {
	const slucajanBroj = Math.floor(Math.random() * listaSlika.length); // sa ovom metodom dobijamo slucajan broj od 0 do 4 posto nam je listaSlika.lenght = 5
	promeniSliku(slucajanBroj); //prosledjujemo taj broj nasoj funckiji iznad
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

///zadatak = nadogradi ovaj prvi zadatak : Dodaces input i dugme dodaj. Na dugme dodaj dodaces novog clana koji ima vednost tog inputa
//znaci povezes input sa js, hvatas promenu njegove vrednosti, i dodadjes(pravis novog, dodajes mu textContent) u select. Taj clan bi trebao da ima index za 1 veci od poslednjeg
//dodavaces ga na kraj i daces mu index koji je za jedan veci od poslednjeg. U slucaju da je input prazan onda stavi error prouku ispod dugmeta koja glasi da input ne moze biit prazan...

//zadatak2 = nadogradi drugi zadatak : na promenu slike trebalo bi da bude dole poruka koja glasi 1/5
// 1 - trebalo bi da prestavlja id +1 od indexa na kojoj se nalazi link od slike  / 5 - pet bi trebalo da bude duzina niza tih slika
//stavi p tag u html, daj mu id ili class, mozes cak i po elementu da gadjas. dodeli mu text content na svaku promenu ida, tj slike
