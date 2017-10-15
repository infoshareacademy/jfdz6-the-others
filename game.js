var mapTable = [
    ["o", "-", "-", "-", "-", "@", "#", "#", "-", "-", "-", "#", "x", "#", "-", "#", "-", "!", "#", "x", "x", "#", "-", "x", "-", "#", "#", "-", "x", "x"],
    ["#", "-", "x", "#", "-", "-", "#", "x", "#", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "*", "x", "#", "-", "x", "#", "-", "-"],
    ["#", "-", "#", "x", "-", "-", "#", "x", "#", "-", "-", "#", "x", "-", "-", "-", "x", "-", "#", "-", "#", "-", "-", "#", "#", "-", "-", "#", "-", "#"],
    ["#", "-", "-", "-", "-", "-", "#", "x", "#", "-", "-", "x", "#", "-", "#", "-", "-", "-", "#", "#", "#", "-", "-", "-", "-", "x", "-", "#", "-", "x"],
    ["x", "x", "x", "-", "-", "-", "#", "x", "#", "-", "#", "-", "-", "-", "-", "-", "x", "-", "-", "-", "-", "-", "#", "#", "-", "-", "-", "-", "-", "-"],
    ["-", "-", "-", "-", "-", "-", "#", "x", "#", "-", "-", "-", "-", "-", "-", "#", "#", "-", "-", "x", "-", "x", "-", "-", "-", "-", "#", "#", "#", "-"],
    ["-", "-", "-", "#", "#", "-", "#", "#", "#", "-", "-", "#", "-", "#", "-", "-", "-", "-", "-", "-", "x", "-", "#", "-", "-", "-", "#", "#", "-", "-"],
    ["#", "#", "-", "x", "x", "-", "-", "-", "-", "-", "#", "-", "-", "#", "x", "x", "#", "-", "-", "#", "-", "-", "-", "-", "x", "x", "-", "#", "-", "-"],
    ["#", "#", "-", "#", "#", "-", "-", "-", "#", "-", "-", "x", "-", "-", "-", "-", "-", "-", "-", "#", "x", "#", "-", "#", "-", "x", "-", "-", "-", "#"],
    ["-", "-", "-", "-", "-", "-", "x", "-", "-", "x", "x", "x", "x", "x", "-", "-", "#", "-", "#", "-", "-", "-", "#", "-", "#", "-", "-", "-", "-", "-"],
    ["x", "-", "#", "-", "-", "-", "-", "-", "-", "#", "#", "#", "#", "#", "-", "#", "#", "-", "-", "-", "-", "-", "#", "-", "#", "#", "#", "-", "-", "x"],
    ["x", "-", "#", "-", "-", "#", "#", "#", "-", "-", "-", "-", "#", "-", "-", "#", "-", "-", "-", "x", "-", "-", "#", "-", "-", "x", "#", "-", "#", "-"],
    ["x", "-", "#", "-", "-", "#", "-", "-", "x", "-", "#", "-", "-", "-", "-", "-", "-", "#", "-", "-", "#", "x", "-", "-", "-", "#", "-", "-", "-", "#"],
    ["x", "-", "#", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "#", "-", "x", "-", "#", "-", "-", "#", "-", "x", "-", "-", "-", "-", "#", "-", "-"],
    ["-", "-", "-", "-", "#", "#", "#", "#", "-", "-", "#", "x", "#", "-", "x", "x", "-", "#", "-", "#", "-", "-", "-", "-", "#", "x", "#", "-", "-", "#"],
    ["-", "-", "-", "-", "#", "x", "x", "#", "-", "-", "-", "-", "#", "-", "x", "x", "-", "-", "-", "-", "-", "-", "x", "-", "-", "-", "-", "-", "-", "-"],
    ["-", "#", "x", "-", "#", "x", "x", "#", "-", "-", "x", "-", "-", "-", "x", "-", "-", "-", "x", "#", "-", "-", "#", "-", "-", "#", "-", "#", "-", "x"],
    ["-", "#", "x", "-", "#", "#", "#", "#", "-", "-", "#", "-", "-", "_", "x", "-", "-", "#", "x", "-", "-", "-", "x", "#", "x", "#", "-", "#", "-", "#"],
    ["-", "#", "x", "-", "-", "-", "-", "-", "-", "#", "#", "#", "#", "-", "-", "-", "-", "#", "-", "-", "-", "#", "x", "#", "-", "#", "x", "#", "%", "-"],
    ["-", "-", "-", "&", "-", "x", "x", "-", "-", "x", "x", "x", "x", "-", "#", "-", "-", "-", "-", "x", "-", "-", "-", "-", "-", "-", "-", "-", "x", "m"]
];

