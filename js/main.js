$(window).on("load", function () {
    $(".loading").fadeOut();
    console.log("fds")
});

$(window).resize(function () {
    if ($(window).width() < 768) {
        $('.navbar').removeClass('m-container');
        $('.slider').removeClass('m-container');
        $('.logo-section').addClass('left-60');
    }
    else {
        $('.logo-section').removeClass('left-60');
        $('.navbar').addClass('m-container');
        $('.slider').addClass('m-container');
    }
});
