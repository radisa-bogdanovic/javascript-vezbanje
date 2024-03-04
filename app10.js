"use strict";

// setInterval(() => {
// 	console.log("hej ja sam u set TImeoutu");
// }, 2000); //5000 - 5 sekundi 5x1000s

// console.log("hej ja sam izvan timeauta");

fetch("https://jsonplaceholder.typicode.com/users") ///kacimo se na specifican api url
	.then((response) => response.json()) ///formatiramo podatke da bi smo da ih koristimo
	.then((data) => {
		console.log(data); ///svi podaci koje smo dobili na pozivu
		console.log(data[0].company.catchPhrase); //izvukli smo specifican podatak od jednog korisnika
	});
