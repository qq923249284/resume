$(function(){
    $('.photo').addClass('animated bounce'); 
    $('.navbar-nav li').eq(0).click(function (){
        $('html,body').animate({scrollTop:$("#home").offset().top-70},2000); 
    });
    $('.navbar-nav li').eq(1).click(function (){
        $('html,body').animate({scrollTop:$("#skill").offset().top-70},2000); 
    });
    $('.navbar-nav li').eq(2).click(function (){
        $('html,body').animate({scrollTop:$("#experience").offset().top-70},2000); 
    });
    $('.navbar-nav li').eq(3).click(function (){
        $('html,body').animate({scrollTop:$("#works").offset().top-70},2000); 
    });
    $('.navbar-nav li').eq(4).click(function (){
        $('html,body').animate({scrollTop:$("#oneself").offset().top-70},2000); 
    });
    

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
