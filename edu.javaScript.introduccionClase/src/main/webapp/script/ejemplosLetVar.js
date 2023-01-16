/**
 * 
 */

// EJEMPLO 1
function Ejemplo1(){
	var a = 5;
	var b = 10;
	
	if (a === 5) {
	  let a = 4;
	  var b = 1;
	
	  document.write("let a en if: " + a); 
	  document.write(" || var b en if: " + b); 
	}
	
	document.write(" || var a fuera if: " + a);
	document.write(" || var b fuera if: " + b);
}

// EJEMPLO 2
function Ejemplo2(){
	if (x) {
	  let foo;
	  // let foo; TENEMOS QUE COMENTAR ALGUNO DE LOS DOS PARA QUE NO DE ERROR
	}
}


// EJEMPLO 3
function Ejemplo3_1(){
	var x = 31;
    if (true) {
      var x = 71;   
      document.write("x como var dentro de if " + x);
    } 
	document.write(" || x como var fuera del if " + x);
}

function Ejemplo3_2(){
	let x = 31;
	if (true) {
	  let x = 71;
	  document.write("x como let dentro de if " + x); 
	}
	document.write(" || x como let fuera del if " + x); 

}

// EJEMPLO 4
var x = "globallelite"
function Ejemplo4(){
	var x = 'global';
	let y = 'global';
	
	document.write(this.x)
	document.write(x);
	document.write(this.y);
}