$(document).ready(function(){
	

	/*---------------function for videos---------------*/
	$("div.episodeWrapper_Text li a").click(function(e){
		e.preventDefault();
		$(".animeVideoPage").show();
		$("#disqus_thread").show();
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

/*---------------Start of search function---------------*/
function myFunction() {
    // Declare variables
    var input, filter, ul, li, a, i;
    input = document.getElementById('searchBox_Input');
    filter = input.value.toUpperCase();
    ul = document.getElementById("myUL");
    li = ul.getElementsByTagName('li');

    // Loop through all list items, and hide those who don't match the search query
    for (i = 0; i < li.length; i++) {
        a = li[i].getElementsByTagName("a")[0];
        if (a.innerHTML.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "";
        } else {
            li[i].style.display = "none";
        }
    }
}
/*---------------end of search function---------------*/

$(document).ready(function(){
    $('.owl-carousel').owlCarousel({
    loop:false,
    margin:2,
    responsiveClass:true,
    responsive:{
        0:{
            items:5,
            nav:true
        },
        600:{
            items:3,
            nav:false
        },
        1000:{
            items:5,
            nav:true,
            loop:false
        }
    }
})
});