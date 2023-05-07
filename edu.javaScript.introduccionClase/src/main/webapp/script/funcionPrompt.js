/**
 * PROMPT
 */

function llamadaPrompt() {
	// Mensaje que le aparecerá al usuario
	let mensajeUsuario = "¿Como te llamas?";
	// Guardamos en una variable el valor que introduzca el usuario 
	let respuestaUsuario = prompt(mensajeUsuario);
	
	// Imprimimos en pantalla el valor
	//document.write(respuestaUsuario);
	
	if(respuestaUsuario == "")
		console.log("vacio");
	
	else if(respuestaUsuario == null)
		console.log("es null");
		
	console.log(respuestaUsuario);
	console.log(typeof respuestaUsuario);
}