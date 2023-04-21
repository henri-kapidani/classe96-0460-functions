/*
Chiedere all’utente di inserire una parola
Creare una funzione per capire se la parola inserita è palindroma
*/

const userWord = prompt('Inserisci una parola');

if (isPalindrom(userWord)) {
	console.log('palindroma');
} else {
	console.log('NON palindroma');
}

// tellPalindromy(userWord);


/* FUNCTION DEFINITIONS */

function isPalindrom(word) {
	let reversedWord = '';
	for (let i = word.length - 1; i >= 0; i--) {
		reversedWord += word[i];
	}

	if (word == reversedWord) {
		return true;
	}
	return false;
}


function tellPalindromy(word) {
	// const reversedWord = word.split('').reverse().join('');
	let reversedWord = '';
	for (let i = word.length - 1; i >= 0; i--) {
		reversedWord += word[i];
	}

	if (word == reversedWord) {
		console.log('palindroma');
	} else {
		console.log('NON palindroma');
	}
}
