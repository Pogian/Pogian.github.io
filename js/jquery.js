$(document).ready(function(){

/* --------- MORE AND LESS READING --------------*/

$(".moreReading").click(function(){
	$('.contentWrapper_Text').css("max-height","400px");
	$('.moreReading').css("display","none");
	$('.lessReading').css("display","block");
	$('.lessReading').css("margin-top","190px");
	$(".contentWrapper_Text").css("overflow-y","visible");	
});

$(".lessReading").click(function(){
	$(".contentWrapper_Text").css("max-height","210px");
	$(".contentWrapper_Text").css("overflow-y","hidden");
	$('.moreReading').css("display","block");
	$('.lessReading').css("display","none");
});

/* --------- EPISODE TITLE / hiding episode panel --------------*/


$(".contentWrapper_Episodes li a").click(function(e){
		e.preventDefault();
		$(".hideIframe").show();
		$(".hideComments").show();
		$(".hideStory").hide();
	$("#videoPlayer").attr("src", $(this).attr("href"));
	$("#videoPlayer").attr("title", $(this).attr("title"));
		var test = $("#videoPlayer").attr("title");
		if(test == "")
		{
			test = "Video Unavailable";
		}	
			$("span").text(test);
	$("#videoPlayer").load();
	});

/* --------- Image carousel in index.html --------------*/

    $('.owl-carousel').owlCarousel({
    loop:false,
    margin:2,
    responsiveClass:true,
    dots: true,
    responsive:{
        0:{
            items:4,
            nav:false
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
}
)
 });  
/* --------- Hamburger and Search Icon --------------*/

$(document).ready(function(){
	$("#searchIcon").click(function(){
		$(".searchBox").show();
		$(".searchPad").slideToggle("fast",function(){
			if($(".searchPad").is(":visible"))
				{
				 $("#hamburgerIcon").hide();
				 $("#searchIcon").hide();
				 $("#searchIcon_Close").show();
				 $("#searchIcon_Close").click(function(){
				 	$("#searchIcon").show();
				 	$(".searchPad").slideUp();
				 	$("#searchIcon_Close").hide();
				 	$(".searchBox").slideUp();
				 	$(".menuBox").slideUp();
				 	$('#hamburgerIcon').show();
				 });
				}
		});
	});
});


$(document).ready(function(){
	$("#hamburgerIcon").click(function(){
		$(".menuBox").show();
		$(".searchPad").slideToggle("fast",function(){
			if($(".searchPad").is(":visible"))
				{
				 $("#hamburgerIcon").hide();
				 $("#searchIcon").hide();
				 $("#hamburgerIcon_Close").show();
					 $("#hamburgerIcon_Close").click(function(){
					 	$("#searchIcon").show();
					 	$(".searchPad").slideUp();
					 	$("#hamburgerIcon_Close").hide();
					 	$(".searchBox").hide();
					 	$(".menuBox").slideUp();
					 	$('#hamburgerIcon').show();
					 });
				}
		});
	});
});

/* --------- function for the searchBox tp find the search--------------*/


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









