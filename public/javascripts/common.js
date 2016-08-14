$(document).ready(function(){
	$("#how").mousemove(function(){
		val = $("#how").val();
		$("#how_many").text(val);
	});
	$("#how").mousedown(function(){
		$(".progress-bar").css("width", "0%");
	});
});