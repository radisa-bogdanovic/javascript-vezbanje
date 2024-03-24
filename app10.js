"use strict";

const kontejner = document.querySelector("div");
kontejner.classList.add("flex");
// setInterval(() => {
// 	console.log("hej ja sam u set TImeoutu");
// }, 2000); //5000 - 5 sekundi 5x1000s

// console.log("hej ja sam izvan timeauta");

// fetch("https://jsonplaceholder.typicode.com/users") ///kacimo se na specifican api url
// 	.then((response) => response.json()) ///formatiramo podatke da bi smo da ih koristimo
// 	.then((data) => {
// 		console.log(data); ///svi podaci koje smo dobili na pozivu
// 		console.log(data[0].company.catchPhrase); //izvukli smo specifican podatak od jednog korisnika
// 	});

const getData = async () => {
	try {
		const response = await fetch("https://jsonplaceholder.typicode.com/users");
		const data = await response.json();

		const array = ["1", 2];
		const array2 = ["33", "55", "432432"];

		const [prviClan, ...drugiClan] = array;

		console.log("prviClan:", prviClan);
		console.log("drugiClan:", drugiClan);
		const finalResult = [...array, ...array2];

		console.log(finalResult);
		for (let i = 0; i < data.length; i++) {
			const element = document.createElement("div");
			element.style.width = "400px";
			const { name, email, phone } = data[i];
			const { name: companyName, catchPhrase } = data[i].company;
			kontejner.appendChild(element);
			const ime = document.createElement("h3");
			ime.textContent = "NAME:" + " " + name;
			const emailEl = document.createElement("p");
			emailEl.textContent = "EMAIL:" + " " + email;
			const phoneEl = document.createElement("p");
			phoneEl.textContent = "PHONE:" + " " + phone;
			const kompanija = document.createElement("p");
			kompanija.textContent = "COMPANY:" + " " + companyName;
			const sloganKompanije = document.createElement("p");
			sloganKompanije.textContent = "CP:" + " " + catchPhrase;
			element.append(ime, emailEl, phoneEl, kompanija, sloganKompanije);
		}
	} catch (error) {
		console.log(error);
	}
};

getData();
