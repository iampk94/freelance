$(window).scroll(function () {
  console.log("scrolling");
  var sticky = $(".navbar"),
    scroll = $(window).scrollTop();
  console.log("scrolling", scroll);

  if (scroll >= 90) {
    sticky.addClass("fixed-top");
  } else {
    sticky.removeClass("fixed-top");
  }
});

$('.menu-link').bigSlide({
  menu:"#menu",
  push:".push",
  side:"left",
  easyClose:!0,
  menuWidth:"19.625em",
  speed:"300"
});


$(".rocket-lazyload").each(function () {
  if ($(this).attr("data-bg")) {
    $(this).css({
      "background-image": $(this).data("bg"),
    });
  }
});


$(".jobs-slider").slick({
  dots: false,
  arrows: true,
  speed: 300,
  autoplay: false,
  autoplaySpeed: 3000,
  slidesToShow: 3,
  slidesToScroll: 2,
  infinite: true,
  prevArrow:
    '<span class="prev"><img class="img-fluid" src="./images/icons/pre-arrow.png"/></span>',
  nextArrow:
    '<span class="next"><img class="img-fluid" src="./images/icons/next-arrow.png"/></span>',
  responsive: [
    {
      breakpoint: 1300,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 1025,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 556,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
});

$(".add_service_slick").slick({
  dots: !1,
  slidesToShow: 5,
  autoplay: !0,
  autoplaySpeed: 3000,
  slidesToScroll: 1,
  touchMove: !1,
  prevArrow: '<i class="fa fa-chevron-left customs" aria-hidden="true"></i>',
  nextArrow: '<i class="fa fa-chevron-right customs" aria-hidden="true"></i>',
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: !0,
        dots: !1,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
});
$(".add_service_slick1").slick({
  dots: !1,
  slidesToShow: 5,
  autoplay: !0,
  autoplaySpeed: 3000,
  slidesToScroll: 1,
  touchMove: !1,
  prevArrow: '<i class="fa fa-chevron-left customs" aria-hidden="true"></i>',
  nextArrow: '<i class="fa fa-chevron-right customs" aria-hidden="true"></i>',
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: !0,
        dots: !1,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
});
$(".add_service_slick2").slick({
  dots: !1,
  slidesToShow: 5,
  autoplay: !0,
  autoplaySpeed: 3000,
  slidesToScroll: 1,
  touchMove: !1,
  prevArrow: '<i class="fa fa-chevron-left customs" aria-hidden="true"></i>',
  nextArrow: '<i class="fa fa-chevron-right customs" aria-hidden="true"></i>',
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: !0,
        dots: !1,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
});
