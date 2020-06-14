$(document).ready(function () {
    //Srart make nice scroll
    $(".do-nicescrol").niceScroll(); 
    //End make nice scroll
    $('.tabs li').click(function () {
        $(this).css({color: 'red'})
        $('.' + $(this).attr('class') + '-content').slideToggle(1000)
        $('.' + $(this).attr('class') + '-content').siblings('.content').hide()
        $(this).siblings('li').css({color: 'saddlebrown'});
       /* $(this).siblings('li').hover(function() {
            $(this).css({color: 'yellow'})
        })*/     
})
    $('button[class*="theme"]').click(function() {
        $('link[href*="theme"]').attr('href','css/'+$(this).attr('class') +'.css')
    })
    $('.carousel').carousel({
        interval: 1000,
    })
 
    setInterval(function () {
                            'use strict';
                            $('.products .container .rows .style h3').animate({fontSize: '35px'});
                            $('.products .container .rows .style h3').animate({fontSize: '30px'});
                        },500);
    //Start Loading
    $('.loading').fadeOut(500,function () {
        $('body').css({overflow: 'auto'})
        
    })
   //End Loading
    //Start Scroll Top
    $(window).scroll(function () {
        if ($(window).scrollTop() >= 700) {
        $('.scroll').css({display: 'block'})
        }else {
        $('.scroll').css({display: 'none'})
         }
        $('.scroll').click(function () {
        $(window).scrollTop(0);
    })
        
    })
    
    //End Scroll Top    
})



console.log( $('tab1').siblings(':contains("tab2")').length)