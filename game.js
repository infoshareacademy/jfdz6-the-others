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

$board.append($table);