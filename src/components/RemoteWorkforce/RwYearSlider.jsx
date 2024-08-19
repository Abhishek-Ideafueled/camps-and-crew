import React from 'react'

const RwYearSlider = () => {
  return (
    <div className='w-full'>
        <div className='flex flex-col gap-6 py-6 px-10 max-w-[389px] max-h-[533px] bg-white shadow-rw-slide-shadow rounded-2xl items-center'>
            <div className='flex flex-col gap-4 h-[258px]'>
               <div className='bg-custom-blue rounded-full w-[149px] flex items-center justify-center py-2 px-[14px] font-gilroyBold text-btn-text font-base leading-[18px] font-normal'>
               Feature Release
                </div> 
                <div className='card-heading'>
                SMS Guest Messaging Rolls Out in the Permian Basin
                </div>
                <div className='font-ttCommonProRegular text-custom-body text-base'>
                SMS messaging enables tailored communications and real-time updates, enhancing guest experiences and bolstering safety at camp.
                </div>
            </div>
            <div className='relative w-full h-auto'>
                <img 
                className='rounded-lg object-cover'
                src="/mining-fifo-worker-checks-cell-phone.png"
                 alt="Fifo workers holds coffee and reads phone outside of camp bedroom constructed of prefabricated materials." />
                 <div className='absolute inset-0 bg-card-gradient rounded-lg h-full w-full'></div>
            </div>
        </div>
    </div>
  )
}

export default RwYearSlider
