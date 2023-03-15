/**
 * 
 */

function ejercicio1(){
	/**
	 * incrementa la siguiente variable en 5:
	      let numero = 12;
		Decrementa el resultado de la variable anterior en 1.
	 */
	let numero = 12;
	numero += 5;
	numero--;
	
	/**
	 * Simplifica esta operación utilizando el operador adecuado:
	     let multiplicacion = 10 * 10 * 10 * 10 * 10;
	 */
	let multiplicacion = 10**5;
	
	/**
	 * Obtén el resto de 57409 dividido entre 16789.
	 */
	let numero1 = 57409;
	numero1 %= 16789;
	
	
	console.log(numero);	// 16
	console.log(multiplicacion);	// 100000
	console.log(numero1);	// 7042
}

function ejercicio2(){
	
	let a = 3;
	console.log(a **=2);
	console.log(a **=0);
	console.log(a **="hello");
}

function ejemploOperadoresDeComparacion(){
	let numero1 = 10;
	let numero2 = 10;
	let comparador = numero1 == numero2;
	let comparador2 = numero1 === numero2;
	document.write(comparador);
	document.write(comparador2);
}

function ejemploComparacion1(){
	let numero = 10;
	let cadena = "10";
	let comparador = numero == cadena;
	let comparador2 = numero === cadena;
	console.log(comparador);
	console.log(comparador2);
}

function ejemploOperadoresLogicosYEspeciales(){
	// Objeto coche
	function coche(marca, modelo, anyoFabricacion){
		this.marca = marca;
		this.modelo = modelo;
		this.anyoFabricacion = anyoFabricacion;
	}
	
	let vehiculo = new coche("Honda", "Civic", 2010);
	let vehiculo1 = new coche("Honda", "Civic", 2010);
	let vehiculo2 = new coche("Honda", "Civic", 2016);
	console.log(vehiculo && vehiculo1);
	console.log(vehiculo == vehiculo1);
	console.log(vehiculo == vehiculo2);
	console.log(vehiculo === vehiculo1);
	console.log(vehiculo === vehiculo2);
}

function ejemploOperadoresLogicosYEspeciales2(){
	var a1 =  true && true;    
	var a2 =  true && false;    
	var a3 = false && true;     
	var a4 = false && (3 == 4); 
	var a5 = 'Cat' && 'Dog';    
	var a6 = false && 'Cat';   
	var a7 = 'Cat' && false;    
	
	var o1 =  true || true;    
	var o2 = false || true;   
	var o3 =  true || false;   
	var o4 = false || (3 == 4);
	var o5 = 'Cat' || 'Dog';    
	var o6 = false || 'Cat';    
	var o7 = 'Cat' || false;
	
	var n1 = !true;
	var n2 = !false;
	var n3 = !'Cat';
	
	console.log("a1: " + a1);
	console.log("a2: " + a2);
	console.log("a3: " + a3);
	console.log("a4: " + a4);
	console.log("a5: " + a5);
	console.log("a6: " + a6);
	console.log("a7: " + a7);
	
	console.log("o1: " + o1);
	console.log("o2: " + o2);
	console.log("o3: " + o3);
	console.log("o4: " + o4);
	console.log("o5: " + o5);
	console.log("o6: " + o6);
	console.log("o7: " + o7);
	
	console.log("n1: " + n1);
	console.log("n2: " + n2);
	console.log("n3: " + n3);
}

 