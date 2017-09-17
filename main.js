/**
 * Created by marcin on 21.08.17.
 */

// Menu auto-hide & show on click

function main() {
    $('#Contact').hide();
    $('#AboutUs').hide();
    $('#Info').hide();
    $('#Timetable').hide();
    $('#Navigate').hide();

    $('.fa-connectdevelop').parent().on('click', function () {
            document.title = 'Komunikacja Miejska w Gdańsku';
            $('#AboutUs').hide();
            $('#Mainpage').show();
            $('#Contact').hide();
            $('#Info').hide();
            $('#Timetable').hide();
            $('#Navigate').hide();
        }
    );

    $('.fa-users').parent().on('click', function () {
            document.title = 'O nas';
            $('#AboutUs').show();
            $('#Mainpage').hide();
            $('#Contact').hide();
            $('#Info').hide();
            $('#Timetable').hide();
            $('#Navigate').hide();
        }
    );

    $('.fa-envelope-o').parent().on('click', function () {
            document.title = 'Kontakt';
            $('#AboutUs').hide();
            $('#Mainpage').hide();
            $('#Contact').show();
            $('#Info').hide();
            $('#Timetable').hide();
            $('#Navigate').hide();
        }
    );

    $('.fa-info').parent().on('click', function () {
            document.title = 'Informacje o komunikacji';
            $('#AboutUs').hide();
            $('#Mainpage').hide();
            $('#Contact').hide();
            $('#Info').show();
            $('#Timetable').hide();
            $('#Navigate').hide();
        }
    );

    $('.fa-street-view').parent().on('click', function () {
            document.title = 'Wyznacz trasę';
            $('#AboutUs').hide();
            $('#Mainpage').hide();
            $('#Contact').hide();
            $('#Info').hide();
            $('#Timetable').hide();
            $('#Navigate').show();
        }
    );

    $('.fa-book').parent().on('click', function () {
            document.title = 'Rozkład jazdy';
            $('#AboutUs').hide();
            $('#Mainpage').hide();
            $('#Contact').hide();
            $('#Info').hide();
            $('#Timetable').show();
            $('#Navigate').hide();
        }
    );

    $('.fa-bus').parent().on('click', function () {
            document.title = 'Rozkład jazdy';
            $('#AboutUs').hide();
            $('#Mainpage').hide();
            $('#Contact').hide();
            $('#Info').hide();
            $('#Timetable').show();
            $('#Navigate').hide();
        }
    );

    $('.fa-subway').parent().on('click', function () {
            document.title = 'Rozkład jazdy';
            $('#AboutUs').hide();
            $('#Mainpage').hide();
            $('#Contact').hide();
            $('#Info').hide();
            $('#Timetable').show();
            $('#Navigate').hide();
        }
    );

    $('.fa-train').parent().on('click', function () {
            document.title = 'Rozkład jazdy';
            $('#AboutUs').hide();
            $('#Mainpage').hide();
            $('#Contact').hide();
            $('#Info').hide();
            $('#Timetable').show();
            $('#Navigate').hide();
        }
    );

    $('.fa-calendar').parent().on('click', function () {
            document.title = 'Rozkład jazdy';
            $('#AboutUs').hide();
            $('#Mainpage').hide();
            $('#Contact').hide();
            $('#Info').hide();
            $('#Timetable').show();
            $('#Navigate').hide();
        }
    );

    // The End of Menu auto-hide & show on click

//Hide Info sections & show on click

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

$('.ztmhsjq').hide();

$(document).ready(function () {
    $(".ztm-hist-button").click(function () {
        $(".ztmhsjq").toggle();
    });
});


$(document).ready(function () {
    $(".ztm-tab-button").click(function () {
        $(".ztmtbjq").toggle();
    });
});

//The End of Hide Info sections & show on click

