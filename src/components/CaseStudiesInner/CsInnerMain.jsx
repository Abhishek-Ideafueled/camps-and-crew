import Aos from 'aos';
import React, { useEffect } from 'react'

const CsInnerMain = () => {

    
  useEffect(() => {
    Aos.init({ duration: 1000, easing: "ease-in-out" });
  }, []);

  return (
    <div className='w-full overflow-hidden mt-[76px] lg:mt-[106px] '>
      
    </div>
  )
}

export default CsInnerMain
