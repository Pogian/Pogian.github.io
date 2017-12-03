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
/*	---------------end of owl-carousel-------------- 		*/

$("#hamburgerIcon").click(function(){
	$(".searchPad").slideToggle();
});
});



