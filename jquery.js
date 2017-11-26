$(document).ready(function(){
	$(".main>li").hover(function(){
		$(".submenu>li").stop(true, false, true).slideDown("fast");
	},function(){
		$(".submenu>li").slideUp("fast")
	});

});