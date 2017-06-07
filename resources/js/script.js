$(document).ready(function(){
//    sticky navi bar
    $('.section-features').waypoint(function(direction){
        if(direction == "down"){
            $('nav').addClass('sticky');
        }
        else{
             $('nav').removeClass('sticky');
        }
    }, {
        offset: '60px;'
    });
    
//    Scroll buttons
    $('.--scroll-to-about').click(function(){
        $('html, body').animate({scrollTop: $('.--section-about').offset().top}, 1000);
    });
    $('.--scroll-to-restaurant').click(function(){
        $('html, body').animate({scrollTop: $('.--section-restaurant').offset().top}, 1000);
    });
    $('.--scroll-to-hotel').click(function(){
        $('html, body').animate({scrollTop: $('.--section-hotel').offset().top}, 1000);
    });
    $('.--scroll-to-contact').click(function(){
        $('html, body').animate({scrollTop: $('.--section-contact').offset().top}, 1000);
    });
    
});