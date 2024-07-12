import React, { useEffect, useState } from 'react';
import logo1 from '/logo1.png';
import { IoIosArrowDown } from 'react-icons/io';
import { Link } from 'react-router-dom';
import Modal from '../HomePage/Modal';
import { HiBars3} from 'react-icons/hi2';

const Header = () => {
  const [activeLink, setActiveLink] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [showDropdown,setShowDropdown] = useState(false);

  const handleClose=()=>{
    setIsOpen(false);
  }

  useEffect(()=>{
    let curr = window.location.pathname;
    setActiveLink(curr);
  },[])

  return (
    <>
      <header className="bg-white w-full sticky top-0 z-10 min-h-[106px] lg:h-[106px] border-[#D0D5DD] border-b-[1px] flex flex-col items-start justify-center">
        <div className="flex flex-row items-center justify-between max-w-[540px] md:max-w-[720px] lg:max-w-[960px] h-[74px] transition-all duration-150 delay-150 px-3   w-full xl:px-3 xl:py-0 xl:max-w-[1216px] mx-auto">
          <Link
            to="/"
            className="w-[70px] h-[44px] lg:w-[115px] lg:h-[74px]"
          >
            {/* <img src="/camps_crew_logo2.png" alt="" /> */}
            <svg width="100%" height="100%" viewBox="0 0 103 74" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M27.8245 24.6667C27.8245 22.955 27.8245 21.2664 27.8245 19.5086C28.5967 19.5086 29.3632 19.5086 30.1759 19.5086C30.4583 18.3387 30.7234 17.2148 31 16.0967C32.5215 9.98195 36.1523 5.56731 41.7542 2.73756C41.8176 2.70298 41.8868 2.69145 42.1231 2.61653C43.4313 7.82074 44.7338 12.9904 46.0363 18.1658C46.0478 18.1658 46.0594 18.1658 46.0709 18.1658C45.921 16.6558 45.7712 15.1458 45.6213 13.6358C45.2928 10.3508 44.9586 7.06575 44.6589 3.77494C44.5206 2.23616 45.2122 1.25641 46.774 0.824163C47.4598 0.633976 48.186 0.530238 48.9006 0.507185C50.2377 0.472605 51.5805 0.512948 52.9176 0.547527C54.6984 0.593633 56.0874 2.28226 55.8914 3.90173C55.3727 8.16077 55.0269 12.4371 54.612 16.7077C54.5889 16.9324 54.5832 17.1572 54.6005 17.3877C55.8165 12.4717 57.0498 7.55563 58.6866 2.69722C65.6947 6.18974 69.1411 12.0164 70.2419 19.4682C71.1064 19.4682 71.8729 19.4682 72.6798 19.4682C72.6798 21.2318 72.6798 22.932 72.6798 24.6667C57.7414 24.6667 42.8146 24.6667 27.8245 24.6667Z" fill="#5BC0ED"/>
<path d="M57.8567 41.5069C57.8567 42.7229 57.8567 44.1407 57.8567 45.6506C54.7734 44.3943 52.5661 42.112 50.3876 39.824C49.2003 40.9478 48.0765 42.0717 46.8835 43.1206C45.702 44.1695 44.388 45.034 42.8435 45.6391C42.8435 44.1522 42.8435 42.7229 42.8435 41.4896C44.5494 39.922 46.1516 38.4466 47.8748 36.8559C46.1516 35.2653 44.5436 33.7841 42.8319 32.2108C42.8319 30.9774 42.8319 29.5597 42.8319 28.0612C45.9095 29.3291 48.1168 31.5941 50.2953 33.8879C51.471 32.7756 52.5891 31.6517 53.7821 30.6028C54.9751 29.5481 56.2949 28.6664 57.8452 28.0728C57.8452 29.5539 57.8452 30.9717 57.8452 32.2108C56.145 33.7784 54.5371 35.2653 52.8081 36.8559C54.5371 38.4524 56.1393 39.9277 57.8567 41.5069Z" fill="#09425D"/>
<path d="M59.7932 46.1866C59.7932 44.8668 59.7932 43.5759 59.7932 42.2503C62.7497 43.0053 65.1587 42.2792 66.7148 39.6338C67.9308 37.5706 67.7464 35.4497 66.3632 33.496C65.1818 31.8362 62.8995 30.5798 59.8104 31.4615C59.8104 30.1475 59.8104 28.8508 59.8104 27.5425C62.2886 26.8048 66.3114 27.5022 69.0028 30.5337C71.7922 33.6746 72.1438 38.608 69.8212 42.1005C67.3257 45.8524 62.9341 47.005 59.7932 46.1866Z" fill="#09425D"/>
<path d="M40.907 27.531C40.907 28.822 40.907 30.1129 40.907 31.4731C38.4404 30.7757 36.2907 31.2425 34.579 33.1675C33.4897 34.3893 33.1036 35.8704 33.2304 37.4899C33.4379 40.0833 36.3368 43.6105 40.8897 42.2676C40.8897 43.5816 40.8897 44.8841 40.8897 46.1809C37.8122 47.005 33.5589 45.8696 31.1153 42.4578C28.5967 38.9422 28.7062 34.2567 31.4323 30.8449C33.9508 27.6809 37.9562 26.7645 40.907 27.531Z" fill="#09425D"/>
<path d="M24.2167 66.1563C23.5366 66.1563 22.9199 66.1563 22.2514 66.1563C21.8019 63.4072 21.3581 60.6754 20.9086 57.9379C20.8817 57.9379 20.8548 57.9379 20.8279 57.9379C20.8279 60.6696 20.8279 63.4014 20.8279 66.1563C20.1997 66.1563 19.6407 66.1563 19.0355 66.1563C19.0355 61.8857 19.0355 57.6324 19.0355 53.3561C19.9692 53.3561 20.8798 53.3561 21.8537 53.3561C22.3186 56.207 22.7835 59.0579 23.2485 61.9087C23.2869 61.9087 23.3253 61.9068 23.3637 61.903C23.7844 59.0675 24.2109 56.232 24.6432 53.3619C25.5883 53.3619 26.5104 53.3619 27.4844 53.3619C27.4844 57.6151 27.4844 61.8684 27.4844 66.1505C26.8332 66.1505 26.2108 66.1505 25.5307 66.1505C25.5307 63.4014 25.5307 60.6812 25.5307 57.9609C25.5 57.9609 25.4692 57.959 25.4385 57.9552C25.0293 60.6754 24.6259 63.4014 24.2167 66.1563Z" fill="#09425D"/>
<path d="M94.2919 66.1447C93.8193 61.8799 93.3467 57.6382 92.8684 53.3619C93.5542 53.3619 94.1939 53.3619 94.897 53.3619C95.2313 56.5489 95.5656 59.7245 95.8998 62.9C95.9229 62.9039 95.944 62.9058 95.9632 62.9058C96.2629 59.736 96.5626 56.572 96.8681 53.3676C97.5366 53.3676 98.1763 53.3676 98.8737 53.3676C99.1907 56.6008 99.5076 59.834 99.8419 63.2573C100.188 59.8455 100.516 56.6239 100.85 53.3676C101.45 53.3676 102.032 53.3676 102.672 53.3676C102.199 57.6324 101.721 61.8742 101.248 66.1447C100.332 66.1447 99.45 66.1447 98.5164 66.1447C98.2935 64.0623 98.0688 61.9798 97.8421 59.8974C97.8267 59.8974 97.8113 59.8974 97.796 59.8974C97.5712 61.9721 97.3464 64.0411 97.1159 66.1447C96.1822 66.1447 95.2717 66.1447 94.2919 66.1447Z" fill="#09425D"/>
<path fillRule="evenodd" clipRule="evenodd" d="M75.6594 66.1505C75.6594 61.8799 75.6594 57.6324 75.6594 53.2754C77.0713 53.3388 78.4661 53.333 79.8435 53.4887C80.7425 53.5866 81.4284 54.2091 81.5321 55.1081C81.6589 56.2204 81.6647 57.3615 81.5321 58.4681C81.4629 58.9983 80.95 59.4767 80.6215 60.0069C81.5667 60.5313 81.7165 61.5572 81.7108 62.6522C81.705 63.8048 81.7108 64.9517 81.7108 66.1447C81.2036 66.1447 80.5351 66.1447 79.7916 66.1447C79.7397 65.7759 79.659 65.407 79.6475 65.0382C79.6302 64.2198 79.6475 63.4014 79.6418 62.5773C79.6245 61.246 79.1346 60.8425 77.7053 61.0327C77.7053 62.7214 77.7053 64.4215 77.7053 66.1505C77.0022 66.1505 76.3625 66.1505 75.6594 66.1505ZM77.7284 59.0329C78.9732 59.2634 79.5553 58.9407 79.6014 57.9609C79.6302 57.3154 79.6014 56.6642 79.5611 56.0187C79.5322 55.5692 79.2441 55.2925 78.7946 55.2522C78.4488 55.2176 78.0972 55.2464 77.7284 55.2464C77.7284 56.5432 77.7284 57.788 77.7284 59.0329Z" fill="#09425D"/>
<path fillRule="evenodd" clipRule="evenodd" d="M53.8686 59.298C52.6698 58.3759 52.2433 55.7997 53.298 54.4626C53.6726 53.9843 54.3296 53.5578 54.9175 53.4598C55.9318 53.2985 56.9922 53.4195 58.0642 53.4195C58.0642 53.9728 58.0642 54.5721 58.0642 55.2291C57.3553 55.2291 56.6695 55.2291 55.9779 55.2291C55.148 55.2349 54.831 55.5634 54.831 56.3933C54.831 56.5662 54.831 56.7333 54.831 56.9005C54.831 58.3643 55.3612 58.7562 56.877 58.4796C56.877 58.0589 56.877 57.6324 56.877 57.1656C57.5801 57.1656 58.1795 57.1656 58.8826 57.1656C58.8826 57.5978 58.8826 58.1453 58.8826 58.5949C59.0728 58.6352 59.2168 58.5545 59.3955 58.5949C59.3955 59.1943 59.3955 59.7936 59.3955 60.4045C59.2457 60.4391 59.1093 60.4679 58.9863 60.491C58.9863 62.3698 58.9863 64.2486 58.9863 66.1505C58.3812 66.1505 57.5743 66.1505 56.877 66.1505C56.8827 66.064 56.9058 65.7471 56.877 65.5857C56.3525 65.8277 55.8223 66.2081 55.2748 66.2888C54.0184 66.479 53.0905 65.8854 52.9061 64.6175C52.7274 63.4187 52.7562 62.1681 52.9061 60.9636C52.9752 60.3872 53.5228 59.8628 53.8686 59.298ZM56.877 66.1505C56.8712 66.1908 56.8712 66.1851 56.877 66.1505ZM56.877 60.5198C55.7762 60.2547 55.0039 60.5486 54.8829 61.4304C54.7907 62.1508 54.8137 62.8943 54.8714 63.6204C54.9059 64.1449 55.2748 64.4446 55.8223 64.4388C56.364 64.4388 56.8481 64.1622 56.877 63.6262C56.9231 62.5946 56.877 61.5572 56.877 60.5198Z" fill="#09425D"/>
<path fillRule="evenodd" clipRule="evenodd" d="M16.3326 66.1562C15.6122 66.1562 14.9551 66.1562 14.252 66.1562C14.131 65.4013 14.0042 64.6578 13.8774 63.8971C13.0821 63.8971 12.3213 63.8971 11.503 63.8971C11.3819 64.6405 11.2667 65.3897 11.1399 66.1562C10.5117 66.1562 9.91231 66.1562 9.23801 66.1562C9.91808 61.8799 10.5981 57.6439 11.2782 53.3676C12.2695 53.3676 13.2492 53.3676 14.2866 53.3676C14.9667 57.6151 15.6467 61.8626 16.3326 66.1562ZM13.6008 62.0298C13.3011 60.0069 13.0129 58.0243 12.719 56.0475C12.696 56.0475 12.6729 56.0494 12.6499 56.0533C12.3617 58.0358 12.0678 60.0126 11.7681 62.0298C12.4078 62.0298 12.9611 62.0298 13.6008 62.0298Z" fill="#09425D"/>
<path fillRule="evenodd" clipRule="evenodd" d="M30.7522 53.3964C31.997 53.3964 33.2131 53.3273 34.4176 53.4137C35.6164 53.5059 36.4636 54.2494 36.5961 55.4366C36.7402 56.6988 36.7632 58.007 36.6019 59.2634C36.4232 60.6351 35.4204 61.3267 33.9854 61.367C33.6108 61.3785 33.2304 61.367 32.8039 61.367C32.8039 62.9865 32.8039 64.5425 32.8039 66.1447C32.1008 66.1447 31.4495 66.1447 30.7522 66.1447C30.7522 61.8953 30.7522 57.6459 30.7522 53.3964ZM32.7981 59.4536C34.3196 59.6784 34.6539 59.396 34.6539 57.9494C34.6539 57.5172 34.6366 57.0791 34.6597 56.6411C34.7115 55.3963 34.2908 55.039 32.7981 55.3156C32.7981 56.5432 32.7981 57.7823 32.7981 59.0214C32.7981 59.1597 32.7981 59.298 32.7981 59.4536Z" fill="#09425D"/>
<path d="M70.6684 61.39C71.3427 61.39 71.9594 61.39 72.6394 61.39C72.6048 62.6983 72.9045 64.0527 72.0919 65.2111C71.2505 66.4156 69.9826 66.4617 68.6974 66.2312C67.6369 66.0467 66.8877 65.2111 66.686 64.0872C66.6284 63.7414 66.5938 63.3841 66.5938 63.0326C66.5823 60.8598 66.5534 58.6813 66.6111 56.5086C66.6284 55.8285 66.7667 55.0851 67.0721 54.4857C67.6485 53.3561 69.0259 52.9469 70.5301 53.2927C71.7461 53.5636 72.5011 54.4626 72.6164 55.8458C72.6625 56.4337 72.6221 57.0273 72.6221 57.6612C71.9882 57.6612 71.3657 57.6612 70.6626 57.6612C70.6626 57.1656 70.6742 56.6757 70.6626 56.1858C70.6396 55.4481 70.3053 55.0966 69.6541 55.1024C69.0259 55.1139 68.7031 55.4539 68.6974 56.1916C68.6858 58.5622 68.6858 60.9328 68.6974 63.3034C68.6974 64.0584 69.0374 64.4215 69.6713 64.4273C70.3053 64.433 70.6511 64.0354 70.6626 63.2746C70.6742 62.658 70.6684 62.0355 70.6684 61.39Z" fill="#09425D"/>
<path d="M45.1833 56.8429C44.4802 56.8429 43.852 56.8429 43.2066 56.8429C43.1835 56.5144 43.1835 56.2031 43.1374 55.8977C43.0567 55.3559 42.7282 55.0908 42.1749 55.1024C41.6332 55.1196 41.3566 55.4136 41.2759 55.9323C41.1145 56.9235 41.5467 57.6843 42.2095 58.3528C42.8781 59.0271 43.5985 59.6496 44.2036 60.3642C45.2179 61.5572 45.4081 62.9634 44.9816 64.433C44.5782 65.8335 43.3852 66.479 41.6562 66.3119C40.2327 66.1793 39.276 65.2168 39.1435 63.7415C39.0974 63.2689 39.1319 62.7905 39.1319 62.2949C39.7832 62.2949 40.4114 62.2949 41.0972 62.2949C41.0972 62.681 41.0857 63.0268 41.0972 63.3784C41.126 64.0354 41.443 64.3869 42.0251 64.4215C42.6187 64.4561 43.0048 64.1218 43.0798 63.4591C43.1777 62.6061 42.8147 61.9145 42.2499 61.3209C41.5006 60.5371 40.6765 59.8225 39.9964 58.981C38.8034 57.5114 38.8611 55.0102 40.0598 53.9094C41.0165 53.0391 42.1807 53.0506 43.3333 53.3792C44.365 53.6673 44.8779 54.4684 45.0623 55.4827C45.143 55.9207 45.143 56.3703 45.1833 56.8429Z" fill="#09425D"/>
<path d="M4.81185 57.667C4.81185 57.1253 4.82914 56.6181 4.80609 56.1167C4.77151 55.4539 4.443 55.1197 3.84939 55.1024C3.23272 55.0908 2.83506 55.4136 2.8293 56.0879C2.80624 58.543 2.80817 60.9982 2.83506 63.4533C2.84082 64.0988 3.24425 64.433 3.8321 64.4273C4.41419 64.4158 4.77727 64.0757 4.80609 63.4245C4.8349 62.7675 4.81185 62.1047 4.81185 61.4016C5.48615 61.4016 6.10858 61.4016 6.86933 61.4016C6.77135 62.462 6.80017 63.5225 6.55811 64.5137C6.24113 65.8393 4.99628 66.4502 3.31341 66.3176C1.99939 66.2081 1.03117 65.3782 0.846743 64.1045C0.754531 63.4648 0.743004 62.8136 0.737241 62.1681C0.731478 60.1625 0.696898 58.1569 0.75453 56.1513C0.829452 53.6443 3.26154 52.3072 5.41699 53.6097C5.92992 53.9209 6.39674 54.5491 6.5754 55.1312C6.82322 55.9092 6.77135 56.7852 6.85204 57.667C6.12587 57.667 5.51497 57.667 4.81185 57.667Z" fill="#09425D"/>
<path d="M89.5833 58.7217C89.5833 59.3902 89.5833 59.9665 89.5833 60.6005C88.6843 60.6005 87.8025 60.6005 86.8861 60.6005C86.8861 61.8511 86.8861 63.0383 86.8861 64.2947C88.0273 64.2947 89.1453 64.2947 90.3037 64.2947C90.3037 64.9344 90.3037 65.5165 90.3037 66.139C88.4826 66.139 86.6787 66.139 84.8287 66.139C84.8287 61.8857 84.8287 57.6382 84.8287 53.3619C86.6614 53.3619 88.471 53.3619 90.3095 53.3619C90.3095 53.9843 90.3095 54.5837 90.3095 55.2291C89.1511 55.2291 88.033 55.2291 86.8861 55.2291C86.8861 56.4106 86.8861 57.5344 86.8861 58.7217C87.7737 58.7217 88.667 58.7217 89.5833 58.7217Z" fill="#09425D"/>
<path d="M73.7805 69.2223C73.9592 69.2223 74.1091 69.2223 74.2992 69.2223C74.8698 70.1732 75.4461 71.2337 76.0628 72.2538C76.6564 71.2452 77.2212 70.1848 77.786 69.2223C77.9589 69.2223 78.1087 69.2223 78.2989 69.2223C78.2989 70.6343 78.2989 72.15 78.2989 73.5851C78.1203 73.5851 77.9474 73.5851 77.7168 73.5851C77.7168 72.6802 77.7168 71.7696 77.7168 70.8706C77.6707 70.8591 76.5872 72.3114 76.0628 73.1759C75.8957 73.0376 74.9101 71.6947 74.4145 70.8706C74.4145 71.9598 74.4145 72.663 74.4145 73.5851C74.1782 73.5851 74.0053 73.5851 73.7805 73.5851C73.7805 72.1731 73.7805 70.6573 73.7805 69.2223Z" fill="#5BC0ED"/>
<path d="M22.9257 73.5908C22.724 73.5908 22.5742 73.5908 22.3897 73.5908C21.6002 72.6226 20.8048 71.6428 19.9058 70.5363C19.9058 71.6371 19.9058 72.6111 19.9058 73.5908C19.658 73.5908 19.4735 73.5908 19.2545 73.5908C19.2545 72.1788 19.2545 70.7322 19.2545 69.2972C19.4447 69.2972 19.6061 69.2972 19.7905 69.2972C20.5801 70.2712 21.3754 71.274 22.2687 72.3805C22.2687 71.274 22.2687 70.2885 22.2687 69.2972C22.5165 69.2972 22.7009 69.2972 22.9257 69.2972C22.9257 70.7092 22.9257 72.1442 22.9257 73.5908Z" fill="#5BC0ED"/>
<path d="M91.8713 69.2223C92.0442 69.2223 92.1941 69.2223 92.39 69.2223C93.1796 70.1963 93.9865 71.2855 94.8798 72.3863C94.8798 71.2971 94.8798 70.2193 94.8798 69.2223C95.1218 69.2223 95.3005 69.2223 95.5195 69.2223C95.5195 70.6401 95.5195 72.1558 95.5195 73.5908C95.3466 73.5908 95.1967 73.5908 94.995 73.5908C94.217 72.6341 93.4217 71.6544 92.5168 70.5421C92.5168 71.6544 92.5168 72.6111 92.5168 73.5908C92.269 73.5908 92.0961 73.5908 91.8713 73.5908C91.8713 72.1904 91.8713 70.6804 91.8713 69.2223Z" fill="#5BC0ED"/>
<path d="M29.0981 73.5908C28.9022 73.5908 28.7523 73.5908 28.5679 73.5908C27.7784 72.6226 26.983 71.6429 26.084 70.5363C26.084 71.6429 26.084 72.6111 26.084 73.5908C25.8362 73.5908 25.6517 73.5908 25.4327 73.5908C25.4327 72.1731 25.4327 70.7265 25.4327 69.2972C25.6171 69.2972 25.767 69.2972 25.9572 69.2972C26.7467 70.2654 27.5478 71.274 28.4469 72.3805C28.4469 71.2798 28.4469 70.3 28.4469 69.2972C28.689 69.2857 28.8734 69.3087 29.0981 69.2972C29.0981 70.7438 29.0981 72.1443 29.0981 73.5908Z" fill="#5BC0ED"/>
<path d="M39.8293 69.2972C40.008 69.2972 40.1578 69.2972 40.3422 69.2972C41.1433 70.2885 41.9559 71.3028 42.8492 72.4036C42.8492 71.3086 42.8492 70.3058 42.8492 69.2972C43.074 69.2972 43.2584 69.2972 43.4774 69.2972C43.4774 70.715 43.4774 72.1673 43.4774 73.5908C43.3045 73.5908 43.1547 73.5908 42.9472 73.5908C42.1807 72.6572 41.3911 71.6774 40.4921 70.5709C40.4921 71.6717 40.4921 72.6284 40.4921 73.5908C40.2327 73.5908 40.0541 73.5908 39.8293 73.5908C39.8293 72.1846 39.8293 70.7553 39.8293 69.2972Z" fill="#5BC0ED"/>
<path d="M10.1198 69.2972C10.3907 69.2972 10.552 69.2972 10.7538 69.2972C10.7538 70.7207 10.7538 72.1558 10.7538 73.5908C10.5924 73.5908 10.431 73.5908 10.2293 73.5908C9.45126 72.6341 8.65017 71.6371 7.74534 70.5248C7.74534 71.6371 7.74534 72.6111 7.74534 73.5908C7.50329 73.5908 7.33039 73.5908 7.11715 73.5908C7.11715 72.1788 7.11715 70.7322 7.11715 69.2972C7.28428 69.2972 7.44565 69.2972 7.6416 69.2972C8.4254 70.2597 9.22073 71.274 10.1198 72.3863C10.1198 71.274 10.1198 70.3 10.1198 69.2972Z" fill="#5BC0ED"/>
<path fillRule="evenodd" clipRule="evenodd" d="M69.3717 69.2569C70.703 69.2684 71.6539 70.1963 71.6481 71.4699C71.6424 72.7609 70.6569 73.6773 69.3083 73.6542C67.9654 73.6312 67.0433 72.7206 67.0606 71.4238C67.0837 70.1444 68.0346 69.2511 69.3717 69.2569ZM67.7176 71.4584C67.7176 72.369 68.438 73.0837 69.3601 73.0837C70.2765 73.0779 70.9969 72.3517 70.9854 71.4411C70.9738 70.5594 70.2361 69.8274 69.3601 69.8217C68.4495 69.8217 67.7234 70.5478 67.7176 71.4584Z" fill="#5BC0ED"/>
<path fillRule="evenodd" clipRule="evenodd" d="M81.4284 72.3806C81.4284 72.8013 81.4284 73.1817 81.4284 73.5851C81.2266 73.5851 81.0653 73.5851 80.852 73.5851C80.852 72.1846 80.852 70.7784 80.852 69.2223C80.852 69.2223 82.6329 69.1359 83.4801 69.3145C84.0679 69.4413 84.3676 70.3461 84.2985 70.9686C84.2235 71.6429 83.7971 72.1385 83.0882 72.2538C82.5695 72.3402 82.0277 72.3345 81.4284 72.3806ZM81.4745 69.8908C81.4745 70.5363 81.4745 71.1069 81.4745 71.7466C81.4745 71.7466 82.9671 72.0117 83.4628 71.3144C83.6242 71.0838 83.6126 70.5363 83.4513 70.3116C82.9556 69.6373 81.4745 69.8908 81.4745 69.8908Z" fill="#5BC0ED"/>
<path fillRule="evenodd" clipRule="evenodd" d="M90.0329 73.5908C89.7505 73.5908 89.5603 73.5908 89.3528 73.5908C89.1914 73.2508 89.0358 72.9223 88.8629 72.565C88.1425 72.565 87.4164 72.565 86.6556 72.565C86.4942 72.905 86.3329 73.2508 86.1715 73.5908C85.964 73.5908 85.7681 73.5908 85.503 73.5908C86.16 72.1385 86.7939 70.6285 87.4337 69.2223C87.6584 69.2223 87.8544 69.2223 88.0964 69.2223C88.7304 70.617 89.3643 72.1154 90.0329 73.5908ZM88.6266 71.9887C88.3327 71.3316 88.0734 70.7553 87.7564 70.0464C87.4394 70.7668 87.1858 71.3489 86.9034 71.9887C87.5028 71.9887 88.0042 71.9887 88.6266 71.9887Z" fill="#5BC0ED"/>
<path fillRule="evenodd" clipRule="evenodd" d="M0.748772 73.5908C1.41154 72.1327 2.0455 70.7034 2.67946 69.2972C2.90999 69.2972 3.08865 69.2972 3.33647 69.2972C3.97042 70.6919 4.61014 72.127 5.27868 73.5908C5.00204 73.5908 4.81186 73.5908 4.59285 73.5908C4.43148 73.2508 4.27011 72.905 4.10298 72.5534C3.36528 72.5534 2.65064 72.5534 1.90718 72.5534C1.74581 72.905 1.57868 73.2565 1.41731 73.5908C1.20983 73.5908 1.01964 73.5908 0.748772 73.5908ZM3.0022 70.0407C2.69098 70.7495 2.43164 71.3432 2.155 71.9713C2.76014 71.9713 3.27883 71.9713 3.86092 71.9713C3.57276 71.3259 3.31918 70.7438 3.0022 70.0407Z" fill="#5BC0ED"/>
<path d="M65.4411 69.96C65.2971 70.0925 65.176 70.202 65.0665 70.3058C63.9427 69.6661 63.1301 69.7122 62.5365 70.4383C62.0581 71.0204 62.0696 71.9195 62.5595 72.5131C63.1416 73.2047 63.9312 73.2393 65.0608 72.6111C65.176 72.7148 65.297 72.8243 65.4181 72.9281C65.0204 73.5505 64.0464 73.8156 63.107 73.5735C62.208 73.3372 61.574 72.5765 61.5164 71.6544C61.4472 70.6401 61.9774 69.7698 62.865 69.424C63.7928 69.0667 64.8648 69.2742 65.4411 69.96Z" fill="#5BC0ED"/>
<path d="M34.36 71.3028C34.36 71.5276 34.36 71.6774 34.36 71.8849C33.6626 71.8849 32.9941 71.8849 32.2506 71.8849C32.2506 72.4843 32.2506 73.0318 32.2506 73.5908C32.0028 73.5908 31.8242 73.5908 31.6109 73.5908C31.6109 72.1731 31.6109 70.7322 31.6109 69.2972C32.608 69.2972 33.5877 69.2972 34.602 69.2972C34.602 69.4759 34.602 69.6603 34.602 69.8735C33.824 69.8735 33.069 69.8735 32.2795 69.8735C32.2795 70.3692 32.2795 70.8129 32.2795 71.3028C32.9768 71.3028 33.6453 71.3028 34.36 71.3028Z" fill="#5BC0ED"/>
<path d="M51.9955 69.862C51.5402 69.862 51.0907 69.862 50.5835 69.862C50.5835 71.1299 50.5835 72.3575 50.5835 73.5908C50.3357 73.5908 50.157 73.5908 49.9265 73.5908C49.9265 72.3632 49.9265 71.1472 49.9265 69.8851C49.4251 69.8851 48.9813 69.8851 48.503 69.8851C48.503 69.6776 48.503 69.4932 48.503 69.2972C49.6614 69.2972 50.814 69.2972 51.9955 69.2972C51.9955 69.4701 51.9955 69.6545 51.9955 69.862Z" fill="#5BC0ED"/>
<path d="M16.1539 69.2972C16.3614 69.2972 16.5343 69.2972 16.7475 69.2972C16.7475 70.7265 16.7475 72.1615 16.7475 73.5908C16.5516 73.5908 16.3729 73.5908 16.1539 73.5908C16.1539 72.1903 16.1539 70.7553 16.1539 69.2972Z" fill="#5BC0ED"/>
<path d="M36.7114 69.2972C36.9131 69.2972 37.0918 69.2972 37.3108 69.2972C37.3108 70.7207 37.3108 72.1615 37.3108 73.5908C37.109 73.5908 36.9361 73.5908 36.7114 73.5908C36.7114 72.1846 36.7114 70.7534 36.7114 69.2972Z" fill="#5BC0ED"/>
<path d="M46.0075 69.2972C46.2034 69.2972 46.3648 69.2972 46.578 69.2972C46.578 70.7092 46.578 72.1558 46.578 73.5908C46.3936 73.5908 46.2207 73.5908 46.0075 73.5908C46.0075 72.1846 46.0075 70.7495 46.0075 69.2972Z" fill="#5BC0ED"/>
<path d="M99.6863 73.5908C99.4039 73.5908 99.3693 73.5908 99.1157 73.5908V71.931L97.3983 69.2972C97.6173 69.2972 97.7326 69.2972 97.9689 69.2972C98.3953 69.9888 98.9255 70.7438 99.3924 71.4988C99.8534 70.7495 100.332 70.0234 100.781 69.2972C100.972 69.2972 101.116 69.2972 101.335 69.2972L99.6863 71.931V73.5908Z" fill="#5BC0ED"/>
<path d="M55.1422 73.5908C54.8598 73.5908 54.8252 73.5908 54.5659 73.5908V71.931L52.8542 69.2972C53.0732 69.2972 53.1827 69.2972 53.419 69.2972C53.8513 69.9888 54.3757 70.7438 54.8483 71.4988C55.3094 70.7495 55.7877 70.0234 56.2315 69.2972C56.4274 69.2972 56.5715 69.2972 56.7905 69.2972L55.1422 71.931V73.5908Z" fill="#5BC0ED"/>
</svg>

          </Link>
          <div
            className={`hidden lg:flex lg:flex-row gap-12 justify-center items-center text-[#09425D] leading-[1.2rem]`}
          >
            <nav className="flex flex-row gap-10 font-gilroyBold font-normal leading-5">
              <Link
                to="/"
                className={`${
                  activeLink === "/"
                    ? "text-custom-blue lg:border-b-[1px] border-custom-blue"
                    : ""
                } hover:text-custom-blue cursor-pointer`}
                onClick={() => setActiveLink("/")}
              >
                Home
              </Link>

              <span
                className="flex items-center gap-1 hover:text-custom-blue cursor-pointer"
                // onClick={()=>setIsOpen(true)}
              >
                <p>Solutions</p>
                <IoIosArrowDown />
              </span>
              <Link
                to="/company"
                className={`${
                  activeLink === "/company"
                    ? "text-custom-blue lg:border-b-[1px] border-custom-blue"
                    : ""
                } hover:text-custom-blue cursor-pointer`}
                onClick={() => setActiveLink("/company")}
              >
                Company
              </Link>
              <Link
                to="/case-studies"
                className={`${
                  activeLink === "/case-studies"
                    ? "text-custom-blue lg:border-b-[1px] border-custom-blue"
                    : ""
                } hover:text-custom-blue cursor-pointer`}
                onClick={() => setActiveLink("/case-studies")}
              >
                Case Studies
              </Link>
            </nav>
            <button className="bg-[#5BC0ED] text-center w-[145px] h-[54px] px-4 py-[14px] font-ttCommonProNormal font-semibold rounded-[4px] leading-[1.58rem] text-[#09425D] hover:bg-[#53abd1]">
              
              BOOK A DEMO
            </button>
          </div>
          <div className='block lg:hidden items-center' onClick={()=>setShowDropdown(!showDropdown)}>
          <HiBars3 size={30} className='' />
      </div>
        </div>
        
      <div className={`${!showDropdown ? "hidden" : "flex flex-col gap-4 text-[#09425D] items-start md:mx-auto leading-[1.2rem] px-3 ml-auto my-3 max-w-[720px] xl:max-w-[1216px] w-full lg:hidden pb-4 transition-all duration-450 delay-400"}`}>
      <nav className='flex flex-col gap-2  font-gilroyBold font-normal leading-5 text-sm'>
        <Link to="/" className={`${activeLink ==="/" ? "text-custom-blue " :""} hover:text-custom-blue cursor-pointer`}
        onClick={()=>setActiveLink("/")}
        >Home</Link>
        
        <span className='flex items-center gap-1 hover:text-custom-blue cursor-pointer' 
        // onClick={()=>setIsOpen(true)}
        >
          <p >Solutions</p> 
          <IoIosArrowDown />
          </span>
        <Link to="/company" className={`${activeLink ==="/company" ? "text-custom-blue" :""} hover:text-custom-blue cursor-pointer`}
        onClick={()=>setActiveLink("/company")}
        >Company</Link>
        <Link to="/case-studies" className={`${activeLink ==="/case-studies" ? "text-custom-blue" :""} hover:text-custom-blue cursor-pointer`}
        onClick={()=>setActiveLink("/case-studies")}
        >Case Studies</Link>
      </nav>
       <button className='bg-[#5BC0ED] flex items-center w-[139px] [54px] px-4 py-[14px] font-ttCommonProNormal font-semibold rounded-[4px] leading-[1.58rem] text-[#09425D] hover:bg-[#53abd1]'> BOOK A DEMO</button>
    
      </div>
      </header>
      <Modal isOpen={isOpen} onClose={handleClose}>
        {/* <>Helloooo</> */}
      </Modal>
    </>
  );
}

export default Header
