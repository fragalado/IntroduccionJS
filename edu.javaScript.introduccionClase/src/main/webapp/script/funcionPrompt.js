/**
 * PROMPT
 */

function llamadaPrompt() {
	// Mensaje que le aparecerá al usuario
	let mensajeUsuario = "¿Como te llamas?";
	// Guardamos en una variable el valor que introduzca el usuario 
	let respuestaUsuario = prompt(mensajeUsuario);

	// Imprimimos en pantalla el valor
	document.write(respuestaUsuario);
}


// Pedimos el nombre por pantalla y lo guardamos en una variable
let nombreUsuario = prompt("¿Cual es tu nombre?");
// Llamamos a una funcion pasandole como parametro el nombre
escribePantallaNombre(nombreUsuario);

function escribePantallaNombre(nombreUsuario) {
	// Lo escribe por pantalla
	document.write(nombreUsuario);
}