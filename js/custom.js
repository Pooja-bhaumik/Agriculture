$(document).ready(function () {
  $(".wrapper").owlCarousel({
    items: 1,
    dots: true,
    loop: true,
    slideTransition: "linear",
    //   autoplayTimeout: 3000,
    //   autoplaySpeed: 2000,
    //   autoplay:true
  });
  $(".faculty-wrapper").owlCarousel({
    loop: true,
    margin: 24,
    nav: true,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 3,
      },
      1000: {
        items: 4,
      },
    },
  });

  $(window).on("scroll", function () {
    console.log('HIiii')
    alert('hiiii')
    var scroll = $(window).scrollTop();
    console.log(scroll)
    let navHeight = $(".header").height();
    if (scroll > navHeight) {
      $(".custom_nav").css("background-color", "rgba(37,139,71,1)");
    } else {
      $(".custom_nav").css("background", "transparent");
    }
  });
});

function readMore(dot_id, more_id, btn_id) {
  // console.log(dot_id,more_id,btn_id);

  var dots = document.getElementById(dot_id);
  var moreText = document.getElementById(more_id);
  var btnText = document.getElementById(btn_id);

  if (dots.style.display === "none") {
    console.log("if true");
    dots.style.display = "inline";
    btnText.innerHTML = "Read more";
    moreText.style.display = "none";
  } else {
    console.log("else");
    dots.style.display = "none";
    btnText.innerHTML = "Read less";
    moreText.style.display = "inline";
  }
}

function myFunction1() {
  var dots = document.getElementById("dots1");
  var moreText = document.getElementById("more1");
  var btnText = document.getElementById("myBtn1");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "Read more";
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "Read less";
    moreText.style.display = "inline";
  }
}
function myFunction2() {
  var dots = document.getElementById("dots2");
  var moreText = document.getElementById("more2");
  var btnText = document.getElementById("myBtn2");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "Read more";
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "Read less";
    moreText.style.display = "inline";
  }
}
function myFunction3() {
  var dots = document.getElementById("dots3");
  var moreText = document.getElementById("more3");
  var btnText = document.getElementById("myBtn3");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "Read more";
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "Read less";
    moreText.style.display = "inline";
  }
}

$(window).scroll((e) => {
  // Detect how far are we from the top of the page
  let windowTop = $(window).scrollTop();
  // Loop through every navigation menu item
  $(".navbar-nav a").each(function (event) {
    // Check for the current navigation item associated section
    // Check how far the associated section is from the top
    // If the associated section is as far as the user have scrolled, add 'active' class to the item.
    if (windowTop >= $($(this).attr("href")).offset().top - 200) {
      // Remove 'active' from previously highlighted menu items
      $(".navbar-nav .active").removeClass("active");

      // Highlight the current menu item by adding 'active' class
      $(this).addClass("active");
    }
  });
});

$(".navbar-nav a").each(function (e) {
  $(this).on("click", function (e) {
    e.preventDefault();

    console.log(this.getAttribute("href"));

    const id = this.getAttribute("href").split("#")[1];

    console.log(id);

    var element = document.getElementById(id);
    const offset = 100;
    const bodyRect = document.body.getBoundingClientRect().top;
    const elementRect = element.getBoundingClientRect().top;
    const elementPosition = elementRect - bodyRect;
    const offsetPosition = elementPosition - offset;

    window.scrollTo({
      top: offsetPosition,
      behaviour: "smooth",
    });
  });
});
$(".footer_links  a").each(function (e) {
  $(this).on("click", function (e) {
    e.preventDefault();

    console.log(this.getAttribute("href"));

    const id = this.getAttribute("href").split("#")[1];

    console.log(id);

    // var element = document.getElementById(id)
    // const offset = 100;
    // const bodyRect = document.body.getBoundingClientRect().bottom;
    // const elementRect = element.getBoundingClientRect().bottom;
    // const elementPosition = elementRect - bodyRect;
    // const offsetPosition = elementPosition - offset;

    //  window.scrollTo({
    //     bottom:offsetPosition,
    //     behaviour: "smooth",

    //   })
  });
});
