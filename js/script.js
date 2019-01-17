$(document).ready(function () {

  //Check to see if the window is top if not then display button

  $(window).scroll(function () {
    if ($(this).scrollTop() > 40) {
      $('#topBtn').fadeIn();
    } else {
      $('#topBtn').fadeOut();
    }
  });

  $("#topBtn").click(function () {
    $('html ,body').animate({
      scrollTop: 0
    }, 800);
  });





  //conunter



  $('.counter').each(function () {
    $(this).prop('Counter', 0).animate({
      Counter: $(this).text()
    }, {
      duration: 4000,
      easing: 'swing',
      step: function (now) {
        $(this).text(Math.ceil(now));
      }
    });
  });



  // $('.owl-carousel').owlCarousel({
  //     items:1,    
  //     autoplayTimeout:5000,
  //     mouseDrag:false

  // })

  $(document).ready(function () {
    $('.owl-carousel').owlCarousel({
      loop: true,
      margin: 10,
      responsiveClass: true,
      dots: false,
      responsive: {
        0: {
          items: 1,
          mergeFit: true,
          mouseDrag: false,
          nav: true
        },
        600: {
          items: 1,
          nav: true,
          mouseDrag: false,
          mergeFit: true
        },
        1000: {
          items: 1,
          nav: true,
          mouseDrag: false,
          mergeFit: true,
          margin: 20
        }
      }
    })
  })
});



$(document).ready(function () {
  $('.Doctor').owlCarousel({
    loop: true,
    margin: 10,
    responsiveClass: true,
    dots: true,
    mouseDrag: true,
    nav: false,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 1,
      },
      1000: {
        items: 1,
      }
    }
  })
})


$(document).ready(function () {
  $('.Blog').owlCarousel({
    loop: true,
    responsiveClass: true,
    dots: true,
    mouseDrag: true,
    nav: false,
    responsive: {
      0: {
        items: 2,
      },
      600: {
        items: 2,
      },
      1000: {
        items: 3,
      }
    }
  })
})


$(document).ready(function () {
  $('.click_btn').click(function () {
    $('.fa-bars').toggleClass(" fa-times");
    $(".fa-times").css("font-size", "20px","transition", "all 0.5s ease-in-out");
    $('.open_ul').toggleClass('active_ul');
    $('.active_ul').css("transition", "all 0.5s ease-in-out");
  })
    
    // $(document).on("scroll",function(){
    //   // var t = $(document).scrollTop;
    //   console.log($(document).scrollTop() + " px")
    //   if($(document).scrollTop() > 34){
    //     $(".open_ul ").css({
    //       marginTop:"0px",
    //       transition:"0.5s ease",
          
    //     });
    //   }
    
    // })

})