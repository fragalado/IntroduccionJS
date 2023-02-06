/**
 * 
 */

function ejercicio1(){
	 let palabra = "Francisco";
	 let posicion = 6;
	 let resultado = palabra.charAt(posicion);
	 if(typeof(resultado) == "string"){
		 document.write(resultado);
	 }
	 else{
		 document.write("El tipo de datos no es correcto");
	 }
}