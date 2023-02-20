/**
 * 
 */
function ejemplo1(){
	let texto = "No soy un número";
	let conversion = Number(texto);
	document.write(typeof(conversion) +  " " + conversion);
}

function ejemplo2(){
	let numero = 8;
	let texto = toString(numero);
	document.write(typeof texto);
}

function ejemplo3(){
	let num1 = 1;
	let num2 = 2;
	let num3 = 3;
	// Concatena los tres campos en uno solo e imprímelo por pantalla
	let concatenacion =  num1.toString() + num2.toString() + num3.toString();
	document.write(concatenacion + " ");
	// Ahora suma las tres variables, guarda el valor en otra e imprímelo por pantalla
	let suma = num1 + num2 + num3;
	document.write(suma +  " ");
	// Imprime por pantalla el tipo de los dos campos resultados
	document.write(typeof(concatenacion) +  " " + typeof(suma));
}