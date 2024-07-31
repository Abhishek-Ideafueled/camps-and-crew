import React from 'react'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './LodgingSlider.css';

const LodgingSliderSlick = () => {

    
    const imgArr = [
        {
            id:1,
            url:"/aerial-oil-sands-camp-structures-parking-lot.jpg",
            alt:"Aerial photograph of an oil sands lodge in Alberta, Canada"
        },
        {
            id:2,
            url:"/pretium-mine-camp-british-columbia.jpg",
            alt:"Aerial view of a mining camp located in British Columbia, Canada."
        },
        {
            id:3,
            url:"/mining-camp-mountains-rural-indonesia.jpg",
            alt:"Aerial perspective of a mining camp in Indonesia"
        },
        {id:4,
            url:"workforce-lodging-rooms-chile.jpg",
                alt:"Side view of worker rooms at mining camp at base of mountain in Chile."
        },
        { id:5,
            url:"work-accommodation-camp-sunset-texas.jpg",            
            alt:"Side view of a portable modular structure in the Permian Basin, Texas."
        },
        { id:6,
            url:"snow-covered-workforce-camp-canada.jpg",            
            alt:"Rows of workforce camp buildings in a cold climate with snow on the ground outside."
        },
        


    ]

    
    const settings = {
        dots: false,
        infinite: true,
        speed: 5000, 
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 0, 
        cssEase: 'linear',
        pauseOnHover: false,
      };
    

  return (
    <div className="w-full h-[673px] flex flex-col gap-[60px] py-20">
      <div className="lodging-slick">
        <Slider {...settings}>
          {imgArr.map((item, index) => (
            <div
              key={item.id}
              className="lodging-outer flex justify-center  h-[320px] w-[260px]"
            >
              <div className="lodging-inner flex items-center justify-center">
                {index % 2 === 0 ? (
                  <img
                    src={item.url}
                    alt={item.alt}
                    className="object-cover h-[320px] w-[260px] rounded-2xl"
                  />
                ) : (
                  <img
                    src={item.url}
                    alt={item.alt}
                    className="h-[220px] w-[260px] object-cover rounded-2xl"
                  />
                )}
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}

export default LodgingSliderSlick
