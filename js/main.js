$(function () {
  $(".banner-section__slider").slick({
    dots: true,
    prevArrow:
      '<button class="banner-section__slider-btn banner-section__slider-btnprev"><img src="./img/arrow-left.svg" alt=""></button>',
    nextArrow:
      '<button class="banner-section__slider-btn banner-section__slider-btnnext"><img src="./img/arrow-right.svg" alt=""></button>',
    responsive: [
      {
        breakpoint: 968,
        settings: {
          arrows: false,
        },
      },
    ],
  });

  $(".product-slider").slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    infinite: true,
    prevArrow:
      '<button class="product-slider__slider-btn product-slider__slider-btnprev"><img src="./img/arrow-black-left.svg" alt=""></button>',
    nextArrow:
      '<button class="product-slider__slider-btn product-slider__slider-btnnext"><img src="./img/arrow-black-right.svg" alt=""></button>',
    responsive: [
      {
        breakpoint: 1301,
        settings: {
          arrows: false,
          dots: true,
        },
      },
      {
        breakpoint: 1201,
        settings: {
          slidesToScroll: 3,
          slidesToShow: 3,
          arrows: false,
          dots: true,
        },
      },
      {
        breakpoint: 870,
        settings: {
          slidesToScroll: 2,
          slidesToShow: 2,
          arrows: false,
          dots: true,
        },
      },
      {
        breakpoint: 590,
        settings: {
          slidesToScroll: 1,
          slidesToShow: 1,
          arrows: false,
          dots: true,
        },
      },
    ],
  });

  $(".tab").on("click", function (e) {
    e.preventDefault(); // для отмена стандартного обработчика ссылок
    $($(this).siblings()).removeClass("tab--active");

    $($(this).closest('.tabs-wrapper').siblings().find("div")).removeClass(
      "tabs-content--active"
    );

    $(this).addClass("tab--active");
    $($(this).attr("href")).addClass("tabs-content--active");

    $('.product-slider').slick('setPosition')
  });

  $(".product-item__favorite").on("click", function () {
    $(this).toggleClass("product-item__favorite--active");
  });

  $(".filter-style").styler();

  $(".filter__item-drop, .filter-extra").on("click", function () {
    $(this).toggleClass("filter__item-drop--active");
    $(this).next().slideToggle("200");
  });

  $(".js-range-slider").ionRangeSlider({
    type: "double",
    grid: false,
    step: 1000,
  });
  $(".catalog__filter-btngrid").on("click", function () {
    $(this).addClass("catalog__filter-button--active");
    $(".catalog__filter-btnline").removeClass("catalog__filter-button--active");
    $(".product-item__wrapper").removeClass("product-item__wrapper--list");
  });
  $(".catalog__filter-btnline").on("click", function () {
    $(this).addClass("catalog__filter-button--active");
    $(".catalog__filter-btngrid").removeClass("catalog__filter-button--active");
    $(".product-item__wrapper").addClass("product-item__wrapper--list");
  });

  $(".rate").rateYo({
    rating: 3.6,
  });

  $(".menu__btn").on("click", function () {
    $(".menu-mobile__list").toggleClass("menu-mobile__list--active");
  });

  $('.footer__top-drop').on('click', function(){
    $(this).next().slideToggle();
    $(this).toggleClass('footer__top-drop--active');
  });
  $('.aside-btn').on('click', function(){
    $(this).next().slideToggle();
  });
});
