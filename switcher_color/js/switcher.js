$(document).ready(function(){
	$(".two").click(function(){
		$(".color").slideToggle();
	});
	$(".color .col").draggable({
		helper:'clone',
	});
	$("h1").droppable({
		drop:function(event,ui){
			$("h1").css({"color":ui.draggable.css("background-color")});
		},
	});
	$("h2").click(function(){
		$("h1").css("color","");
	});
});
