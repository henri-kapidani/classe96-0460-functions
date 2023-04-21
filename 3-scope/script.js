// let a = 0;
// let b = "buongiorno"
// var c = "ciao";

// saluta();

// console.log("a is " + a);
// console.log("b is " + b); // 1

// function saluta() {
// 	var d = "asd";
// 	console.log("a is " + a); // 0
// 	b = a + 1; // 0 + 1 = 1
// 	console.log("b is " + b); // 1
// 	console.log(c); // 'ciao'
// }





// function ciclo() {
// 	let index;
// 	for (index = 0; index < 10; index++) {
// 		console.log(index);
// 	}

// 	if (index === 10) {
// 		console.log(index);
// 	}
// }

// ciclo()
// console.log(index);








// function miaFunzione() {
// 	var firstNumber = 0; //questa variabile si vede solo qui dentro
// 	secondNumber = 10; //ma se dichiaro una variabile senza
// }

// miaFunzione();
// // console.log(firstNumber);
// // console.log(secondNumber);

// if (true) {
// 	var myVar = 'ciao';
// }

// console.log(myVar);












function baz() {
	let myVar = 'da Baz';
	foo();

	function foo() {
		console.log(myVar);
	}
}

let myVar = 'globale';
baz();












// nomeVar = 'valore'; // sconsigliatissimo
// var nomeVar = 'valore'; var nomeVar; // vecchio metodo
// let nomeVar = 'valore'; let nomeVar; // moderno
// const nomeVar = 'valore'; // moderno