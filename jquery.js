$(document).ready(function(){
	
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

	/* ---------------end of function for Navigator---------------*/

	$(".contentWrapper_Text li").click(function(){
		$("div .story").hide();
	});

});