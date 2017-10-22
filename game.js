var mapTable = [
    ["-", "-", "-", "-", "-", "@", "#", "#", "-", "-", "-", "#", "x", "#", "-", "#", "-", "-", "#", "x", "x", "#", "-", "x", "-", "#", "#", "-", "x", "x"],
    ["#", "-", "x", "#", "-", "-", "#", "x", "#", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "*", "x", "#", "-", "x", "#", "-", "-"],
    ["#", "-", "#", "x", "-", "-", "#", "x", "#", "-", "-", "#", "x", "-", "-", "-", "x", "x", "#", "-", "#", "-", "-", "#", "#", "-", "-", "#", "-", "#"],
    ["#", "-", "-", "-", "-", "-", "#", "x", "#", "-", "-", "x", "#", "-", "#", "-", "-", "!", "#", "#", "#", "-", "-", "-", "-", "x", "-", "#", "-", "x"],
    ["x", "x", "x", "-", "-", "-", "#", "x", "#", "-", "#", "-", "-", "-", "-", "-", "x", "-", "-", "-", "-", "-", "#", "#", "b", "-", "-", "-", "-", "-"],
    ["-", "-", "-", "-", "-", "-", "#", "x", "#", "o", "-", "-", "-", "-", "-", "#", "#", "-", "-", "x", "-", "x", "-", "-", "x", "-", "#", "#", "#", "-"],
    ["-", "-", "-", "#", "#", "-", "#", "#", "#", "-", "-", "#", "-", "#", "-", "-", "-", "-", "-", "-", "x", "-", "#", "-", "-", "-", "#", "#", "-", "-"],
    ["#", "#", "-", "x", "x", "-", "-", "-", "-", "-", "#", "-", "-", "#", "x", "x", "#", "-", "-", "#", "-", "-", "-", "-", "x", "-", "-", "#", "-", "-"],
    ["#", "#", "-", "#", "#", "-", "-", "-", "#", "-", "-", "x", "-", "-", "-", "-", "-", "-", "-", "#", "x", "#", "-", "#", "-", "x", "-", "-", "-", "#"],
    ["-", "-", "-", "-", "-", "-", "x", "-", "-", "x", "x", "x", "x", "x", "-", "-", "#", "-", "#", "-", "-", "-", "#", "-", "#", "-", "-", "-", "-", "-"],
    ["x", "-", "#", "-", "-", "-", "-", "-", "-", "#", "#", "#", "#", "#", "-", "#", "#", "-", "-", "-", "-", "-", "#", "-", "#", "#", "#", "-", "-", "x"],
    ["x", "-", "#", "-", "-", "#", "#", "#", "-", "-", "-", "-", "#", "-", "-", "#", "-", "-", "-", "x", "-", "-", "#", "-", "-", "x", "#", "-", "#", "-"],
    ["x", "-", "#", "-", "-", "#", "-", "-", "x", "-", "#", "-", "-", "-", "-", "-", "-", "-", "-", "-", "#", "x", "-", "-", "-", "#", "-", "-", "-", "#"],
    ["x", "-", "#", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "#", "-", "x", "-", "#", "-", "-", "#", "-", "x", "-", "-", "-", "-", "#", "-", "-"],
    ["-", "-", "-", "-", "#", "#", "#", "#", "-", "-", "#", "x", "#", "-", "x", "x", "-", "#", "-", "#", "-", "-", "-", "-", "#", "x", "#", "-", "-", "#"],
    ["-", "-", "-", "-", "#", "x", "x", "#", "-", "-", "-", "-", "#", "-", "x", "x", "-", "-", "-", "-", "-", "-", "x", "-", "-", "-", "-", "-", "-", "-"],
    ["-", "#", "x", "-", "#", "x", "x", "#", "-", "-", "x", "-", "-", "-", "x", "-", "-", "-", "x", "#", "-", "-", "#", "-", "-", "#", "-", "#", "-", "x"],
    ["-", "#", "x", "-", "#", "#", "#", "#", "-", "a", "#", "-", "-", "_", "x", "-", "-", "#", "x", "-", "-", "-", "x", "#", "x", "#", "-", "#", "-", "#"],
    ["-", "#", "x", "-", "-", "-", "-", "-", "-", "#", "#", "#", "#", "-", "-", "-", "-", "#", "-", "-", "-", "#", "x", "#", "-", "#", "x", "#", "%", "-"],
    ["-", "-", "-", "&", "-", "x", "x", "-", "-", "x", "x", "x", "x", "-", "#", "-", "g", "-", "-", "x", "h", "-", "-", "-", "-", "-", "-", "-", "x", "m"]
];

