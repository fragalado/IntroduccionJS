/**
 * REPASO
 */

 function fechas(){
	 let ahora = new Date();
	 let enero1970 = new Date(0);
	 
	 // Mostramos las fecha
	 console.log(ahora);
	 console.log(enero1970);
	 // Sumamos 24 horas a enero1970
	 enero1970.setHours(enero1970.getHours() + 24)
	 console.log(enero1970);
	 // Restamos 24 horas a enero1970
	 enero1970.setHours(enero1970.getHours() - 24)
	 console.log(enero1970);
	 
	 
	 
	 // Usando setTime()
	 // UTC+2
	 let fecha1 = new Date(ahora);
	 fecha1.setHours(fecha1.getHours() + 1);
	 console.log(fecha1)
	 // UTC-8
	 let fecha2 = new Date(ahora);
	 fecha2.setHours(fecha2.getHours() - 9);
	 console.log(fecha2);
	 // UTC-5
	 let fecha3 = new Date(ahora);
	 fecha3.setHours(fecha3.getHours() - 6);
	 console.log(fecha3);
 }
 
 function ejercicio9(){
	var a1 =  true && true;    console.log("a1: " + a1);
	var a2 =  true && false;   console.log("a2: " + a2);
	var a3 = false && true;     console.log("a3: " + a3);
	var a4 = false && (3 == 4); console.log("a4: " + a4);
	var a5 = 'Cat' && 'Dog';    console.log("a5: " + a5);
	var a6 = false && 'Cat';   console.log("a6: " + a6);
	var a7 = 'Cat' && false;    console.log("a7: " + a7);
	
	var o1 =  true || true;    console.log("o1: " + o1);
	var o2 = false || true;   console.log("o2: " + o2);
	var o3 =  true || false;   console.log("o3: " + o3);
	var o4 = false || (3 == 4);console.log("o4: " + o4);
	var o5 = 'Cat' || 'Dog';    console.log("o5: " + o5);
	var o6 = false || 'Cat';    console.log("o6: " + o6);
	var o7 = 'Cat' || false;console.log("o7: " + o7);
	
	var n1 = !true; console.log("n1: " + n1);
	var n2 = !false;console.log("n2: " + n2);
	var n3 = !'Cat';console.log("n3: " + n3);
	
	
	// Boolean
	var b = new Boolean(false); 
	if (b) // esta condición se evalúa como verdadera 
		console.log("1 " + b);
	if (b == true) // esta condición se evalúa como false
		console.log("2 " + b);
}