import React from 'react';
import formbg from '/formbg.jpg';
import { IoIosArrowDown, IoMdArrowDropdown, IoMdPerson } from 'react-icons/io';
import { MdMail } from 'react-icons/md';
import { GiSouthAfricaFlag } from 'react-icons/gi';
import { FaBuilding } from 'react-icons/fa';
import { FaHelmetSafety } from 'react-icons/fa6';
import { BiSolidMessage } from 'react-icons/bi';

const DemoForm = () => {
  return (
    <div className='w-full'>
    <div className='py-20 px-28 w-full xl:max-w-[1216px] mx-auto '>
        {/* <div className='relative '>
            <img src={formbg} alt="" className='absolute inset-0 opacity-90 h-[786px] rounded-[26px] object-cover bg-[linear-gradient(90deg,_#053347_60%,_#053347_0%)]'/>
            <div className='relative p-10 h-[786px]'>  
                <div className='flex flex-col w-[590px] relative top-64 gap-2 right-4'>
                    <h2 className='text-[44px] text-custom-button font-gilroyBold font-normal'>Streamline the Management of your Remote Operations</h2>
                    <p className='text-white text-2xl font-ttCommonProRegular font-normal'>See SmartLodge or EnRoute in action by filling out the form and we’ll be in touch very shortly.</p>
                </div>
                <div className='relative bg-[#00000033] backdrop-blur-sm w-[408px] left-[600px] bottom-[200px] p-9 rounded-2xl'>
                <form action="" className='flex gap-4 flex-col font-ttCommonProMedium' >
                <h4 className='text-[32px] text-white mb-5 text-center font-gilroyBold font-normal'>Book a Demo</h4>
                <div className='bg-white flex py-3 px-4 border-[1px] border-[#D0D5DD] items-center gap-3 text-[#43597A] rounded-lg'>
                <IoMdPerson />
                <input type="text" placeholder='Full Name' className='border-none outline-none text-black' />
                </div>
                <div className='bg-white flex py-3 px-4 border-[1px] border-[#D0D5DD] items-center gap-3 text-[#43597A] rounded-lg'>
                <MdMail/>
                <input type="email" placeholder='Email' className='border-none outline-none text-black' />
                </div>
                <div className='bg-white flex py-3 px-4 border-[1px] border-[#D0D5DD] items-center gap-3 text-[#43597A] rounded-lg'>
                <GiSouthAfricaFlag /> <IoMdArrowDropdown />
                <input type="number" placeholder='Phone Number' className='border-[#D0D5DD] border-l-2 outline-none p-2 text-black' />
                </div>
                <div className='bg-white flex py-3 px-4 border-[1px] border-[#D0D5DD] items-center gap-3 text-[#43597A] rounded-lg'>
                <FaBuilding/>
                <input type="text" placeholder='Company' className='border-none outline-none text-black' />
                </div>
                <div className='bg-white flex justify-between py-3 px-4 border-[1px] border-[#D0D5DD] items-center gap-3 text-[#43597A] rounded-lg cursor-pointer'>
                
                <span className='flex items-center gap-4'><FaHelmetSafety />
                <input type="text" placeholder='Select Products of Interest' className='border-none outline-none text-black w-full cursor-pointer' disabled/></span>
                <IoIosArrowDown />
                </div>
                <div className='bg-white flex py-3 px-4 border-[1px] border-[#D0D5DD] gap-3 text-[#43597A] rounded-lg'>
                <BiSolidMessage />
                <textarea placeholder='Add Message' className='border-none outline-none text-black' rows="4"/>
                </div>
                <div className='bg-custom-button hover:bg-btn-hover flex items-center h-[54px]'>
                  <button className='w-full font-ttCommonProMedium'>CONTINUE</button>
                </div>
                </form>
                </div>
            </div>
        </div> */}
      <div className='bg-demo w-full rounded-[26px]'>
      <div className='p-10 h-[786px] flex justify-center'>  
                <div className='flex flex-col w-[590px] gap-2 right-4 items-center justify-center'>
                    <h2 className='text-[44px] text-custom-button font-gilroyBold font-normal'>Streamline the Management of your Remote Operations</h2>
                    <p className='text-white text-2xl font-ttCommonProRegular font-normal'>See SmartLodge or EnRoute in action by filling out the form and we’ll be in touch very shortly.</p>
                </div>
                <div className=' bg-[#00000033] backdrop-blur-sm w-[488px] p-9 rounded-2xl'>
                <form action="" className='flex gap-4 flex-col font-ttCommonProMedium' >
                <h4 className='text-[32px] text-white mb-5 text-center font-gilroyBold font-normal'>Book a Demo</h4>
                <div className='bg-white flex py-3 px-4 border-[1px] border-[#D0D5DD] items-center gap-3 text-[#43597A] rounded-lg'>
                <IoMdPerson />
                <input type="text" placeholder='Full Name' className='border-none outline-none text-black' />
                </div>
                <div className='bg-white flex py-3 px-4 border-[1px] border-[#D0D5DD] items-center gap-3 text-[#43597A] rounded-lg'>
                <MdMail/>
                <input type="email" placeholder='Email' className='border-none outline-none text-black' />
                </div>
                <div className='bg-white flex py-3 px-4 border-[1px] border-[#D0D5DD] items-center gap-3 text-[#43597A] rounded-lg'>
                <GiSouthAfricaFlag /> <IoMdArrowDropdown />
                <input type="number" placeholder='Phone Number' className='border-[#D0D5DD] border-l-2 outline-none p-2 text-black' />
                </div>
                <div className='bg-white flex py-3 px-4 border-[1px] border-[#D0D5DD] items-center gap-3 text-[#43597A] rounded-lg'>
                <FaBuilding/>
                <input type="text" placeholder='Company' className='border-none outline-none text-black' />
                </div>
                <div className='bg-white flex justify-between py-3 px-4 border-[1px] border-[#D0D5DD] items-center gap-3 text-[#43597A] rounded-lg cursor-pointer'>
                
                <span className='flex items-center gap-4'><FaHelmetSafety />
                <input type="text" placeholder='Select Products of Interest' className='border-none outline-none text-black w-full cursor-pointer' disabled/></span>
                <IoIosArrowDown />
                </div>
                <div className='bg-white flex py-3 px-4 border-[1px] border-[#D0D5DD] gap-3 text-[#43597A] rounded-lg'>
                <BiSolidMessage />
                <textarea placeholder='Add Message' className='border-none outline-none text-black' rows="4"/>
                </div>
                <div className='bg-custom-button hover:bg-btn-hover flex items-center h-[54px]'>
                  <button className='w-full font-ttCommonProMedium'>CONTINUE</button>
                </div>
                </form>
                </div>
                </div>
      </div>
    </div>
    </div>
  )
}

export default DemoForm
