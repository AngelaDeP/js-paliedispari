// Chiedere all’utente di inserire una parola

let word = prompt('Quale parola vuoi inserire?').replace(/ /g, '');

// Creare la variabile per la parola inversa

let mirroredWord = reverseWord(word);

// Creare una funzione per capire se la parola inserita è palindroma

function reverseWord(word){

    let mirroredWord = word.split('').reverse().join('');  
    return mirroredWord;

}
  
console.log(mirroredWord);

// Metterle a paragone così da creare l'alert adeguato

if (word == mirroredWord) {

    alert('La parola è palindroma!');

} else {

    alert('La parola non è palindroma!');

}