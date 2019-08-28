$(function(){
    $('.photo').addClass('animated bounce');  
    
    setTimeout(function(){
        $('#home .text').animate({"width":"100%"})
    }, 1500);
    setTimeout(function(){
        $('#home .text h3').addClass('animated fadeInUpBig');
    }, 2000);
    setTimeout(function(){
        $('#home .container p:first').addClass('animated fadeInUpBig');
    }, 2800);
    setTimeout(function(){
        $('#home .container p:last').addClass('animated fadeInUpBig');
    }, 3600);
});