$(document).ready(function(){
    $('#surprise').click(function(){
        $('#hello').text('SURPRISE!').css('color', 'black').css('font-family', '"Impact"');
        $('video').css('visibility', 'visible');
        $('video').trigger('play');
    });
});