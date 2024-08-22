import React from 'react'
import { Link } from 'react-router-dom'

const RwProjectBids = () => {

    const handleClickScroll = () => {
        const element = document.getElementById('demoForm');
    
        if (element) {
          element.scrollIntoView({ behavior: "instant" });
        }
      };

  return (
    <div className='w-full bg-[#F7F5F2]'>
      <div className='main-container mx-auto py-10 lg:py-20 flex flex-col items-center gap-[30px] lg:gap-[60px]'> 
      <div className='flex flex-col gap-6 items-center max-w-[1020px] text-center '>
                <div className='flex flex-col items-center gap-4'>
            <h2 className='heading-h2 max-w-[500px]'>
            Ready to Assist with 
            Project Bids
            </h2>
            <span>
            <svg width="173" height="16" viewBox="0 0 173 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<line y1="-0.5" x2="18.0278" y2="-0.5" transform="matrix(-0.5547 0.83205 0.83205 0.5547 11.5 1)" stroke="#647787"/>
<line y1="-0.5" x2="18.0278" y2="-0.5" transform="matrix(-0.5547 0.83205 0.83205 0.5547 46.5 1)" stroke="#647787"/>
<line y1="-0.5" x2="18.0278" y2="-0.5" transform="matrix(-0.5547 0.83205 0.83205 0.5547 81.5 1)" stroke="#647787"/>
<line y1="-0.5" x2="18.0278" y2="-0.5" transform="matrix(-0.5547 0.83205 0.83205 0.5547 116.5 1)" stroke="#647787"/>
<line y1="-0.5" x2="18.0278" y2="-0.5" transform="matrix(-0.5547 0.83205 0.83205 0.5547 151.5 1)" stroke="#647787"/>
<line y1="-0.5" x2="18.0278" y2="-0.5" transform="matrix(-0.5547 0.83205 0.83205 0.5547 18.5 1)" stroke="#647787"/>
<line y1="-0.5" x2="18.0278" y2="-0.5" transform="matrix(-0.5547 0.83205 0.83205 0.5547 53.5 1)" stroke="#647787"/>
<line y1="-0.5" x2="18.0278" y2="-0.5" transform="matrix(-0.5547 0.83205 0.83205 0.5547 88.5 1)" stroke="#647787"/>
<line y1="-0.5" x2="18.0278" y2="-0.5" transform="matrix(-0.5547 0.83205 0.83205 0.5547 123.5 1)" stroke="#647787"/>
<line y1="-0.5" x2="18.0278" y2="-0.5" transform="matrix(-0.5547 0.83205 0.83205 0.5547 158.5 1)" stroke="#647787"/>
<line y1="-0.5" x2="18.0278" y2="-0.5" transform="matrix(-0.5547 0.83205 0.83205 0.5547 25.5 1)" stroke="#647787"/>
<line y1="-0.5" x2="18.0278" y2="-0.5" transform="matrix(-0.5547 0.83205 0.83205 0.5547 60.5 1)" stroke="#647787"/>
<line y1="-0.5" x2="18.0278" y2="-0.5" transform="matrix(-0.5547 0.83205 0.83205 0.5547 95.5 1)" stroke="#647787"/>
<line y1="-0.5" x2="18.0278" y2="-0.5" transform="matrix(-0.5547 0.83205 0.83205 0.5547 130.5 1)" stroke="#647787"/>
<line y1="-0.5" x2="18.0278" y2="-0.5" transform="matrix(-0.5547 0.83205 0.83205 0.5547 165.5 1)" stroke="#647787"/>
<line y1="-0.5" x2="18.0278" y2="-0.5" transform="matrix(-0.5547 0.83205 0.83205 0.5547 32.5 1)" stroke="#647787"/>
<line y1="-0.5" x2="18.0278" y2="-0.5" transform="matrix(-0.5547 0.83205 0.83205 0.5547 67.5 1)" stroke="#647787"/>
<line y1="-0.5" x2="18.0278" y2="-0.5" transform="matrix(-0.5547 0.83205 0.83205 0.5547 102.5 1)" stroke="#647787"/>
<line y1="-0.5" x2="18.0278" y2="-0.5" transform="matrix(-0.5547 0.83205 0.83205 0.5547 137.5 1)" stroke="#647787"/>
<line y1="-0.5" x2="18.0278" y2="-0.5" transform="matrix(-0.5547 0.83205 0.83205 0.5547 172.5 1)" stroke="#647787"/>
<line y1="-0.5" x2="18.0278" y2="-0.5" transform="matrix(-0.5547 0.83205 0.83205 0.5547 39.5 1)" stroke="#647787"/>
<line y1="-0.5" x2="18.0278" y2="-0.5" transform="matrix(-0.5547 0.83205 0.83205 0.5547 74.5 1)" stroke="#647787"/>
<line y1="-0.5" x2="18.0278" y2="-0.5" transform="matrix(-0.5547 0.83205 0.83205 0.5547 109.5 1)" stroke="#647787"/>
<line y1="-0.5" x2="18.0278" y2="-0.5" transform="matrix(-0.5547 0.83205 0.83205 0.5547 144.5 1)" stroke="#647787"/>
</svg>
            </span>
                </div>
            <span className='sub-heading'>
            We understand the critical role a reliable camp management system plays in your bid for managing new projects. We are ready to support you in securing new business and have outlined below how we can work together, even if we haven’t partnered before.</span>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-8 w-full'>
                    <div className='bg-transparent h-full w-full md:max-w-[384px] xl:w-[384px]'>
                        <div className='flex flex-col py-10 px-6 lg:py-[60px] lg:px-10 gap-[30px] lg:gap-[60px] bg-white rounded-2xl'>
                            <div className='w-full flex items-center gap-10'>
                                <div className='w-[60px] h-[60px] py-[15px] px-[18px] flex items-center justify-center bg-[#189AD2] text-white font-gilroyBold text-2xl leading-[28.8px] rounded-full'>
                                        01
                                </div>
                                <div className='bg-[#CDD5DF] w-full h-[1px]'></div>
                            </div>
                            <div className='flex flex-col gap-6'>
                            <h3 className='text-lg leading-[22px] lg:text-2xl lg:leading-[28.8px] text-custom-heading font-gilroyBold'>
                            Get In Touch With Us
                            </h3>
                            <span className='font-ttCommonProRegular text-custom-body text-base leading-[25.6px]'>
                            Contact us to discuss your bid. We'll explore the operational requirements of the project together,
                             while also providing you with a deeper understanding of SmartLodge's capabilities.
                            </span>
                            </div>
                        </div>
                    </div>
                    <div className='bg-transparent h-full w-full md:max-w-[384px] xl:w-[384px]'>
                        <div className='flex flex-col py-10 px-6 lg:py-[60px] lg:px-10 gap-[30px] lg:gap-[60px] bg-white rounded-2xl md:mt-[60px]'>
                            <div className='w-full flex items-center gap-10'>
                                <div className='w-[60px] h-[60px] py-[15px] px-[18px] flex items-center justify-center bg-[#189AD2] text-white font-gilroyBold text-2xl leading-[28.8px] rounded-full'>
                                        02
                                </div>
                                <div className='bg-[#CDD5DF] w-full h-[1px]'></div>
                            </div>
                            <div className='flex flex-col gap-6'>
                            <h3 className='text-lg leading-[22px] lg:text-2xl lg:leading-[28.8px] text-custom-heading font-gilroyBold'>
                            Submit Technical Requirements
                            </h3>
                            <span className='font-ttCommonProRegular text-custom-body text-base leading-[25.6px]'>
                            Send us the camp management software requirements. Our Solutions team will respond to each technical query,
                             demonstrating how our software meets all bid specifications. Then we’ll send it back for your review. 
                            </span>
                            </div>
                        </div>
                    </div>
                    <div className='bg-transparent h-full w-full md:max-w-[384px] xl:w-[384px]'>
                        <div className='flex flex-col py-10 px-6 lg:py-[60px] lg:px-10 gap-[30px] lg:gap-[60px] bg-white rounded-2xl md:mt-[120px]'>
                            <div className='w-full flex items-center gap-10'>
                                <div className='w-[60px] h-[60px] py-[15px] px-[18px] flex items-center justify-center bg-[#189AD2] text-white font-gilroyBold text-2xl leading-[28.8px] rounded-full'>
                                        03
                                </div>
                                <div className='bg-[#CDD5DF] w-full h-[1px]'></div>
                            </div>
                            <div className='flex flex-col gap-6'>
                            <h3 className='text-lg leading-[22px] lg:text-2xl lg:leading-[28.8px] text-custom-heading font-gilroyBold'>
                            Implementation and Training
                            </h3>
                            <span className='font-ttCommonProRegular text-custom-body text-base leading-[25.6px]'>
                            If the bid succeeds, we'll collaborate closely to implement SmartLodge.
                             Our team can facilitate training directly with the client, or prepare your staff to do so,
                             ensuring a smooth transition to the new system for you and your client.
                            </span>
                            </div>
                        </div>
                    </div>
            </div>
       <div className='w-full flex justify-center'>
       <Link href="#demoForm" onClick={handleClickScroll}> 
        <div className='btn-orange w-[203px] flex items-center justify-center py-[19px] rounded'>
        CONTACT SALES
        </div>
        </Link></div>     
            
      </div>
    </div>
  )
}

export default RwProjectBids
