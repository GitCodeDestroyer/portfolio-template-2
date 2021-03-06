new WOW().init();

// $(".about").niceScroll({
//     cursorcolor: "#6969E5",
//     cursorwidth: "10px",
//     cursorborderradius: "5px",
//     cursorborder: "none",
//     zindex: 1000000,
//     mousescrollstep: 40,
//     bouncescroll: !1,
//     cursoropacitymin: 1
// });

$('.section-6 .container').draggable({
    axis: 'x',
    grid: '400px'
});

$('.section-6 .container').on('dragstop', function () {
    if (parseInt($(this).css('left')) < (-4000 + (parseInt($('.section-6').css('width')) / 2))) {
        $(this).css({'left': 'calc(-4000px + 80%)', 'transition':'left .3s'});
        setTimeout(function () {
            $('.section-6 .container').css({'transition':'none'});
        }, 300);
    }
    if (parseInt($(this).css('left')) > parseInt($('.section-6').css('width')) / 2) {
        $(this).animate({'left': '10%'}, 300);
    }
})

var now = 2;

$('.load-text')[0].innerHTML = '100%';
$('.load-text').css({
    'color': '#738697'
});
$('.load-inner').css({
    'width': '100%'
});

setTimeout(function () {
    $('.load-text').css({'display': 'none'});
    $('.load-inner').css({'display': 'none'});
    $('.load-bar').css({'background': '#000'});

    $('.load-bar').animate({'width': '0', 'left': '50%'}, 300);
    $('.load-bar').animate({'width': '2px', 'height': '100%', 'left': '50%', 'top': '0%', 'border-radius': '0'}, 500);
    $('.load-bar').animate({'width': '50%', 'left': '0'}, 300);
    $('.load-bar').animate({'width': '0'}, 500);
    $('.load-bar').animate({'width': '100%', 'height': '100%', 'top': '0%'}, 600);
    setTimeout(function () {
        $('.section-1').css({'display': 'none'});
        $('.section-2').css({'display': 'block'});
        $('.section-2 .text').css({'display': 'block'});

        $('.start-btn').animate({'opacity': '1'}, 500);
        $('.start-btn').css({'transform': 'scale(1)'});
        $('.section-3').animate({'opacity': '1'}, 500);
        $('.section-3').css({'transform': 'scale(1) rotate(45deg)'});
    }, 3000);
}, 300);

$('.section-3').hover(
    function () {
        if (now == 2) {
            $('.section-3').css({'transform': 'scale(1.4) rotate(45deg)'});
            $('.section-2 .text').css({left: 'calc((100vw - 132px) / 2 + 140px)'});
        }
    },
    function () {
        if (now == 2) {
            $('.section-3').css({'transform': 'scale(1) rotate(45deg)'});
            $('.section-2 .text').css({left: 'calc((100vw - 132px) / 2)'});
        }
    }
);

$('.section-3').click(function () {
    if (now == 2) {
        $('.section-3').css({'transform': 'scale(1) rotate(45deg)'});
        $('.section-3').css({'width': '100vw', 'height':'100vh', 'top':'0', 'left': '0'});
        $('.section-3').css({'cursor': 'default'});
        setTimeout(function () {
            $('.vertical-centered-box').css({'transform':'scale(0.5)'});
            particleground(document.getElementById('particles-foreground'), {
                dotColor: 'rgba(255, 255, 255, 1)',
                lineColor: 'rgba(255, 255, 255, 0.05)',
                minSpeedX: 0,
                maxSpeedX: 0,
                minSpeedY: 0,
                maxSpeedY: 0,
                density: 100000, // One particle every n pixels
                curvedLines: false,
                proximity: 1, // How close two dots need to be before they join
                parallaxMultiplier: 10, // Lower the number is more extreme parallax
                particleRadius: 7 // Dot size
            });

            particleground(document.getElementById('particles-background'), {
                dotColor: 'rgba(247, 247, 52, 0.5)',
                lineColor: 'rgba(255, 255, 255, 0.05)',
                minSpeedX: 0.075,
                maxSpeedX: 0.15,
                minSpeedY: 0.075,
                maxSpeedY: 0.15,
                density: 100000, // One particle every n pixels
                curvedLines: true,
                proximity: 20, // How close two dots need to be before they join
                parallaxMultiplier: 7, // Lower the number is more extreme parallax
                particleRadius: 4 // Dot size
            });
            $('.section-3').css({'transform': 'scale(1) rotate(0)'});
        }, 400);
        $('.section-2')[0].innerHTML = '';
    }
    now = 3;
});

