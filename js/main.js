// slider------------------------
$('.slick').slick({
    autoplay: true, 
    fade: true, 
    cssEase: 'linear',
    speed: 2000,
    arrows: true,
    prevArrow: '<span class="material-symbols-outlined slick-arrow slick-prev">arrow_back_ios</span>',
    nextArrow: '<span class="material-symbols-outlined slick-arrow slick-next">arrow_forward_ios</span>',
    dots: true,
    dotsClass: "slide-dots"
});
// modal------------------------
// modal1
$(".modal-open1").click (
    function(){
        $(".modal-area1").show()
    }
);

$(".modal-close1").click(
    function(){
        $(".modal-area1").hide()
    }
);
// modal2
$(".modal-open2").click (
    function(){
        $(".modal-area2").show()
    }
);

$(".modal-close2").click(
    function(){
        $(".modal-area2").hide()
    }
);
// modal3
$(".modal-open3").click (
    function(){
        $(".modal-area3").show()
    }
);

$(".modal-close3").click(
    function(){
        $(".modal-area3").hide()
    }
);
// modal4
$(".modal-open4").click (
    function(){
        $(".modal-area4").show()
    }
);

$(".modal-close4").click(
    function(){
        $(".modal-area4").hide()
    }
);
