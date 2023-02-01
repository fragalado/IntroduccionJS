/**
 * 
 */

 // La suma de 10.25 + 0.75, ¿qué tipo de dato devuelve?
 // Devuelve un tipo number
 let num1 = 10.25;
 let num2 = 0.75;
 let sumaNum1YNum2 = num1+num2;
 console.log(typeof(sumaNum1YNum2));
 console.log(num1 + num2)
 
 /**
  * Haz que la siguiente operación de como resultado el número 57 
  * sin cambiar el orden de nada (sustituye los ?):
  	 	let numero1 = 23;
		let numero2 = ?;
		let resultadoOperacion = numero1 ? numero2;
		console.log(resultadoOperacion);
  */
 let numero1 = 23;
 let numero2= 34;
 let resultadoOperacion = numero1 + numero2;
 console.log(resultadoOperacion);
 
 /**
  * Si queremos que la siguiente operación de como resultado el número 100,
  * ¿dónde colocarías los paréntesis sin cambiar el orden de la operación?
		let operacion = 46 + 8 * 2 / 2 + 46;
		console.log(operacion);
  */
 
 let operacion = 46 + 8 * (2 / 2) + 46; // (46 + 8) * 2 / 2 + 46;  46 + (8 * 2) / 2 + 46;
 console.log(operacion);
 
 // ¿Y si queremos que de como resultado 46.33?
 operacion = 46 + 8 * 2 / (2 + 46);
 console.log(operacion);