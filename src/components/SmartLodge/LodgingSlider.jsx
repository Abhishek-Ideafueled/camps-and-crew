import { Autoplay, Navigation, Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"

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
        // { id:6,
        //     url:"work-accommodation-camp-sunset-texas.jpg",            
        //     alt:"Side view of a portable modular structure in the Permian Basin, Texas."
        // },
        


    ]

  return (
    <div className='w-full h-[673px] flex flex-col gap-[60px] py-20'>
    <div className="main-container mx-auto flex flex-col gap-6 items-center">
    <h2 className="text-h2 font-gilroyBold leading-[48px] text-custom-heading">
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
        <div className="font-ttCommonProNormal text-custom-body text-lg font-medium">
        Seamlessly oversee your workforce camp with unparalleled efficiency, regardless of location or size.
        </div>
    </div>
    <div className="w-full lodging-slider">
    <Swiper
    loop={true}
    speed={5000}
    autoplay={{
        delay: 0,
        disableOnInteraction: false
    }}
      slidesPerView="3"
      modules={[Autoplay, Pagination, Navigation]}
      pagination={{
        clickable: true,
      }}
      navigation={true}
    >
      {imgArr.map((item)=>  
            
            (<SwiperSlide  key={item.id}>
                <div className="flex items-center h-[260px] w-[320px]">
                <div>
                    <img src={item.url} alt={item.alt} />
                </div>

            </div>
           
           
        </SwiperSlide> ))}

    </Swiper>

    </div>
    </div>
  )
}

export default LodgingSlider
