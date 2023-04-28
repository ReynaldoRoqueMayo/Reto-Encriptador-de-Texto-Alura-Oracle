
var patron = /^[a-z\s]+$/;
var inputText= document.getElementById("txa-entrada");

var avisoSalidaVacia=document.querySelector('.bannerSalida');
    
var outText= document.getElementById("txa-salida");

var btnEncript= document.getElementById("btnEncriptar");
    btnEncript.disabled=true;
    
var btnDesencriptar= document.getElementById("btnDesencriptar");
    btnDesencriptar.disabled=true;
var btnCopy= document.getElementById("btnCopiar");
    btnCopy.style.display="none";
outText.style.display="none";
inputText.onpaste=function validarPegado(e){
	 var txt = e.clipboardData.getData('text');
	 if(!patron.test(txt)){
		e.preventDefault();
		alert("Aviso: Solo se permiten pegar texto con letras minusculas :D");
	 }
	 
}



btnDesencriptar.onclick=function desencriptarText(e){

	var textoreemplazo=inputText.value;
	
	textoreemplazo=textoreemplazo.replace(/ai/g,"a");
	
	textoreemplazo=textoreemplazo.replace(/enter/g,"e");
	
	textoreemplazo=textoreemplazo.replace(/imes/g,"i");
	textoreemplazo=textoreemplazo.replace(/ober/g,"o");
	textoreemplazo=textoreemplazo.replace(/ufat/g,"u");
	outText.value=textoreemplazo;
	quitarAviso();
}




btnCopy.onclick=function(e){
	outText.select();
	outText.setSelectionRange(0,99999);
	navigator.clipboard.writeText(outText.value);
};


function validarTexto(letra){
	

	if(!patron.test(letra)){
		var longitud=inputText.value.length;
		var aux=inputText.value.slice(0,longitud-1);
		inputText.value=aux;
		alert("Aviso: Solo se permiten letras minusculas :D");
		
	}
}

inputText.oninput=function verificar(e) {
	
	

	validarTexto(e.data);
	

    if(inputText.value==""){

	btnEncript.disabled=true;
	btnDesencriptar.disabled=true;
	
	
	}else{
	
	btnEncript.disabled=false;
	btnDesencriptar.disabled=false;
	
	}

	
}


btnEncript.onclick=function encriptarTexto(){
	
	
	var textoInicial=inputText.value.trim();
	var textoFinal="";

	for(var i=0;i<textoInicial.length;i++){
		var letra=textoInicial[i];
		if(letra=="a"){
			letra="ai";
		}
		if(letra=="e"){
			letra="enter";
		}
		if(letra=="i"){
			letra="imes";
		}
		if(letra=="o"){
			letra="ober";
		}
		if(letra=="u"){
			letra="ufat";
		}

		textoFinal=textoFinal+letra;
	}
	outText.value=textoFinal;
	quitarAviso();
};

function quitarAviso(){

	outText.style.display="inline-block";
	btnCopy.style.display="inline-block"
	avisoSalidaVacia.style.display="none";
}
