import React, { useState } from 'react';
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";
import { FaCircle, FaRegCircle } from 'react-icons/fa';
import SmartLodge from './SmartLodge';
import Enroute from './Enroute';
import '../Homepage.css';

const Carousel = () => {
  const [activeCarousel,setActiveCarousel] = useState("lodge");


  return (
    <div className="w-full min-h-[400px] sm:min-h-[550px] lg:min-h-[620px] overflow-hidden border-[#D0D5DD] border-b-[1px]">
      {activeCarousel === "lodge" ? <SmartLodge /> : <Enroute />}
      <div className="flex justify-between py-5 text-custom-blue main-container  mx-auto ">
        <div
          className={`flex items-center gap-2 cursor-pointer ${
            activeCarousel === "lodge" && "opacity-[50%]"
          } `}
          onClick={() => setActiveCarousel("lodge")}
        >
          <div
            className={`${activeCarousel === "enroute" && "active-arrow-left"}`}
          >
            <svg
              width="30"
              height="16"
              viewBox="0 0 30 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M29.4002 8.23198C29.1737 8.92871 28.6951 9.17025 27.9976 
9.1687C20.2856 9.15633 12.5729 9.16096 4.86092 9.16096C4.74992 9.16096 4.63891
 9.16096 4.45965 9.16096C4.57216 9.28174 4.64341 9.36147 4.71767 9.43888C5.93274 10.6883 7.14707 
 11.9378 8.36365 13.185C8.69367 13.5233 8.80168 13.9274 8.67192 14.3803C8.55116 14.8007 8.26389 15.0693 7.84686 
 15.1684C7.41559 15.2706 7.05856 15.1204 6.75104 14.8038C5.39046 13.4041 4.02687 12.0075 2.66478 10.6094C2.16 10.0907 1.66047
  9.56663 1.14894 9.05568C0.909677 8.81647 0.704164 8.56177 0.597656 8.23198C0.597656 8.07715 0.597656 7.9223 0.597656 7.76747C0.704914
   7.43845 0.912678 7.18608 1.14894 6.94454C3.01281 5.03856 4.87068 3.12639 6.73229 1.21808C7.22883 0.708692 7.87387 0.661468 
   8.3419 1.0919C8.84143 1.55097 8.85643 2.30268 8.3614 2.8144C7.15007 4.06699 5.93274 5.31416 4.71542 6.56056C4.64341 6.6341
    4.5519 6.68675 4.4694 6.74945C4.48365 6.77965 4.49865 6.80984 4.5129 6.83926C4.61941 6.83926 4.72592 6.83926 4.83243
     6.83926C12.5534 6.83926 20.2751 6.8439 27.9961 6.83152C28.6944 6.82997 29.1729 7.07151 29.4002 7.76747C29.4002 7.92231 
     29.4002 8.07715 29.4002 8.23198Z"
                fill="#63C1EC"
              />
            </svg>
          </div>
          <p className="font-ttCommonProRegular text-sm sm:text-base font-semibold leading-[1.6rem]">
            SMARTLODGE
          </p>
        </div>
        <div className="flex items-center gap-[6px] cursor-pointer">
          <FaCircle
            className={`${
              activeCarousel === "lodge"
                ? "text-custom-blue"
                : "text-white border-[1px] rounded-full"
            }`}
            onClick={() => {
              setActiveCarousel("lodge");
            }}
          />
          <FaCircle
            className={`${
              activeCarousel === "enroute"
                ? "text-custom-blue"
                : "text-white border-[1px] rounded-full"
            }`}
            onClick={() => setActiveCarousel("enroute")}
          />
        </div>
        <div
          className={`flex items-center gap-2 cursor-pointer ${
            activeCarousel === "enroute" && "opacity-[50%]"
          }`}
          onClick={() => setActiveCarousel("enroute")}
        >
          <p className="font-ttCommonProRegular text-sm sm:text-base font-semibold leading-[1.6rem]">
            ENROUTE
          </p>

          <div
            className={`${
              activeCarousel !== "enroute" && "active-arrow-right"
            }`}
          >
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
          </div>
        </div>
      </div>
    </div>
  );
}

export default Carousel
