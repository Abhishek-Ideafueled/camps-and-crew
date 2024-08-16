import React from 'react'
import { HiArrowRight } from 'react-icons/hi2'
import { Link } from 'react-router-dom'

const RwAccommodations = () => {
  return (
    <div className='w-full max-h-max'>
        <div className='grid grid-cols-1 md:grid-cols-2 h-full items-center px-3 md:px-0'>
            <div className='w-full md:min-h-[550px] max-h-[636px] h-full'>
                <img
                className='object-cover w-full h-full'
                src="aerial-large-remote-lodge-civeo-oil-sands.jpg" alt="aerial-large-remote-lodge-civeo-oil-sands" />
            </div>
            <div className='bg-white rounded-2xl p-6 lg:py-[60px] lg:px-10 flex flex-col gap-4 shadow-rw-card-shadow lg:gap-6 md:max-h-[493px] lg:max-h-[460px] md:ml-[-45px] max-w-[700px]'>
                    <h2 className='heading-h2 text-center md:text-start'>
                    17 Years Serving the Workforce Accommodations Industry
                    </h2>
                    <p className='font-ttCommonProNormal text-custom-body text-base lg:text-lg lg:leading-[28px]'>
                    For nearly two decades, we have equipped workforce accommodations providers, remote camp and catering companies, and 
                    integrated facility management companies with technology to streamline the management of remote worker housing. 
                    We partner closely with our clients to enable them to address the unique needs of each project and to deliver superior service 
                    to their clients.
                    </p>
                    <Link to="#">
                    <span className='w-full hover:text-custom-blue text-[#5BC0ED] font-ttCommonProNormal font-medium flex items-center gap-1'>
                        Learn more about the company
                        <span>
                        <HiArrowRight />
                        </span>
                        </span>
                    </Link>
            </div>
        </div>
      
    </div>
  )
}

export default RwAccommodations
