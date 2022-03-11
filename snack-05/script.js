/**
 *
 *
	Crea un array di oggetti che rappresentino delle persone.
	Ogni persona ha un nome, un cognome e un'età.
	
	Crea quindi un nuovo array inserendo, per ogni persona, una frase con il nome e cognome e l'indicazione se può guidare, in base all'età.*/

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

const peopleAgeCheck = people.map((element) => {
	let string = `${element.firstName} ${element.lastName} :`;
	return (isAdult(element.age)) ? `${string} can drive` : `${string} can't drive`;
});

console.log(peopleAgeCheck);

// function that checks if a person age is >= 18
function isAdult(age){
	if ( age >= 18 ){
		return true
	}
};