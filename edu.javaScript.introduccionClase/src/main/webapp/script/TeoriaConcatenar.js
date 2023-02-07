/**
 * 
 */

function ejemplo1(){
	let texto = "CSI1" + " curso " + 2022;
	document.write(texto);
}

function ejemplo2(){
	let texto1 = "CSI1";
	let texto2 = " curso";
	let texto3 = " 2022 23.";
	let array = [texto1, texto2, texto3];
	let textoCompleto = array[0] + array[1] + array[2];
	document.write(textoCompleto);
}

function ejemplo3(){
	let partes = ["posiciones", "se cuentan", "Las", "array", "cero.", "a partir", "del"];
	document.write(partes[2]+ " " + partes[0]+ " " + partes[6]+ " " + partes[3]+ " " + partes[1]+ " " + partes[5]+ " " + partes[6]+ " " + partes[4]);
}