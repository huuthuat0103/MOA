
$(document).ready(function () {
    var owl = $('#show_local');
    owl.owlCarousel({
        loop: false,
        nav: false,
        dots: false,
        margin: 10,
        mouseDrag: true,
        touchDrag: true,
        responsive: {
            768: {
                items: 3
            },
            320: {
                items: 1
            }
        }
    });
});

$(document).ready(function () {
    slide_Show();
    show_Fillter();
    show_search();
    show_date();
    togle();
    togle_sub();
    CONTROL = {
        main_LEFT: $('#container_main').offset().left,
        main_sidenav: $('.main_sidenav '),
    }

    CONTROL.main_sidenav.css({
        'right': CONTROL.main_LEFT,
    });
    $('.btn_sidenav').click(function () {
        CONTROL.main_sidenav.css({
            'width': '270px',
        });
        $('.ovelay_menu').css({
            'right': '270px',
            'opacity': '1',
            'visibility': 'visible'
        });
    });
    $('#close_menu').click(function () {
        CONTROL.main_sidenav.css({
            'width': '0',
        });
        $('.ovelay_menu').css({
            'right': '0',
            'opacity': '0',
            'visibility': 'hidden'
        });
    });
    $('.ovelay_menu').click(function () {
        CONTROL.main_sidenav.css({
            'width': '0',
        });
        $('.ovelay_menu').css({
            'right': '0',
            'opacity': '0',
            'visibility': 'hidden'
        });
    });
});
$(window).resize(function () {
    CONTROL = {
        main_LEFT: $('#container_main').offset().left,
        btn_sidenav: $('.btn_sidenav'),
        ovelay_menu: $('.ovelay_menu'),
        main_sidenav: $('.main_sidenav '),
    }
    CONTROL.main_sidenav.css({
        'right': CONTROL.main_LEFT,
    });
    $('.btn_sidenav').click(function () {
        CONTROL.main_sidenav.css({
            'width': '270px',
        });
        $('.ovelay_menu').css({
            'right': '270px',
            'opacity': '1',
            'visibility': 'visible'
        });
    });
    $('#close_menu').click(function () {
        CONTROL.main_sidenav.css({
            'width': '0',
        });
        $('.ovelay_menu').css({
            'right': '0',
            'opacity': '0',
            'visibility': 'hidden'
        });
    });
    $('.ovelay_menu').click(function () {
        CONTROL.main_sidenav.css({
            'width': '0',
        });
        $('.ovelay_menu').css({
            'right': '0',
            'opacity': '0',
            'visibility': 'hidden'
        });
    });
});
function slide_Show() {
    var owl = $('#show_local');
    owl.owlCarousel({
        loop: false,
        nav: false,
        dots: false,
        margin: 10,
        mouseDrag: true,
        touchDrag: true,
        responsive: {
            720: {
                items: 3
            },
            320: {
                items: 1
            }
        }
    });
}
function show_Fillter() {
// console.log();
var CONTROLFILLTER = {
    main_LEFT: $('#container_main').offset().left,
    WID_SCREEN: $('#container_main').width(),
    get_fitter: $('#get_fitter'),
    hide_fitter: $('#hide_fitter')
}
$('.popup-fillter').css({
    'left': CONTROLFILLTER.main_LEFT
});

CONTROLFILLTER.get_fitter.click(function () {
    $('.popup-fillter').css({
        'opacity': 1,
        'z-index': '2',
        'width': CONTROLFILLTER.WID_SCREEN
    });
});
CONTROLFILLTER.hide_fitter.click(function () {
    $('.popup-fillter').css({
        'opacity': 0,
        'z-index': '-1',
        'width': 0
    });
});

} 

function show_search() {
    var CONTROLFILLTER = {
        main_LEFT: $('#container_main').offset().left,
        WID_SCREEN: $('#container_main').width(),
        get_search: $('#get-search'),
        hide_search: $('#close_fitter')
    }
    $('.popup-search').css({
        'left': CONTROLFILLTER.main_LEFT
    });

    CONTROLFILLTER.get_search.click(function () {
        $('.popup-search').css({
            'opacity': 1,
            'z-index': '2',
            'width': CONTROLFILLTER.WID_SCREEN
        });
    });
    CONTROLFILLTER.hide_search.click(function () {
        $('.popup-search').css({
            'opacity': 0,
            'z-index': '-1',
            'width': 0
        });
    });

} 

function show_date() {
    var CONTROLFILLTER = {
        main_LEFT: $('#container_main').offset().left,
        WID_SCREEN: $('#container_main').width(),
        get_date: $('#get-date'),
        hide_date: $('#close_date')
    }
    $('.popup-datetime').css({
        'left': CONTROLFILLTER.main_LEFT
    });

    CONTROLFILLTER.get_date.click(function () {
        $('.popup-datetime').css({
            'opacity': 1,
            'z-index': '2',
            'width': CONTROLFILLTER.WID_SCREEN
        });
    });
    CONTROLFILLTER.hide_date.click(function () {
        $('.popup-datetime').css({
            'opacity': 0,
            'z-index': '-1',
            'width': 0
        });
    });

} 
function togle(){
    $('.card_header').click(function(){
        var id_to = $(this).attr('data-show');
        $('#collapse_'+ id_to).toggle(300);
    });
}

function togle_sub(){
    $('.card_sub_header').click(function(){
        var id_sub_to = $(this).attr('data-show');

         $('#collapse_'+ id_sub_to).toggle(300);
       
        // $(this).addClass('active');
    });
}
