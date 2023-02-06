/**
 * 
 * Crea un boton que llame a una función de un script con:

1. Define una variable llamada palabra y asignale una cadena de texto string.
2. Define una variable llamada posición y asígnale un valor numérico. Almacenará la posición del carácter que quieres sacar de la variable palabra.
3. Define una variable resultado
4. Utiliza el método charAt para sacar el carácter en la posición especificada por la variable posición de la variable palabra. Esto guardalo en la variable resultado
5. En un if, verifica que el tipo de datos de la variable resultado es de tipo string y si es así, imprime en el documento el resultado de la operación charAt. ç
Usa un else si el tipo de datos no es un string para imprimir por consola un mensaje indicando que el tipo de datos no es correcto
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