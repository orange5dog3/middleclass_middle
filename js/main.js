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

for (let i = 1; i <= 4; i++) {
    $(`.modal-open${i}`).click(() => {
        $(`.modal-area${i}`).show();
    });

    $(`.modal-close${i}`).click(() => {
        $(`.modal-area${i}`).hide();
    });
}

// hamburger------------------------
$(".hamburger-trigger").click(
    function() {
    $(".hamburger-menu").toggle(300)
    $(".hamburger").toggleClass("active")
    $("#hamburger-bg").toggleClass("active")
    }
);