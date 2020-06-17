$(window).on("load", function () {
    $(".loading").fadeOut();
    console.log("fds")
});

$(window).resize(function () {
    if ($(window).width() < 768) {
        $('.navbar').removeClass('m-container');
        $('.slider').removeClass('m-container');
        $('.stepper-section').removeClass('m-container');
        $('.about-stepper').addClass('mx-auto');
        $('.logo-section').addClass('left-60');
        $('.download-section').removeClass('m-container');
        $('.download-section').removeClass('position-absolute');
        $('#download-lg').removeClass('download-box');
        $('#download-xs').addClass('download-box');
        $('#img-download').addClass('w-25');
        $('#img-download').removeClass('w-100');
        $('#img-download').addClass('mx-auto');
        $('#img-download').addClass('my-4');
        $("#img-download").attr("src", "./export/021_dlbox_icon_download.svg");
        $('.buttons').addClass('d-flex');
        $('.buttons').addClass('align-items-center');
        $('.buttons').addClass('flex-column');
        $('.buttons').css('position', 'static');
        $('.btn-download').css('position', 'static');
        $('#download-form').removeClass('flex-row-reverse');
        $('#download-form').addClass('flex-column-reverse');
        $('#download-form').addClass('align-items-center');
        $('#download-form').removeAttr('placeholder');
    }
    else {
        $('.logo-section').removeClass('left-60');
        $('.navbar').addClass('m-container');
        $('.stepper-section').addClass('m-container');
        $('.about-stepper').removeClass('mx-auto');
        $('.slider').addClass('m-container');
        $('.download-section').addClass('m-container');
        $('.download-section').addClass('position-absolute');
        $('#download-lg').addClass('download-box');
        $('#download-xs').removeClass('download-box');
        $('#img-download').addClass('w-100');
        $('#img-download').removeClass('w-25');
        $('#img-download').removeClass('my-4');
        $("#img-download").attr("src", "./export/019_dlbox_Bg.jpg");
        $('.buttons').removeClass('d-flex');
        $('.buttons').removeClass('align-items-center');
        $('.buttons').removeClass('flex-column');
        $('.buttons').css('position', 'absolute');
        $('.btn-download').css('position', 'absolute');
        $('#download-form').addClass('flex-row-reverse');
        $('#download-form').removeClass('flex-column-reverse');
        $('#download-form').removeClass('align-items-center');
        $('#download-form:input').addAttr('placeholder');
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