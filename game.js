var mapTable = [
    ["-", "-", "-", "-", "-", "@", "#", "#", "C", "-", "-", "#", "x", "#", "-", "#", "-", "-", "#", "x", "x", "#", "-", "x", "-", "#", "#", "-", "x", "x"],
    ["#", "-", "x", "#", "-", "-", "#", "x", "#", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "*", "x", "#", "-", "x", "#", "-", "C"],
    ["#", "-", "#", "x", "-", "-", "#", "x", "#", "-", "-", "#", "x", "-", "-", "-", "x", "x", "#", "-", "#", "-", "-", "#", "#", "-", "-", "#", "-", "#"],
    ["#", "-", "-", "-", "-", "-", "#", "x", "#", "-", "-", "x", "#", "-", "#", "-", "-", "!", "#", "#", "#", "-", "-", "-", "-", "x", "-", "#", "-", "x"],
    ["x", "x", "x", "-", "-", "-", "#", "x", "#", "-", "#", "-", "-", "-", "-", "-", "x", "-", "-", "-", "-", "-", "#", "b", "-", "-", "-", "-", "-", "-"],
    ["-", "-", "%", "-", "-", "-", "#", "x", "#", "o", "-", "-", "-", "-", "-", "#", "#", "-", "-", "x", "-", "x", "-", "-", "x", "-", "#", "#", "#", "-"],
    ["-", "-", "-", "#", "#", "-", "#", "#", "#", "-", "-", "#", "-", "#", "-", "-", "-", "-", "-", "-", "x", "-", "#", "-", "-", "-", "#", "#", "e", "-"],
    ["#", "#", "-", "x", "x", "-", "-", "-", "-", "-", "#", "-", "-", "#", "x", "x", "#", "-", "-", "#", "C", "-", "-", "-", "x", "-", "-", "#", "-", "-"],
    ["#", "#", "-", "#", "#", "-", "-", "-", "#", "-", "C", "x", "-", "-", "-", "-", "-", "-", "-", "#", "x", "#", "-", "#", "-", "x", "-", "-", "-", "#"],
    ["-", "-", "-", "-", "-", "-", "x", "-", "-", "x", "x", "x", "x", "x", "-", "-", "#", "-", "#", "-", "-", "-", "#", "-", "#", "-", "-", "-", "-", "C"],
    ["x", "-", "#", "-", "-", "-", "-", "-", "-", "#", "#", "#", "#", "#", "-", "#", "#", "-", "-", "-", "-", "-", "#", "-", "#", "#", "#", "-", "-", "x"],
    ["x", "-", "#", "-", "-", "#", "#", "#", "-", "-", "-", "-", "#", "-", "-", "#", "-", "-", "-", "x", "-", "-", "#", "-", "-", "x", "#", "-", "-", "-"],
    ["x", "-", "#", "-", "-", "#", "-", "-", "x", "-", "#", "-", "-", "-", "-", "-", "-", "-", "-", "-", "#", "x", "-", "-", "-", "#", "-", "-", "-", "#"],
    ["x", "-", "#", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "x", "-", "#", "-", "-", "-", "C", "x", "-", "-", "-", "-", "#", "-", "-"],
    ["-", "-", "-", "-", "#", "#", "#", "#", "-", "-", "#", "x", "#", "-", "x", "x", "-", "#", "-", "#", "-", "-", "-", "-", "#", "x", "#", "-", "-", "#"],
    ["-", "k", "-", "-", "#", "x", "x", "#", "-", "-", "-", "-", "#", "-", "x", "x", "-", "-", "-", "-", "-", "-", "x", "-", "-", "-", "-", "-", "-", "-"],
    ["-", "#", "x", "-", "#", "x", "x", "#", "-", "-", "x", "-", "-", "-", "x", "-", "-", "-", "x", "#", "-", "-", "#", "d", "-", "#", "-", "#", "-", "x"],
    ["C", "#", "x", "-", "#", "#", "#", "#", "-", "a", "#", "-", "-", "-", "x", "-", "-", "#", "x", "-", "-", "-", "x", "#", "x", "#", "-", "#", "-", "#"],
    ["-", "#", "x", "-", "-", "-", "-", "-", "-", "#", "#", "#", "#", "-", "C", "-", "-", "#", "-", "-", "-", "#", "x", "#", "C", "#", "x", "#", "-", "-"],
    ["-", "-", "-", "&", "-", "x", "x", "C", "-", "x", "x", "x", "x", "f", "#", "-", "g", "-", "-", "x", "h", "-", "-", "-", "-", "-", "-", "-", "x", "m"]
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
            "k": {img: "obj10"},
            "d": {img: "obj11"},
            "e": {img: "obj12"},
            "f": {img: "obj13"},
            "#": {img: "zielonyplot", class: 'wall'},
            "x": {img: "cegla", class: 'wall'},
            "m": {img: "meta", bg: "black", class: "meta"},
            "C": {img: "coin", class: 'coin'}
        };
        for (var i = 0; i < width; i += 1) {
            var col = '-';
            $td = $('<td>');

            var type = mapTable[j][i];
            if (objects[type]) {
                $td.html('<img src="Assets/Photos/' + objects[type].img + '.jpg" style="width: 30px; height: 30px;" />')
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

var sec = 0;

function pad(val) {
    return val > 9 ? val : "0" + val;
}

var timerOn = false;

var timer;

$(document).keydown(function (e) {

    if (e.keyCode == 39 && !timerOn) {
        timerOn = true;
        timer = setInterval(function () {
            $("#seconds").html(pad(++sec % 60));
            $("#minutes").html(pad(parseInt(sec / 60, 10)));
        }, 1000);
    }

});

$('#seconds').html("00");
$('#minutes').html("00");

$('tr:first td:first', $table).addClass('bus');

var $bus = $('.bus');

var coinCounter = 0;

$('.coins').html(coinCounter);

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

function getNextPosition(element, way) {
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
    var $target = null;
    if (way === 37) {
        $target = moveLeft(element);
    } else if (way === 38) {
        $target = moveUp(element);
    } else if (way === 39) {
        $target = moveRight(element);
    } else {
        $target = moveDown(element);
    }
    if ($target.length > 0 && !$target.is('.wall')) {
        element.removeClass(elClass);
        $target.addClass(elClass);

        if ($target.hasClass('bus') && $target.hasClass('coin')) {
            $target.removeClass('coin').addClass('coinCollected');
            coinCounter++;
            $('.coins').html(coinCounter);
            $target.html(" ");
        }
        if ($target.hasClass('bus') && $target.hasClass('monster')) {
            youDied();
            $target.removeClass('bus');
            finishGame();
        }

        if ($target.hasClass('bus') && $target.hasClass('meta') && coinCounter === 10) {
            finishGame(true);
        }
    }
}

function youDied() {
    $('#Game').hide();
    $('body').append('<div id="youdied" style="background-image:url(https://res.cloudinary.com/teepublic/image/private/s--_AuUiZ2n--/t_Preview/b_rgb:191919,c_lpad,f_jpg,h_630,q_90,w_1200/v1480428599/production/designs/877345_1.jpg); background-repeat; no-repeat; background-size: cover; width: 100%; height: 100%; position: fixed;"></div>');
    setTimeout(function () {
        $('#youdied').remove();
        $('#Game').show();
    }, 3000);
}

function finishGame(hasWon) {
    if (hasWon) {
        var gbt = JSON.parse(localStorage.getItem("game-best-time")) || [];
        gbt.push({user: prompt("Congratulations! You won! Name: "), time: sec});
        gbt.sort(function (a, b) {
            return a.time > b.time;
        });
        localStorage.setItem("game-best-time", JSON.stringify(gbt));
        createLeaderboard();
    }
    coinCounter = 0;
    $('.coinCollected').removeClass().addClass('coin');
    $('td', $table).removeClass('bus');
    $('tr:first td:first', $table).addClass('bus');
    $('.coins').html(0);
    clearInterval(timer);
    sec = 0;
    $('#seconds').html("00");
    $('#minutes').html("00");
    timerOn = false;
}

function createLeaderboard() {
    if (localStorage.getItem("game-best-time") !== null) {
        for (var i = 0; i < 5; i++) {
            if (JSON.parse(localStorage.getItem("game-best-time"))[i] != undefined) {
                $(".leaderboard li:nth-child(" + (i + 1) + ")").text((JSON.parse(localStorage.getItem("game-best-time"))[i].user) + ": " + (JSON.parse(localStorage.getItem("game-best-time"))[i].time));
            }
        }
    }
}

createLeaderboard();

$(document).keydown(function (e) {
    $bus = $('.bus');
    if (e.keyCode > 36 && e.keyCode < 41) {
        e.preventDefault();
        move($bus, e.keyCode, 'bus');
    }
});

var monstersConfig = {
    moves: [
        [UP, UP, UP, UP, DOWN, DOWN, DOWN, DOWN],
        [DOWN, DOWN, DOWN, DOWN, DOWN, DOWN, DOWN, DOWN, DOWN, DOWN, DOWN, UP, UP, UP, UP, UP, UP, UP, UP, UP, UP, UP],
        [LEFT, LEFT, LEFT, LEFT, LEFT, LEFT, LEFT, LEFT, LEFT, LEFT, LEFT, LEFT, LEFT, RIGHT, RIGHT, RIGHT, RIGHT, RIGHT, RIGHT, RIGHT, RIGHT, RIGHT, RIGHT, RIGHT, RIGHT, RIGHT],
        [DOWN, DOWN, DOWN, DOWN, DOWN, DOWN, DOWN, DOWN, DOWN, DOWN, UP, UP, UP, UP, UP, UP, UP, UP, UP, UP],
        [UP, UP, UP, UP, UP, UP, UP, UP, UP, UP, DOWN, DOWN, DOWN, DOWN, DOWN, DOWN, DOWN, DOWN, DOWN, DOWN],
        [RIGHT, RIGHT, RIGHT, RIGHT, RIGHT, LEFT, LEFT, LEFT, LEFT, LEFT],
        [UP, UP, UP, UP, UP, UP, UP, UP, DOWN, DOWN, DOWN, DOWN, DOWN, DOWN, DOWN, DOWN],
        [UP, UP, UP, UP, UP, UP, DOWN, DOWN, DOWN, DOWN, DOWN, DOWN],
        [UP, UP, UP, UP, UP, UP, DOWN, DOWN, DOWN, DOWN, DOWN, DOWN],
        [LEFT, LEFT, LEFT, LEFT, LEFT, LEFT, RIGHT, RIGHT, RIGHT, RIGHT, RIGHT, RIGHT],
        [UP, UP, UP, UP, UP, UP, DOWN, DOWN, DOWN, DOWN, DOWN, DOWN],
        [UP, UP, UP, UP, UP, UP, UP, DOWN, DOWN, DOWN, DOWN, DOWN, DOWN, DOWN],
        [UP, UP, UP, UP, UP, UP, UP, UP, UP, UP, UP, UP, DOWN, DOWN, DOWN, DOWN, DOWN, DOWN, DOWN, DOWN, DOWN, DOWN, DOWN, DOWN],
        [UP, UP, UP, UP, UP, UP, UP, UP, DOWN, DOWN, DOWN, DOWN, DOWN, DOWN, DOWN, DOWN]
    ],
    movesCounters: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    moveTime: 100
}

$('.game_info_div input').on('change', function () {

    monstersConfig.moveTime = $('input[name=level]:checked', '.game_info_div').val();

});

function createMonster(moves, i) {

    var animate = function () {
        setTimeout(function () {
            var monster = $('.obj' + i);
            var $img = monster.removeClass('monster obj' + i).find('img');

            var $currentPosition = getNextPosition(monster, moves[monstersConfig.movesCounters[i]])
                .append($img)
                .addClass('monster obj' + i);
            if ($currentPosition.hasClass('bus') && $currentPosition.hasClass('monster')) {
                youDied();
                finishGame();
            }
            monstersConfig.movesCounters[i] = (monstersConfig.movesCounters[i] + 1) % moves.length;
            animate()
        }, monstersConfig.moveTime)
    };

    return animate()
}

function setMonsters() {
    monstersConfig.moves.forEach(function (moves, i) {
        createMonster(moves, i)
    });
}

setMonsters();
