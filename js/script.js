$(document).ready(function () {

    $('.step').hide();
    $('.step').first().show();

    const intervalAnimation = 1000;
    const indextotal = parseInt($(".step").length);

    function progresso(index) {
        switch (parseInt(index)) {
            case 0:
                $("#barra").last().removeClass().addClass("barra25");
                break;
            case 1:
                $("#barra").last().removeClass().addClass("barra50");
                break;
            case 2:
                $("#barra").last().removeClass().addClass("barra75");
                break;
            case 3:
                $("#barra").last().removeClass().addClass("barra100");
                break;
            default:
                break
        };
    };

    function passoExibido(index) {
        let total = indextotal;

        if (index == 0) {
            $("#prev").last().addClass("btn-visibility");
        } else if (index == indextotal) {
            $('#enviar').submit();
        } else {
            $("#prev").last().removeClass("btn-visibility");
        }

        $("#passo").html(index + 1);
        $("#passototal").html(total);
    };

    passoExibido(0);
    progresso(0);

    $(".card").click(function () {
        let step = $(this).data("step");

        if (step == 1) {
            $("#step_1 .card").removeClass("card-selected");
        } else if (step == 2) {
            $("#step_2 .card").removeClass("card-selected");
        } else if (step == 3) {
            $("#step_3 .card").removeClass("card-selected");
        } else if (step == 4) {
            $("#step_4 .card").removeClass("card-selected");
        }

        $(this).addClass("card-selected");

        let currentStep = $(".step:visible").index();
        let nextStep = parseInt(currentStep) + 1;

        progresso(nextStep);
        passoExibido(nextStep);

        setTimeout(() => $(".step:visible").hide().next().show(), intervalAnimation);

        if (parseInt(step) >= indextotal) {
            window.location.href = '../processa.html'
        }

    });

    $("#prev").click(function () {
        let currentStep = $(".step:visible").index();

        if (currentStep <= 0) {
            return;
        }

        let prevStep = parseInt(currentStep) - 1;

        progresso(prevStep);
        passoExibido(prevStep);

        setTimeout(() => $(".step:visible").hide().prev().show(), intervalAnimation);

    });

});