import React from 'react'
import { Link } from 'react-router-dom';
import sodexo from '/sodexo-logo2.png';

const OtherCaseStudies = () => {

  return (
    <div className='w-full'>
        <div className='main-container mx-auto pt-10 pb-5 lg:pt-20 lg:pb-10'>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 lg:gap-12'>
            <div className="relative min-h-[350px] p-4 md:p-8">
              <div className="absolute inset-0 h-auto bottom-0 bg-case-5 case-container rounded-2xl"></div>
              <div className='h-full flex flex-col justify-end'>
              <div className="relative flex flex-col text-left justify-between items-start gap-6">
                <img
                  src='/clean_harbors_new_all_white_transparent.png'
                  alt="clean harbors logo"
                  className="w-auto max-w-max"
                />
                
                <h2 className="text-base leading-[20px] sm:text-lg sm:leading-[24px] lg:text-xl lg:leading-[24px] text-white font-gilroyBold font-bold w-full">
                  Sodexo Leverages SmartLodge to  <br className='block md:hidden lg:block' /> Lift Room Occupancy and Drive  <br className='block md:hidden lg:block' />
                  Efficiencies at Cedar Valley Lodge
                </h2>
                <Link
                  to="/clean-harbors-canada-leverages-smartlodge-turnkey-camps" reloadDocument
                  className="flex items-center gap-2 text-sm md:text-base hover:gap-4  transition-all duration-250 text-white font-ttCommonProNormal font-semibold"
                >
                  READ STORY
                  <span className='hover:ml-1 transition-all duration-250'>
                    <svg width="22" height="12" viewBox="0 0 22 12" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M0.199219 5.8258C0.369099 5.3032 0.727999 5.1221 1.25116 5.1233C7.03515 5.1325 12.8197 5.1291 18.6037 5.1291C18.687 5.1291 18.7702 5.1291 18.9047 5.1291C18.8203 5.0385 18.7669 4.9787 18.7112 4.9206C17.7999 3.9835 16.8891 3.04637 15.9767 2.111C15.7292 1.85726 15.6482 1.55418 15.7455 1.21452C15.8361 0.899238 16.0515 0.697768 16.3643 0.623448C16.6877 0.546808 16.9555 0.659448 17.1861 0.896918C18.2066 1.94668 19.2293 2.99412 20.2508 4.0427C20.6294 4.4317 21.0041 4.8248 21.3877 5.208C21.5672 5.3874 21.7213 5.5785 21.8012 5.8258C21.8012 5.9419 21.8012 6.058 21.8012 6.1742C21.7207 6.4209 21.5649 6.6102 21.3877 6.7914C19.9898 8.2209 18.5964 9.655 17.2002 11.0862C16.8278 11.4683 16.344 11.5037 15.993 11.1809C15.6184 10.8365 15.6071 10.2728 15.9784 9.889C16.8869 8.9495 17.7999 8.0142 18.7129 7.0794C18.7669 7.0242 18.8355 6.9847 18.8974 6.9377C18.8867 6.915 18.8754 6.8924 18.8647 6.8703C18.7849 6.8703 18.705 6.8703 18.6251 6.8703C12.8344 6.8703 7.04303 6.8668 1.25229 6.8761C0.728559 6.8773 0.369669 6.6961 0.199219 6.1742C0.199219 6.058 0.199219 5.9419 0.199219 5.8258Z" fill="white"/>
</svg>

                  </span>
                </Link>

              </div>
              </div>
            </div>
            <div className="relative min-h-[350px] p-4 md:p-8">
              <div className="absolute inset-0 h-auto bottom-0 bg-case-6 case-container rounded-2xl"></div>
              <div className='h-full flex flex-col justify-end'>
              <div className="relative flex flex-col text-left justify-between items-start gap-6">
               <span className='h-[65px]'>
                 <img
                  src='/white-anokiigamig.png'
                  alt="white-anokiigamig logo"
                  className="max-h-[65px] object-cover"
                /></span>
                
                <h2 className="text-base leading-[20px] text-wrap sm:text-lg sm:leading-[24px] lg:text-xl lg:leading-[24px] text-white font-gilroyBold font-bold w-full">
                Atkinson Camp near Rainy River Mine 
                <br className='block md:hidden lg:block' /> Optimizes Daily Operations and Enhances <br className='block md:hidden lg:block' />the Guest Experience with SmartLodge
                </h2>
                <Link
                  to="/anokiigamig-installs-smartlodge-remote-camp-management-system" reloadDocument
                  className="flex items-center gap-2 text-sm md:text-base hover:gap-4  transition-all duration-250 text-white font-ttCommonProNormal font-semibold"
                >
                  READ STORY
                  <span className='hover:ml-1 transition-all duration-250'>
                    <svg width="22" height="12" viewBox="0 0 22 12" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M0.199219 5.8258C0.369099 5.3032 0.727999 5.1221 1.25116 5.1233C7.03515 5.1325 12.8197 5.1291 18.6037 5.1291C18.687 5.1291 18.7702 5.1291 18.9047 5.1291C18.8203 5.0385 18.7669 4.9787 18.7112 4.9206C17.7999 3.9835 16.8891 3.04637 15.9767 2.111C15.7292 1.85726 15.6482 1.55418 15.7455 1.21452C15.8361 0.899238 16.0515 0.697768 16.3643 0.623448C16.6877 0.546808 16.9555 0.659448 17.1861 0.896918C18.2066 1.94668 19.2293 2.99412 20.2508 4.0427C20.6294 4.4317 21.0041 4.8248 21.3877 5.208C21.5672 5.3874 21.7213 5.5785 21.8012 5.8258C21.8012 5.9419 21.8012 6.058 21.8012 6.1742C21.7207 6.4209 21.5649 6.6102 21.3877 6.7914C19.9898 8.2209 18.5964 9.655 17.2002 11.0862C16.8278 11.4683 16.344 11.5037 15.993 11.1809C15.6184 10.8365 15.6071 10.2728 15.9784 9.889C16.8869 8.9495 17.7999 8.0142 18.7129 7.0794C18.7669 7.0242 18.8355 6.9847 18.8974 6.9377C18.8867 6.915 18.8754 6.8924 18.8647 6.8703C18.7849 6.8703 18.705 6.8703 18.6251 6.8703C12.8344 6.8703 7.04303 6.8668 1.25229 6.8761C0.728559 6.8773 0.369669 6.6961 0.199219 6.1742C0.199219 6.058 0.199219 5.9419 0.199219 5.8258Z" fill="white"/>
</svg>

                  </span>
                </Link>

              </div>
              </div>
            </div>
            <div className="relative min-h-[350px] p-4 md:p-8">
              <div className="absolute inset-0 h-auto bottom-0 bg-case-7 case-container rounded-2xl"></div>
              <div className='h-full flex flex-col justify-end'>
              <div className="relative flex flex-col text-left justify-between items-start gap-6">
               <span className='h-[65px]'>
                 <img
                  src='/white-permian-lodging.png'
                  alt="white-permian-lodging logo"
                  className="max-h-[65px] object-cover"
                /></span>
                
                <h2 className="text-base leading-[20px] text-wrap sm:text-lg sm:leading-[24px] lg:text-xl lg:leading-[24px] text-white font-gilroyBold font-bold w-full">
                Permian Lodging Adopts SmartLodge to  
                <br className='block md:hidden lg:block' />Automate Billing and <br className='block md:hidden lg:block' />Enhance the Guest 
                <br className='block md:hidden lg:block' />
                Experience
                </h2>
                <Link
                  to="/permian-lodging-streamlines-billing-guest-experience-smartlodge"
                  className="flex items-center gap-2 text-sm md:text-base hover:gap-4  transition-all duration-250 text-white font-ttCommonProNormal font-semibold"
                >
                  READ STORY
                  <span className='hover:ml-1 transition-all duration-250'>
                    <svg width="22" height="12" viewBox="0 0 22 12" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M0.199219 5.8258C0.369099 5.3032 0.727999 5.1221 1.25116 5.1233C7.03515 5.1325 12.8197 5.1291 18.6037 5.1291C18.687 5.1291 18.7702 5.1291 18.9047 5.1291C18.8203 5.0385 18.7669 4.9787 18.7112 4.9206C17.7999 3.9835 16.8891 3.04637 15.9767 2.111C15.7292 1.85726 15.6482 1.55418 15.7455 1.21452C15.8361 0.899238 16.0515 0.697768 16.3643 0.623448C16.6877 0.546808 16.9555 0.659448 17.1861 0.896918C18.2066 1.94668 19.2293 2.99412 20.2508 4.0427C20.6294 4.4317 21.0041 4.8248 21.3877 5.208C21.5672 5.3874 21.7213 5.5785 21.8012 5.8258C21.8012 5.9419 21.8012 6.058 21.8012 6.1742C21.7207 6.4209 21.5649 6.6102 21.3877 6.7914C19.9898 8.2209 18.5964 9.655 17.2002 11.0862C16.8278 11.4683 16.344 11.5037 15.993 11.1809C15.6184 10.8365 15.6071 10.2728 15.9784 9.889C16.8869 8.9495 17.7999 8.0142 18.7129 7.0794C18.7669 7.0242 18.8355 6.9847 18.8974 6.9377C18.8867 6.915 18.8754 6.8924 18.8647 6.8703C18.7849 6.8703 18.705 6.8703 18.6251 6.8703C12.8344 6.8703 7.04303 6.8668 1.25229 6.8761C0.728559 6.8773 0.369669 6.6961 0.199219 6.1742C0.199219 6.058 0.199219 5.9419 0.199219 5.8258Z" fill="white"/>
</svg>

                  </span>
                </Link>

              </div>
              </div>
            </div>
            <div className="relative min-h-[350px] p-4 md:p-8">
              <div className="absolute inset-0 h-auto bottom-0 bg-case-8 case-container rounded-2xl"></div>
              <div className='h-full flex flex-col justify-end'>
              <div className="relative flex flex-col text-left justify-between items-start gap-6">
               <span className='h-[65px]'>
                 <img
                  src='/white-right-choice-camps-catering.png'
                  alt="white-right-choice-camps-catering logo"
                  className="max-h-[65px] object-cover"
                /></span>
                
                <h2 className="text-base leading-[20px] text-wrap sm:text-lg sm:leading-[24px] lg:text-xl lg:leading-[24px] text-white font-gilroyBold font-bold w-full">
                Edmonton-Based Right Choice Camps & 
                <br className='block md:hidden lg:block' />Catering Streamlines Operations and 
                <br className='block md:hidden lg:block' /> Billing for Network of Remote Lodges
                </h2>
                <Link
                  to="/right-choice-catering-edmonton-streamlines-remote-camp-operations-smartlodge" reloadDocument
                  className="flex items-center gap-2 text-sm md:text-base hover:gap-4  transition-all duration-250 text-white font-ttCommonProNormal font-semibold"
                >
                  READ STORY
                  <span className='hover:ml-1 transition-all duration-250'>
                    <svg width="22" height="12" viewBox="0 0 22 12" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M0.199219 5.8258C0.369099 5.3032 0.727999 5.1221 1.25116 5.1233C7.03515 5.1325 12.8197 5.1291 18.6037 5.1291C18.687 5.1291 18.7702 5.1291 18.9047 5.1291C18.8203 5.0385 18.7669 4.9787 18.7112 4.9206C17.7999 3.9835 16.8891 3.04637 15.9767 2.111C15.7292 1.85726 15.6482 1.55418 15.7455 1.21452C15.8361 0.899238 16.0515 0.697768 16.3643 0.623448C16.6877 0.546808 16.9555 0.659448 17.1861 0.896918C18.2066 1.94668 19.2293 2.99412 20.2508 4.0427C20.6294 4.4317 21.0041 4.8248 21.3877 5.208C21.5672 5.3874 21.7213 5.5785 21.8012 5.8258C21.8012 5.9419 21.8012 6.058 21.8012 6.1742C21.7207 6.4209 21.5649 6.6102 21.3877 6.7914C19.9898 8.2209 18.5964 9.655 17.2002 11.0862C16.8278 11.4683 16.344 11.5037 15.993 11.1809C15.6184 10.8365 15.6071 10.2728 15.9784 9.889C16.8869 8.9495 17.7999 8.0142 18.7129 7.0794C18.7669 7.0242 18.8355 6.9847 18.8974 6.9377C18.8867 6.915 18.8754 6.8924 18.8647 6.8703C18.7849 6.8703 18.705 6.8703 18.6251 6.8703C12.8344 6.8703 7.04303 6.8668 1.25229 6.8761C0.728559 6.8773 0.369669 6.6961 0.199219 6.1742C0.199219 6.058 0.199219 5.9419 0.199219 5.8258Z" fill="white"/>
</svg>

                  </span>
                </Link>

              </div>
              </div>
            </div>
            <div className="relative min-h-[350px] p-4 md:p-8">
              <div className="absolute inset-0 h-auto bottom-0 bg-case-9 case-container rounded-2xl"></div>
              <div className='h-full flex flex-col justify-end'>
              <div className="relative flex flex-col text-left justify-between items-start gap-6">
               <span className=''>
                 <img
                  src='/white-petroplex.png'
                  alt="white-petroplex logo"
                  className="max-h-[65px] object-cover"
                /></span>
                
                <h2 className="text-base leading-[20px] text-wrap sm:text-lg sm:leading-[24px] lg:text-xl lg:leading-[24px] text-white font-gilroyBold font-bold w-full">
                Petroplex Deploys Smartlodge to Boost  
                <br className='block md:hidden lg:block' />Revenue and Manage Occupancy of
                <br className='block md:hidden lg:block' /> Workforce Camps and Commercial Properties
                </h2>
                <Link
                  to="/petroplex-manages-workforce-housing-commercial-property-rentals-smartlodge" reloadDocument
                  className="flex items-center gap-2 text-sm md:text-base hover:gap-4  transition-all duration-250 text-white font-ttCommonProNormal font-semibold"
                >
                  READ STORY
                  <span className='hover:ml-1 transition-all duration-250'>
                    <svg width="22" height="12" viewBox="0 0 22 12" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M0.199219 5.8258C0.369099 5.3032 0.727999 5.1221 1.25116 5.1233C7.03515 5.1325 12.8197 5.1291 18.6037 5.1291C18.687 5.1291 18.7702 5.1291 18.9047 5.1291C18.8203 5.0385 18.7669 4.9787 18.7112 4.9206C17.7999 3.9835 16.8891 3.04637 15.9767 2.111C15.7292 1.85726 15.6482 1.55418 15.7455 1.21452C15.8361 0.899238 16.0515 0.697768 16.3643 0.623448C16.6877 0.546808 16.9555 0.659448 17.1861 0.896918C18.2066 1.94668 19.2293 2.99412 20.2508 4.0427C20.6294 4.4317 21.0041 4.8248 21.3877 5.208C21.5672 5.3874 21.7213 5.5785 21.8012 5.8258C21.8012 5.9419 21.8012 6.058 21.8012 6.1742C21.7207 6.4209 21.5649 6.6102 21.3877 6.7914C19.9898 8.2209 18.5964 9.655 17.2002 11.0862C16.8278 11.4683 16.344 11.5037 15.993 11.1809C15.6184 10.8365 15.6071 10.2728 15.9784 9.889C16.8869 8.9495 17.7999 8.0142 18.7129 7.0794C18.7669 7.0242 18.8355 6.9847 18.8974 6.9377C18.8867 6.915 18.8754 6.8924 18.8647 6.8703C18.7849 6.8703 18.705 6.8703 18.6251 6.8703C12.8344 6.8703 7.04303 6.8668 1.25229 6.8761C0.728559 6.8773 0.369669 6.6961 0.199219 6.1742C0.199219 6.058 0.199219 5.9419 0.199219 5.8258Z" fill="white"/>
</svg>

                  </span>
                </Link>

              </div>
              </div>
            </div>
            
            <div className="relative min-h-[350px] p-4 md:p-8">
              <div className="absolute inset-0 h-auto bottom-0 bg-case-10 case-container rounded-2xl"></div>
              <div className='h-full flex flex-col justify-end'>
              <div className="relative flex flex-col text-left justify-between items-start gap-6">
               <span className=''>
                 <img
                  src={sodexo}
                  alt="white-sodexo logo"
                  className="max-h-[65px] object-cover"
                /></span>
                
                <h2 className="text-base leading-[20px] text-wrap sm:text-lg sm:leading-[24px] lg:text-xl lg:leading-[24px] text-white font-gilroyBold font-bold w-full">
               
                Sodexo Partners with Camps & Crew to Streamline<br className='block md:hidden lg:block' /> FIFO Transport Logistics and Camp Management for Remote<br className='block md:hidden lg:block' /> Hydroelectric Project
                {/* <br className='block md:hidden lg:block' />Revenue and Manage Occupancy of
                <br className='block md:hidden lg:block' />
                Workforce Camps and Commercial Properties */}
                </h2>
                <Link
                  to="#"
                  className="flex items-center gap-2 text-sm md:text-base hover:gap-4  transition-all duration-250 text-white font-ttCommonProNormal font-semibold"
                >
                  READ STORY
                  <span className='hover:ml-1 transition-all duration-250'>
                    <svg width="22" height="12" viewBox="0 0 22 12" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M0.199219 5.8258C0.369099 5.3032 0.727999 5.1221 1.25116 5.1233C7.03515 5.1325 12.8197 5.1291 18.6037 5.1291C18.687 5.1291 18.7702 5.1291 18.9047 5.1291C18.8203 5.0385 18.7669 4.9787 18.7112 4.9206C17.7999 3.9835 16.8891 3.04637 15.9767 2.111C15.7292 1.85726 15.6482 1.55418 15.7455 1.21452C15.8361 0.899238 16.0515 0.697768 16.3643 0.623448C16.6877 0.546808 16.9555 0.659448 17.1861 0.896918C18.2066 1.94668 19.2293 2.99412 20.2508 4.0427C20.6294 4.4317 21.0041 4.8248 21.3877 5.208C21.5672 5.3874 21.7213 5.5785 21.8012 5.8258C21.8012 5.9419 21.8012 6.058 21.8012 6.1742C21.7207 6.4209 21.5649 6.6102 21.3877 6.7914C19.9898 8.2209 18.5964 9.655 17.2002 11.0862C16.8278 11.4683 16.344 11.5037 15.993 11.1809C15.6184 10.8365 15.6071 10.2728 15.9784 9.889C16.8869 8.9495 17.7999 8.0142 18.7129 7.0794C18.7669 7.0242 18.8355 6.9847 18.8974 6.9377C18.8867 6.915 18.8754 6.8924 18.8647 6.8703C18.7849 6.8703 18.705 6.8703 18.6251 6.8703C12.8344 6.8703 7.04303 6.8668 1.25229 6.8761C0.728559 6.8773 0.369669 6.6961 0.199219 6.1742C0.199219 6.058 0.199219 5.9419 0.199219 5.8258Z" fill="white"/>
</svg>

                  </span>
                </Link>

              </div>
              </div>
            </div>
            <div className="relative min-h-[350px] p-4 md:p-8">
              <div className="absolute inset-0 h-auto bottom-0 bg-case-11 case-container rounded-2xl"></div>
              <div className='h-full flex flex-col justify-end'>
              <div className="relative flex flex-col text-left justify-between items-start gap-6">
               <span className=''>
                 <img
                  src='/white-kiewit.png'
                  alt="white-kiewit logo"
                  className="max-h-[65px] object-cover"
                /></span>
                
                <h2 className="text-base leading-[20px] text-wrap sm:text-lg sm:leading-[24px] lg:text-xl lg:leading-[24px] text-white font-gilroyBold font-bold w-full">
               
                Kiewit Transforms FIFO Operations at<br className='block md:hidden lg:block' /> Upper Mattagami Hydroelectric Project<br className='block md:hidden lg:block' />
                with EnRoute and SmartLodge
                </h2>
                <Link
                  to="#"
                  className="flex items-center gap-2 text-sm md:text-base hover:gap-4  transition-all duration-250 text-white font-ttCommonProNormal font-semibold"
                >
                  READ STORY
                  <span className='hover:ml-1 transition-all duration-250'>
                    <svg width="22" height="12" viewBox="0 0 22 12" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M0.199219 5.8258C0.369099 5.3032 0.727999 5.1221 1.25116 5.1233C7.03515 5.1325 12.8197 5.1291 18.6037 5.1291C18.687 5.1291 18.7702 5.1291 18.9047 5.1291C18.8203 5.0385 18.7669 4.9787 18.7112 4.9206C17.7999 3.9835 16.8891 3.04637 15.9767 2.111C15.7292 1.85726 15.6482 1.55418 15.7455 1.21452C15.8361 0.899238 16.0515 0.697768 16.3643 0.623448C16.6877 0.546808 16.9555 0.659448 17.1861 0.896918C18.2066 1.94668 19.2293 2.99412 20.2508 4.0427C20.6294 4.4317 21.0041 4.8248 21.3877 5.208C21.5672 5.3874 21.7213 5.5785 21.8012 5.8258C21.8012 5.9419 21.8012 6.058 21.8012 6.1742C21.7207 6.4209 21.5649 6.6102 21.3877 6.7914C19.9898 8.2209 18.5964 9.655 17.2002 11.0862C16.8278 11.4683 16.344 11.5037 15.993 11.1809C15.6184 10.8365 15.6071 10.2728 15.9784 9.889C16.8869 8.9495 17.7999 8.0142 18.7129 7.0794C18.7669 7.0242 18.8355 6.9847 18.8974 6.9377C18.8867 6.915 18.8754 6.8924 18.8647 6.8703C18.7849 6.8703 18.705 6.8703 18.6251 6.8703C12.8344 6.8703 7.04303 6.8668 1.25229 6.8761C0.728559 6.8773 0.369669 6.6961 0.199219 6.1742C0.199219 6.058 0.199219 5.9419 0.199219 5.8258Z" fill="white"/>
</svg>

                  </span>
                </Link>

              </div>
              </div>
            </div>
            </div>
        </div>
      
    </div>
  )
}

export default OtherCaseStudies
