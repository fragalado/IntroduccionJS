/**
 * 
 */
// Crea un objeto de tipo alumno con las propiedades nombre, apellidos y edad.
function alumno(nombre, apellidos, edad){
	this.nombre = nombre;
	this.apellidos = apellidos;
	this.edad = edad;
}

// Define una variable con los valores específicos tuyos.
let fran = new alumno("francisco", "gallego dorado", 19);

// Verifica que es un tipo objeto y que es un tipo alumno.
document.write(fran instanceof alumno);
document.write(fran instanceof(Object));

// Muestra en el navegador el valor de las tres propiedades.


document.write(fran.nombre);
document.write(fran.apellidos);
document.write(fran.edad);






function ejemploTypeOfyInstanceOf(){
	let variable1 = 10;
	let variable2 = 5.3;
	
	document.write("<br>" + typeof(variable1)); // TypeOf
	document.write(typeof variable2);  // TypeOf
	
	document.write("<br>" + variable1 instanceof Object); // InstanceOf
	document.write(variable1 instanceof Number);
}

function ejemploTiposPrimitivos(){
	
}

