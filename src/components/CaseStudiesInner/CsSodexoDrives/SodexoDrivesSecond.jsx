import React from 'react'
import { Link } from 'react-router-dom'

const SodexoDrivesSecond = () => {
  return (
    <div className='w-full'>
        <div className='main-container mx-auto py-10 lg:py-20 grid grid-cols-3 lg:gap-12'>
        <div className='col-span-1 sticky top-0 z-20 h-auto self-start'>
        <div className='max-w-[384px] max-h-[282px] bg-white border-[1px] border-custom-blue shadow-cs-inner-shadow p-6 rounded-2xl flex flex-col gap-6'>
          <h3 className='text-xl leading-[120%] lg:text-[32px] 2xl:text-[36px] font-gilroyBold text-custom-heading '>
          Request a Demo
          </h3>
          <span className='font-ttCommonProNormal text-sm leading-[120%] lg:text-base text-custom-body'>
          Get in touch to see how our technology can be tailored to meet the unique requirements of your remote operations.
          </span>
          <div className='w-full mx-auto'>
            <Link to="#" className='btn-orange w-full h-[54px] flex gap-2 items-center justify-center py-[14px] px-4'>
            Contact sales 
            <span>
            <svg width="29" height="16" viewBox="0 0 29 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M0.0986328 7.76806C0.325148 7.07132 0.803674 6.82978 1.50122 6.83133C9.21321 6.84371 16.9259 6.83907 24.6379 6.83907C24.7489 6.83907 24.8599 6.83907 25.0392 6.83907C24.9267 6.7183 24.8554 6.63856 24.7812 6.56115C23.5661 5.31165 22.3518 4.06216 21.1352 2.81499C20.8052 2.47668 20.6972 2.07257 20.8269 1.61969C20.9477 1.19932 21.2349 0.930682 21.652 0.83159C22.0833 0.729401 22.4403 0.879588 22.7478 1.19622C24.1084 2.5959 25.472 3.99248 26.8341 5.39062C27.3388 5.9093 27.8384 6.43341 28.3499 6.94435C28.5892 7.18357 28.7947 7.43827 28.9012 7.76806C28.9012 7.92289 28.9012 8.07772 28.9012 8.23256C28.7939 8.56157 28.5862 8.81395 28.3499 9.05549C26.486 10.9615 24.6282 12.8737 22.7665 14.782C22.27 15.2914 21.625 15.3386 21.1569 14.9081C20.6574 14.4491 20.6424 13.6974 21.1374 13.1856C22.3488 11.933 23.5661 10.6859 24.7834 9.43947C24.8554 9.36592 24.9469 9.31328 25.0294 9.25057C25.0152 9.22038 25.0002 9.19019 24.9859 9.16077C24.8794 9.16077 24.7729 9.16077 24.6664 9.16077C16.9454 9.16077 9.22371 9.15613 1.50272 9.16851C0.804424 9.17006 0.325898 8.92852 0.0986328 8.23256C0.0986328 8.07772 0.0986328 7.92289 0.0986328 7.76806Z" fill="#060F1F"/>
</svg>

            </span>
            </Link>
          </div>
        </div>
        </div>
        <div className='col-span-2 flex flex-col'>
        <div className='flex items-center gap-4 h-[160px] border-b-[#E6E6E6] border-b-[1px]'>
            <span className='w-20 h-20'>
              <img className='w-auto h-auto rounded-e-2xl' src="/alya-snyder.png" alt="user-pic" />
            </span>
            <div className='flex flex-col gap-[2px]'>
                <h4 className='font-ttCommonProMedium font-medium text-custom-heading text-base leading-[25.6px]'>Alya Snyder</h4>
                <p className='font-ttCommonProNormal text-custom-body text-sm leading-[22.4px]'>
                Customer & Content Marketer
                </p>
            </div>
        </div>
        </div>
        </div>
    </div>
  )
}

export default SodexoDrivesSecond
