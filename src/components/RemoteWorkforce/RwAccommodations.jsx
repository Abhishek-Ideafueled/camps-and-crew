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
                    <span className='w-full hover:text-[#5BC0ED] text-custom-blue hover:opacity-70 font-ttCommonProNormal font-medium flex items-center gap-1'>
                        Learn more about the company
                        <span>
                        {/* <HiArrowRight /> */}
                        <svg
              width="22"
              height="12"
              viewBox="0 0 22 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0.199219 5.8258C0.369099 5.3032 0.727999 5.1221 1.25116 5.1233C7.03515 5.1325 12.8197 5.1291 18.6037 5.1291C18.687 5.1291 18.7702 5.1291 18.9047 5.1291C18.8203 5.0385 18.7669 4.9787 18.7112 4.9206C17.7999 3.9835 16.8891 3.04637 15.9767 2.111C15.7292 1.85726 15.6482 1.55418 15.7455 1.21452C15.8361 0.899238 16.0515 0.697768 16.3643 0.623448C16.6877 0.546808 16.9555 0.659448 17.1861 0.896918C18.2066 1.94668 19.2293 2.99412 20.2508 4.0427C20.6294 4.4317 21.0041 4.8248 21.3877 5.208C21.5672 5.3874 21.7213 5.5785 21.8012 5.8258C21.8012 5.9419 21.8012 6.058 21.8012 6.1742C21.7207 6.4209 21.5649 6.6102 21.3877 6.7914C19.9898 8.2209 18.5964 9.655 17.2002 11.0862C16.8278 11.4683 16.344 11.5037 15.993 11.1809C15.6184 10.8365 15.6071 10.2728 15.9784 9.889C16.8869 8.9495 17.7999 8.0142 18.7129 7.0794C18.7669 7.0242 18.8355 6.9847 18.8974 6.9377C18.8867 6.915 18.8754 6.8924 18.8647 6.8703C18.7849 6.8703 18.705 6.8703 18.6251 6.8703C12.8344 6.8703 7.04303 6.8668 1.25229 6.8761C0.728559 6.8773 0.369669 6.6961 0.199219 6.1742C0.199219 6.058 0.199219 5.9419 0.199219 5.8258Z"
                fill="#63C1EC"
              />
            </svg>
                        </span>
                        </span>
                    </Link>
            </div>
        </div>
      
    </div>
  )
}

export default RwAccommodations
