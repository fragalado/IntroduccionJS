/**
 * CLASE SEGMENTO
 */

class Segmento {

	// Constructor
	constructor(inicio, final) {
		this.inicio = inicio;
		this.final = final;
	}

	// Métodos
	longitudSegmento() {
		return this.final - this.inicio;
	}
}


// Instanciamos la clase y calculamos la longitud de un segmento que tiene el punto inicial a los 5cm y el punto final a 20cm
let sg1 = new Segmento(5, 20);

// Imprimimos por la consola del navegador la longitud
console.log(sg1.longitudSegmento());
console.log(typeof sg1);
console.log(sg1 instanceof Segmento)