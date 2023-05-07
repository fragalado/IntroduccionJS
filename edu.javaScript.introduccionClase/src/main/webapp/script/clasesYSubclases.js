/**
 * CLASES Y SUBCLASES
 */

// Clase poligono
class Poligono {

	// Constructor
	constructor(altura, ancho) {
		this.altura = altura;
		this.ancho = ancho;
		this.nombre = "Poligono";
	}

	// Métodos
	devolverNombre() {
		return this.nombre;
	}
}

// Instanciamos la clase Poligono con valor para la altura de 100 y la anchura de 200
let p1 = new Poligono(100, 200);

// Mostramos en la consola del navegador el nombre y en la ventana del navegador la altura y la anchura
console.log(p1.devolverNombre());
document.write("Altura : " + p1.altura);
document.write("<br>Anchura: " + p1.ancho + "<br>");

// Clase cuadrado
class Cuadrado extends Poligono {

	// Constructor
	constructor(lado) {
		super(lado, lado);
		this.nombre = "Cuadrado";
	}

	// Métodos
	areaCuadrado() {
		return this.altura * this.ancho;
	}
}

// Instanciamos la clase Cuadrado
let c1 = new Cuadrado(10);
console.log(c1.devolverNombre());
console.log("Area cuadrado: " + c1.areaCuadrado());
document.write("Altura cuadrado: " + c1.altura);
document.write("<br>Anchura cuadrado: " + c1.ancho);
