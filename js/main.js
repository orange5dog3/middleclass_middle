// slider------------------------
$('.slick').slick({
    autoplay: true, 
    fade: true, 
    cssEase: 'linear',
    speed: 2000,
    arrows: false,
    prevArrow: '<span class="material-symbols-outlined slick-arrow slick-prev">arrow_back_ios</span>',
    nextArrow: '<span class="material-symbols-outlined slick-arrow slick-next">arrow_forward_ios</span>',
    dots: false,
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
    
    // ハンバーガーメニューの開閉に応じてupper-arrowの表示を切り替え
    if ($(".hamburger").hasClass("active")) {
        $("#upper-arrow").hide();
    } else {
        $("#upper-arrow").show();
    }
    }
);

// header scroll background------------------------
$(window).scroll(function() {
    const scrollTop = $(this).scrollTop();
    const headerHeight = $('header').outerHeight(); 
    
    if (scrollTop > headerHeight) {
        $('header').addClass('scrolled');
    } else {
        $('header').removeClass('scrolled');
    }
});

// window resize slick refresh------------------------
$(window).resize(function() {
    $('.slick').slick('setPosition');
});