$('.link-1').hover(function () {$('.link-1 .circle').css({'transform':'scale(1.4)'})}, function () {$('.link-1 .circle').css({'transform':'scale(1)'})});
$('.link-2').hover(function () {$('.link-2 .circle').css({'transform':'scale(1.4)'})}, function () {$('.link-2 .circle').css({'transform':'scale(1)'})});
$('.link-3').hover(function () {$('.link-3 .circle').css({'transform':'scale(1.4)'})}, function () {$('.link-3 .circle').css({'transform':'scale(1)'})});

$('.link-1').click(function () {
    $('.section-4').css({'display': 'block'});
    $('.section-4').animate({"opacity": "1"}, 300);
});
$('.link-2').click(function () {
    $('.section-6').css({'display': 'block'});
    $('.section-6').animate({"opacity": "1"}, 300);
});
$('.link-3').click(function () {
    $('.section-7').css({'display': 'block'});
    $('.section-7').animate({"opacity": "1"}, 300);
});

$('.uzb').hover(function () {
    $('.uzb-section').css({'opacity':'1', 'right':'0'});
}, function () {
    $('.uzb-section').css({'opacity':'0', 'right':'-30%'});
});

$('.nav').hover(function () {
    $('.nav .text').css({'opacity': '1', 'right':'-150px'});
}, function () {
    $('.nav .text').css({'opacity': '0', 'right':'-100px'});
});

$('.section-4 .start-btn').click(function () {
    $('.section-5').css({'display':'block', 'background': '#2c2d44'});
    $('.section-5 .opacity-1').css({opacity: 1});
    setTimeout(function () {
        $('.section-5 .opacity-1').css({opacity: 0});
        $('.section-5 .opacity-2').css({opacity: 1});
        setTimeout(function () {
            $('.section-5 .opacity-1').css({'display': 'none'});
            $('.section-5 .opacity-2').css({opacity: 0});
            $('.section-5 .opacity-3').css({opacity: 1});
            setTimeout(function () {
                $('.section-5 .opacity-2').css({'display': 'none'});
                $('.section-5').css({'width': '50%'});
                $('.section-5 .opacity-3')[0].innerHTML = '9 years old (Begin)';
                setTimeout(function () {
                    $('.section-5 .page-1').addClass('page-2');
                    $('.section-5 .page-2').removeClass('page-1');
                    $('.section-5 .opacity-3')[0].innerHTML = '10 years old';
                    setTimeout(function () {
                        $('.section-5 .page-2').addClass('page-3');
                        $('.section-5 .page-3').removeClass('page-2');
                        $('.section-5 .opacity-3')[0].innerHTML = '11 years old (Testing)';
                        setTimeout(function () {
                            $('.section-5 .page-3').addClass('page-4');
                            $('.section-5 .page-4').removeClass('page-3');
                            $('.section-5 .opacity-3')[0].innerHTML = '12 years old (UX & UI)';
                            setTimeout(function () {
                                $('.section-5').css({'width': '100%'});
                                $('.section-5 .opacity-3')[0].innerHTML = 'Then, I start creating';
                                setTimeout(function () {
                                    $('.section-5 .opacity-3')[0].innerHTML = 'something cool,';
                                    setTimeout(function () {
                                        $('.section-5 .opacity-3')[0].innerHTML = 'something cool like a - ';
                                        setTimeout(function () {
                                        $('.section-5 .opacity-3')[0].innerHTML = '<div class="start-btn"><div class="inner"></div></div><span>Portfolio</span>';
                                    }, 2000);
                                    }, 2000);
                                }, 2000);
                            }, 4000);
                        }, 4000);
                    }, 4000);
                }, 4000);
            }, 2000);
        }, 2000);
    }, 2000);
});

$('.section-4 .nav').click(function () {
    $('.section-4').css({'display':'none'});
    $('.section-3').css({'display':'block'});
    $('.section-3').css({'transform': 'scale(1) rotate(45deg)'});
        $('.section-3').css({'width': '100vw', 'height':'100vh', 'top':'0', 'left': '0'});
        $('.section-3').css({'cursor': 'default'});
        setTimeout(function () {
            $('.section-3').css({'transform': 'scale(1) rotate(0)'});
        }, 400);
        $('.section-2')[0].innerHTML = '';
})

$('.section-5 .opacity-3 .start-btn').click(function () {
    $('.section-5').css({'display': 'none'});
    $('.section-6').css({'display': 'block'}).animate({"opacity": "1"}, 300);
})