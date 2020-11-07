var posXs = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
var posYs = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

for (i = 0; i < 20; i++) {
    var min = 0;
    var max = 1000;
    var random = Math.random() * (+max - +min) + +min;

    posYs[i] = random;

    var min = 0;
    var max = 490;
    var random = Math.random() * (+max - +min) + +min;

    posXs[i] = random;
}

function alertFunc() {
    for (i = 0; i < 20; i++) {
        posYs[i] += ((i / 20) + 10) * (document.documentElement.clientHeight / 500.0);

        if (posYs[i] > document.documentElement.clientHeight + 400) {
            posYs[i] = 0;
            var min = 0;
            var max = document.documentElement.clientWidth;
            var random = Math.random() * (+max - +min) + +min;

            posXs[i] = random;
        }

        monster = document.getElementById("the monster" + i.toString());
        monster.style.top = (posYs[i] - 500).toString() + "px";
        monster.style.left = (posXs[i]).toString() + "px";

        var degrees = (posYs[i] * (((i + 5) / 60) + 0.2)) % 360;
        if (i % 2 == 0)
            degrees = 360 - degrees;

        monster.style.transform = 'rotate(' + degrees.toString() + 'deg)';
        monster.style.position = "absolute";
    }
}

setInterval(alertFunc, 1000 / 60);

$(document).ready(function () {
    $('#surprise').click(function () {
        $('#hello').text('SURPRISE!').css('color', 'black').css('font-family', '"Impact"');
        $('video').css('visibility', 'visible');
        $('video').trigger('play');
        $('img').css('visibility', 'visible');
    });
});
