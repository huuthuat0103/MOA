
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

    console.log(CONTROLFILLTER.WID_SCREEN);

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