/*
Pari e Dispari
L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
Sommiamo i due numeri
Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
Dichiariamo chi ha vinto.
*/




const divisibility = prompt('pari o dispari?').trim().toLowerCase();
const userNum = parseInt(prompt('Dammi un numero da 1 a 5'));
const computerNum = getRandomInteger(1, 5);
const sum = userNum + computerNum;
console.log(divisibility, userNum, computerNum, sum)

if (divisibility == evenOrOdd(sum)) {
	console.log('HAI VINTO!');
} else {
	console.log('Hai perso :(');
}


/* FUNCTION DEFINITIONS */

function getRandomInteger(min, max) {
	const random = Math.floor(Math.random() * (max - min + 1) ) + min;
	return random;
}

function evenOrOdd(number) {
	if (number % 2 == 0) {
		return 'pari';
	}
	return 'dispari';
}