/**
 * Created by marcin on 21.08.17.
 */

// Menu sections hiding

function main() {
    var allIds = [];

    function hideAll() {
        $(allIds.join(',')).hide();
    }

    $('.ulmenu > li > a').each(function () {
        allIds.push($(this).attr('href'))

    }).on('click', function () {
        setTimeout(function () {
            $('html, body').scrollTop(0)
        }, 0)
    })

    $('.ulmenu a').on('click', function () {
        hideAll();
        $($(this).attr('href').split('/')[0]).show();
        document.title = $(this).attr('data-title');
    })

    $('.functionalities-description').on('click', function () {
        hideAll();
        $($(this).children('a').attr('href')).show();
        document.title = $(this).attr('data-title');
    })

    hideAll();
    $('#Mainpage').show();

// The End of Menu sections hiding

// Info sections hiding

    $('.info-section').hide();
    $('.info-button').on('click', function () {
        $(this).nextAll('.info-section:first').toggle();
    });

// The End of Info sections hiding

}

$(document).ready(main);
