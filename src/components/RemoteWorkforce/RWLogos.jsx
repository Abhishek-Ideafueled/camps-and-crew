import React from 'react'

const RWLogos = () => {
  return (
    <div className='w-full'>
        <div className='main-container mx-auto py-10 lg:py-20 flex flex-col gap-[30px] lg:gap-[60px]'>
            <h3 className='font-gilroyBold font-normal text-xl leading-6 md:text-[22px] md:leading-[27px] lg:text-2xl lg:leading-[28.8px]'>
            Trusted by Camp Services Companies Globally
            </h3>
            <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-7 gap-6 lg:gap-8 xl:justify-between'>
                <div className='h-[60px] flex justify-center'>
            <img src="/civeo-color.png" alt="" className='h-[60px] object-contain' />
                </div>
                <div className='h-[60px] pt-5'>
                <img src="/petroplex-logo.png" alt=""  className='mx-auto' />
                </div>
                <div className='h-[60px] flex justify-center'>
                <img src="/permian-lodging.png" alt=""  className='h-[60px] object-contain' />
                </div>
                <div className='h-[60px] flex justify-center'>
                <img src="/sodexo-logo.png" alt=""   className='h-[60px] object-contain'/>
                </div>
                <div className='h-[60px] flex justify-center'>
                <img src="/denali-universal-services.png" alt=""  className='h-[60px] object-contain' />
                </div>
                <div className='h-[60px] flex justify-center'>
                <img src="/cotton-logistics.png" alt=""  className='h-[60px] object-contain'/>
                </div>
                <div className='h-[60px] col-span-2 md:col-span-3 flex justify-center mt-5 lg:mt-0 lg:col-span-1'>
                <img src="/right-choice-camps-catering.png" alt=""  className='h-[60px] object-contain' />
                </div>
            </div>
        </div>
      
    </div>
  )
}

export default RWLogos
