$(document).ready(function(){
	$("img#hamburgerIcon").click(function(){
		$(".main li").stop().slideToggle();
	});
	if($(window).width() >= 375){
		alert("this is 375");
	}


	/*---------------function for videos---------------*/
	$("div.episodeWrapper_Text li a").click(function(e){
		e.preventDefault();
		$(".animeVideoPage").show();
		$(".animeFrontPage").hide();
	$("#videoPlayer").attr("src", $(this).attr("href"));
	$("#videoPlayer").attr("title", $(this).attr("title"));
		var test = $("#videoPlayer").attr("title");
		if(test == "")
		{
			test = "Video Unavailable";
		}	
			$("span").text("> "+ test);
	$("#videoPlayer").load();
	});
	/* ---------------end of function for videos---------------*/

	$(".main li").hover(function(){
		$(this).find(".submenu li").stop().slideToggle("fast");	
	});
	$("img").tooltip({track: true});
	/* ---------------end of function for Navigator---------------*/

	$(".contentWrapper_Text li").click(function(){
		$("div .story").hide();
	});





});