/**
 * Created by marcin on 21.08.17.
 */

function main() {
    $('#Kontakt').hide();
    $('#onas').hide();
    $('#info').hide();
    $('#rozkladjazdy').hide();
    $('#wyznacz-trase').hide();

    $('.fa-connectdevelop').parent().on('click', function () {
            $('#onas').hide();
            $('#mainpage').show();
            $('#Kontakt').hide();
            $('#info').hide();
            $('#rozkladjazdy').hide();
            $('#wyznacz-trase').hide();
        }
    );

    $('.fa-users').parent().on('click', function () {
            $('#onas').show();
            $('#mainpage').hide();
            $('#Kontakt').hide();
            $('#info').hide();
            $('#rozkladjazdy').hide();
            $('#wyznacz-trase').hide();
        }
    );

    $('.fa-envelope-o').parent().on('click', function () {
            $('#onas').hide();
            $('#mainpage').hide();
            $('#Kontakt').show();
            $('#info').hide();
            $('#rozkladjazdy').hide();
            $('#wyznacz-trase').hide();
        }
    );

    $('.fa-info').parent().on('click', function () {
            $('#onas').hide();
            $('#mainpage').hide();
            $('#Kontakt').hide();
            $('#info').show();
            $('#rozkladjazdy').hide();
            $('#wyznacz-trase').hide();
        }
    );

    $('.fa-street-view').parent().on('click', function () {
            $('#onas').hide();
            $('#mainpage').hide();
            $('#Kontakt').hide();
            $('#info').hide();
            $('#rozkladjazdy').hide();
            $('#wyznacz-trase').show();
        }
    );

    $('.fa-book').parent().on('click', function () {
            $('#onas').hide();
            $('#mainpage').hide();
            $('#Kontakt').hide();
            $('#info').hide();
            $('#rozkladjazdy').show();
            $('#wyznacz-trase').hide();
        }
    );

    $('.fa-bus').parent().on('click', function () {
            $('#onas').hide();
            $('#mainpage').hide();
            $('#Kontakt').hide();
            $('#info').hide();
            $('#rozkladjazdy').show();
            $('#wyznacz-trase').hide();
        }
    );

    $('.fa-subway').parent().on('click', function () {
            $('#onas').hide();
            $('#mainpage').hide();
            $('#Kontakt').hide();
            $('#info').hide();
            $('#rozkladjazdy').show();
            $('#wyznacz-trase').hide();
        }
    );

    $('.fa-train').parent().on('click', function () {
            $('#onas').hide();
            $('#mainpage').hide();
            $('#Kontakt').hide();
            $('#info').hide();
            $('#rozkladjazdy').show();
            $('#wyznacz-trase').hide();
        }
    );

    $('.skm-hist').hide();
    $('.skm-tab').hide();
    $('.pkm-hist').hide();
    $('.pkm-tab').hide();
    $('.skm-hist-button').on('click', function () {
            $('.skm-hist').toggle();
        }
    );
    $('.skm-tab-button').on('click', function () {
            $('.skm-tab').toggle();
        }
    );
    $('.pkm-hist-button').on('click', function () {
            $('.pkm-hist').toggle();
        }
    );
    $('.pkm-tab-button').on('click', function () {
            $('.pkm-tab').toggle();
        }
    );
}

$(document).ready(main);