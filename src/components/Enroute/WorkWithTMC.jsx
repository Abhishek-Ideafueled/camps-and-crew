import React from 'react'

const WorkWithTMC = () => {
  return (
    <div className='w-full bg-[#fafafa]'>
        <div className='main-container mx-auto py-10 lg:py-20'>
            <div className='flex flex-col items-center gap-4'>
                <span className='h-[75px]'>
                    <img src="/enroute-work-with-tmc-icon.png" alt="" />
                </span>
                <span className="text-custom-blue font-ttCommonProRegular font-semibold text-sm leading-[22px]">
          COMMERCIAL CONTENT
          </span>
                <h2 className='heading-h2'>
                We Work With Your TMC
                </h2>

            </div>
            <div className='pt-2 md:pt-4 lg:pt-6 sub-heading text-center max-w-[959px] mx-auto'>
            EnRoute integrates seamlessly into your existing workflows, strengthening the relationship between your internal travel teams and your travel management company (TMC) and facilitating true end-to-end journey management in the process.
            </div>
        </div>
    </div>
  )
}

export default WorkWithTMC
