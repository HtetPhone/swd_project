//loading
$('.loading').fadeOut("slow")


// nav stuff 
const body = document.body;
let lastScroll = 0;
window.addEventListener( 'scroll', () => {
  const currentScroll = window.pageYOffset;
  if(currentScroll <= 0) {
      body.classList.remove('scroll-up')
  }
  if(currentScroll > lastScroll && !body.classList.contains('scroll-down') ) {
    body.classList.remove('scroll-up');
    body.classList.add('scroll-down')
  }
  if(currentScroll < lastScroll && body.classList.contains('scroll-down')) {
    body.classList.add('scroll-up');
    body.classList.remove('scroll-down');
  }
  lastScroll = currentScroll;
});


//toggle
$('.navbar-toggler').click( function() {
    $(this).toggleClass('toggled');
    $('.navbar-nav').toggleClass('toggled');
    $('.header').toggleClass('toggled');
});



//Carousel
$('.clips').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  infinite: true,
  speed: 400,
  adaptiveHeight: true,
  autoplay: true,
  responsive: [
  {
    breakpoint: 500,
    settings: {
      slidesToShow: 1,
    },
  },
  {
    breakpoint: 767,
    settings: {
      slidesToShow: 2,
    },
  } 
],
});

