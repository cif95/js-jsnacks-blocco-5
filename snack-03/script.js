/**
 * 
	A partire da un array di stringhe, crea un secondo array formattando le stringhe del primo array in minuscolo e con l'iniziale maiuscola.
	Es: ['pippo', 'PLUTO', 'Paperino'] => ['Pippo', 'Pluto', 'Paperino'
 * 
 */
	const stringArray = [ 'paperino', 'PIPPO', 'Pluto', 'CENERENTOLA', 'Biancaneve'];
	const newArray = stringArray.map((element) => {
		return element.charAt(0).toUpperCase() + element.substring(1).toLowerCase();
	});
	
	console.log(stringArray);
	console.log(newArray);
