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

// スクロール無効化関数
function disableScroll() {
    // 現在のスクロール位置を保存
    const scrollTop = $(window).scrollTop();
    // bodyを現在のスクロール位置で固定（topに移動させない）
    $('body').addClass('modal-open').css('top', -scrollTop + 'px');
}

// スクロール有効化関数
function enableScroll() {
    // 保存されたスクロール位置を取得
    const scrollTop = parseInt($('body').css('top')) * -1;
    // bodyの固定を解除
    $('body').removeClass('modal-open').css('top', '');
    // 元のスクロール位置に戻す
    $(window).scrollTop(scrollTop);
}

for (let i = 1; i <= 4; i++) {
    $(`.modal-open${i}`).click(() => {
        $(`.modal-area${i}`).show();
        disableScroll(); 
        $("#upper-arrow").hide();
    });

    $(`.modal-close${i}`).click(() => {
        $(`.modal-area${i}`).hide();
        enableScroll(); 
        if (!$(".hamburger").hasClass("active")) {
            $("#upper-arrow").show();
        }
    });
    
    $(`.modal-area${i}`).click((e) => {
        if (e.target === e.currentTarget) {
            $(`.modal-area${i}`).hide();
            enableScroll();
            if (!$(".hamburger").hasClass("active")) {
                $("#upper-arrow").show();
            }
        }
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