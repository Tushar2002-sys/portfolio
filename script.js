$(document).ready(function()
{
    $('#menu').click(function(){
        $(this).toggleClass('fa-times');
        $('header').toggleClass('togle');
    });
});



$(window).on('scrol load',function(){
    $('#menu').click(function(){
        $(#menu).removeClass('fa-times');
        $('header').removeClass('togle');

});