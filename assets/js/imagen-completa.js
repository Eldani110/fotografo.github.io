var brandImg = document.querySelectorAll(".abrir img");

for (var i = 0; i < brandImg.length; i++) {
    var ckEdiloop = brandImg[i];
    ckEdiloop.addEventListener("click", function(el){
        var thisSrc = this.src;
        var ckEdImg = '<p><img src="'+thisSrc+'" /></p>'; 


   	 		$(brandImg).on('click', function(event){

 	 		$('#mostrar').removeClass("noview").addClass("moda");

 	 		$("#img-comple").attr("src",thisSrc);
    
		});

    });

          
   	$("#mostrar").click(function(){
  
 	 	$('#mostrar').removeClass("moda").addClass("noview");

    
	});


}

