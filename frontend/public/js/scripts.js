(function($) {
    "use strict";

    //======================
    // Sticky menu
    //======================

    $(window).scroll(function() {
        if ($(window).scrollTop() >= 1) {
            $(".header").addClass("fixed-header");
        } else {
            $(".header").removeClass("fixed-header");
        }
    });

    //======================
    // Preloder
    //======================
    $(window).on("load", function() {
        $("#status").fadeOut();
        $("#preloader")
            .delay(500)
            .fadeOut("slow");
        $("body")
            .delay(500)
            .css({ overflow: "visible" });
    });

    //======================
    // Mobile menu
    //======================
    $("#mobile-menu-toggler").on("click", function(e) {
        e.preventDefault();
        console.log('preventDefault')
        $(".primary-menu > ul").slideToggle();
    });
    $(".has-menu-child").append(
        '<i class="menu-dropdown fas fa-angle-down"></i>'
    );

    if ($(window).width() <= 991) {
        $(".menu-dropdown").on("click", function() {
            $(this)
                .prev()
                .slideToggle("slow");
            $(this).toggleClass("fa-angle-down fa-angle-up");
        });
    }



       //======================
    // SEARCH POPUP
    //======================

    $('.select-icon').mouseenter(function () {
        $('.list-item').css({
            "display": "block"
        })
    });
    $('.list-item').mouseleave(function () {
        $(this).css({
            "display": "none"
        })
    });
    

    //======================
    // Foo nav toggler
    //======================
    // if($('.test-caro').width() < 768 ) {
    //     $('.foo-nav h5').on('click', function() {
    //         $(this).siblings('ul').slideToggle();
    //     })
    // }

    //======================
    // Testimonial
    //======================
    $(".test-caro").owlCarousel({
        autoplay: true,
        dots: true,
        loop: true,
        margin: 30,
        nav: false,
        responsive: {
            0: {
                items: 1
            },
            768: {
                items: 2
            }
        }
    });

    //======================
    // Testimonial 2
    //======================
    $(".test-caro-2").owlCarousel({
        dots: false,
        items: 1,
        nav: true,
        navText: [
            '<i class="fas fa-arrow-left"></i>',
            '<i class="fas fa-arrow-right"></i>'
        ],
        smartSpeed: 500,
        thumbs: true,
        thumbsPrerendered: true
    });

    //======================
    // Testimonial 3
    //======================
    $(".test-caro-3").owlCarousel({
        dots: true,
        items: 1,
        nav: true,
        navText: [
            '<i class="fas fa-arrow-left"></i>',
            '<i class="fas fa-arrow-right"></i>'
        ],
        smartSpeed: 500
    });

    //======================
    // Testimonial Review
    //======================
    $(".review__carousel").owlCarousel({
        autoplay: true,
        dots: true,
        loop: true,
        margin: 30,
        nav: false,
        responsive: {
            0: {
                items: 1
            },
            768: {
                items: 2
            },
            991: {
                items: 3
            }
        }
    });

    //======================
    // Banner Slider carousel
    //======================
    $(".banner-slider-carousel").owlCarousel({
        autoplay: false,
        animateIn: "fadeIn",
        animateOut: "fadeOut",
        dots: true,
        loop: true,
        nav: true,
        items: 1,
        navText: ["<i class='fas fa-angle-left'>", "<i class='fas fa-angle-right'>"],
    });

    //======================
    // Signup/Login carousel
    //======================
    $(".sl-slider-caro").owlCarousel({
        dots: true,
        items: 1,
        nav: false,
        smartSpeed: 500
    });

    //======================
    // Partners carousel
    //======================
    $(".partners-logo").owlCarousel({
        autoplay: true,
        dots: false,
        items: 6,
        loop: true,
        margin: 60,
        nav: false,
        smartSpeed: 500,
        responsive: {
            0: {
                items: 2,
                margin: 30
            },
            400: {
                items: 3,
                margin: 40
            },
            768: {
                items: 4,
                margin: 50
            },
            992: {
                items: 5,
                margin: 50
            },
            1199: {
                items: 6
            }
        }
    });

    //======================
    // Select currency
    //======================
    $(".curr-select").on("click", function() {
        $(this)
            .children("ul")
            .slideToggle();
    });

    //======================
    // Clock
    //======================
    // $("#clock")
    //     .countdown("2023/04/16")
    //     .on("update.countdown", function(event) {
    //         var $this = $(this).html(
    //             event.strftime(
    //                 "" +
    //                     "<p>week%!w <span>%-w</span> </p>" +
    //                     "<p>day%!d <span>%-d</span> </p>" +
    //                     "<p>hr <span>%H</span> </p>" +
    //                     "<p>min <span>%M</span> </p>" +
    //                     "<p>sec <span>%S</span> </p>"
    //             )
    //         );
    //     });

    if ($(window).width() <= 575) {
        $(".footer .foo-nav h5").append('<i class="fas fa-plus fa-minus"></i>');
        $(".footer .foo-nav h5").on("click", function() {
            $(this)
                .next("ul")
                .slideToggle("");
            $(this)
                .children("i")
                .toggleClass("fa-plus");
        });
    }

    $(".btn")
        .on("mouseenter mousemove", function(e) {
            var parentOffset = $(this).offset(),
                relX = e.pageX - parentOffset.left,
                relY = e.pageY - parentOffset.top;
            $(this)
                .find(".bh")
                .css({ top: relY, left: relX });
            var origin = relX + "px" + " " + relY + "px";
        })
        .on("mouseout", function(e) {
            var parentOffset = $(this).offset(),
                relX = e.pageX - parentOffset.left,
                relY = e.pageY - parentOffset.top;
            $(this)
                .find(".bh")
                .css({ top: relY, left: relX });
        });

    var tB = new TimelineMax({ repeat: -1, yoyo: true });
    tB.add("f1")
        .to(
            ".animg1, .ani4img1",
            3,
            { rotation: "20", ease: Power2.easeNone },
            "f1"
        )
        .to(
            ".animg2, .ani4img2",
            3,
            { rotation: "-20", ease: Power2.easeNone },
            "f1"
        )
        .to(".rcvMobile", 0.7, { y: "30", ease: Linear.easeNones }, "f1")
        .to(".rcvMobile", 0.7, { y: "0", ease: Linear.easeNones }, "-=.5");

    var tC = new TimelineMax({});
    tC.add("f2")
        .to(
            ".ani5img2, .ani7img1",
            10,
            { rotation: "360", ease: Linear.easeNone, repeat: -1 },
            "f2"
        )
        .to(
            ".ani5img3, .ani7img2",
            15,
            { rotation: "360", ease: Linear.easeNone, repeat: -1 },
            "f2"
        )
        .to(
            ".ani5img4, .ani7img3",
            20,
            { rotation: "360", ease: Linear.easeNone, repeat: -1 },
            "f2"
        )
        .to(
            ".ani7img4",
            5,
            { rotation: "360", ease: Linear.easeNone, repeat: -1 },
            "f2"
        );

    var tA = new TimelineMax({ paused: true });
    var tB = new TimelineMax({ paused: true });
    tA.add("f2")
        .to(
            ".animg5",
            1.5,
            {
                top: "0",
                ease: Power1.easeOut
            },
            "f2"
        )
        .to(".animg5", 1.5, {
            left: "30%",
            ease: Power4.easeOut,
            delay: 1
        })
        .from(
            ".abs-img",
            1.5,
            {
                left: "-20px",
                opacity: 0,
                ease: Power4.easeOut,
                delay: 1
            },
            "f2"
        )
        .from(
            ".ani5img5",
            1.5,
            {
                right: "-20%",
                opacity: 0,
                ease: Power4.easeOut
            },
            "f2"
        )
        .from(
            ".ani7img5",
            1.5,
            {
                left: "-20%",
                opacity: 0,
                ease: Power4.easeOut
            },
            "f2"
        )
        .staggerTo(
            ".an3",
            1.5,
            {
                scale: 1,
                ease: Power4.easeOut
            },
            0.3,
            "f2"
        )
        .staggerFrom(
            ".scrn-1, .scrn-2, .scrn-3",
            1,
            {
                y: 300,
                ease: Power2.easeOut
            },
            0.3,
            "f2"
        )
        .staggerFrom(
            ".speciality .iconBox",
            1,
            {
                y: 50,
                opacity: 0.5,
                ease: Power1.easeOut
            },
            0.3,
            "f2"
        );
    $(".an3, .animg5, .scrn-1, .scrn-2, .scrn-3, .abs-img, .ani5img5").onScreen(
        {
            container: window,
            direction: "vertical",
            doIn: function() {
                tA.restart();
                tB.restart();
            },
            doOut: function() {
                console.log("Out");
                // Do something to the matched elements as they get off scren
            }
        }
    );
    $(".iconBox").onScreen({
        container: window,
        direction: "vertical",
        doIn: function() {
            tA.restart();
            tB.restart();
        },
        doOut: function() {
            // console.log('Out')
            // Do something to the matched elements as they get off scren
        }
    });
    function accordionFun(e) {
        var collBTN = e + " .accordion-item h5";
        var colbody = e + " .accordion-item";
        $(collBTN).on("click", function() {
            // console.log('HI', colbody);
            $(colbody).removeClass("active");
            $(this)
                .parent(".accordion-item")
                .addClass("active");
        });
    }

    accordionFun("#accordion");
    accordionFun("#accordion1");
    accordionFun("#accordion2");
    accordionFun("#accordion3");
    accordionFun("#accordion4");
    accordionFun("#accordion5");
    accordionFun("#accordion6");

    /**
     * Nice Select
     */
    $("select").niceSelect();

    function isIE() {
        var ua = window.navigator.userAgent; //Check the userAgent property of the window.navigator object
        var msie = ua.indexOf("MSIE "); // IE 10 or older
        var trident = ua.indexOf("Trident/"); //IE 11

        return msie > 0 || trident > 0;
    }

    //function to show alert if it's IE
    function ShowIEAlert() {
        if (isIE()) {
            alert("User is using IE");
        }
    }


    /**
     * IE checking
     * Browser support for IE
     */
    function isIE() {
        var ua = window.navigator.userAgent; //Check the userAgent property of the window.navigator object
        var msie = ua.indexOf("MSIE "); // IE 10 or older
        var trident = ua.indexOf("Trident/"); //IE 11
        var edge = ua.indexOf("Edge/"); //IE 11

        return msie > 0 || trident > 0 || edge > 0;
    }

    //function to add classname if it's IE
    function addClassName() {
        if (isIE()) {
            // alert("User is using IE");
            $(".banner.v2").addClass("bSupport");
        }
    }
    console.log(window.navigator.userAgent);
    addClassName();
})(jQuery);

