

//   $(document).ready(function(){
//     $('.slick-carousel').slick({
//       speed: 500,
//       slidesToShow: 4,
//       slidesToScroll: 1,
//       dots:false,
//       autoplay: true,
//       centerMode: true,
//       prevArrow: '<div class="slider-arrow slider-prev fa fa-angle-left"></div>',
//       nextArrow: '<div class="slider-arrow slider-next fa fa-angle-right"></div>',
//       responsive: [{
//         breakpoint: 1024,
//         settings: {
//           slidesToShow: 3,
//           slidesToScroll: 1,
//           centerMode: true,

  
//         }
  
//       }, {
//         breakpoint: 800,
//         settings: {
//           slidesToShow: 2,
//           slidesToScroll: 2,
//           dots: true,
//           infinite: true,
  
//         }
//       },  {
//         breakpoint: 480,
//         settings: {
//           slidesToShow: 1,
//           slidesToScroll: 1,
//           dots: true,
//           infinite: true,
//           autoplay: true,
//           autoplaySpeed: 2000,
//         }
//       }]
//     });
//   });


// $(document).ready(function() {
 
//     $("#owl-example").owlCarousel({
//         itemsDesktop : [1499,4],
//         itemsDesktopSmall : [1199,3],
//         itemsTablet : [899,2],
//         itemsMobile : [599,1],
//         navigation : true,
//         navigationText : ['<span class="fa-stack"><i class="fa fa-circle fa-stack-1x">hjghgv</i><i class="fa fa-chevron-circle-left fa-stack-1x fa-inverse"></i></span>','<span class="fa-stack"><i class="fa fa-circle fa-stack-1x"></i><i class="fa fa-chevron-circle-right fa-stack-1x fa-inverse"></i></span>'],
//     });
    
//   });


$(document).ready(function(){
    $('.your-class').slick({
        prevArrow: '<div class="slider-arrow slider-prev fa fa-angle-left"></div>',
        nextArrow: '<div class="slider-arrow slider-next fa fa-angle-right"></div>',
    });
  });
  
  $('.modal').on('shown.bs.modal', function (e) {
    $('.your-class').slick('setPosition');
    $('.wrap-modal-slider').addClass('open');
  })
  
  