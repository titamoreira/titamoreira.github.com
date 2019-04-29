$(document).ready(function() {
  'use strict';

  var headerOverlay = $(".c-header__overlay"),
    menuOpenIcon = $(".c-nav__icon"),
    menuCloseIcon = $(".c-nav__close"),
    menuList = $(".c-nav__box"),
    searchOpenIcon = $(".c-search__icon"),
    searchCloseIcon = $(".c-search__close"),
    searchBox = $(".c-search");

  /* =======================
  // Menu and Search
  ======================= */
  menuOpenIcon.click(function() {
    menuOpen();
  })

  menuCloseIcon.click(function () {
    menuClose();
  })

  searchOpenIcon.click(function () {
    searchOpen();
  });

  searchCloseIcon.click(function () {
    searchClose();
  });

  headerOverlay.click(function () {
    menuClose();
    searchClose();
  });

  function menuOpen() {
    menuList.addClass("is-visible");
    headerOverlay.addClass("is-visible");
  }

  function menuClose() {
    menuList.removeClass("is-visible");
    headerOverlay.removeClass("is-visible");
  }

  function searchOpen() {
    searchBox.addClass("is-visible");
    headerOverlay.addClass("is-visible");
  }

  function searchClose() {
    searchBox.removeClass("is-visible");
    headerOverlay.removeClass("is-visible");
  }

  /* =======================
  // Simple Jekyll Search
  ======================= */
  SimpleJekyllSearch({
    searchInput: document.getElementById("js-search-input"),
    resultsContainer: document.getElementById("js-results-container"),
    json: "/search.json",
    searchResultTemplate: '<a href="{url}">{title}</a>',
    noResultsText: "<li>No results found</li>"
  });

  /* =======================
  // Responsive Videos
  ======================= */
  $(".c-post__content, .c-page__content").fitVids({
    customSelector: ['iframe[src*="ted.com"]']
  });

  /* =======================
  // Scroll Top Button
  ======================= */
  $(".c-top").click(function() {
    $("html, body")
      .stop()
      .animate({ scrollTop: 0 }, "slow", "swing");
  });
  $(window).scroll(function() {
    if ($(this).scrollTop() > $(window).height()) {
      $(".c-top").addClass("is-active");
    } else {
      $(".c-top").removeClass("is-active");
    }
  });

   /* =======================
  // Slick Slider
  ======================= */
  $('.c-hero-slider').slick({
    infinite: true,
    autoplay: true,
    autoplaySpeed: 4000,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    dots: true,
    customPaging : function(slider, i) {
      var title = $(slider.$slides[i]).find('.c-hero-slider__title').text();
      return '<a class="pager__link"> '+ ++i +' '+'.'+' '+title+' </a>';
    },
    fade: true,
    cssEase: 'linear',
    responsive: [
    {
      breakpoint: 768,
      settings: {
        dots: false,
        arrows: true
      }
    }
  ]

  });

});
