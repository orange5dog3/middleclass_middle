// slider
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

// modal
$(".modal-open").click (
    function(){
        $("modal-area").show()
    }
);

$(".modal-close").click(
    function(){
        $("modal-area").close()
    }
);