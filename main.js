/**
 * Created by marcin on 21.08.17.
 */

function main() {
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