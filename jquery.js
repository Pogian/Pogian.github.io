$(document).ready(function(){
	$(".main li").hover(function(){
		$(this).find(".submenu li").stop().slideToggle("fast");
		
	});
});