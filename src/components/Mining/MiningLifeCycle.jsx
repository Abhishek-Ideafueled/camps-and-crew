import HeadingPattern from "../Icons/HeadingPattern"


const MiningLifeCycle = () => {
  return (
    <div className="w-full bg-[#fafafa]">
        <div className="main-container mx-auto flex flex-col items-center gap-[30px] lg:gap-[60px] py-10 lg:py-20">
            <div className="flex flex-col gap-4 items-center text-center">
        <h2 className="heading-h2">Essential Tools for FIFO Teams <br />
        Over the Lifecycle of Your Mine</h2>
        <span>
            <HeadingPattern/>
        </span>
        <p className="sub-heading pt-2"> From exploration to shutdowns, our solutions offer robust features
             that empower teams to <br className="hidden lg:block" /> manage transport and accommodations throughout every phase of your mining project.</p>
       
            </div>
            
        </div>      
    </div>
  )
}

export default MiningLifeCycle
