/**
 * Created by marcinfortuna on 23.07.17.
 */
$(document).ready(function(){
    $('#characterLeft').text('Pozostało 140 znaków');
    $('#message').keydown(function () {
        var max = 140;
        var len = $(this).val().length;
        if (len >= max) {
            $('#characterLeft').text('Przekroczono limit znaków');
            $('#btnSubmit').addClass('disabled');
        }
        else {
            var ch = max - len;
            $('#characterLeft').text('Pozostało ' + ch + ' znaków');
            $('#btnSubmit').removeClass('disabled');
        }
    });
});
