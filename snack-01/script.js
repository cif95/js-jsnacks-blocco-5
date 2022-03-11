/**
Creare un oggetto che rappresenti un giocatore di basket, con le seguenti proprietà:
Codice giocatore, Nome, Cognome, Età,  Media punti fatti per partita, Percentuale di successo per tiri da 3 punti

Generare casualmente le statistiche di gioco, secondo queste regole:

// A - il codice giocatore deve essere formato da 3 lettere maiuscole casuali e 3 cifre casuali

// B - la media punti fatti per partita deve essere compresa tra 0 e 50

// C - la percentuale di successo per da 3 punti deve essere compresa tra 0 e 100

 */

const basketPlayer = {
	playerCode : '',
	firstName : 'Michael',
	lastName : 'Jordan',
	age: 59,
	scoreAverage : '',
	successPercentage : ''
}



for (let key in basketPlayer) {
	if ( key == 'playerCode') {
		basketPlayer[key] = randomChar(3).toUpperCase() + randomInt(0, 10) * 3;
	}
	else if (key == 'scoreAverage') {
		basketPlayer[key] = randomInt(0, 50);
	}
	else if ( key == 'successPercentage') {
		basketPlayer[key] = randomInt(0, 100);
	}
};

console.table(basketPlayer);

// function that returns a random integer between a min value and a max value
function randomInt(min, max) {
	return Math.floor(Math.random() * (max - min + 1)) + min;
}

// function that returns a random character between a-z, (n) times
function randomChar(n){
	let characters = 'abcdefghijklmnopqrstuvwxyz';
	let randomChar = "";
	for ( let i = 0; i < n ; i++ ) {
		randomChar += characters.charAt(Math.floor(Math.random() * characters.length));
	}
	return randomChar;
}


