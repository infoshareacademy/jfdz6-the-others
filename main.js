/**
 * Created by marcin on 21.08.17.
 */

// Menu auto-hide & show on click

function main() {
    var allIds = []

    function hideAll() {
        $(allIds.join(',')).hide()
    }

    $('.ulmenu > li > a').each(function () {
        allIds.push($(this).attr('href'))

    }).on('click', function() {
        setTimeout(function () {
            $('html, body').scrollTop(0)
        }, 0)
    })

    $('.ulmenu a').on('click', function () {
        hideAll()
        $($(this).attr('href').split('/')[0]).show()
        document.title = $(this).attr('data-title');
    })

    hideAll()
    $('#Mainpage').show()

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