function createTable(width, height) {
    var $table = $('<table>');
    for (var j = 0; j < height; j += 1) {
        $tr = $('<tr>');
        var objects = {
            "%": {img: "obj0"},
            "!": {img: "obj1"},
            "*": {img: "obj2"},
            "@": {img: "obj3"},
            "&": {img: "obj4"},
            "o": {img: "obj5"},
            "g": {img: "obj6"},
            "h": {img: "obj7"},
            "a": {img: "obj8"},
            "b": {img: "obj9"},
            "#": {img: "zielonyplot", class: 'wall'},
            "x": {img: "cegla",  class: 'wall'},
            "m": {img: "meta", bg: "black"}
        };
        for (var i = 0; i < width; i += 1) {
            var col = '-';
            $td = $('<td>');

            var type = mapTable[j][i];
           if (objects[type]) {
               $td.html('<img src="Assets/Photos/' + objects[type].img + '.jpg" style="width: 30px; height: 30px; background: ' + objects[type].bg + '" />')
                    .addClass(objects[type].class).addClass(objects[type].img)
            }

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

var monstersConfig = {
    moves: [
        [UP, UP, UP, UP, UP, UP, DOWN, DOWN, DOWN, DOWN, DOWN, DOWN],
        [DOWN, DOWN, DOWN, DOWN, DOWN, DOWN, DOWN, DOWN, DOWN, DOWN, DOWN,UP, UP, UP, UP, UP, UP, UP, UP, UP, UP, UP],
        [LEFT, LEFT, LEFT, LEFT, LEFT, LEFT, LEFT, LEFT, LEFT, LEFT, LEFT, LEFT, LEFT, RIGHT, RIGHT, RIGHT, RIGHT, RIGHT, RIGHT, RIGHT, RIGHT, RIGHT, RIGHT,RIGHT, RIGHT, RIGHT],
        [DOWN, DOWN, DOWN, DOWN, DOWN, DOWN, DOWN, DOWN, DOWN, DOWN, UP, UP, UP, UP, UP, UP, UP, UP, UP, UP],
        [UP, UP, UP, UP, UP, UP, UP, UP, UP, UP, DOWN, DOWN, DOWN, DOWN, DOWN, DOWN, DOWN, DOWN, DOWN, DOWN],
        [RIGHT, RIGHT, RIGHT, RIGHT, RIGHT, LEFT, LEFT, LEFT, LEFT, LEFT],
        [UP, UP, UP, UP, UP, UP, UP, UP, DOWN, DOWN, DOWN, DOWN, DOWN, DOWN, DOWN, DOWN],
        [UP, UP, UP, UP, UP, DOWN, DOWN, DOWN, DOWN, DOWN],
        [UP, UP, UP, UP, UP, UP, DOWN, DOWN, DOWN, DOWN, DOWN, DOWN],
        [LEFT, LEFT, LEFT, LEFT, LEFT, RIGHT, RIGHT, RIGHT, RIGHT, RIGHT]
    ],
    movesCounters: [0,0,0,0,0,0,0,0,0,0],
    moveTime: 100
}

function createMonster(moves, i) {
    return function() {
        var monster = $('.obj' + i);
        var $img = monster.removeClass('obj' + i).find('img');

        getNextPosition(monster, moves[monstersConfig.movesCounters[i]]).append($img).addClass('obj' + i);
        monstersConfig.movesCounters[i] = (monstersConfig.movesCounters[i] + 1) % moves.length;
    }
}

function setMonsters() {
    monstersConfig.moves.forEach(function(moves, i ) {
        setInterval(createMonster(moves, i), monstersConfig.moveTime)
    });
}
setMonsters()