$(document).ready(function(){
	$(".cont img").draggable({
		helper:'clone',
		revert:'invalid',
		// revertDuration:1000,
	});
	$(".sw").droppable({
		drop:function(event,ui){
			$(".sw").append(ui.draggable);
		},
		accept:'.srw',
	});
	$(".mh").droppable({
		drop:function(event,ui){
			$(".mh").append(ui.draggable);
		},
		accept:'.mhd',
	});
});
