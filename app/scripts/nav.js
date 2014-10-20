$(document).ready(function(){
    'use strict';
    $('.jumbotron p a').draggable();
    //$('div').sortable();
    $('div').draggable();
    $('.jumbotron p a').click(function(){
        //$('h4').effect('explode');
        $('.jumbotron h1').effect('bounce', {times: 5}, 2000);
        $('.container').fadeOut(3000);
        $('.container').fadeIn(6000);
    });
});