//include 頁首頁尾
$(function () {
    $(".nav").load("default.html .nav>nav");
    $(".footer").load("default.html .footer>footer");
});

//btt
//返回時長 0.6秒
$(".btt").click(function (e) {
    e.preventDefault();
    const linkScroll = $("main").offset().top;
    $("html,body").animate(
        {
            scrollTop: linkScroll,
        },
        600
    );
});

//優化 – 離頂點超過 ?px 時，才出現 btt
$(window).scroll(function () {
    const linkScroll = $("main").offset().top;
    if ($(window).scrollTop() > (linkScroll)) {
        if ($(".btt").hasClass("hide")) {
            $(".btt").toggleClass("hide");
        }
    } else {
        $(".btt").addClass("hide");
    }
});