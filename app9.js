"use strict";

//sa ovim mi stavimo u lokal storage vrednos ime:Slobodan
///lokal storage je zasniavan na key value patternu sto znaci kao i objekat
localStorage.setItem("ime", "Slobodan");
///lokalno skladiste cuva nase vrednosti koje mi stavimo na nasoj lokalnoj masini sve dok ne dodjemo i obrisemo

const ime = localStorage.getItem("ime"); ///getItem mi uzimamo tu vrednost iz localstorage (u zagrade ide key od te vrednosti)

localStorage.removeItem("ime"); ///uklonimo element iz localstorage
// localStorage.clear(); //brise sve iz localStorage
const ime2 = localStorage.getItem("ime");
console.log(ime2);
console.log(localStorage.length); ///duzina elemenata u localStorage
const slobovogDjedaIm = localStorage.getItem("zarija");
console.log("Sta radi Slobo? ", slobovogDjedaIm);