function createTable(width, height) {
    var $table = $('<table>');
    for (var j = 0; j < height; j += 1) {
        $tr = $('<tr>');
        // var row = [];
        var objects = {
            "%": {img: "obj0", bg: "blue"},
            "!": {img: "obj1", bg: "orange"},
            "*": {img: "obj2", bg: "yellow"},
            "@": {img: "obj3", bg: "pink"},
            "&": {img: "obj4", bg: "grey"},
            "#": {img: "zielonyplot", bg: "green", class: 'wall'},
            "x": {img: "cegla", bg: "brown", class: 'wall'},
            "o": {img: "buss", bg: "red"},
            "m": {img: "meta", bg: "black"}
        };
        for (var i = 0; i < width; i += 1) {
            var col = '-';
            $td = $('<td>');

            var type = mapTable[j][i];
            if (objects[type]) {
                $td.html('<img src="Assets/Photos/' + objects[type].img + '.png" style="width: 30px; height: 30px; background: ' + objects[type].bg + '" />')
                    .addClass(objects[type].class).addClass(objects[type].img)
            }

            $tr.append($td);
            // row.push(col);
        }
        // mapTable.push(row);
        $table.append($tr);
    }
    return $table;
}


var $board = $('#board');
var $table = createTable(30, 20);
$('td', $table).addClass('point');

$board.append($table);

$('tr:first td:first', $table).addClass('bus');

var $bus = $('.bus');

function moveLeft(element) {
    return element.prev();
}

function moveRight(element) {
    return element.next();
}

function moveUp(element) {
    return element.parent().prev().find('td').eq(element.index());
}

function moveDown(element) {
    return element.parent().next().find('td').eq(element.index());
}

var UP = 38, DOWN = 40, LEFT = 37, RIGHT = 39;

function getNextPosition (element, way) {
    var target = null;
    if (way === 37) {
        target = moveLeft(element);
    } else if (way === 38) {
        target = moveUp(element);
    } else if (way === 39) {
        target = moveRight(element);
    } else {
        target = moveDown(element);
    }

    if (!target.is('.wall')) {
        return target;
    }

    return element;
}

function move(element, way, elClass) {
    var target = null;
    if (way === 37) {
        target = moveLeft(element);
    } else if (way === 38) {
        target = moveUp(element);
    } else if (way === 39) {
        target = moveRight(element);
    } else {
        target = moveDown(element);
    }

    if (!target.is('.wall')) {
        element.removeClass(elClass);
        target.addClass(elClass);
    }
}

$(document).keydown(function (e) {
    $bus = $('.bus');
    if (e.keyCode > 36 && e.keyCode < 41) {
        e.preventDefault();
        move($bus, e.keyCode, 'bus');
    }
});

var monsterMoves = [UP, UP, UP, UP, UP, UP, DOWN, DOWN, DOWN, DOWN, DOWN, DOWN];
var monsterMoveId = 0;

var interval = setInterval(function() {
    var monster = $('.obj0');

    var $img = monster.removeClass('obj0').find('img');

  getNextPosition(monster, monsterMoves[monsterMoveId]).append($img).addClass('obj0');
  monsterMoveId = (monsterMoveId + 1) % monsterMoves.length
}, 1000);