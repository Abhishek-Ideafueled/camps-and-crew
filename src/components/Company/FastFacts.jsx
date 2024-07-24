import React from 'react';
import '../HomePage/Homepage.css';
import fifteenYears from '/about-rooms-managed-fifteen-years-icon.png';
import managedGlobally from '/about-rooms-managed-globally-icon.png';
import roomsTravel from '/about-rooms-travel-booking-system.png'
import years32 from '/about-32-years-business-icon.png'
import './FastFacts.css';

const FastFacts = () => {
  return (
    <div className='w-full min-h-[608px]'>
        <div className='main-container mx-auto py-10 md:py-20 lg:py-28'>
          <div className='flex flex-col w-full gap-[60px]'>
            <div className='flex flex-col items-center gap-4' data-aos="fade-up">
                <h1 className='font-gilroyMedium font-bold text-[25px] md:text-[32px] lg:text-[40px] text-custom-heading lg:leading-[3rem]'>Fast Facts</h1>
               <div data-aos="fade-up" data-aos-delay="100"> <svg width="174" height="16" viewBox="0 0 174 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M11.584 0.722656L1.58396 15.7227" stroke="#647787"/>
<path d="M46.584 0.722656L36.584 15.7227" stroke="#647787"/>
<path d="M81.584 0.722656L71.584 15.7227" stroke="#647787"/>
<path d="M116.584 0.722656L106.584 15.7227" stroke="#647787"/>
<path d="M151.584 0.722656L141.584 15.7227" stroke="#647787"/>
<path d="M18.584 0.722656L8.58396 15.7227" stroke="#647787"/>
<path d="M53.584 0.722656L43.584 15.7227" stroke="#647787"/>
<path d="M88.584 0.722656L78.584 15.7227" stroke="#647787"/>
<path d="M123.584 0.722656L113.584 15.7227" stroke="#647787"/>
<path d="M158.584 0.722656L148.584 15.7227" stroke="#647787"/>
<path d="M25.584 0.722656L15.584 15.7227" stroke="#647787"/>
<path d="M60.584 0.722656L50.584 15.7227" stroke="#647787"/>
<path d="M95.584 0.722656L85.584 15.7227" stroke="#647787"/>
<path d="M130.584 0.722656L120.584 15.7227" stroke="#647787"/>
<path d="M165.584 0.722656L155.584 15.7227" stroke="#647787"/>
<path d="M32.584 0.722656L22.584 15.7227" stroke="#647787"/>
<path d="M67.584 0.722656L57.584 15.7227" stroke="#647787"/>
<path d="M102.584 0.722656L92.584 15.7227" stroke="#647787"/>
<path d="M137.584 0.722656L127.584 15.7227" stroke="#647787"/>
<path d="M172.584 0.722656L162.584 15.7227" stroke="#647787"/>
<path d="M39.584 0.722656L29.584 15.7227" stroke="#647787"/>
<path d="M74.584 0.722656L64.584 15.7227" stroke="#647787"/>
<path d="M109.584 0.722656L99.584 15.7227" stroke="#647787"/>
<path d="M144.584 0.722656L134.584 15.7227" stroke="#647787"/>
</svg></div>


            </div>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8'> 
            <div data-aos="fade-up" data-aos-delay="100" className='col-span-1 lg:max-w-[280px] h-[250px] md:h-[300px] lg:h-[350px] border-[1px] border-[#CDD5DF] p-6 lg:p-4 xl:p-6 flex flex-col justify-between'>
              <div className='w-[70px] h-[70px]'>
            <img src={fifteenYears} alt="about rooms managed fifteen years"  className='w-full h-full'/>
              </div>
              <div className='flex flex-col gap-2'>
                <h1 className='font-gilroyBold text-[32px] leading-8 lg:text-[50px] font-normal lg:leading-[60px] text-custom-heading'>
                <span className="flex animate-[counter_3s_ease-out_forwards] tabular-nums [counter-set:_num_var(--num-fifyears)] before:content-[counter(num)] before:left-[calc(0.4em * var(--n, 1))]">
              <span className="sr-only">300</span>
                
                K</span>
                </h1>
              <p className='font-ttCommonProRegular leading-[22px] font-normal text-custom-body'>Camp rooms managed for our clients over 15 years</p>
              </div>
            </div>
            <div data-aos="fade-up" data-aos-delay="200" className='col-span-1 lg:max-w-[280px] h-[250px] md:h-[300px] lg:h-[350px] border-[1px] border-[#CDD5DF] p-6 lg:p-4 xl:p-6 flex flex-col justify-between'>
              <div className='w-[70px] h-[70px]'>
            <img src={managedGlobally} alt="about rooms managed globally"  className='w-full h-full'/>
              </div>
              <div className='flex flex-col gap-2'>
                <h1 className='font-gilroyBold text-[32px] leading-8 lg:text-[50px] font-normal lg:leading-[60px] text-custom-heading'>
                <span className="flex animate-[counter_3s_ease-out_forwards] tabular-nums [counter-set:_num_var(--num-roomsremote)] before:content-[counter(num)] before:left-[calc(0.4em * var(--n, 1))]">
              <span className="sr-only">150</span>
                
                K</span>
                  </h1>
              <p className='font-ttCommonProRegular leading-[22px] font-normal text-custom-body'>Rooms managed across remote camps and villages globally</p>
              </div>
            </div>
            <div data-aos="fade-up" data-aos-delay="300" className='col-span-1 lg:max-w-[280px] h-[250px] md:h-[300px] lg:h-[350px] border-[1px] border-[#CDD5DF] p-6 lg:p-4 xl:p-6 flex flex-col justify-between'>
              <div className='w-[70px] h-[70px]'>
            <img src={roomsTravel} alt="about rooms travel booking"  className='w-full h-full'/>
              </div>
              <div className='flex flex-col gap-2'>
                <h1 className='font-gilroyBold text-[32px] leading-8 lg:text-[50px] font-normal lg:leading-[60px] text-custom-heading'>
                <span className="flex animate-[counter_3s_ease-out_forwards] tabular-nums [counter-set:_num_var(--num-monthly)] before:content-[counter(num)] before:left-[calc(0.4em * var(--n, 1))]">
              <span className="sr-only">200</span>
                
                K</span>
                  </h1>
              <p className='font-ttCommonProRegular leading-[22px] font-normal text-custom-body'>Room and travel bookings made monthly with our systems</p>
              </div>
            </div>
            <div data-aos="fade-up" data-aos-delay="400" className='col-span-1 lg:max-w-[280px] h-[250px] md:h-[300px] lg:h-[350px] border-[1px] border-[#CDD5DF] p-6 lg:p-4 xl:p-6 flex flex-col justify-between'>
              <div className='w-[70px] h-[70px]'>
            <img src={years32} alt="about 32 years in business"  className='w-full h-full'/>
              </div>
              <div className='flex flex-col gap-2'>
                <h1 className='font-gilroyBold text-[32px] leading-8 lg:text-[50px] font-normal lg:leading-[60px] text-custom-heading'>
                <span className="flex animate-[counter_3s_ease-out_forwards] tabular-nums [counter-set:_num_var(--num-yearsth)] before:content-[counter(num)] before:left-[calc(0.4em * var(--n, 1))]">
              <span className="sr-only">32</span>
                
                </span>
                  </h1>
              <p className='font-ttCommonProRegular leading-[22px] font-normal text-custom-body'>Years in business – founded in August of 1992</p>
              </div>
            </div>
            </div>
            </div>
        </div>
      
    </div>
  )
}

export default FastFacts
