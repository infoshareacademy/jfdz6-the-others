function createTable(width, height) {
    var $table = $('<table>');
    for (var j = 0; j < height; j += 1) {
        $tr = $('<tr>');
        for (var i = 0; i < width; i += 1) {
            $td = $('<td>');
            $tr.append($td);
        }
        $table.append($tr);
    }
    return $table;
}

var $board = $('#board');
var $table = createTable(30, 20);

$('td', $table).addClass('point');
$('tr:first td:first', $table).addClass('bus');

$board.append($table);


$(document).keydown(function(e){
    var $bus = $('.bus');
    //left
    if (e.keyCode === 37) {
        $bus.removeClass('bus').prev().addClass('bus');
    }
    //up
    if (e.keyCode === 38) {
        e.preventDefault();
        $bus.removeClass('bus').parent().prev().find('td').eq($bus.index()).addClass('bus');
    }
    //right
    if (e.keyCode === 39) {
        $('.bus').removeClass('bus').next().addClass('bus');
    }
    //down
    if (e.keyCode === 40) {
        e.preventDefault();
        $('.bus').removeClass('bus').parent().next().find('td').eq($bus.index()).addClass('bus');
    }
})