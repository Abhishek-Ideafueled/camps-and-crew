import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './LodgingSlider.css';

const LodgingSlider = () => {


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
        responsive: [
          {
            breakpoint: 320,
            settings: {
              slidesToShow: 1,
            },
          },
          {
            breakpoint: 767,
            settings: {
              slidesToShow: 2,
            },
          },
          {
            breakpoint: 1199,
            settings: {
              slidesToShow: 4,
            },
          },
          {
            breakpoint: 1600,
            settings: {
              slidesToShow:5 ,
            },
          },
          
        ],
      };

  return (
    <div className='w-full h-[673px] flex flex-col gap-[60px] py-20'>
    <div className="main-container mx-auto flex flex-col gap-6 items-center">
    <h2 className="text-[25px] leading-8 text-center md:text-[32px] md:leading-10 lg:text-[36px] lg:leading-[45px] xl:text-h2 font-gilroyBold xl:leading-[48px] text-custom-heading">
        For Workforce Lodging Anywhere, Any Size
        </h2>
        <span>
        <svg width="174" height="17" viewBox="0 0 174 17" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clipPath="url(#clip0_7320_6322)">
<path d="M11.584 0.847656L1.58396 15.8477" stroke="#647787"/>
<path d="M46.584 0.847656L36.584 15.8477" stroke="#647787"/>
<path d="M81.584 0.847656L71.584 15.8477" stroke="#647787"/>
<path d="M116.584 0.847656L106.584 15.8477" stroke="#647787"/>
<path d="M151.584 0.847656L141.584 15.8477" stroke="#647787"/>
<path d="M18.584 0.847656L8.58396 15.8477" stroke="#647787"/>
<path d="M53.584 0.847656L43.584 15.8477" stroke="#647787"/>
<path d="M88.584 0.847656L78.584 15.8477" stroke="#647787"/>
<path d="M123.584 0.847656L113.584 15.8477" stroke="#647787"/>
<path d="M158.584 0.847656L148.584 15.8477" stroke="#647787"/>
<path d="M25.584 0.847656L15.584 15.8477" stroke="#647787"/>
<path d="M60.584 0.847656L50.584 15.8477" stroke="#647787"/>
<path d="M95.584 0.847656L85.584 15.8477" stroke="#647787"/>
<path d="M130.584 0.847656L120.584 15.8477" stroke="#647787"/>
<path d="M165.584 0.847656L155.584 15.8477" stroke="#647787"/>
<path d="M32.584 0.847656L22.584 15.8477" stroke="#647787"/>
<path d="M67.584 0.847656L57.584 15.8477" stroke="#647787"/>
<path d="M102.584 0.847656L92.584 15.8477" stroke="#647787"/>
<path d="M137.584 0.847656L127.584 15.8477" stroke="#647787"/>
<path d="M172.584 0.847656L162.584 15.8477" stroke="#647787"/>
<path d="M39.584 0.847656L29.584 15.8477" stroke="#647787"/>
<path d="M74.584 0.847656L64.584 15.8477" stroke="#647787"/>
<path d="M109.584 0.847656L99.584 15.8477" stroke="#647787"/>
<path d="M144.584 0.847656L134.584 15.8477" stroke="#647787"/>
</g>
<defs>
<clipPath id="clip0_7320_6322">
<rect width="173" height="16" fill="white" transform="translate(0.5 0.125)"/>
</clipPath>
</defs>
</svg>

        </span>
        <div className="font-ttCommonProMedium text-custom-body text-base md:text-lg font-medium text-center">
        Seamlessly oversee your workforce camp with unparalleled efficiency, regardless of location or size.
        </div>
    </div>
    <div className="w-full lodging-slick">
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
                    className="h-[240px] w-[260px] object-cover rounded-2xl"
                  />
                )}
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  )
}

export default LodgingSlider
