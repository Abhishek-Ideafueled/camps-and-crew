import React from 'react';
import logo2 from '/logo2.png';
import { BsTelephone } from 'react-icons/bs';
import { FaRegEnvelope } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import '../HomePage/Homepage.css';

const Footer = () => {
  return (
    <footer className="w-full bg-[#181C20] text-white font-ttCommonProRegular">
      <div className="main-container mx-auto ">
        <div className="py-10 lg:pt-[60px] lg:pb-20 w-full xl:pb-20 flex flex-col md:flex-row items-start gap-6">
          <div className="flex flex-col max-w-[344px] gap-6">
            {/* <img src={logo2} alt="" className='w-[130px] h-[93px]' /> */}
            <svg
              width="132"
              height="95"
              viewBox="0 0 132 95"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M35.423 31.6666C35.423 29.4691 35.423 27.3013 35.423 25.0447C36.4144 25.0447 37.3985 25.0447 38.4417 25.0447C38.8042 23.5427 39.1446 22.1 39.4997 20.6646C41.453 12.8145 46.1142 7.1471 53.3058 3.51431C53.3872 3.46992 53.476 3.45512 53.7793 3.35894C55.4588 10.04 57.1309 16.6767 58.8031 23.3208C58.8179 23.3208 58.8327 23.3208 58.8475 23.3208C58.6551 21.3823 58.4627 19.4438 58.2704 17.5054C57.8486 13.2881 57.4195 9.07078 57.0348 4.84609C56.8572 2.87062 57.745 1.61283 59.7501 1.05793C60.6306 0.813767 61.5628 0.68059 62.4802 0.650995C64.1968 0.606602 65.9207 0.658393 67.6372 0.702786C69.9234 0.761976 71.7065 2.92981 71.4549 5.00886C70.7891 10.4765 70.3451 15.9664 69.8124 21.4489C69.7828 21.7374 69.7754 22.026 69.7976 22.3219C71.3588 16.0108 72.9421 9.69967 75.0433 3.46252C84.0402 7.94617 88.4647 15.4263 89.8778 24.9929C90.9876 24.9929 91.9717 24.9929 93.0075 24.9929C93.0075 27.2569 93.0075 29.4395 93.0075 31.6666C73.8299 31.6666 54.6672 31.6666 35.423 31.6666Z"
                fill="#5BC0ED"
              />
              <path
                d="M73.9779 53.2857C73.9779 54.8469 73.9779 56.667 73.9779 58.6054C70.0196 56.9925 67.1859 54.0626 64.3891 51.1253C62.865 52.5681 61.4222 54.0108 59.8907 55.3574C58.3739 56.704 56.687 57.8138 54.7042 58.5906C54.7042 56.6818 54.7042 54.8469 54.7042 53.2635C56.8942 51.2511 58.951 49.357 61.1633 47.3149C58.951 45.2729 56.8868 43.3714 54.6894 41.3515C54.6894 39.7682 54.6894 37.9481 54.6894 36.0244C58.6403 37.6522 61.474 40.5599 64.2707 43.5046C65.7801 42.0766 67.2154 40.6339 68.747 39.2873C70.2785 37.9333 71.9728 36.8013 73.9631 36.0392C73.9631 37.9407 73.9631 39.7608 73.9631 41.3515C71.7805 43.364 69.7162 45.2729 67.4966 47.3149C69.7162 49.3644 71.7731 51.2585 73.9779 53.2857Z"
                fill="white"
              />
              <path
                d="M76.4639 59.2935C76.4639 57.5992 76.4639 55.9419 76.4639 54.2402C80.2595 55.2094 83.3521 54.2772 85.3498 50.8811C86.9109 48.2324 86.6742 45.5096 84.8985 43.0015C83.3817 40.8706 80.4518 39.2577 76.4861 40.3897C76.4861 38.7028 76.4861 37.0381 76.4861 35.3586C79.6676 34.4115 84.8319 35.3068 88.2871 39.1985C91.8681 43.2308 92.3194 49.5642 89.3377 54.0478C86.1341 58.8644 80.4962 60.3442 76.4639 59.2935Z"
                fill="white"
              />
              <path
                d="M52.2182 35.3438C52.2182 37.0011 52.2182 38.6584 52.2182 40.4045C49.0515 39.5093 46.2918 40.1086 44.0943 42.5797C42.696 44.1483 42.2003 46.0498 42.363 48.1288C42.6294 51.4582 46.351 55.9863 52.196 54.2624C52.196 55.9493 52.196 57.6214 52.196 59.2861C48.245 60.3442 42.7848 58.8866 39.6477 54.5065C36.4144 49.9933 36.555 43.9781 40.0546 39.598C43.2879 35.5361 48.43 34.3597 52.2182 35.3438Z"
                fill="white"
              />
              <path
                d="M30.7914 84.9302C29.9183 84.9302 29.1267 84.9302 28.2684 84.9302C27.6913 81.401 27.1216 77.894 26.5445 74.3796C26.51 74.3796 26.4754 74.3796 26.4409 74.3796C26.4409 77.8866 26.4409 81.3936 26.4409 84.9302C25.6344 84.9302 24.9168 84.9302 24.1399 84.9302C24.1399 79.4477 24.1399 73.9874 24.1399 68.4976C25.3385 68.4976 26.5075 68.4976 27.7579 68.4976C28.3547 72.1575 28.9516 75.8174 29.5484 79.4773C29.5977 79.4773 29.647 79.4748 29.6964 79.4699C30.2365 75.8297 30.784 72.1895 31.3389 68.505C32.5523 68.505 33.7361 68.505 34.9865 68.505C34.9865 73.9652 34.9865 79.4255 34.9865 84.9228C34.1504 84.9228 33.3513 84.9228 32.4783 84.9228C32.4783 81.3936 32.4783 77.9014 32.4783 74.4092C32.4388 74.4092 32.3994 74.4067 32.3599 74.4018C31.8346 77.894 31.3167 81.3936 30.7914 84.9302Z"
                fill="white"
              />
              <path
                d="M120.753 84.9154C120.146 79.4403 119.539 73.9948 118.925 68.505C119.806 68.505 120.627 68.505 121.53 68.505C121.959 72.5965 122.388 76.6732 122.817 80.7499C122.847 80.7548 122.874 80.7573 122.898 80.7573C123.283 76.688 123.668 72.6261 124.06 68.5124C124.918 68.5124 125.74 68.5124 126.635 68.5124C127.042 72.6631 127.449 76.8138 127.878 81.2086C128.322 76.8286 128.743 72.6927 129.173 68.5124C129.942 68.5124 130.689 68.5124 131.511 68.5124C130.904 73.9874 130.29 79.4329 129.683 84.9154C128.507 84.9154 127.375 84.9154 126.176 84.9154C125.89 82.242 125.601 79.5686 125.31 76.8952C125.291 76.8952 125.271 76.8952 125.251 76.8952C124.963 79.5587 124.674 82.2149 124.378 84.9154C123.18 84.9154 122.011 84.9154 120.753 84.9154Z"
                fill="white"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M96.8327 84.9228C96.8327 79.4403 96.8327 73.9874 96.8327 68.394C98.6454 68.4754 100.436 68.468 102.204 68.6677C103.358 68.7935 104.239 69.5926 104.372 70.7468C104.535 72.1748 104.542 73.6397 104.372 75.0603C104.283 75.741 103.625 76.355 103.203 77.0357C104.416 77.709 104.609 79.026 104.601 80.4318C104.594 81.9115 104.601 83.3839 104.601 84.9154C103.95 84.9154 103.092 84.9154 102.138 84.9154C102.071 84.4419 101.967 83.9684 101.953 83.4948C101.93 82.4442 101.953 81.3936 101.945 80.3356C101.923 78.6265 101.294 78.1086 99.4592 78.3527C99.4592 80.5205 99.4592 82.7032 99.4592 84.9228C98.5566 84.9228 97.7353 84.9228 96.8327 84.9228ZM99.4888 75.7853C101.087 76.0813 101.834 75.667 101.893 74.4092C101.93 73.5805 101.893 72.7445 101.842 71.9158C101.805 71.3387 101.435 70.9836 100.858 70.9318C100.414 70.8874 99.9623 70.9244 99.4888 70.9244C99.4888 72.5891 99.4888 74.1872 99.4888 75.7853Z"
                fill="white"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M68.858 76.1257C67.319 74.9419 66.7715 71.6346 68.1255 69.9181C68.6064 69.304 69.4499 68.7565 70.2045 68.6307C71.5067 68.4236 72.8681 68.579 74.2443 68.579C74.2443 69.2892 74.2443 70.0587 74.2443 70.9022C73.3342 70.9022 72.4538 70.9022 71.5659 70.9022C70.5005 70.9096 70.0936 71.3313 70.0936 72.3967C70.0936 72.6187 70.0936 72.8332 70.0936 73.0478C70.0936 74.9271 70.7743 75.4302 72.7201 75.0751C72.7201 74.535 72.7201 73.9874 72.7201 73.3881C73.6228 73.3881 74.3922 73.3881 75.2949 73.3881C75.2949 73.9431 75.2949 74.6459 75.2949 75.223C75.5391 75.2748 75.724 75.1712 75.9534 75.223C75.9534 75.9925 75.9534 76.762 75.9534 77.5462C75.761 77.5906 75.5859 77.6276 75.4281 77.6572C75.4281 80.0692 75.4281 82.4812 75.4281 84.9228C74.6512 84.9228 73.6154 84.9228 72.7201 84.9228C72.7275 84.8118 72.7571 84.4049 72.7201 84.1977C72.0468 84.5085 71.3661 84.9968 70.6633 85.1004C69.0503 85.3445 67.8591 84.5825 67.6224 82.9547C67.393 81.4158 67.43 79.8103 67.6224 78.2639C67.7112 77.524 68.4141 76.8508 68.858 76.1257ZM72.7201 84.9228C72.7127 84.9672 72.7127 84.9746 72.7201 84.9228V84.9228ZM72.7201 77.6942C71.307 77.3539 70.3155 77.7312 70.1602 78.8632C70.0418 79.7881 70.0714 80.7425 70.1454 81.6747C70.1897 82.348 70.6633 82.7328 71.3661 82.7254C72.0616 82.7254 72.6831 82.3702 72.7201 81.6821C72.7793 80.3578 72.7201 79.026 72.7201 77.6942Z"
                fill="white"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M20.6699 84.9302C19.745 84.9302 18.9016 84.9302 17.9989 84.9302C17.8436 83.961 17.6808 83.0065 17.518 82.0299C16.497 82.0299 15.5204 82.0299 14.4697 82.0299C14.3144 82.9843 14.1664 83.9462 14.0036 84.9302C13.1971 84.9302 12.4277 84.9302 11.562 84.9302C12.4351 79.4403 13.3081 74.0022 14.1812 68.5124C15.4538 68.5124 16.7116 68.5124 18.0433 68.5124C18.9164 73.9652 19.7894 79.4181 20.6699 84.9302ZM17.1629 79.6327C16.7781 77.0357 16.4082 74.4906 16.0309 71.9528C16.0013 71.9528 15.9717 71.9553 15.9421 71.9602C15.5721 74.5054 15.1948 77.0431 14.8101 79.6327C15.6313 79.6327 16.3416 79.6327 17.1629 79.6327Z"
                fill="white"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M39.1816 68.5494C40.7797 68.5494 42.3408 68.4606 43.8872 68.5716C45.4261 68.6899 46.5137 69.6444 46.6839 71.1685C46.8689 72.7888 46.8985 74.4684 46.6913 76.0813C46.4619 77.8422 45.1746 78.73 43.3323 78.7818C42.8513 78.7966 42.363 78.7818 41.8155 78.7818C41.8155 80.8609 41.8155 82.8585 41.8155 84.9154C40.9129 84.9154 40.0768 84.9154 39.1816 84.9154C39.1816 79.46 39.1816 74.0047 39.1816 68.5494ZM41.8081 76.3254C43.7614 76.614 44.1905 76.2515 44.1905 74.3944C44.1905 73.8395 44.1683 73.2772 44.1979 72.7149C44.2645 71.1167 43.7244 70.658 41.8081 71.0131C41.8081 72.5891 41.8081 74.1798 41.8081 75.7705C41.8081 75.9481 41.8081 76.1257 41.8081 76.3254Z"
                fill="white"
              />
              <path
                d="M90.4253 78.8114C91.291 78.8114 92.0827 78.8114 92.9557 78.8114C92.9113 80.4909 93.2961 82.2297 92.2528 83.7168C91.1726 85.2631 89.5449 85.3223 87.895 85.0264C86.5336 84.7896 85.5717 83.7168 85.3128 82.274C85.2388 81.8301 85.1944 81.3714 85.1944 80.9201C85.1796 78.1307 85.1426 75.334 85.2166 72.5447C85.2388 71.6716 85.4164 70.7172 85.8085 69.9477C86.5484 68.4976 88.3167 67.9723 90.2478 68.4162C91.8089 68.7639 92.7781 69.9181 92.9261 71.6938C92.9853 72.4485 92.9335 73.2106 92.9335 74.0244C92.1196 74.0244 91.3206 74.0244 90.4179 74.0244C90.4179 73.3881 90.4327 72.7593 90.4179 72.1304C90.3883 71.1833 89.9592 70.732 89.1232 70.7394C88.3167 70.7542 87.9024 71.1907 87.895 72.1378C87.8802 75.1811 87.8802 78.2245 87.895 81.2678C87.895 82.2371 88.3315 82.7032 89.1454 82.7106C89.9592 82.718 90.4031 82.2075 90.4179 81.2308C90.4327 80.4392 90.4253 79.6401 90.4253 78.8114Z"
                fill="white"
              />
              <path
                d="M57.708 72.9738C56.8054 72.9738 55.9989 72.9738 55.1703 72.9738C55.1407 72.5521 55.1407 72.1526 55.0815 71.7604C54.9779 71.0649 54.5562 70.7246 53.8459 70.7394C53.1504 70.7616 52.7953 71.1389 52.6917 71.8048C52.4845 73.0774 53.0394 74.054 53.8903 74.9123C54.7485 75.7779 55.6734 76.577 56.4503 77.4945C57.7524 79.026 57.9966 80.8313 57.4491 82.718C56.9312 84.5159 55.3996 85.3445 53.18 85.13C51.3525 84.9598 50.1243 83.7242 49.9541 81.8301C49.895 81.2234 49.9394 80.6093 49.9394 79.973C50.7754 79.973 51.5819 79.973 52.4623 79.973C52.4623 80.4688 52.4475 80.9127 52.4623 81.364C52.4993 82.2075 52.9063 82.6588 53.6535 82.7032C54.4156 82.7476 54.9113 82.3184 55.0075 81.4676C55.1333 80.3726 54.6672 79.4847 53.9421 78.7226C52.9802 77.7164 51.9222 76.799 51.0492 75.7188C49.5176 73.8321 49.5916 70.621 51.1306 69.2079C52.3587 68.0906 53.8533 68.1054 55.333 68.5272C56.6574 68.8971 57.3159 69.9255 57.5527 71.2277C57.6563 71.79 57.6563 72.3671 57.708 72.9738Z"
                fill="white"
              />
              <path
                d="M5.87977 74.0318C5.87977 73.3363 5.90197 72.6853 5.87238 72.0416C5.82798 71.1907 5.40625 70.7616 4.64418 70.7394C3.85251 70.7246 3.342 71.1389 3.3346 72.0046C3.30501 75.1564 3.30747 78.3083 3.342 81.4602C3.3494 82.2888 3.86731 82.718 4.62199 82.7106C5.36926 82.6958 5.83538 82.2592 5.87238 81.4232C5.90937 80.5797 5.87977 79.7289 5.87977 78.8262C6.74543 78.8262 7.54449 78.8262 8.52113 78.8262C8.39535 80.1876 8.43234 81.549 8.1216 82.8216C7.71466 84.5233 6.11653 85.3075 3.9561 85.1374C2.26918 84.9968 1.02619 83.9314 0.789431 82.2962C0.671051 81.475 0.656253 80.6389 0.648854 79.8103C0.641455 77.2355 0.597063 74.6607 0.67105 72.086C0.767234 68.8675 3.88951 67.151 6.65664 68.8231C7.31513 69.2226 7.91443 70.0291 8.14379 70.7764C8.46194 71.7752 8.39535 72.8998 8.49893 74.0318C7.56669 74.0318 6.78242 74.0318 5.87977 74.0318Z"
                fill="white"
              />
              <path
                d="M114.708 75.3858C114.708 76.2441 114.708 76.9839 114.708 77.7978C113.554 77.7978 112.422 77.7978 111.245 77.7978C111.245 79.4033 111.245 80.9275 111.245 82.5404C112.71 82.5404 114.146 82.5404 115.633 82.5404C115.633 83.3617 115.633 84.1089 115.633 84.908C113.295 84.908 110.979 84.908 108.604 84.908C108.604 79.4477 108.604 73.9948 108.604 68.505C110.957 68.505 113.28 68.505 115.64 68.505C115.64 69.304 115.64 70.0735 115.64 70.9022C114.153 70.9022 112.718 70.9022 111.245 70.9022C111.245 72.4189 111.245 73.8617 111.245 75.3858C112.385 75.3858 113.532 75.3858 114.708 75.3858Z"
                fill="white"
              />
              <path
                d="M94.4207 88.8663C94.65 88.8663 94.8424 88.8663 95.0866 88.8663C95.819 90.0871 96.5589 91.4485 97.3506 92.7581C98.1126 91.4633 98.8377 90.1019 99.5628 88.8663C99.7848 88.8663 99.9771 88.8663 100.221 88.8663C100.221 90.679 100.221 92.6249 100.221 94.4672C99.9919 94.4672 99.77 94.4672 99.474 94.4672C99.474 93.3056 99.474 92.1366 99.474 90.9824C99.4148 90.9676 98.0239 92.8321 97.3506 93.9419C97.136 93.7643 95.8708 92.0404 95.2345 90.9824C95.2345 92.3807 95.2345 93.2834 95.2345 94.4672C94.9312 94.4672 94.7092 94.4672 94.4207 94.4672C94.4207 92.6545 94.4207 90.7086 94.4207 88.8663Z"
                fill="#5BC0ED"
              />
              <path
                d="M29.1341 94.4746C28.8751 94.4746 28.6827 94.4746 28.446 94.4746C27.4323 93.2316 26.4113 91.9738 25.2571 90.5532C25.2571 91.9664 25.2571 93.2168 25.2571 94.4746C24.939 94.4746 24.7022 94.4746 24.4211 94.4746C24.4211 92.6619 24.4211 90.8048 24.4211 88.9625C24.6652 88.9625 24.8724 88.9625 25.1091 88.9625C26.1228 90.2129 27.1438 91.5003 28.2906 92.9209C28.2906 91.5003 28.2906 90.2351 28.2906 88.9625C28.6087 88.9625 28.8455 88.9625 29.1341 88.9625C29.1341 90.7752 29.1341 92.6175 29.1341 94.4746Z"
                fill="#5BC0ED"
              />
              <path
                d="M117.645 88.8663C117.867 88.8663 118.06 88.8663 118.311 88.8663C119.325 90.1167 120.361 91.5151 121.508 92.9283C121.508 91.5299 121.508 90.1463 121.508 88.8663C121.818 88.8663 122.048 88.8663 122.329 88.8663C122.329 90.6864 122.329 92.6323 122.329 94.4746C122.107 94.4746 121.914 94.4746 121.655 94.4746C120.657 93.2464 119.636 91.9886 118.474 90.5606C118.474 91.9886 118.474 93.2168 118.474 94.4746C118.156 94.4746 117.934 94.4746 117.645 94.4746C117.645 92.6767 117.645 90.7382 117.645 88.8663Z"
                fill="#5BC0ED"
              />
              <path
                d="M37.0581 94.4746C36.8066 94.4746 36.6142 94.4746 36.3774 94.4746C35.3638 93.2316 34.3428 91.9738 33.1886 90.5532C33.1886 91.9738 33.1886 93.2168 33.1886 94.4746C32.8704 94.4746 32.6337 94.4746 32.3525 94.4746C32.3525 92.6545 32.3525 90.7974 32.3525 88.9625C32.5893 88.9625 32.7816 88.9625 33.0258 88.9625C34.0394 90.2055 35.0679 91.5003 36.2221 92.9208C36.2221 91.5077 36.2221 90.2499 36.2221 88.9625C36.5328 88.9477 36.7696 88.9773 37.0581 88.9625C37.0581 90.8196 37.0581 92.6175 37.0581 94.4746Z"
                fill="#5BC0ED"
              />
              <path
                d="M50.8346 88.9625C51.064 88.9625 51.2563 88.9625 51.4931 88.9625C52.5215 90.2351 53.5647 91.5373 54.7116 92.9504C54.7116 91.5447 54.7116 90.2573 54.7116 88.9625C55.0001 88.9625 55.2369 88.9625 55.518 88.9625C55.518 90.7826 55.518 92.6471 55.518 94.4746C55.2961 94.4746 55.1037 94.4746 54.8373 94.4746C53.8533 93.276 52.8397 92.0182 51.6855 90.5976C51.6855 92.0108 51.6855 93.239 51.6855 94.4746C51.3525 94.4746 51.1232 94.4746 50.8346 94.4746C50.8346 92.6693 50.8346 90.8344 50.8346 88.9625Z"
                fill="#5BC0ED"
              />
              <path
                d="M12.694 88.9625C13.0418 88.9625 13.2489 88.9625 13.5079 88.9625C13.5079 90.79 13.5079 92.6323 13.5079 94.4746C13.3007 94.4746 13.0936 94.4746 12.8346 94.4746C11.8358 93.2464 10.8073 91.9664 9.64574 90.5384C9.64574 91.9664 9.64574 93.2168 9.64574 94.4746C9.335 94.4746 9.11303 94.4746 8.83928 94.4746C8.83928 92.6619 8.83928 90.8048 8.83928 88.9625C9.05384 88.9625 9.26101 88.9625 9.51257 88.9625C10.5188 90.1981 11.5398 91.5003 12.694 92.9282C12.694 91.5003 12.694 90.2499 12.694 88.9625Z"
                fill="#5BC0ED"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M88.7606 88.9107C90.4697 88.9255 91.6905 90.1167 91.6831 91.7518C91.6757 93.4092 90.4105 94.5856 88.6792 94.556C86.9553 94.5264 85.7715 93.3574 85.7937 91.6927C85.8233 90.0501 87.0441 88.9033 88.7606 88.9107ZM86.6372 91.7371C86.6372 92.9061 87.562 93.8235 88.7458 93.8235C89.9222 93.8161 90.8471 92.8839 90.8323 91.7149C90.8175 90.5828 89.8704 89.6432 88.7458 89.6358C87.5768 89.6358 86.6446 90.5681 86.6372 91.7371Z"
                fill="#5BC0ED"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M104.239 92.9209C104.239 93.461 104.239 93.9493 104.239 94.4672C103.98 94.4672 103.773 94.4672 103.499 94.4672C103.499 92.6693 103.499 90.864 103.499 88.8663C103.499 88.8663 105.785 88.7554 106.873 88.9847C107.627 89.1475 108.012 90.3091 107.923 91.1082C107.827 91.9738 107.28 92.6101 106.37 92.7581C105.704 92.8691 105.008 92.8617 104.239 92.9209ZM104.298 89.7246C104.298 90.5533 104.298 91.2857 104.298 92.107C104.298 92.107 106.214 92.4473 106.851 91.5521C107.058 91.2561 107.043 90.5533 106.836 90.2647C106.199 89.399 104.298 89.7246 104.298 89.7246Z"
                fill="#5BC0ED"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M115.285 94.4746C114.923 94.4746 114.678 94.4746 114.412 94.4746C114.205 94.0381 114.005 93.6163 113.783 93.1576C112.858 93.1576 111.926 93.1576 110.949 93.1576C110.742 93.5941 110.535 94.0381 110.328 94.4746C110.062 94.4746 109.81 94.4746 109.47 94.4746C110.313 92.6101 111.127 90.6716 111.948 88.8663C112.237 88.8663 112.488 88.8663 112.799 88.8663C113.613 90.6568 114.427 92.5805 115.285 94.4746ZM113.48 92.4177C113.103 91.5743 112.77 90.8344 112.363 89.9244C111.956 90.8492 111.63 91.5965 111.268 92.4177C112.037 92.4177 112.681 92.4177 113.48 92.4177Z"
                fill="#5BC0ED"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M0.663651 94.4746C1.51451 92.6027 2.32837 90.7678 3.14223 88.9625C3.43818 88.9625 3.66754 88.9625 3.98569 88.9625C4.79955 90.753 5.62082 92.5953 6.47907 94.4746C6.12393 94.4746 5.87977 94.4746 5.59862 94.4746C5.39145 94.0381 5.18429 93.5941 4.96973 93.1428C4.02269 93.1428 3.10524 93.1428 2.1508 93.1428C1.94363 93.5941 1.72907 94.0455 1.52191 94.4746C1.25555 94.4746 1.01139 94.4746 0.663651 94.4746ZM3.55656 89.917C3.15703 90.827 2.82409 91.5891 2.46895 92.3955C3.24582 92.3955 3.9117 92.3955 4.65898 92.3955C4.28904 91.5669 3.96349 90.8196 3.55656 89.917Z"
                fill="#5BC0ED"
              />
              <path
                d="M83.7147 89.8134C83.5297 89.9835 83.3743 90.1241 83.2337 90.2573C81.791 89.436 80.7478 89.4952 79.9857 90.4275C79.3716 91.1747 79.3864 92.3289 80.0153 93.091C80.7626 93.9789 81.7762 94.0233 83.2264 93.2168C83.3743 93.35 83.5297 93.4906 83.6851 93.6237C83.1746 94.4228 81.9242 94.7631 80.7182 94.4524C79.564 94.149 78.7501 93.1724 78.6761 91.9886C78.5873 90.6864 79.268 89.5692 80.4074 89.1253C81.5986 88.6666 82.9748 88.9329 83.7147 89.8134Z"
                fill="#5BC0ED"
              />
              <path
                d="M43.8132 91.5373C43.8132 91.8258 43.8132 92.0182 43.8132 92.2846C42.9179 92.2846 42.0597 92.2846 41.1052 92.2846C41.1052 93.054 41.1052 93.7569 41.1052 94.4746C40.7871 94.4746 40.5577 94.4746 40.284 94.4746C40.284 92.6545 40.284 90.8048 40.284 88.9625C41.564 88.9625 42.8218 88.9625 44.1239 88.9625C44.1239 89.1919 44.1239 89.4286 44.1239 89.7024C43.1251 89.7024 42.1559 89.7024 41.1422 89.7024C41.1422 90.3387 41.1422 90.9084 41.1422 91.5373C42.0375 91.5373 42.8957 91.5373 43.8132 91.5373Z"
                fill="#5BC0ED"
              />
              <path
                d="M66.4534 89.6876C65.8689 89.6876 65.2918 89.6876 64.6407 89.6876C64.6407 91.3153 64.6407 92.8913 64.6407 94.4746C64.3225 94.4746 64.0932 94.4746 63.7972 94.4746C63.7972 92.8987 63.7972 91.3375 63.7972 89.7172C63.1535 89.7172 62.5838 89.7172 61.9697 89.7172C61.9697 89.4508 61.9697 89.2141 61.9697 88.9625C63.4569 88.9625 64.9366 88.9625 66.4534 88.9625C66.4534 89.1845 66.4534 89.4212 66.4534 89.6876Z"
                fill="#5BC0ED"
              />
              <path
                d="M20.4405 88.9625C20.7069 88.9625 20.9288 88.9625 21.2026 88.9625C21.2026 90.7974 21.2026 92.6397 21.2026 94.4746C20.951 94.4746 20.7217 94.4746 20.4405 94.4746C20.4405 92.6767 20.4405 90.8344 20.4405 88.9625Z"
                fill="#5BC0ED"
              />
              <path
                d="M46.8319 88.9625C47.0908 88.9625 47.3202 88.9625 47.6014 88.9625C47.6014 90.79 47.6014 92.6397 47.6014 94.4746C47.3424 94.4746 47.1204 94.4746 46.8319 94.4746C46.8319 92.6693 46.8319 90.8319 46.8319 88.9625Z"
                fill="#5BC0ED"
              />
              <path
                d="M58.7661 88.9625C59.0176 88.9625 59.2248 88.9625 59.4985 88.9625C59.4985 90.7752 59.4985 92.6323 59.4985 94.4746C59.2618 94.4746 59.0398 94.4746 58.7661 94.4746C58.7661 92.6693 58.7661 90.827 58.7661 88.9625Z"
                fill="#5BC0ED"
              />
              <path
                d="M127.678 94.4746C127.316 94.4746 127.271 94.4746 126.946 94.4746V92.3437L124.741 88.9625C125.022 88.9625 125.17 88.9625 125.473 88.9625C126.021 89.8504 126.701 90.8196 127.301 91.7888C127.893 90.827 128.507 89.8948 129.084 88.9625C129.328 88.9625 129.513 88.9625 129.794 88.9625L127.678 92.3437V94.4746Z"
                fill="#5BC0ED"
              />
              <path
                d="M70.4931 94.4746C70.1306 94.4746 70.0862 94.4746 69.7532 94.4746V92.3437L67.5558 88.9625C67.8369 88.9625 67.9775 88.9625 68.2809 88.9625C68.8358 89.8504 69.5091 90.8196 70.1158 91.7888C70.7077 90.827 71.3218 89.8948 71.8915 88.9625C72.143 88.9625 72.328 88.9625 72.6091 88.9625L70.4931 92.3437V94.4746Z"
                fill="#5BC0ED"
              />
            </svg>

            <p className="text-sm text-[#CAD5DE] font-ttCommonProRegular leading-[1.4rem]">
              Camps & Crew simplifies crew and lodge management, partnering with
              housing providers, energy, and mining companies to streamline
              operations and reduce costs.
            </p>
          </div>
          <div className='grid xl:grid-cols-4 md:grid-cols-3 grid-cols-1  gap-4'>
            <div className="col-span-1 md:col-span-2 flex flex-col max-w-[330px] gap-4">
              <p className="font-gilroyBold font-normal leading-[1.23rem]">
                Solutions
              </p>
              <div className="flex flex-col gap-3">
                <Link
                  to="#"
                  className="hover:underline text-[#CAD5DE] font-ttCommonProNormal font-normal leading-[1.6rem] text-sm md:text-base"
                >
                  Software to Manage Remote Workforce Camps
                </Link>
                <Link
                  to="#"
                  className="hover:underline text-[#CAD5DE] font-ttCommonProNormal font-normal leading-[1.6rem] text-sm md:text-base"
                >
                  Online Booking Tool for FIFO Travel Logistics
                </Link>
              </div>
            </div>
            <div className="flex flex-col w-[100px] gap-4">
              <p className="font-gilroyBold font-normal">Resources</p>
              {/* <a href="#" className='hover:underline text-[#CAD5DE]'>Blog</a> */}
              <Link
                to="#"
                className="w-full hover:underline text-[#CAD5DE] font-ttCommonProNormal font-normal leading-[1.6rem] text-sm md:text-base"
              >
                Case Studies
              </Link>
            </div>
            <div className="flex flex-col w-[206px] gap-4">
              <p className="font-gilroyBold font-normal">Company</p>
              <Link
                to="#"
                className="text-[#CAD5DE] hover:underline font-ttCommonProNormal text-sm md:text-base font-normal leading-[1.6rem]"
              >
                About us
              </Link>
              <div className="flex gap-2 text-[#CAD5DE] text-sm md:text-base">
                <BsTelephone className="mt-2" />
                <div className="flex flex-col">
                  <Link
                    to="#"
                    className="hover:underline text-[#CAD5DE] font-ttCommonProNormal font-normal leading-[1.6rem]"
                  >
                    USA : +1 6197983914
                  </Link>
                  <Link
                    to="#"
                    className="hover:underline text-[#CAD5DE] font-ttCommonProNormal font-normal leading-[1.6rem]"
                  >
                    CA : +1 2898072990
                  </Link>
                  <Link
                    to="#"
                    className="hover:underline text-[#CAD5DE] font-ttCommonProNormal font-normal leading-[1.6rem]"
                  >
                    Global: +1 8002138556
                  </Link>
                </div>
              </div>
              <div className="flex items-center text-[#CAD5DE] gap-2 text-sm md:text-base">
                <FaRegEnvelope />
                <Link to="#" className="hover:underline text-[#CAD5DE]">
                  info@campsandcrew.com
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center items-center gap-2 h-[54px] text-sm border-t-[1px] border-[#FFFFFF1A] text-[#CAD5DE] font-ttCommonProNormal font-medium leading-[1.4rem]">
          <span className="border-[#CAD5DE] border-r-[1px] px-2">
            Copyright © 2024
          </span>
          <Link to="#" className="px-2 hover:underline">
            Privacy Policy
          </Link>
        </div>
      </div>
    </footer>
  );
}

export default Footer
