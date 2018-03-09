//Funciones para categoria de la galeria principal.
//--------------------------------------------------------
//Funcion para que muestren todas las imagenes.
function todos() {
	      	$('.p-todo').removeClass("noview").addClass("view"); 
	      	$('.p-personal, .p-fotografia, .p-retrato').removeClass("view").addClass("noview");

	      	$('.p-t').removeClass("noview").addClass("nv");
	      	$('.p-p, .p-f, .p-r').removeClass("nv").addClass("");
}

function pesonal() {
	      	$('.p-personal').removeClass("noview").addClass("view");
	      	$('.p-todo, .p-fotografia, .p-retrato').removeClass("view").addClass("noview");
			
	      	$('.p-p').removeClass("noview").addClass("nv");
	      	$('.p-t, .p-f, .p-r').removeClass("nv").addClass("");
	      		      	
}

function fotografia() {
	      	$('.p-fotografia').removeClass("noview").addClass("view");
	      	$('.p-todo, .p-personal, .p-retrato').removeClass("view").addClass("noview");	    

	      	$('.p-f').removeClass("noview").addClass("nv");
	      	$('.p-t, .p-p, .p-r').removeClass("nv").addClass("");	    
}

function retrato() {
	      	$('.p-retrato').removeClass("noview").addClass("view");
	      	$('.p-todo, .p-personal, .p-fotografia').removeClass("view").addClass("noview");

	      	$('.p-r').removeClass("noview").addClass("nv");
	      	$('.p-t, .p-p, .p-f').removeClass("nv").addClass("");
}


