"use strict";

const ispitajBroj = (broj) => {
	if (broj > 5) {
		console.log(`Broj ${broj} je veci od 5`);
	} else if (broj < 5) {
		console.log(`Broj ${broj} je manji od 5`);
	} else {
		console.log(`Broj ${broj} je jednak 5`);
	}
};

ispitajBroj(4);
ispitajBroj(22);
ispitajBroj(5);

let dan = "2";

switch (dan) {
	case "ponedeljak":
		console.log("Hej, danas je ponedeljak, prvi radni dan");
		break;
	case "utorak":
		console.log("Hej, danas je utorak, drugi radni dan");
		break;
	case "sreda":
		console.log("Hej, danas je sreda, treci radni dan");
		break;
	case "cetvrtak":
		console.log("Hej, danas je cetvrtak, cetvrti radni dan");
		break;
	case "petak":
		console.log("Hej, danas je petak, zadni radni dan u nedelji");
		break;
	case "subota":
		console.log("Hej, danas je subota, prvi dan vikenda");
		break;
	case "nedelja":
		console.log("Hej, drz se dobro sutra je ponedeljak");
		break;
	default:
		console.log(
			`Hej ludace, zar ne znas dane u nedelji? ${dan} nije dan u nedelji!!!`
		);
}

// zadak domaci. Napraviti funkciju koja vraca poruke da li je broj paran i nije, pri tome gledaj da bude poruka i ako je nula
//Kako mozemo da ispitamo da li je broj paran ili ne? Radili smo % ostatak? Znaci ako se podeli sa broj%2 a ostatak je 0 to znaci da je broj paran. U slucaju da ostatak nije nula onda je broj neparan. Imaj u vidu da stavis i uslov ako je broj nula...
