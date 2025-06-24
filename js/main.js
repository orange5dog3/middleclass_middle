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

//「開く」がクリックされた場合
$('.modal-trigger').on('click', function () {
    // data-target属性の値を取得
    var target = $(this).data('target');
    // 対応するidのモーダルを表示
    $('#' + target).show();
    $('#upper-arrow').hide(); // トップへ戻る矢印を非表示
    $('body').css('overflow-y', 'hidden');  // 本文の縦スクロールを無効
});

//「閉じる」がクリックされた場合
$('.modal-closer').on('click', function () {
    $('.modal-window').hide();
    $('#upper-arrow').show(); // トップへ戻る矢印を表示
    $('body').css('overflow-y', 'auto');     // 本文の縦スクロールを有効
});



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
    const fvHeight = $('#firstview').outerHeight(); 
    
    if (scrollTop > fvHeight) {
        $('header').addClass('scrolled');
    } else {
        $('header').removeClass('scrolled');
    }
});

// window resize slick refresh------------------------
$(window).resize(function() {
    $('.slick').slick('setPosition');
});

// upper-arrow scroll control------------------------
$(window).scroll(function () {
    const fvHeight = $('#firstview').outerHeight();
    const scrollTop = $(window).scrollTop();

    if (scrollTop > fvHeight) {
        $('#upper-arrow').fadeIn();
    } else {
        $('#upper-arrow').fadeOut();
    }
});