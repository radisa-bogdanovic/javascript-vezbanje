"use strict";

let prviBroj = 5;
const drugiBroj = "7";
prviBroj += 3;
prviBroj = prviBroj + 3;
drugiBroj -= 4;
drugiBroj = drugiBroj - 4;

//sabiranje

let zbir = prviBroj + drugiBroj;
let razlika = prviBroj - drugiBroj;
let rezultatMnozenja = prviBroj * drugiBroj;
let rezultatDeljenja = prviBroj / drugiBroj;

console.log(`Zbir broja ${prviBroj} i ${drugiBroj} je: ${zbir}`); //zbir broja x i y je: zbir

console.log(`Razlika broja ${prviBroj} i ${drugiBroj} je: ${razlika}`); //razlika broja x i y je : razlika

console.log("Zbir broja " + prviBroj + " i " + drugiBroj + " je: " + zbir);
console.log(`Razlika broja ${prviBroj} i ${drugiBroj} je: ${razlika}`);

console.log(
	`Rezultat mnozenja ${prviBroj} i ${drugiBroj} je: ${rezultatMnozenja}`
);
console.log(
	`Rezultat delenja ${prviBroj} i ${drugiBroj} je: ${rezultatDeljenja}`
);

console.log("ovo je obican tekst");
//ovo je obican tekst

const daLiJeIstina = true;
const daLiJeLaz = false;

console.log(!daLiJeLaz && daLiJeIstina && true && false); //i

console.log(daLiJeLaz || daLiJeIstina); //ili

// true && true === true
// true && false === false
// false && true === false
// false && false === false

// true || true === true
// true || false === true
// false || true === true
// false || false === false
