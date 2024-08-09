

const LogoSection = () => {
  return (
    <div className='w-full bg-[#FCFBF8] py-10 lg:py-20'>
        <div className='main-container mx-auto'>
            <div className='grid grid-cols-1 smalls:grid-cols-2 md:grid-cols-3 items-center justify-center mx-auto gap-4 max-w-[715px]'>
                <div className='flex justify-center max-w-[221px] col-span-1 justify-self-center'>
                <img className="" 
                src="/top5logo.png" alt="top 5 logo" />
                </div>
                <div className='flex justify-center max-w-[249px] col-span-1 justify-self-center'>
                <img className="" 
                src="/b2gold.png" alt="b2gold logo" />
                </div>
                <div className='flex justify-center max-w-[245px] smalls:max-w-full md:max-w-[245px] smalls:col-span-2 col-span-1 md:col-span-1 justify-self-center'>
                <img className="" 
                src="/top-5-canada.png" alt="top 5 canada logo" />
                </div>
            </div>

        </div>
    </div>
  )
}

export default LogoSection
