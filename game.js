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

var monsterMoves = [UP, UP, UP, UP, UP, UP, DOWN, DOWN, DOWN, DOWN, DOWN, DOWN];
var monsterMoveId = 0;

var interval = setInterval(function() {
    var monster = $('.obj0');

    var $img = monster.removeClass('obj0').find('img');

  getNextPosition(monster, monsterMoves[monsterMoveId]).append($img).addClass('obj0');
  monsterMoveId = (monsterMoveId + 1) % monsterMoves.length
}, 100);


var monsterMoves1 = [DOWN, DOWN, DOWN, DOWN, DOWN, DOWN, DOWN, DOWN, DOWN, DOWN, DOWN,UP, UP, UP, UP, UP, UP, UP, UP, UP, UP, UP];
var monsterMoveId1 = 0;

var interval = setInterval(function() {
    var monster1 = $('.obj1');

    var $img = monster1.removeClass('obj1').find('img');

    getNextPosition(monster1, monsterMoves1[monsterMoveId1]).append($img).addClass('obj1');
    monsterMoveId1 = (monsterMoveId1 + 1) % monsterMoves1.length
}, 100);


var monsterMoves2 = [LEFT, LEFT, LEFT, LEFT, LEFT, LEFT, LEFT, LEFT, LEFT, LEFT, LEFT, LEFT, LEFT, RIGHT, RIGHT, RIGHT, RIGHT, RIGHT, RIGHT, RIGHT, RIGHT, RIGHT, RIGHT,RIGHT, RIGHT, RIGHT];
var monsterMoveId2 = 0;

var interval = setInterval(function() {
    var monster2 = $('.obj2');

    var $img = monster2.removeClass('obj2').find('img');

    getNextPosition(monster2, monsterMoves2[monsterMoveId2]).append($img).addClass('obj2');
    monsterMoveId2 = (monsterMoveId2 + 1) % monsterMoves2.length
}, 100);


var monsterMoves3 = [DOWN, DOWN, DOWN, DOWN, DOWN, DOWN, DOWN, DOWN, DOWN, DOWN, UP, UP, UP, UP, UP, UP, UP, UP, UP, UP];
var monsterMoveId3 = 0;

var interval = setInterval(function() {
    var monster3 = $('.obj3');

    var $img = monster3.removeClass('obj3').find('img');

    getNextPosition(monster3, monsterMoves3[monsterMoveId3]).append($img).addClass('obj3');
    monsterMoveId3 = (monsterMoveId3 + 1) % monsterMoves3.length
}, 100);


var monsterMoves4 = [UP, UP, UP, UP, UP, UP, UP, UP, UP, UP, DOWN, DOWN, DOWN, DOWN, DOWN, DOWN, DOWN, DOWN, DOWN, DOWN,];
var monsterMoveId4 = 0;

var interval = setInterval(function() {
    var monster4 = $('.obj4');

    var $img = monster4.removeClass('obj4').find('img');

    getNextPosition(monster4, monsterMoves4[monsterMoveId4]).append($img).addClass('obj4');
    monsterMoveId4 = (monsterMoveId4 + 1) % monsterMoves4.length
}, 100);


var monsterMoves5 = [RIGHT, RIGHT, RIGHT, RIGHT, RIGHT, LEFT, LEFT, LEFT, LEFT, LEFT,];
var monsterMoveId5 = 0;

var interval = setInterval(function() {
    var monster5 = $('.obj5');

    var $img = monster5.removeClass('obj5').find('img');

    getNextPosition(monster5, monsterMoves5[monsterMoveId5]).append($img).addClass('obj5');
    monsterMoveId5 = (monsterMoveId5 + 1) % monsterMoves5.length
}, 100);


var monsterMoves6 = [UP, UP, UP, UP, UP, UP, UP, UP, DOWN, DOWN, DOWN, DOWN, DOWN, DOWN, DOWN, DOWN,];
var monsterMoveId6 = 0;

var interval = setInterval(function() {
    var monster6 = $('.obj6');

    var $img = monster6.removeClass('obj6').find('img');

    getNextPosition(monster6, monsterMoves6[monsterMoveId6]).append($img).addClass('obj6');
    monsterMoveId6 = (monsterMoveId6 + 1) % monsterMoves6.length
}, 100);


var monsterMoves7 = [UP, UP, UP, UP, UP, DOWN, DOWN, DOWN, DOWN, DOWN,];
var monsterMoveId7 = 0;

var interval = setInterval(function() {
    var monster7 = $('.obj7');

    var $img = monster7.removeClass('obj7').find('img');

    getNextPosition(monster7, monsterMoves7[monsterMoveId7]).append($img).addClass('obj7');
    monsterMoveId7 = (monsterMoveId7 + 1) % monsterMoves7.length
}, 100);


var monsterMoves8 = [UP, UP, UP, UP, UP, UP, DOWN, DOWN, DOWN, DOWN, DOWN, DOWN];
var monsterMoveId8 = 0;

var interval = setInterval(function() {
    var monster8 = $('.obj8');

    var $img = monster8.removeClass('obj8').find('img');

    getNextPosition(monster8, monsterMoves8[monsterMoveId8]).append($img).addClass('obj8');
    monsterMoveId8 = (monsterMoveId8 + 1) % monsterMoves8.length
}, 100);


var monsterMoves9 = [LEFT, LEFT, LEFT, LEFT, LEFT, RIGHT, RIGHT, RIGHT, RIGHT, RIGHT,];
var monsterMoveId9 = 0;

var interval = setInterval(function() {
    var monster9 = $('.obj9');

    var $img = monster9.removeClass('obj9').find('img');

    getNextPosition(monster9, monsterMoves9[monsterMoveId9]).append($img).addClass('obj9');
    monsterMoveId9 = (monsterMoveId9 + 1) % monsterMoves9.length
}, 100);
