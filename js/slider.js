"use strict";

$(".single-item").slick({
  dots: true,
  dotsClass: 'dots-style',
  arrows: true,
  infinite: true,
  speed: 900,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  prevArrow: "<img src='/img/prevArrow.svg' class='prev' alt='arrow' />",
  nextArrow: "<img src='/img/nextArrow.svg' class='next' alt='arrow' />"
});