// JavaScript Document
$(document).ready(function(e) {
    document.addEventListener("deviceready",function(){
		$('#izquierda').on("swipeleft",function(){
			navigator.notification.alert("Deslizó a la Izquierda",function(){"Aplicación 7","OK"});
		});//cierra el deslizar izquierda
		$('#derecha').on("swiperight",function(){
			navigator.notification.confirm("¿Qué quieres hacer?",function(op){
				switch(op)
				{
					case 1:
					navigator.notification.beep(1);
					break;
					
					case 2:
					navigator.notification.vibrate(3000);
					break;
				}
				},"Aplicación 7","Beepear,Vibrar,Cancelar");
		});//cierra el deslizar derecha
	},false);// cierra deviceready
});//cierra document
