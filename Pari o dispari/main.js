// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5. 

let sideChosen = prompt('Scegli un vincitore: pari o dispari?');
console.log(sideChosen);

let numberChosen = parseInt(prompt('Inserisci il numero desiderato (compreso tra 1 e 5!)'));
console.log(numberChosen);

if (numberChosen > 5) {

    alert('Inserisci un numero tra 1 e 5!');

}


// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione). 

function numberCPU(min, max) {

    return Math.floor(Math.random() * (max - min + 1) + min);

}

let randomNumberCPU = numberCPU(1,5);

console.log(randomNumberCPU);


// Sommiamo i due numeri 

let totalNumber = numberChosen + randomNumberCPU;
console.log(totalNumber);


// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione) 

function oddOrEven (number) {

    if (number % 2 == 0) {

        evenOdd = "pari";

    } else {

        evenOdd = "dispari";

    }
   
}


// Richiamiamo la funzione

let winnerResults = oddOrEven(totalNumber);


// Dichiariamo chi ha vinto.

if (sideChosen == evenOdd) {

        alert('Hai vinto!')

    } else {

        alert('Hai perso!')

}