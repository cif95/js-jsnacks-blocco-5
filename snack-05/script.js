/**
 *
 *
	Crea un array di oggetti che rappresentino delle persone.
	Ogni persona ha un nome, un cognome e un'età.
	
	Crea quindi un nuovo array inserendo, per ogni persona, una frase con il nome e cognome e l'indicazione se può guidare, in base all'età.
 */// Crea quindi un nuovo array inserendo, per ogni persona, una frase con il nome e cognome e l'indicazione se può guidare, in base all'età.

const people = [
	{
		firstName : 'Shanna',
		lastName : 'Horne',
		age : 41
	},
	{
		firstName : 'Phillippa',
		lastName : 'Beach',
		age : 16
	},
	{
		firstName : 'Dev',
		lastName : 'Conway',
		age : 22
	},
	{
		firstName : 'Ingrid',
		lastName : 'Portillo',
		age : 19
	},
	{
		firstName : 'Taylor',
		lastName : 'Andersen',
		age : 17
	},
	{
		firstName : 'Eliot',
		lastName : 'Alderson',
		age : 27
	},
];

console.log(people);


people.forEach((element) => {
	let string = `${element.firstName} ${element.lastName} : `;
	(isAdult(element.age)) ? console.log(`${string} can drive`) : console.log(`${string} can't drive`)});


// function that checks if a person age is >= 18
function isAdult(age){
	if ( age >= 18 ){
		return true
	}
};