// var imported = document.createElement("script");
// imported.src = "inc/switcher/js/switcher.js";
// document.head.appendChild(imported);
// var styleE = document.createElement("link");
// styleE.href = "inc/switcher/css/switcher.css";
// styleE.rel = "stylesheet";
// document.head.appendChild(styleE);


//======================
    // GOOGLE MAP SCRIPT
    //======================

    function init() {
        var locations = [
            ['Xirosoft', 23.810331, 90.412521, 3],
            ['Xirosoft', 23.9980797, 90.4229848],
            ['Xirosoft', 23.8780696, 90.2540589],
        ];

        var map = new google.maps.Map(document.getElementById('map'), {
            zoom: 10,
            center: new google.maps.LatLng(23.810331, 90.412521),
            mapTypeId: google.maps.MapTypeId.ROADMAP,


            styles: [{ "featureType": "water", "elementType": "geometry", "stylers": [{ "color": "#e9e9e9" }, { "lightness": 17 }] }, { "featureType": "landscape", "elementType": "geometry", "stylers": [{ "color": "#f5f5f5" }, { "lightness": 20 }] }, { "featureType": "road.highway", "elementType": "geometry.fill", "stylers": [{ "color": "#ffffff" }, { "lightness": 17 }] }, { "featureType": "road.highway", "elementType": "geometry.stroke", "stylers": [{ "color": "#ffffff" }, { "lightness": 29 }, { "weight": 0.2 }] }, { "featureType": "road.arterial", "elementType": "geometry", "stylers": [{ "color": "#ffffff" }, { "lightness": 18 }] }, { "featureType": "road.local", "elementType": "geometry", "stylers": [{ "color": "#ffffff" }, { "lightness": 16 }] }, { "featureType": "poi", "elementType": "geometry", "stylers": [{ "color": "#f5f5f5" }, { "lightness": 21 }] }, { "featureType": "poi.park", "elementType": "geometry", "stylers": [{ "color": "#dedede" }, { "lightness": 21 }] }, { "elementType": "labels.text.stroke", "stylers": [{ "visibility": "on" }, { "color": "#ffffff" }, { "lightness": 16 }] }, { "elementType": "labels.text.fill", "stylers": [{ "saturation": 36 }, { "color": "#333333" }, { "lightness": 40 }] }, { "elementType": "labels.icon", "stylers": [{ "visibility": "off" }] }, { "featureType": "transit", "elementType": "geometry", "stylers": [{ "color": "#f2f2f2" }, { "lightness": 19 }] }, { "featureType": "administrative", "elementType": "geometry.fill", "stylers": [{ "color": "#fefefe" }, { "lightness": 20 }] }, { "featureType": "administrative", "elementType": "geometry.stroke", "stylers": [{ "color": "#fefefe" }, { "lightness": 17 }, { "weight": 1.2 }] }]
        });

        var infowindow = new google.maps.InfoWindow();

        var marker, i;

        for (i = 0; i <= locations.length; i++) {
            marker = new google.maps.Marker({
                position: new google.maps.LatLng(locations[i][1], locations[i][2]),
                map: map,
                icon: 'images/map-pin.png',
            });

            google.maps.event.addListener(marker, 'click', (function (marker, i) {
                return function () {
                    infowindow.setContent(locations[i][0]);
                    infowindow.open(map, marker);
                }
            })(marker, i));
        }


    }

    if ($('#map').length > 0) {
        google.maps.event.addDomListener(window, 'load', init);
    }


    //======================
    //  Back to Top JS
    //======================

    $("body").append(
        '<div id="toTop" class="back-to-top"><i class="fas fa-arrow-up"></i></div>'
    );
    $(window).on("scroll", function () {
        if ($(this).scrollTop() != 0) {
            $("#toTop").fadeIn();
        } else {
            $("#toTop").fadeOut();
        }
    });
    $("#toTop").on("click", function () {
        $("html, body").animate({ scrollTop: 0 }, 2000);
        return false;
    });

    /*********************************
    /* CounterUp 
    *********************************/
    if ($(".counter").length > 0) {
        $(".counter").counterUp({
            delay: 10,
            time: 3000
        });
    }

    /*********************************
    /* CountDown 
    *********************************/
    var austDay = new Date();
    austDay = new Date(austDay.getFullYear() + 1, 1 - 1, 1);

    if($("#commingCountdown").length > 0) {
        $("#commingCountdown").countdown({
            until: austDay,
            padZeroes: true,
            labels: ["Year", "Mo", "Wk", "Days", "Hours", "Mins", "Sec"],
        });
    }
