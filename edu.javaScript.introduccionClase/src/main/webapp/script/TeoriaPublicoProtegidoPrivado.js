/**
 * 
 */

function ejercicio1() {
	class Punto {
		// Constructor
		constructor(x, y) {
			this.x = x;
			this.y = y;
			this._nombre = "punto"; // Protected: Poniendo '_' se hace protegido
		}
		// Setter
		set nombre(valorNombre) {
			if (valorNombre == "hola") {
				valorNombre = "adios";
			}
			this._nombre = valorNombre;
		}
		// Getter
		get nombre() {
			return this._nombre;
		}
		// Métodos
		distancia(a, b) {
			const dx = a.x - b.x;
			const dy = a.y - b.y;

			return Math.sqrt(dx * dx + dy * dy);
		}
	}

	let instancia = new Punto();
	instancia.nombre = "hola";
	console.log(instancia.nombre);
}

function ejercicio2() {
	class Punto {
		// Constructor
		constructor(x, y) {
			this.x = x;
			this.y = y;
			this._nombre = "punto"; // Protected: Poniendo '_' se hace protegido
		}
		// Getter
		get nombre() {
			return this._nombre;
		}
		// Métodos
		distancia(a, b) {
			const dx = a.x - b.x;
			const dy = a.y - b.y;

			return Math.sqrt(dx * dx + dy * dy);
		}
	}

	let instancia = new Punto();
	instancia.nombre = "hola"; // No funciona porque no se puede modificar
	// instancia._nombre = "hola"; // Funciona porque se accede al campo
	console.log(instancia.nombre);
}

/*
function ejercicio3() {
	class Punto {
		// Constructor
		constructor(x, y) {
			this.x = x;
			this.y = y;
			this.#nombre = "punto"; // Privado: Poniendo '#' se hace privado
		}
		// Setter
		set nombre(valorNombre) {
			if (valorNombre == "hola") {
				valorNombre = "adios";
			}
			this.#nombre = valorNombre;
		}
		// Getter
		get nombre() {
			return this.#nombre;
		}
		// Métodos
		distancia(a, b) {
			const dx = a.x - b.x;
			const dy = a.y - b.y;

			return Math.sqrt(dx * dx + dy * dy);
		}
	}

	let instancia = new Punto();
	instancia.nombre = "hola";
	console.log(instancia.nombre);
}
*/