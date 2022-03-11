/**
 * 
 * 
	Crea un array di oggetti che rappresentano degli animali.
	Ogni animale ha un nome, una famiglia e una classe.
	Es:
	[
		{ nome: 'leone', famiglia: 'felidi', classe: 'mammiferi' },
		{ nome: 'cane', famiglia: 'canidi', classe: 'mammiferi' },
		{ nome: 'gallina', famiglia: 'fasianidi', classe: 'uccelli' },
	]
	Crea un nuovo array con la lista dei mammiferi.
 * 
 */
const animals = [
	{
		name: 'Leone',
		famiglia: 'felidi',
		classe: 'mammiferi'
	},
	{
		nome: 'Lupo',
		famiglia: 'Canidi',
		classe: 'mammiferi' 
	},
	{
		nome: 'cane',
		famiglia: 'canidi',
		classe: 'mammiferi'
	},
	{
		nome: 'gallina',
		famiglia: 'fasianidi',
		classe: 'uccelli' 
	},
	{
		nome: 'serpente',
		famiglia: 'Colubridae',
		classe: 'rettili' 
	},
	{
		nome: 'zebra',
		famiglia: 'equidi',
		classe: 'mammiferi' 
	},
	{
		nome: 'tartaruga',
		famiglia: 'testudinati',
		classe: 'rettili' 
	},
	{
		nome: 'Koala',
		famiglia: 'Fascolarctidi',
		classe: 'mammiferi' 
	},
];

const mammalsAnimals = animals.filter((element)=> {
	if ( element.classe == 'mammiferi') {
		return true;
	}
});

console.log(mammalsAnimals);