let menuVisible = false;
//Función que oculta o muestra el menu
function mostrarOcultarMenu() {
  if (menuVisible) {
    document.getElementById("nav").classList = "";
    menuVisible = false;
  } else {
    document.getElementById("nav").classList = "responsive";
    menuVisible = true;
  }
}

function seleccionar() {
  //oculto el menu una vez que selecciono una opcion
  document.getElementById("nav").classList = "";
  menuVisible = false;
}



//Funcion que aplica las animaciones en los item de los img

jQuery(document).ready(function ($) {
  "use strict";

  $(".loader").delay(200).fadeOut("slow");
  $("#overlayer").delay(200).fadeOut("slow");

  var siteCarousel = function () {
    if ($(".nonloop-block-13").length > 0) {
      $(".nonloop-block-13").owlCarousel({
        center: false,
        items: 1,
        loop: true,
        stagePadding: 0,
        margin: 0,
        autoplay: true,
        nav: true,
        navText: [
          '<span class="icon-arrow_back">',
          '<span class="icon-arrow_forward">',
        ],
        responsive: {
          600: {
            margin: 0,
            nav: true,
            items: 2,
          },
          1000: {
            margin: 0,
            stagePadding: 0,
            nav: true,
            items: 3,
          },
          1200: {
            margin: 0,
            stagePadding: 0,
            nav: true,
            items: 4,
          },
        },
      });
    }

    $(".slide-one-item").owlCarousel({
      center: false,
      items: 1,
      loop: true,
      stagePadding: 0,
      margin: 0,
      smartSpeed: 1000,
      autoplay: true,
      pauseOnHover: false,
      autoHeight: true,
      nav: false,
      navText: [
        '<span class="icon-keyboard_arrow_left">',
        '<span class="icon-keyboard_arrow_right">',
      ],
    });
  };
  siteCarousel();

  // siteStellar();

  var siteDatePicker = function () {
    if ($(".datepicker").length > 0) {
      $(".datepicker").datepicker();
    }
  };
  siteDatePicker();

  var siteSticky = function () {
    $(".js-sticky-header").sticky({ topSpacing: 0 });
  };
  siteSticky();

  // navigation
  var OnePageNavigation = function () {
    var navToggler = $(".site-menu-toggle");
    $("body").on(
      "click",
      ".main-menu li a[href^='#'], .smoothscroll[href^='#'], .site-mobile-menu .site-nav-wrap li a",
      function (e) {
        e.preventDefault();

        var hash = this.hash;

        $("html, body").animate(
          {
            scrollTop: $(hash).offset().top,
          },
          600,
          "easeInOutExpo",
          function () {
            window.location.hash = hash;
          }
        );
      }
    );
  };
  OnePageNavigation();

  var siteIstotope = function () {
    /* activate jquery isotope */
    var $container = $("#posts").isotope({
      itemSelector: ".item",
      isFitWidth: true,
    });

    $(window).resize(function () {
      $container.isotope({
        columnWidth: ".col-sm-3",
      });
    });

    $container.isotope({ filter: "*" });

    // filter items on button click de img
    $("#filters").on("click", "button", function (e) {
      e.preventDefault();
      var filterValue = $(this).attr("data-filter");
      $container.isotope({ filter: filterValue });
      $("#filters button").removeClass("active");
      $(this).addClass("active");
    });
  };

  siteIstotope();

  $(".fancybox").on("click", function () {
    var visibleLinks = $(".fancybox");

    $.fancybox.open(visibleLinks, {}, visibleLinks.index(this));

    return false;
  });
});








function hamburg(){
  const navbar = document.querySelector(".dropdown")
  navbar.style.transform = "translateY(0px)"
}

function cancel(){
  const navbar = document.querySelector(".dropdown")
  navbar.style.transform = "translateY(-500px)"
}

// Typewriter Effect

const texts = [
  "DEVELOPER",
  "DESIGNER",
  "YOUTUBER"
]

let speed  =100;
const textElements = document.querySelector(".typewriter-text");

let textIndex = 0;
let charcterIndex = 0;

function typeWriter(){
  if (charcterIndex < texts[textIndex].length){
      textElements.innerHTML += texts[textIndex].charAt(charcterIndex);
      charcterIndex++;
      setTimeout(typeWriter, speed); 
  }
  else{
      setTimeout(eraseText, 1000)
  }
}

function eraseText(){
  if(textElements.innerHTML.length > 0){
      textElements.innerHTML = textElements.innerHTML.slice(0,-1);
      setTimeout(eraseText, 50)
  }
  else{
      textIndex = (textIndex + 1) % texts.length;
      charcterIndex = 0;
      setTimeout(typeWriter, 500)
  }
}

window.onload = typeWriter
