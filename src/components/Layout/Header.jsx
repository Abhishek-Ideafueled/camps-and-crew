import React, { useEffect, useState } from 'react';
import logo1 from '/logo1.png';
import { IoIosArrowDown } from 'react-icons/io';
import { Link } from 'react-router-dom';
import Modal from '../HomePage/Modal';

const Header = () => {
  const [activeLink, setActiveLink] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  const handleClose=()=>{
    setIsOpen(false);
  }

  useEffect(()=>{
    let curr = window.location.pathname;
    setActiveLink(curr);
  },[])

  return (
    <>
    <header className='bg-white w-full sticky top-0 z-10 border-custom-blue border-b-[1px]'>
      <div className='flex justify-between h-[106px] px-28 py-4 xl:px-0  w-full xl:max-w-[1216px] mx-auto'>
      <Link to='/home'> <svg width="103" height="74" viewBox="0 0 103 74" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M27.8242 24.6669C27.8242 22.9552 27.8242 21.2665 27.8242 19.5088C28.5965 19.5088 29.363 19.5088 30.1756 19.5088C30.458 18.3388 30.7231 17.215 30.9998 16.0969C32.5213 9.98212 36.1521 5.56748 41.754 2.73773C41.8174 2.70315 41.8865 2.69162 42.1228 2.6167C43.4311 7.8209 44.7336 12.9905 46.0361 18.1659C46.0476 18.1659 46.0591 18.1659 46.0706 18.1659C45.9208 16.656 45.7709 15.146 45.6211 13.636C45.2926 10.351 44.9583 7.06592 44.6586 3.77511C44.5203 2.23632 45.2119 1.25657 46.7737 0.824331C47.4596 0.634144 48.1857 0.530406 48.9004 0.507353C50.2375 0.472773 51.5803 0.513116 52.9174 0.547695C54.6982 0.593801 56.0871 2.28243 55.8912 3.9019C55.3725 8.16094 55.0267 12.4373 54.6118 16.7078C54.5887 16.9326 54.5829 17.1574 54.6002 17.3879C55.8163 12.4718 57.0496 7.5558 58.6864 2.69738C65.6945 6.18991 69.1409 12.0165 70.2417 19.4684C71.1061 19.4684 71.8727 19.4684 72.6795 19.4684C72.6795 21.232 72.6795 22.9321 72.6795 24.6669C57.7412 24.6669 42.8144 24.6669 27.8242 24.6669Z" fill="#5BC0ED"/>
<path d="M57.8568 41.5072C57.8568 42.7232 57.8568 44.141 57.8568 45.6509C54.7735 44.3945 52.5661 42.1123 50.3876 39.8243C49.2004 40.9481 48.0766 42.072 46.8836 43.1209C45.7021 44.1698 44.3881 45.0343 42.8436 45.6394C42.8436 44.1525 42.8436 42.7232 42.8436 41.4899C44.5495 39.9223 46.1517 38.4469 47.8749 36.8562C46.1517 35.2656 44.5437 33.7844 42.832 32.2111C42.832 30.9777 42.832 29.56 42.832 28.0615C45.9096 29.3294 48.1169 31.5944 50.2954 33.8882C51.4711 32.7759 52.5892 31.652 53.7822 30.6031C54.9752 29.5484 56.295 28.6667 57.8453 28.0731C57.8453 29.5542 57.8453 30.972 57.8453 32.2111C56.1451 33.7787 54.5372 35.2656 52.8082 36.8562C54.5372 38.4526 56.1394 39.928 57.8568 41.5072Z" fill="#09425D"/>
<path d="M59.793 46.1868C59.793 44.867 59.793 43.576 59.793 42.2505C62.7495 43.0055 65.1585 42.2793 66.7146 39.634C67.9307 37.5708 67.7462 35.4499 66.3631 33.4961C65.1816 31.8363 62.8994 30.5799 59.8103 31.4617C59.8103 30.1477 59.8103 28.851 59.8103 27.5427C62.2885 26.805 66.3112 27.5024 69.0026 30.5338C71.792 33.6748 72.1436 38.6081 69.821 42.1007C67.3255 45.8525 62.9339 47.0052 59.793 46.1868Z" fill="#09425D"/>
<path d="M40.9079 27.5314C40.9079 28.8224 40.9079 30.1133 40.9079 31.4735C38.4412 30.7761 36.2915 31.2429 34.5799 33.1679C33.4906 34.3897 33.1045 35.8708 33.2313 37.4903C33.4387 40.0837 36.3376 43.6108 40.8906 42.268C40.8906 43.582 40.8906 44.8845 40.8906 46.1813C37.813 47.0054 33.5598 45.87 31.1162 42.4582C28.5976 38.9426 28.7071 34.2571 31.4331 30.8453C33.9517 27.6813 37.9571 26.7649 40.9079 27.5314Z" fill="#09425D"/>
<path d="M24.2163 66.1566C23.5362 66.1566 22.9196 66.1566 22.251 66.1566C21.8015 63.4075 21.3577 60.6758 20.9082 57.9382C20.8813 57.9382 20.8544 57.9382 20.8275 57.9382C20.8275 60.67 20.8275 63.4018 20.8275 66.1566C20.1993 66.1566 19.6403 66.1566 19.0352 66.1566C19.0352 61.886 19.0352 57.6328 19.0352 53.3564C19.9688 53.3564 20.8794 53.3564 21.8534 53.3564C22.3183 56.2073 22.7832 59.0582 23.2481 61.9091C23.2865 61.9091 23.3249 61.9072 23.3633 61.9033C23.7841 59.0678 24.2105 56.2323 24.6428 53.3622C25.588 53.3622 26.5101 53.3622 27.4841 53.3622C27.4841 57.6155 27.4841 61.8688 27.4841 66.1508C26.8328 66.1508 26.2104 66.1508 25.5303 66.1508C25.5303 63.4018 25.5303 60.6815 25.5303 57.9613C25.4996 57.9613 25.4689 57.9594 25.4381 57.9555C25.0289 60.6758 24.6255 63.4018 24.2163 66.1566Z" fill="#09425D"/>
<path d="M94.2946 66.1447C93.822 61.8799 93.3494 57.6381 92.8711 53.3618C93.5569 53.3618 94.1966 53.3618 94.8998 53.3618C95.234 56.5489 95.5683 59.7244 95.9026 62.9C95.9256 62.9038 95.9467 62.9057 95.966 62.9057C96.2656 59.736 96.5653 56.5719 96.8708 53.3676C97.5393 53.3676 98.179 53.3676 98.8764 53.3676C99.1934 56.6008 99.5103 59.8339 99.8446 63.2573C100.19 59.8455 100.519 56.6238 100.853 53.3676C101.453 53.3676 102.035 53.3676 102.674 53.3676C102.202 57.6324 101.723 61.8741 101.251 66.1447C100.334 66.1447 99.4527 66.1447 98.5191 66.1447C98.2962 64.0622 98.0715 61.9798 97.8448 59.8973C97.8294 59.8973 97.814 59.8973 97.7987 59.8973C97.5739 61.9721 97.3491 64.0411 97.1186 66.1447C96.185 66.1447 95.2744 66.1447 94.2946 66.1447Z" fill="#09425D"/>
<path fillRule="evenodd" clipRule="evenodd" d="M75.6602 66.1505C75.6602 61.8799 75.6602 57.6324 75.6602 53.2754C77.0721 53.3388 78.4669 53.333 79.8443 53.4886C80.7433 53.5866 81.4292 54.209 81.5329 55.1081C81.6597 56.2204 81.6655 57.3615 81.5329 58.4681C81.4637 58.9983 80.9508 59.4766 80.6223 60.0069C81.5675 60.5313 81.7173 61.5572 81.7116 62.6522C81.7058 63.8048 81.7116 64.9517 81.7116 66.1447C81.2044 66.1447 80.5359 66.1447 79.7924 66.1447C79.7405 65.7759 79.6598 65.407 79.6483 65.0382C79.631 64.2198 79.6483 63.4014 79.6426 62.5773C79.6253 61.246 79.1354 60.8425 77.7061 61.0327C77.7061 62.7213 77.7061 64.4215 77.7061 66.1505C77.003 66.1505 76.3633 66.1505 75.6602 66.1505ZM77.7292 59.0329C78.974 59.2634 79.5561 58.9407 79.6022 57.9609C79.631 57.3154 79.6022 56.6642 79.5619 56.0187C79.5331 55.5692 79.2449 55.2925 78.7954 55.2522C78.4496 55.2176 78.098 55.2464 77.7292 55.2464C77.7292 56.5431 77.7292 57.788 77.7292 59.0329Z" fill="#09425D"/>
<path fillRule="evenodd" clipRule="evenodd" d="M53.87 59.2981C52.6712 58.3759 52.2447 55.7998 53.2994 54.4627C53.674 53.9843 54.331 53.5579 54.9189 53.4599C55.9332 53.2985 56.9937 53.4195 58.0656 53.4195C58.0656 53.9728 58.0656 54.5722 58.0656 55.2292C57.3567 55.2292 56.6709 55.2292 55.9793 55.2292C55.1494 55.235 54.8324 55.5635 54.8324 56.3934C54.8324 56.5663 54.8324 56.7334 54.8324 56.9005C54.8324 58.3644 55.3627 58.7563 56.8784 58.4797C56.8784 58.059 56.8784 57.6325 56.8784 57.1657C57.5815 57.1657 58.1809 57.1657 58.884 57.1657C58.884 57.5979 58.884 58.1454 58.884 58.5949C59.0742 58.6353 59.2183 58.5546 59.3969 58.5949C59.3969 59.1943 59.3969 59.7937 59.3969 60.4046C59.2471 60.4392 59.1107 60.468 58.9877 60.491C58.9877 62.3699 58.9877 64.2487 58.9877 66.1505C58.3826 66.1505 57.5757 66.1505 56.8784 66.1505C56.8842 66.0641 56.9072 65.7471 56.8784 65.5857C56.3539 65.8278 55.8237 66.2082 55.2762 66.2889C54.0198 66.479 53.0919 65.8854 52.9075 64.6175C52.7289 63.4188 52.7577 62.1681 52.9075 60.9636C52.9767 60.3873 53.5242 59.8629 53.87 59.2981ZM56.8784 66.1505C56.8726 66.1851 56.8726 66.1909 56.8784 66.1505V66.1505ZM56.8784 60.5199C55.7776 60.2547 55.0053 60.5487 54.8843 61.4305C54.7921 62.1509 54.8151 62.8943 54.8728 63.6205C54.9074 64.1449 55.2762 64.4446 55.8237 64.4389C56.3655 64.4389 56.8496 64.1622 56.8784 63.6262C56.9245 62.5946 56.8784 61.5572 56.8784 60.5199Z" fill="#09425D"/>
<path fillRule="evenodd" clipRule="evenodd" d="M16.3328 66.1563C15.6124 66.1563 14.9554 66.1563 14.2523 66.1563C14.1313 65.4013 14.0045 64.6579 13.8777 63.8971C13.0824 63.8971 12.3216 63.8971 11.5032 63.8971C11.3822 64.6406 11.2669 65.3898 11.1402 66.1563C10.512 66.1563 9.91258 66.1563 9.23828 66.1563C9.91834 61.88 10.5984 57.644 11.2785 53.3677C12.2697 53.3677 13.2495 53.3677 14.2869 53.3677C14.9669 57.6152 15.647 61.8627 16.3328 66.1563ZM13.6011 62.0298C13.3014 60.0069 13.0132 58.0244 12.7193 56.0476C12.6962 56.0476 12.6732 56.0495 12.6501 56.0533C12.362 58.0359 12.068 60.0127 11.7683 62.0298C12.4081 62.0298 12.9613 62.0298 13.6011 62.0298Z" fill="#09425D"/>
<path fillRule="evenodd" clipRule="evenodd" d="M30.7539 53.3968C31.9988 53.3968 33.2148 53.3276 34.4193 53.4141C35.6181 53.5063 36.4653 54.2498 36.5978 55.437C36.7419 56.6991 36.765 58.0074 36.6036 59.2638C36.4249 60.6354 35.4221 61.327 33.9871 61.3674C33.6125 61.3789 33.2321 61.3674 32.8056 61.3674C32.8056 62.9868 32.8056 64.5429 32.8056 66.1451C32.1025 66.1451 31.4513 66.1451 30.7539 66.1451C30.7539 61.8957 30.7539 57.6462 30.7539 53.3968ZM32.7999 59.454C34.3214 59.6787 34.6556 59.3963 34.6556 57.9498C34.6556 57.5175 34.6383 57.0795 34.6614 56.6415C34.7133 55.3966 34.2925 55.0393 32.7999 55.316C32.7999 56.5435 32.7999 57.7826 32.7999 59.0217C32.7999 59.16 32.7999 59.2984 32.7999 59.454Z" fill="#09425D"/>
<path d="M70.6702 61.3904C71.3445 61.3904 71.9612 61.3904 72.6412 61.3904C72.6066 62.6986 72.9063 64.053 72.0937 65.2114C71.2523 66.4159 69.9844 66.462 68.6992 66.2315C67.6387 66.0471 66.8895 65.2114 66.6878 64.0876C66.6302 63.7418 66.5956 63.3845 66.5956 63.0329C66.5841 60.8602 66.5552 58.6817 66.6129 56.5089C66.6302 55.8289 66.7685 55.0854 67.0739 54.486C67.6503 53.3564 69.0277 52.9472 70.5319 53.293C71.7479 53.5639 72.5029 54.463 72.6182 55.8461C72.6643 56.434 72.6239 57.0276 72.6239 57.6616C71.99 57.6616 71.3675 57.6616 70.6644 57.6616C70.6644 57.1659 70.676 56.6761 70.6644 56.1862C70.6414 55.4485 70.3071 55.0969 69.6559 55.1027C69.0277 55.1142 68.7049 55.4542 68.6992 56.1919C68.6876 58.5626 68.6876 60.9332 68.6992 63.3038C68.6992 64.0588 69.0392 64.4218 69.6732 64.4276C70.3071 64.4334 70.6529 64.0357 70.6644 63.275C70.676 62.6583 70.6702 62.0359 70.6702 61.3904Z" fill="#09425D"/>
<path d="M45.1849 56.8428C44.4818 56.8428 43.8536 56.8428 43.2082 56.8428C43.1851 56.5143 43.1851 56.2031 43.139 55.8976C43.0583 55.3559 42.7298 55.0908 42.1765 55.1023C41.6348 55.1196 41.3582 55.4135 41.2775 55.9322C41.1161 56.9235 41.5483 57.6842 42.2111 58.3528C42.8796 59.0271 43.6001 59.6495 44.2052 60.3641C45.2195 61.5571 45.4097 62.9634 44.9832 64.433C44.5798 65.8335 43.3868 66.4789 41.6578 66.3118C40.2343 66.1792 39.2776 65.2168 39.1451 63.7414C39.099 63.2688 39.1335 62.7905 39.1335 62.2948C39.7848 62.2948 40.413 62.2948 41.0988 62.2948C41.0988 62.681 41.0873 63.0268 41.0988 63.3783C41.1276 64.0353 41.4446 64.3869 42.0267 64.4215C42.6203 64.456 43.0064 64.1218 43.0814 63.459C43.1793 62.606 42.8163 61.9144 42.2515 61.3208C41.5022 60.537 40.6781 59.8224 39.998 58.981C38.805 57.5113 38.8627 55.0101 40.0614 53.9093C41.0181 53.0391 42.1823 53.0506 43.3349 53.3791C44.3666 53.6673 44.8795 54.4683 45.0639 55.4827C45.1446 55.9207 45.1446 56.3702 45.1849 56.8428Z" fill="#09425D"/>
<path d="M4.81281 57.6671C4.81281 57.1254 4.83009 56.6182 4.80704 56.1168C4.77246 55.454 4.44396 55.1197 3.85034 55.1025C3.23368 55.0909 2.83601 55.4137 2.83025 56.088C2.8072 58.5431 2.80912 60.9983 2.83601 63.4534C2.84178 64.0989 3.2452 64.4331 3.83305 64.4274C4.41514 64.4159 4.77823 64.0758 4.80704 63.4246C4.83586 62.7676 4.81281 62.1048 4.81281 61.4017C5.4871 61.4017 6.10953 61.4017 6.87028 61.4017C6.77231 62.4621 6.80112 63.5226 6.55907 64.5138C6.24209 65.8394 4.99723 66.4503 3.31436 66.3177C2.00034 66.2082 1.03212 65.3783 0.847696 64.1046C0.755484 63.4649 0.743958 62.8137 0.738195 62.1682C0.732431 60.1626 0.697852 58.157 0.755484 56.1514C0.830406 53.6444 3.26249 52.3073 5.41795 53.6098C5.93087 53.921 6.3977 54.5492 6.57636 55.1313C6.82418 55.9093 6.77231 56.7853 6.85299 57.6671C6.12682 57.6671 5.51592 57.6671 4.81281 57.6671Z" fill="#09425D"/>
<path d="M89.5828 58.7216C89.5828 59.3902 89.5828 59.9665 89.5828 60.6004C88.6837 60.6004 87.802 60.6004 86.8856 60.6004C86.8856 61.8511 86.8856 63.0383 86.8856 64.2947C88.0267 64.2947 89.1448 64.2947 90.3032 64.2947C90.3032 64.9344 90.3032 65.5165 90.3032 66.1389C88.482 66.1389 86.6781 66.1389 84.8281 66.1389C84.8281 61.8856 84.8281 57.6381 84.8281 53.3618C86.6608 53.3618 88.4705 53.3618 90.309 53.3618C90.309 53.9842 90.309 54.5836 90.309 55.2291C89.1506 55.2291 88.0325 55.2291 86.8856 55.2291C86.8856 56.4106 86.8856 57.5344 86.8856 58.7216C87.7731 58.7216 88.6664 58.7216 89.5828 58.7216Z" fill="#09425D"/>
<path d="M73.7812 69.2227C73.9599 69.2227 74.1098 69.2227 74.2999 69.2227C74.8705 70.1736 75.4468 71.234 76.0635 72.2541C76.6571 71.2456 77.2219 70.1851 77.7867 69.2227C77.9596 69.2227 78.1094 69.2227 78.2996 69.2227C78.2996 70.6346 78.2996 72.1504 78.2996 73.5854C78.121 73.5854 77.9481 73.5854 77.7175 73.5854C77.7175 72.6806 77.7175 71.77 77.7175 70.8709C77.6714 70.8594 76.5879 72.3118 76.0635 73.1762C75.8964 73.0379 74.9108 71.6951 74.4152 70.8709C74.4152 71.9602 74.4152 72.6633 74.4152 73.5854C74.1789 73.5854 74.006 73.5854 73.7812 73.5854C73.7812 72.1734 73.7812 70.6577 73.7812 69.2227Z" fill="#5BC0ED"/>
<path d="M22.9251 73.591C22.7234 73.591 22.5735 73.591 22.3891 73.591C21.5995 72.6228 20.8042 71.643 19.9052 70.5365C19.9052 71.6372 19.9052 72.6112 19.9052 73.591C19.6573 73.591 19.4729 73.591 19.2539 73.591C19.2539 72.179 19.2539 70.7324 19.2539 69.2974C19.4441 69.2974 19.6055 69.2974 19.7899 69.2974C20.5795 70.2714 21.3748 71.2742 22.2681 72.3807C22.2681 71.2742 22.2681 70.2886 22.2681 69.2974C22.5159 69.2974 22.7003 69.2974 22.9251 69.2974C22.9251 70.7094 22.9251 72.1444 22.9251 73.591Z" fill="#5BC0ED"/>
<path d="M91.8711 69.2227C92.044 69.2227 92.1938 69.2227 92.3898 69.2227C93.1793 70.1966 93.9862 71.2859 94.8795 72.3867C94.8795 71.2974 94.8795 70.2197 94.8795 69.2227C95.1216 69.2227 95.3002 69.2227 95.5192 69.2227C95.5192 70.6404 95.5192 72.1561 95.5192 73.5912C95.3463 73.5912 95.1965 73.5912 94.9948 73.5912C94.2167 72.6345 93.4214 71.6547 92.5166 70.5424C92.5166 71.6547 92.5166 72.6114 92.5166 73.5912C92.2688 73.5912 92.0959 73.5912 91.8711 73.5912C91.8711 72.1907 91.8711 70.6808 91.8711 69.2227Z" fill="#5BC0ED"/>
<path d="M29.099 73.5909C28.9031 73.5909 28.7532 73.5909 28.5688 73.5909C27.7792 72.6227 26.9839 71.6429 26.0848 70.5364C26.0848 71.6429 26.0848 72.6111 26.0848 73.5909C25.837 73.5909 25.6526 73.5909 25.4336 73.5909C25.4336 72.1731 25.4336 70.7266 25.4336 69.2973C25.618 69.2973 25.7679 69.2973 25.958 69.2973C26.7476 70.2655 27.5487 71.2741 28.4478 72.3806C28.4478 71.2798 28.4478 70.3001 28.4478 69.2973C28.6898 69.2857 28.8742 69.3088 29.099 69.2973C29.099 70.7438 29.099 72.1443 29.099 73.5909Z" fill="#5BC0ED"/>
<path d="M39.832 69.2974C40.0107 69.2974 40.1605 69.2974 40.345 69.2974C41.146 70.2886 41.9587 71.303 42.852 72.4038C42.852 71.3087 42.852 70.3059 42.852 69.2974C43.0767 69.2974 43.2612 69.2974 43.4802 69.2974C43.4802 70.7151 43.4802 72.1675 43.4802 73.591C43.3073 73.591 43.1574 73.591 42.9499 73.591C42.1834 72.6573 41.3939 71.6776 40.4948 70.571C40.4948 71.6718 40.4948 72.6285 40.4948 73.591C40.2355 73.591 40.0568 73.591 39.832 73.591C39.832 72.1847 39.832 70.7555 39.832 69.2974Z" fill="#5BC0ED"/>
<path d="M10.1198 69.2974C10.3907 69.2974 10.5521 69.2974 10.7538 69.2974C10.7538 70.7209 10.7538 72.1559 10.7538 73.591C10.5924 73.591 10.4311 73.591 10.2293 73.591C9.4513 72.6343 8.65021 71.6372 7.74538 70.5249C7.74538 71.6372 7.74538 72.6112 7.74538 73.591C7.50332 73.591 7.33043 73.591 7.11719 73.591C7.11719 72.179 7.11719 70.7324 7.11719 69.2974C7.28432 69.2974 7.44569 69.2974 7.64164 69.2974C8.42544 70.2598 9.22077 71.2742 10.1198 72.3865C10.1198 71.2742 10.1198 70.3002 10.1198 69.2974Z" fill="#5BC0ED"/>
<path fillRule="evenodd" clipRule="evenodd" d="M69.3738 69.2569C70.7051 69.2684 71.656 70.1963 71.6503 71.4699C71.6445 72.7609 70.659 73.6773 69.3104 73.6542C67.9676 73.6312 67.0454 72.7206 67.0627 71.4238C67.0858 70.1444 68.0367 69.2511 69.3738 69.2569ZM67.7197 71.4584C67.7197 72.369 68.4402 73.0837 69.3623 73.0837C70.2786 73.0779 70.999 72.3517 70.9875 71.4411C70.976 70.5594 70.2383 69.8274 69.3623 69.8217C68.4517 69.8217 67.7255 70.5478 67.7197 71.4584Z" fill="#5BC0ED"/>
<path fillRule="evenodd" clipRule="evenodd" d="M81.4279 72.3808C81.4279 72.8015 81.4279 73.1819 81.4279 73.5853C81.2262 73.5853 81.0648 73.5853 80.8516 73.5853C80.8516 72.1849 80.8516 70.7786 80.8516 69.2226C80.8516 69.2226 82.6324 69.1361 83.4796 69.3148C84.0674 69.4416 84.3671 70.3464 84.298 70.9688C84.2231 71.6431 83.7966 72.1388 83.0877 72.254C82.569 72.3405 82.0273 72.3347 81.4279 72.3808ZM81.474 69.8911C81.474 70.5366 81.474 71.1072 81.474 71.7469C81.474 71.7469 82.9667 72.012 83.4623 71.3146C83.6237 71.0841 83.6122 70.5366 83.4508 70.3118C82.9551 69.6375 81.474 69.8911 81.474 69.8911Z" fill="#5BC0ED"/>
<path fillRule="evenodd" clipRule="evenodd" d="M90.0338 73.5912C89.7514 73.5912 89.5612 73.5912 89.3538 73.5912C89.1924 73.2512 89.0368 72.9227 88.8639 72.5653C88.1435 72.5653 87.4173 72.5653 86.6566 72.5653C86.4952 72.9054 86.3338 73.2512 86.1724 73.5912C85.965 73.5912 85.769 73.5912 85.5039 73.5912C86.1609 72.1389 86.7949 70.6289 87.4346 69.2227C87.6594 69.2227 87.8553 69.2227 88.0974 69.2227C88.7313 70.6174 89.3653 72.1158 90.0338 73.5912ZM88.6276 71.989C88.3337 71.332 88.0743 70.7557 87.7573 70.0468C87.4404 70.7672 87.1868 71.3493 86.9044 71.989C87.5038 71.989 88.0052 71.989 88.6276 71.989Z" fill="#5BC0ED"/>
<path fillRule="evenodd" clipRule="evenodd" d="M0.75 73.591C1.41277 72.1329 2.04673 70.7036 2.68069 69.2974C2.91122 69.2974 3.08988 69.2974 3.33769 69.2974C3.97165 70.6921 4.61137 72.1271 5.27991 73.591C5.00327 73.591 4.81308 73.591 4.59408 73.591C4.43271 73.2509 4.27134 72.9052 4.10421 72.5536C3.36651 72.5536 2.65187 72.5536 1.90841 72.5536C1.74704 72.9052 1.57991 73.2567 1.41854 73.591C1.21106 73.591 1.02087 73.591 0.75 73.591ZM3.00343 70.0408C2.69221 70.7497 2.43287 71.3433 2.15623 71.9715C2.76137 71.9715 3.28006 71.9715 3.86215 71.9715C3.57399 71.326 3.3204 70.7439 3.00343 70.0408Z" fill="#5BC0ED"/>
<path d="M65.4425 69.9603C65.2984 70.0929 65.1774 70.2024 65.0679 70.3061C63.9441 69.6664 63.1315 69.7125 62.5378 70.4387C62.0595 71.0208 62.071 71.9198 62.5609 72.5134C63.143 73.205 63.9325 73.2396 65.0621 72.6114C65.1774 72.7152 65.2984 72.8247 65.4195 72.9284C65.0218 73.5508 64.0478 73.8159 63.1084 73.5739C62.2093 73.3376 61.5754 72.5768 61.5178 71.6547C61.4486 70.6404 61.9788 69.7701 62.8664 69.4243C63.7942 69.067 64.8662 69.2745 65.4425 69.9603Z" fill="#5BC0ED"/>
<path d="M34.3623 71.303C34.3623 71.5277 34.3623 71.6776 34.3623 71.8851C33.665 71.8851 32.9965 71.8851 32.253 71.8851C32.253 72.4844 32.253 73.0319 32.253 73.591C32.0052 73.591 31.8265 73.591 31.6133 73.591C31.6133 72.1732 31.6133 70.7324 31.6133 69.2974C32.6103 69.2974 33.5901 69.2974 34.6044 69.2974C34.6044 69.476 34.6044 69.6604 34.6044 69.8737C33.8264 69.8737 33.0714 69.8737 32.2818 69.8737C32.2818 70.3693 32.2818 70.8131 32.2818 71.303C32.9792 71.303 33.6477 71.303 34.3623 71.303Z" fill="#5BC0ED"/>
<path d="M51.9964 69.8622C51.5411 69.8622 51.0916 69.8622 50.5844 69.8622C50.5844 71.1301 50.5844 72.3576 50.5844 73.591C50.3366 73.591 50.158 73.591 49.9274 73.591C49.9274 72.3634 49.9274 71.1474 49.9274 69.8852C49.426 69.8852 48.9823 69.8852 48.5039 69.8852C48.5039 69.6777 48.5039 69.4933 48.5039 69.2974C49.6623 69.2974 50.815 69.2974 51.9964 69.2974C51.9964 69.4703 51.9964 69.6547 51.9964 69.8622Z" fill="#5BC0ED"/>
<path d="M16.1562 69.2974C16.3637 69.2974 16.5366 69.2974 16.7499 69.2974C16.7499 70.7266 16.7499 72.1617 16.7499 73.591C16.5539 73.591 16.3753 73.591 16.1562 73.591C16.1562 72.1905 16.1562 70.7555 16.1562 69.2974Z" fill="#5BC0ED"/>
<path d="M36.7109 69.2974C36.9127 69.2974 37.0913 69.2974 37.3103 69.2974C37.3103 70.7209 37.3103 72.1617 37.3103 73.591C37.1086 73.591 36.9357 73.591 36.7109 73.591C36.7109 72.1847 36.7109 70.7535 36.7109 69.2974Z" fill="#5BC0ED"/>
<path d="M46.0078 69.2974C46.2038 69.2974 46.3651 69.2974 46.5784 69.2974C46.5784 70.7094 46.5784 72.1559 46.5784 73.591C46.3939 73.591 46.2211 73.591 46.0078 73.591C46.0078 72.1847 46.0078 70.7497 46.0078 69.2974Z" fill="#5BC0ED"/>
<path d="M99.6864 73.591C99.404 73.591 99.3695 73.591 99.1159 73.591V71.9312L97.3984 69.2974C97.6174 69.2974 97.7327 69.2974 97.969 69.2974C98.3955 69.989 98.9257 70.7439 99.3925 71.4989C99.8536 70.7497 100.332 70.0235 100.781 69.2974C100.972 69.2974 101.116 69.2974 101.335 69.2974L99.6864 71.9312V73.591Z" fill="#5BC0ED"/>
<path d="M55.1435 73.591C54.8611 73.591 54.8265 73.591 54.5672 73.591V71.9312L52.8555 69.2974C53.0745 69.2974 53.184 69.2974 53.4203 69.2974C53.8525 69.989 54.377 70.7439 54.8496 71.4989C55.3106 70.7497 55.789 70.0235 56.2327 69.2974C56.4287 69.2974 56.5728 69.2974 56.7918 69.2974L55.1435 71.9312V73.591Z" fill="#5BC0ED"/>
</svg></Link>
     
      <div className='flex gap-12 justify-center items-center text-[#09425D] leading-[1.2rem]'>
      <nav className='flex gap-10 font-gilroyBold font-normal leading-5'>
        <Link to="/" className={`${activeLink ==="/" ? "text-custom-blue border-b-[1px] border-custom-blue" :""} hover:text-custom-blue cursor-pointer`}
        onClick={()=>setActiveLink("/")}
        >Home</Link>
        
        <span className='flex items-center gap-1 hover:text-custom-blue cursor-pointer' onClick={()=>setIsOpen(true)}><p >Solutions</p> <IoIosArrowDown /></span>
        <Link to="/company" className={`${activeLink ==="/company" ? "text-custom-blue border-b-[1px] border-custom-blue" :""} hover:text-custom-blue cursor-pointer`}
        onClick={()=>setActiveLink("/company")}
        >Company</Link>
        <Link to="/case-studies" className={`${activeLink ==="/case-studies" ? "text-custom-blue border-b-[1px] border-custom-blue" :""} hover:text-custom-blue cursor-pointer`}
        onClick={()=>setActiveLink("/case-studies")}
        >Case Studies</Link>
      </nav>
    <div className='bg-[#5BC0ED] px-4 py-3 font-ttCommonProNormal font-semibold rounded-[4px] leading-[1.58rem] text-[#09425D] hover:bg-[#53abd1]'>
       <button> BOOK A DEMO</button>
    </div>
      </div>
      </div>
    </header>
    <Modal isOpen={isOpen} onClose={handleClose}>
      {/* <>Helloooo</> */}
      </Modal>
      
      </>
  )
}

export default Header
