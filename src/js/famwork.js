$(function () {
    $('.about-us').click(function () {
        $('html, body').animate({
            scrollTop: $('.about-us-heading').offset().top
        }, 2000);
    });
    $('.our-services').click(function () {
        $('html, body').animate({
            scrollTop: $('.famwork-info.our-services').offset().top
        }, 2000);
    });
    $('.who-are-we').click(function () {
        $('html, body').animate({
            scrollTop: $('.famwork-info.who-are-we').offset().top
        }, 2000);
    });
});

