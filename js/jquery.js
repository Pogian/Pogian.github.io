$(document).ready(function(){
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
/*	---------------end of owl-carousel-------------- 		*/

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


