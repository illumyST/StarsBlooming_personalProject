$(window).scroll(function () {
    if ($(window).scrollTop() > (200)) {
        console.log("300")
        if ($(".progress").hasClass("progressHide")) {
            $(".progress").toggleClass("progressHide");
        }
    } else {
        $(".progress").addClass("progressHide");
    }
});