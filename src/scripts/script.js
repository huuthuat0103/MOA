
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
function togle() {
    $('.card_header').click(function () {
        var id_to = $(this).attr('data-show');
        $('#collapse_' + id_to).toggle(300);
    });
}

function togle_sub() {
    $('.card_sub_header').click(function () {
        var id_sub_to = $(this).attr('data-show');
        $('#collapse_' + id_sub_to).toggle(300);
        // $(this).addClass('active');
        $(this).toggleClass("active").next(".desc_div").slideToggle("slow").siblings('.desc_div').slideUp().removeClass("active").end();
    });
}

$(document).ready(function () {
    $('#datepicker').datepicker({
        uiLibrary: 'bootstrap4',


    });
});

$(document).ready(function () {
    $(".item-a").click(function () {
        $(".item-map-a").toggle();
        $(".item-a").toggleClass("color-white");
    });
    $(".item-b").click(function () {
        $(".item-map-b").toggle();
        $(".item-b").toggleClass("color-white");
    });
    $(".item-c").click(function () {
        $(".item-map-c").toggle();
        $(".item-c").toggleClass("color-white");
    });
    $(".item-d").click(function () {
        $(".item-map-d").toggle();
        $(".item-d").toggleClass("color-white");
    });
    $(".item-e").click(function () {
        $(".item-map-e").toggle();
        $(".item-e").toggleClass("color-white");
    });
});


$(function () {
    function c() {
        p();
        var e = h();
        var r = 0;
        var u = false;
        l.empty();
        while (!u) {
            if (s[r] == e[0].weekday) {
                u = true
            } else {
                l.append('<div class="blank"></div>');
                r++
            }
        }
        for (var c = 0; c < 42 - r; c++) {
            if (c >= e.length) {
                l.append('<div class="blank"></div>')
            } else {
                var v = e[c].day;
                var m = g(new Date(t, n - 1, v)) ? '<div class="today">' : "<div>";
                l.append(m + "" + v + "</div>")
            }
        }

        var y = o[n - 1];
        a.css("background-color", y).find("h1").text(i[n - 1] + " " + t);
        f.find("div").css("color", y);
        l.find(".today").css("background-color", y);
        d();
        var thu = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
        var m = new Date();
        var z = m.getDate();
        var day = thu[m.getDay()];
        $('#thu').html(day);
        $('#date_z').html(z);

    }

    function h() {
        var e = [];
        for (var r = 1; r < v(t, n) + 1; r++) {
            e.push({
                day: r,
                weekday: s[m(t, n, r)]
            })
        }
        return e
    }

    function p() {
        f.empty();
        for (var e = 0; e < 7; e++) {
            f.append("<div>" + s[e].substring(0, 3) + "</div>")
        }
    }

    function d() {
        var t;
        var n = $("#calendar").css("width", e + "px");
        n.find(t = "#calendar_weekdays, #calendar_content").css("width", e + "px").find("div").css({
            width: e / 7 + "px",
            height: e / 7 + "px",
            "line-height": e / 7 + "px"
        });
        n.find("#calendar_header").css({
            height: e * (1 / 7) + "px"
        }).find('i[class^="icon-chevron"]').css("line-height", e * (1 / 7) + "px");
    }

    function v(e, t) {
        return (new Date(e, t, 0)).getDate();

    }

    function m(e, t, n) {
        return (new Date(e, t - 1, n)).getDay()
    }

    function g(e) {
        return y(new Date) == y(e)
    }

    function y(e) {
        return e.getFullYear() + "/" + (e.getMonth() + 1) + "/" + e.getDate()
    }

    function b() {
        var e = new Date;
        t = e.getFullYear();
        n = e.getMonth() + 1;
    }
    var e = 480;
    var t = 2013;
    var n = 9;
    var r = [];
    var i = ["JANUARY", "FEBRUARY", "MARCH", "APRIL", "MAY", "JUNE", "JULY", "AUGUST", "SEPTEMBER", "OCTOBER", "NOVEMBER", "DECEMBER"];
    var s = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    var o = ["#fff"];
    var u = $("#calendar");
    var a = u.find("#calendar_header");
    var f = u.find("#calendar_weekdays");
    var l = u.find("#calendar_content");
    b();
    c();
    a.find('i[class^="icon-chevron"]').on("click", function () {
        var e = $(this);
        var r = function (e) {
            n = e == "next" ? n + 1 : n - 1;
            if (n < 1) {
                n = 12;
                t--
            } else if (n > 12) {
                n = 1;
                t++
            }
            c()
        };
        if (e.attr("class").indexOf("left") != -1) {
            r("previous")
        } else {
            r("next")
        }
    })
})








