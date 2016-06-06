
function f_maximo_sorbos_personas(maximo_sorbos_personas){
	if(maximo_sorbos_personas < 30){				
		return true;
	}else{
		console.log("No puedo tomar mas, llege al maximo de sorbos 30");
	}
} 

function f_validar_sorbos_bebida(bebida){
	if(bebida.maximo_sorbos_bebida != 10){
		return true;
	}else{		
		console.log("no queda nada para beber");
		return false;
	}
}

function f_valida_es_alcoholica(bebida){
	if(bebida.tipo_bebida == "alcoholica"){
		console.log("es alcohol");
		return true;
	}else{
		return false;
	}
}

function f_es_mayor_de_edad(edad){
	if(edad >= 18){
		return true;
	}else{
		console.log("La persona menor de edad no puede tomar bebidas alcoholicas");
		return false;
	}
}

function f_esta_ebria(ebriedad_persona){
	if(ebriedad_persona == 15){
		console.log("la persona ya esta ebria");
		return true;
	}else{		
		return true;	
	}
}

function f_ebriedad_maxima(ebriedad_persona){
	if(ebriedad_persona == 25){
		console.log("Ya no puede tomar bebidas alcoholicas");
		return false;
	}else{
		return true;
	}
}

var Persona = function(persona_nombre,edad_persona){
	this.persona_nombre = persona_nombre;	
	this.edad_persona = edad_persona;
	this.maximo_sorbos_personas = 0;
	this.ebriedad_persona = 0;
	this.beber_bebida = function(bebida){
		if(f_maximo_sorbos_personas(this.maximo_sorbos_personas)){
			if(f_validar_sorbos_bebida(bebida)){
				if(f_valida_es_alcoholica(bebida)){
					if(f_es_mayor_de_edad(this.edad_persona)){						
						if(f_ebriedad_maxima(this.ebriedad_persona)){
							console.log("tome alcohol!!");
							bebida.llena = false;
							this.maximo_sorbos_personas =  this.maximo_sorbos_personas + 1;
							this.ebriedad_persona = this.ebriedad_persona + 1;
							bebida.maximo_sorbos_bebida = bebida.maximo_sorbos_bebida + 1;
							f_esta_ebria(this.ebriedad_persona);
						}														
					}					
				}else{
					this.maximo_sorbos_personas =  this.maximo_sorbos_personas + 1;
					bebida.maximo_sorbos_bebida = bebida.maximo_sorbos_bebida + 1;
					bebida.llena = false;
				}
			}
			//alert(this.maximo_sorbos_personas);
		}		
	}	
}
	
var Bebida = function(nombre_bebida,tipo_bebida){
	this.nombre_bebida = nombre_bebida;
	this.tipo_bebida   = tipo_bebida;
	this.llena 		   = true;
	this.maximo_sorbos_bebida = 0;
}

juan = new Persona("Juan",28);
corona = new Bebida("corona","alcoholica");
coca = new Bebida("coca","sanita");
pepe = new Persona("pepe",15);

