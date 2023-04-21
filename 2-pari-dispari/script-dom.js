/*
Pari e Dispari
L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
Sommiamo i due numeri
Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
Dichiariamo chi ha vinto.
*/


const inputWord = document.querySelector('#word');
const inputUserNum = document.querySelector('#user-num');
const btnPlay = document.querySelector('#play');
const eleOutput = document.querySelector('#output');


btnPlay.addEventListener('click',
	function() {
		const divisibility = inputWord.value;
		const userNum = parseInt(inputUserNum.value);
		const computerNum = getRandomInteger(1, 5);
		const sum = userNum + computerNum;
		console.log(divisibility, userNum, computerNum, sum)

		if (divisibility == evenOrOdd(sum)) {
			eleOutput.innerHTML = 'HAI VINTO!';
		} else {
			eleOutput.innerHTML = 'Hai perso :(';
		}
	}
)


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