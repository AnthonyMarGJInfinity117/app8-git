// JavaScript Document
$(document).ready(function(e) {
    document.addEventListener("deviceready", function(){
	$('#sonar').tap(function(){
		navigator.notification.beep(2);
        }); //Cierre de sonar
        $('#vibrar').tap(function(){
	        navigator.notification.vibrate(2000);
        }); //cierre de vibrar
      },false); //cierre de deviceready
}); //cierre ready
	

