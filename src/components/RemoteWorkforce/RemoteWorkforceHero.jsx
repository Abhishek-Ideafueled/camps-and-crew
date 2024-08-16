import React from 'react'
import { Link } from 'react-router-dom'

const RemoteWorkforceHero = () => {
  return (
    <div className='w-full bg-[#f7f5f2]'>
        <div className='main-container mx-auto'>
        <div className='grid grid-cols-1 md:grid-cols-2 items-center'>
        <div className='flex flex-col gap-10 py-10 lg:py-20'>
        <div className='flex flex-col gap-4'>
            <span className='font-ttCommonProRegular font-semibold text-sm leading-[22px] text-[#189AD2]'>
            | WORKFORCE ACCOMMODATIONS |
            </span>
            <h1 className='heading-h1'> 
            Technology for Camp Management Providers
            </h1>
            <p className='font-ttCommonProMedium font-medium text-lg leading-6 lg:text-xl lg:leading-8 text-custom-body'>
            Delivering best-in-class software solutions to streamline your daily operations, enhance your service offering, and drive up your bottom line.
            </p>
        </div>
        <div className='w-full'>
            <Link>
                    <div className='btn-orange w-[203px] h-[64px] py-[19px] px-10 text-nowrap rounded'>CONTACT SALES</div>
            </Link>
        </div>
        </div>
        </div>
        </div>
    </div>
  )
}

export default RemoteWorkforceHero
