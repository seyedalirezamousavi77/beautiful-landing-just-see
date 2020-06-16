$(window).on("load", function () {
    $(".loading").fadeOut();
    console.log("fds")
});

$(window).resize(function () {
    if ($(window).width() < 768) {
        $('.navbar').removeClass('m-container');
        $('.slider').removeClass('m-container');
        $('.stepper-section').removeClass('m-container');
        $('.about-stepper').removeClass('mx-5');
        $('.logo-section').addClass('left-60');
    }
    else {
        $('.logo-section').removeClass('left-60');
        $('.navbar').addClass('m-container');
        $('.stepper-section').addClass('m-container');
        $('.about-stepper').addClass('mx-5');
        $('.slider').addClass('m-container');
    }
});
// $(document).ready(function () {
//     var stepper = new Stepper($('.bs-stepper')[0])
// })
$(document).ready(function () {
    var navListItems = $('div.setup-panel-3 div a'),
        allWells = $('.setup-content-3'),
        allNextBtn = $('.nextBtn-3'),
        allPrevBtn = $('.prevBtn-3');

    allWells.hide();

    navListItems.click(function (e) {
        e.preventDefault();
        var $target = $($(this).attr('href')),
            $item = $(this);

        if (!$item.hasClass('disabled')) {
            navListItems.removeClass('btn-info').addClass('btn-pink');
            $item.addClass('btn-info');
            allWells.hide();
            $target.show();
            $target.find('input:eq(0)').focus();
        }
    });

    allPrevBtn.click(function () {
        var curStep = $(this).closest(".setup-content-3"),
            curStepBtn = curStep.attr("id"),
            prevStepSteps = $('div.setup-panel-3 div a[href="#' + curStepBtn + '"]').parent().prev().children("a");

        prevStepSteps.removeAttr('disabled').trigger('click');
    });

    allNextBtn.click(function () {
        var curStep = $(this).closest(".setup-content-3"),
            curStepBtn = curStep.attr("id"),
            nextStepSteps = $('div.setup-panel-3 div a[href="#' + curStepBtn + '"]').parent().next().children("a"),
            curInputs = curStep.find("input[type='text'],input[type='url']"),
            isValid = true;

        $(".form-group").removeClass("has-error");
        for (var i = 0; i < curInputs.length; i++) {
            if (!curInputs[i].validity.valid) {
                isValid = false;
                $(curInputs[i]).closest(".form-group").addClass("has-error");
            }
        }

        if (isValid)
            nextStepSteps.removeAttr('disabled').trigger('click');
    });

    $('div.setup-panel-3 div a.btn-info').trigger('click');
});