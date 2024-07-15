    // $('.slider-nav').slick({
      //   pauseOnHover: false,
      //   slidesToShow: 3,
      //   slidesToScroll: 1,
      //   dots: true,
      //   autoplay: true,
      //   autoplaySpeed:5000,
      //   focusOnSelect: true,
      //   dots: true,
      //   appendDots: $('.slider-dots-box'),
      //   dotsClass: 'slider-dots',
      // });

 // On before slide change
 export function beforeMakingChange(beforeMakingChangeevent, slick, currentSlide, nextSlide){

 
   
        ('.slick-dots').html('');
    }
    
      // On before slide change
      export function afterMakingChange(event, slick, currentSlide){
    
        ('.slick-dots').html('');
         ('.slick-dots .slick-active button')
           .html(`<svg class="progress-svg" width="40" height="40">
          <g transform="translate(20,20)">
            <circle class="circle-go" r="19" cx="0" cy="0"></circle>
            <text class="circle-tx" x="0" y="4" alignment-baseline="middle" stroke-width="0" text-anchor="middle">${(currentSlide || 0) + 1}</text>
          </g>
          </svg>`);
      }

    