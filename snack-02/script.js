/**
 *
 *
	Crea un array composto da 12 automobili.
	Ogni oggetto automobile avrà le seguenti proprietà: marca, modello e alimentazione (benzina, diesel, gpl, elettrico, metano).

	Dividi le automobili in 3 array separati: nel primo array solo le auto a benzina, nel secondo solo le auto a diesel, nel terzo il resto delle auto.

	Infine stampa separatamente i 3 array.

 *
 */


const cars = [
	{
		brand : 'Volkswagen',
		model: 'ID.5',
		engine: 'electric',
	},
	{
		brand : 'Peugeot',
		model: '308SW',
		engine: 'gasoline',
	},
	{
		brand : 'Mercedes',
		model: 'EQB',
		engine: 'gpl',
	},
	{
		brand : 'Skoda',
		model: 'Enyaq',
		engine: 'electric',
	},
	{
		brand : 'Alfa Romeo',
		model: 'Giulietta',
		engine: 'diesel',
	},
	{
		brand : 'Ford',
		model: 'Puma',
		engine: 'CNG',
	},
	{
		brand : 'Opel',
		model: 'Corsa',
		engine: 'gpl',
	},
	{
		brand : 'Renault',
		model: 'Clio',
		engine: 'diesel',
	},
	{
		brand : 'Ford',
		model: 'Fiesta',
		engine: 'CNG',
	},
	{
		brand : 'Aston Martin',
		model: 'DB11',
		engine: 'gasoline',
	},
	{
		brand : 'Bentley',
		model: 'Bentayga',
		engine: 'gasoline',
	},
	{
		brand : 'Chevrolet',
		model: 'Corvette',
		engine: 'gasoline',
	},
];


const gasolineCars = cars.filter((element)=> {
	if ( element.engine == 'gasoline') {
		return true;
	}
});
const dieselCars = cars.filter((element)=> {
	if ( element.engine == 'diesel') {
		return true;
	}
});
const otherEngineCars = cars.filter((element)=> {
	if ( (element.engine != 'gasoline') && (element.engine != 'diesel')) {
		return true;
	}
});

console.table(cars);
console.table(gasolineCars);
console.table(dieselCars);
console.table(otherEngineCars);




